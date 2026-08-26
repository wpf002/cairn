import { describe, expect, it } from 'vitest';
import {
  ARGON2ID_FLOOR,
  assertJournalingAllowed,
  assertKdfParams,
  CryptoEnvelope,
  entropyToMnemonic,
  fromUtf8,
  generateMnemonic,
  InvalidMnemonicError,
  mnemonicToEntropy,
  randomBytes,
  recoveryStatus,
  RecoveryNotArmedError,
  utf8,
  WeakKdfParamsError,
  type Argon2id,
  type WrappedKey,
} from '@cairn/crypto';
import { hkdf } from '@cairn/crypto';

/**
 * Deterministic Argon2id stand-in for tests. The real one is injected by the
 * mobile app; the envelope logic under test is identical either way.
 */
const testArgon2id: Argon2id = async (passphrase, salt, params) => {
  assertKdfParams(params);
  return hkdf(passphrase, salt, `test-argon2id/${params.memoryKib}/${params.iterations}`, params.hashLength);
};

describe('KDF parameter floor (section 33a)', () => {
  it('rejects parameters below 64 MB memory cost', () => {
    expect(() => assertKdfParams({ ...ARGON2ID_FLOOR, memoryKib: 32 * 1024 })).toThrow(WeakKdfParamsError);
    expect(() => assertKdfParams(ARGON2ID_FLOOR)).not.toThrow();
  });
});

describe('BIP39 recovery phrase', () => {
  it('round-trips entropy through 24 words', async () => {
    const entropy = randomBytes(32);
    const words = await entropyToMnemonic(entropy);
    expect(words).toHaveLength(24);
    const back = await mnemonicToEntropy(words);
    expect(Array.from(back)).toEqual(Array.from(entropy));
  });

  it('rejects a wrong word and a swapped word', async () => {
    const { words } = await generateMnemonic();
    await expect(mnemonicToEntropy([...words.slice(0, 23), 'notaword'])).rejects.toThrow(InvalidMnemonicError);
    const swapped = [...words];
    if (swapped[0] !== swapped[1]) {
      [swapped[0], swapped[1]] = [swapped[1] as string, swapped[0] as string];
      await expect(mnemonicToEntropy(swapped)).rejects.toThrow(InvalidMnemonicError);
    }
  });

  it('accepts case and whitespace slop — a tired parent is typing this', async () => {
    const { words } = await generateMnemonic();
    const sloppy = words.map((w, i) => (i % 2 === 0 ? ` ${w.toUpperCase()} ` : w));
    await expect(mnemonicToEntropy(sloppy)).resolves.toBeDefined();
  });
});

describe('envelope: the section 33a Phase 1 gate', () => {
  it('gate 1: a child record round-trips encrypted', async () => {
    const envelope = CryptoEnvelope.create(testArgon2id);
    const record = { name: 'Jack', birthdate: '2020-06-15', challenges: ['frustration during baseball'] };
    const sealed = await envelope.sealChildRecord('child-1', record);
    expect(sealed.ciphertext).not.toContain('Jack');
    const opened = await envelope.openChildRecord<typeof record>('child-1', sealed);
    expect(opened).toEqual(record);
  });

  it('a record sealed for one child cannot be opened as another (AAD binding)', async () => {
    const envelope = CryptoEnvelope.create(testArgon2id);
    const sealed = await envelope.sealChildRecord('child-1', { name: 'Jack' });
    await expect(
      envelope.openChildRecord('child-2', { ...sealed, keyId: 'child:child-2' }),
    ).rejects.toThrow();
  });

  it('gate 2: a second adult can be granted escrow and can restore the first', async () => {
    const envelope = CryptoEnvelope.create(testArgon2id);
    const sealed = await envelope.sealChildRecord('child-1', { name: 'Emma' });

    // Spouse holds an independent secret; the family key is wrapped under it.
    const spouseSecret = randomBytes(32);
    const escrow = await envelope.wrapWithSecret(spouseSecret, 'escrow', 'adult-2');

    // Original phone is gone. Spouse restores from their escrow copy alone.
    const restored = await CryptoEnvelope.fromWrappingSecret(spouseSecret, escrow, testArgon2id);
    const opened = await restored.openChildRecord<{ name: string }>('child-1', sealed);
    expect(opened.name).toBe('Emma');
  });

  it('gate 3: the recovery phrase restores a wiped device', async () => {
    const envelope = CryptoEnvelope.create(testArgon2id);
    const sealed = await envelope.sealChildRecord('child-1', { memory: 'first steps, 11 months' });
    const { words, wrapped } = await envelope.wrapWithNewRecoveryPhrase();

    const restored = await CryptoEnvelope.fromRecoveryPhrase(words, wrapped, testArgon2id);
    const opened = await restored.openChildRecord<{ memory: string }>('child-1', sealed);
    expect(opened.memory).toBe('first steps, 11 months');
  });

  it('passphrase unwrap works and a wrong passphrase fails closed', async () => {
    const envelope = CryptoEnvelope.create(testArgon2id);
    const sealed = await envelope.sealChildRecord('c', { a: 1 });
    const wrapped = await envelope.wrapWithPassphrase('correct horse battery staple');
    const reopened = await CryptoEnvelope.fromPassphrase('correct horse battery staple', wrapped, testArgon2id);
    await expect(reopened.openChildRecord('c', sealed)).resolves.toEqual({ a: 1 });
    await expect(
      CryptoEnvelope.fromPassphrase('wrong passphrase', wrapped, testArgon2id),
    ).rejects.toThrow();
  });

  it('media seals and opens under a per-asset key', async () => {
    const envelope = CryptoEnvelope.create(testArgon2id);
    const photo = randomBytes(1024);
    const sealed = await envelope.sealMedia('asset-1', photo);
    const opened = await envelope.openMedia('asset-1', sealed);
    expect(Array.from(opened)).toEqual(Array.from(photo));
    await expect(envelope.openMedia('asset-2', { ...sealed, keyId: 'media:asset-2' })).rejects.toThrow();
  });

  it('changing the passphrase re-wraps without re-encrypting records', async () => {
    const envelope = CryptoEnvelope.create(testArgon2id);
    const sealed = await envelope.sealChildRecord('c', { note: 'stays valid' });
    const rewrapped = await envelope.wrapWithPassphrase('a new passphrase');
    const reopened = await CryptoEnvelope.fromPassphrase('a new passphrase', rewrapped, testArgon2id);
    await expect(reopened.openChildRecord('c', sealed)).resolves.toEqual({ note: 'stays valid' });
  });
});

describe('gate 4: journaling blocks until two recovery paths are armed', () => {
  const phraseKey = { wrappedBy: 'recovery-phrase', iv: '', ciphertext: '', createdAt: '' } as WrappedKey;
  const escrowKey = { wrappedBy: 'escrow', wrapperId: 'a2', iv: '', ciphertext: '', createdAt: '' } as WrappedKey;
  const keychainKey = { wrappedBy: 'device-keychain', wrapperId: 'd1', iv: '', ciphertext: '', createdAt: '' } as WrappedKey;
  const passKey = { wrappedBy: 'passphrase', iv: '', ciphertext: '', salt: '', createdAt: '' } as WrappedKey;

  it('a passphrase alone arms nothing', () => {
    const status = recoveryStatus([passKey]);
    expect(status.armed).toEqual([]);
    expect(status.journalingAllowed).toBe(false);
    expect(() => assertJournalingAllowed([passKey])).toThrow(RecoveryNotArmedError);
  });

  it('one recovery path is not enough', () => {
    expect(recoveryStatus([passKey, phraseKey]).journalingAllowed).toBe(false);
  });

  it('two paths open the gate', () => {
    expect(recoveryStatus([passKey, phraseKey, escrowKey]).journalingAllowed).toBe(true);
    expect(recoveryStatus([phraseKey, keychainKey]).journalingAllowed).toBe(true);
    expect(() => assertJournalingAllowed([phraseKey, keychainKey])).not.toThrow();
  });
});

describe('nothing leaves in plaintext', () => {
  it('sealed output shares no bytes with the input', async () => {
    const envelope = CryptoEnvelope.create(testArgon2id);
    const secret = 'Emma prayed for her brother tonight';
    const sealed = await envelope.sealChildRecord('c', { text: secret });
    const blob = `${sealed.iv}${sealed.ciphertext}`;
    expect(blob.includes(secret)).toBe(false);
    expect(fromUtf8(utf8(secret))).toBe(secret); // sanity
  });
});
