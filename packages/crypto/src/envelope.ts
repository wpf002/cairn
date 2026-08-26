import {
  assertKdfParams,
  fromBase64,
  hkdf,
  importAesKey,
  open,
  randomBytes,
  seal,
  toBase64,
  utf8,
  fromUtf8,
  type Argon2id,
  type Argon2idParams,
  ARGON2ID_FLOOR,
  type Sealed,
} from './primitives.js';
import { entropyToMnemonic, mnemonicToEntropy } from './wordlist.js';

/**
 * The envelope scheme. Roadmap section 33a.
 *
 *   Passphrase --Argon2id--> Root Key (never transmitted, never stored)
 *                              |
 *                              +--> Family Key (AES-256-GCM) -- wrapped, stored server-side
 *                              |       +--> Child Record Key (per child)
 *                              |       +--> Media Key (per asset)
 *                              +--> Recovery Key (24-word phrase, shown once)
 *
 * The server stores ciphertext and wrapped keys. It never sees a root key, a
 * passphrase, or plaintext. Deletion of ciphertext plus wrapped keys is
 * cryptographically meaningful because the unwrap material lives only with the
 * family.
 */

/** A wrapped (encrypted) key as stored server-side. All fields base64. */
export interface WrappedKey {
  /** Which wrapping secret this copy is under. */
  readonly wrappedBy: 'passphrase' | 'recovery-phrase' | 'escrow' | 'device-keychain';
  /** Identifier of the wrapper: adult person id for escrow, device id for keychain. */
  readonly wrapperId?: string;
  readonly iv: string;
  readonly ciphertext: string;
  /** KDF salt, present when wrappedBy is passphrase. */
  readonly salt?: string;
  readonly kdfParams?: Argon2idParams;
  readonly createdAt: string;
}

export interface SealedRecord {
  readonly iv: string;
  readonly ciphertext: string;
  /** Which key sealed it: `family`, `child:<id>`, `media:<id>`. */
  readonly keyId: string;
}

const FAMILY_INFO = 'cairn/v1/family-key';
const CHILD_INFO = 'cairn/v1/child-record-key/';
const MEDIA_INFO = 'cairn/v1/media-key/';

export class CryptoEnvelope {
  private constructor(
    private readonly familyKeyRaw: Uint8Array,
    private readonly argon2id: Argon2id,
  ) {}

  /**
   * First-time setup: mint a fresh Family Key.
   *
   * The Family Key is random, not derived from the passphrase — so a
   * passphrase change re-wraps one small secret instead of re-encrypting
   * twenty-one years of media.
   */
  static create(argon2id: Argon2id): CryptoEnvelope {
    return new CryptoEnvelope(randomBytes(32), argon2id);
  }

  /** Reopen from an unwrapped Family Key (e.g. out of the device keychain). */
  static fromFamilyKey(familyKeyRaw: Uint8Array, argon2id: Argon2id): CryptoEnvelope {
    if (familyKeyRaw.length !== 32) throw new Error('Family key must be 32 bytes');
    return new CryptoEnvelope(familyKeyRaw, argon2id);
  }

  /** Unwrap from a passphrase-wrapped copy. */
  static async fromPassphrase(
    passphrase: string,
    wrapped: WrappedKey,
    argon2id: Argon2id,
  ): Promise<CryptoEnvelope> {
    if (wrapped.wrappedBy !== 'passphrase' || !wrapped.salt || !wrapped.kdfParams) {
      throw new Error('Not a passphrase-wrapped key');
    }
    assertKdfParams(wrapped.kdfParams);
    const root = await argon2id(utf8(passphrase), fromBase64(wrapped.salt), wrapped.kdfParams);
    const kek = await importAesKey(await hkdf(root, fromBase64(wrapped.salt), FAMILY_INFO));
    const familyKey = await open(kek, {
      iv: fromBase64(wrapped.iv),
      ciphertext: fromBase64(wrapped.ciphertext),
    });
    return new CryptoEnvelope(familyKey, argon2id);
  }

  /** Unwrap from the 24-word recovery phrase. */
  static async fromRecoveryPhrase(
    words: readonly string[],
    wrapped: WrappedKey,
    argon2id: Argon2id,
  ): Promise<CryptoEnvelope> {
    if (wrapped.wrappedBy !== 'recovery-phrase' || !wrapped.salt) {
      throw new Error('Not a recovery-phrase-wrapped key');
    }
    const entropy = await mnemonicToEntropy(words);
    const kek = await importAesKey(await hkdf(entropy, fromBase64(wrapped.salt), FAMILY_INFO));
    const familyKey = await open(kek, {
      iv: fromBase64(wrapped.iv),
      ciphertext: fromBase64(wrapped.ciphertext),
    });
    return new CryptoEnvelope(familyKey, argon2id);
  }

  /** Unwrap from a raw escrow or keychain secret. */
  static async fromWrappingSecret(
    secret: Uint8Array,
    wrapped: WrappedKey,
    argon2id: Argon2id,
  ): Promise<CryptoEnvelope> {
    if (!wrapped.salt) throw new Error('Wrapped key missing salt');
    const kek = await importAesKey(await hkdf(secret, fromBase64(wrapped.salt), FAMILY_INFO));
    const familyKey = await open(kek, {
      iv: fromBase64(wrapped.iv),
      ciphertext: fromBase64(wrapped.ciphertext),
    });
    return new CryptoEnvelope(familyKey, argon2id);
  }

  // ---- Wrapping (producing what the server stores) -------------------------

  async wrapWithPassphrase(
    passphrase: string,
    params: Argon2idParams = ARGON2ID_FLOOR,
    now = '1970-01-01T00:00:00.000Z',
  ): Promise<WrappedKey> {
    assertKdfParams(params);
    const salt = randomBytes(16);
    const root = await this.argon2id(utf8(passphrase), salt, params);
    const kek = await importAesKey(await hkdf(root, salt, FAMILY_INFO));
    const sealed = await seal(kek, this.familyKeyRaw);
    return {
      wrappedBy: 'passphrase',
      iv: toBase64(sealed.iv),
      ciphertext: toBase64(sealed.ciphertext),
      salt: toBase64(salt),
      kdfParams: params,
      createdAt: now,
    };
  }

  /**
   * Wrap under a fresh recovery phrase. Returns the words exactly once;
   * the caller shows them, forces re-entry, and never persists them.
   */
  async wrapWithNewRecoveryPhrase(
    now = '1970-01-01T00:00:00.000Z',
  ): Promise<{ words: string[]; wrapped: WrappedKey }> {
    const entropy = randomBytes(32);
    const words = await entropyToMnemonic(entropy);
    const salt = randomBytes(16);
    const kek = await importAesKey(await hkdf(entropy, salt, FAMILY_INFO));
    const sealed = await seal(kek, this.familyKeyRaw);
    return {
      words,
      wrapped: {
        wrappedBy: 'recovery-phrase',
        iv: toBase64(sealed.iv),
        ciphertext: toBase64(sealed.ciphertext),
        salt: toBase64(salt),
        createdAt: now,
      },
    };
  }

  /**
   * Wrap for a second adult (spouse/co-parent escrow) or a device keychain.
   * The wrapping secret belongs to them; either parent can restore the other.
   */
  async wrapWithSecret(
    secret: Uint8Array,
    wrappedBy: 'escrow' | 'device-keychain',
    wrapperId: string,
    now = '1970-01-01T00:00:00.000Z',
  ): Promise<WrappedKey> {
    const salt = randomBytes(16);
    const kek = await importAesKey(await hkdf(secret, salt, FAMILY_INFO));
    const sealed = await seal(kek, this.familyKeyRaw);
    return {
      wrappedBy,
      wrapperId,
      iv: toBase64(sealed.iv),
      ciphertext: toBase64(sealed.ciphertext),
      salt: toBase64(salt),
      createdAt: now,
    };
  }

  // ---- Record encryption ---------------------------------------------------

  private async childKey(childId: string): Promise<CryptoKey> {
    return importAesKey(await hkdf(this.familyKeyRaw, utf8(childId), CHILD_INFO + childId));
  }

  private async mediaKey(assetId: string): Promise<CryptoKey> {
    return importAesKey(await hkdf(this.familyKeyRaw, utf8(assetId), MEDIA_INFO + assetId));
  }

  /** Seal a child record. AAD binds ciphertext to the child id: no cross-child replay. */
  async sealChildRecord(childId: string, record: unknown): Promise<SealedRecord> {
    const key = await this.childKey(childId);
    const sealed = await seal(key, utf8(JSON.stringify(record)), utf8(childId));
    return { iv: toBase64(sealed.iv), ciphertext: toBase64(sealed.ciphertext), keyId: `child:${childId}` };
  }

  async openChildRecord<T = unknown>(childId: string, record: SealedRecord): Promise<T> {
    if (record.keyId !== `child:${childId}`) {
      throw new Error(`Record sealed for ${record.keyId}, not child:${childId}`);
    }
    const key = await this.childKey(childId);
    const sealed: Sealed = { iv: fromBase64(record.iv), ciphertext: fromBase64(record.ciphertext) };
    return JSON.parse(fromUtf8(await open(key, sealed, utf8(childId)))) as T;
  }

  async sealMedia(assetId: string, bytes: Uint8Array): Promise<SealedRecord> {
    const key = await this.mediaKey(assetId);
    const sealed = await seal(key, bytes, utf8(assetId));
    return { iv: toBase64(sealed.iv), ciphertext: toBase64(sealed.ciphertext), keyId: `media:${assetId}` };
  }

  async openMedia(assetId: string, record: SealedRecord): Promise<Uint8Array> {
    if (record.keyId !== `media:${assetId}`) {
      throw new Error(`Record sealed for ${record.keyId}, not media:${assetId}`);
    }
    const key = await this.mediaKey(assetId);
    return open(key, { iv: fromBase64(record.iv), ciphertext: fromBase64(record.ciphertext) }, utf8(assetId));
  }
}
