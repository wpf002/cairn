import { describe, expect, it } from 'vitest';
import {
  buildStory,
  CEREMONIES,
  isOpenable,
  JourneyStore,
  newEntry,
  nextCeremony,
  parseJsonExport,
  planCeremony,
  renderStoryMarkdown,
  thread,
  toJsonExport,
  toMarkdownExport,
} from '@cairn/journey';
import { assertKdfParams, CryptoEnvelope, hkdf, randomBytes, type Argon2id, type WrappedKey } from '@cairn/crypto';

const testArgon2id: Argon2id = async (passphrase, salt, params) => {
  assertKdfParams(params);
  return hkdf(passphrase, salt, `test/${params.memoryKib}`, params.hashLength);
};

const ARMED: WrappedKey[] = [
  { wrappedBy: 'recovery-phrase', iv: '', ciphertext: '', createdAt: '' },
  { wrappedBy: 'device-keychain', wrapperId: 'd', iv: '', ciphertext: '', createdAt: '' },
];

const entryFixture = (over: Partial<Parameters<typeof newEntry>[0]> = {}) =>
  newEntry({
    id: over.id ?? 'e1',
    childId: 'jack',
    kind: 'memory',
    date: '2026-08-01',
    authorVoice: 'mother',
    authorName: 'Emma',
    title: 'First day of kindergarten',
    body: 'He walked in without looking back. I cried in the car.',
    ...over,
  });

describe('the Phase 6 gate (section 36)', () => {
  it('media is encrypted client-side: ciphertext rows contain no plaintext', async () => {
    const store = new JourneyStore(CryptoEnvelope.create(testArgon2id), ARMED);
    await store.addEntry(entryFixture());
    const photo = new TextEncoder().encode('FAKE-JPEG-BYTES-first-steps');
    await store.addAsset('asset-1', photo);

    const rows = store.ciphertextRows();
    const blob = JSON.stringify(rows);
    expect(blob).not.toContain('kindergarten');
    expect(blob).not.toContain('cried');
    expect(blob).not.toContain('first-steps');
    expect(rows.entries[0]?.sealed.keyId).toBe('child:jack');
  });

  it('export survives app deletion: JSON round-trips and Markdown stands alone', async () => {
    const store = new JourneyStore(CryptoEnvelope.create(testArgon2id), ARMED);
    await store.addEntry(entryFixture());
    await store.addEntry(
      entryFixture({ id: 'e2', kind: 'prayer', date: '2026-08-02', title: 'For courage', body: 'Lord, make him brave.' }),
    );
    const entries = await store.readEntries('jack');

    const json = toJsonExport('Jack', entries, '2026-08-26');
    const parsed = parseJsonExport(json);
    expect(parsed.entries).toHaveLength(2);
    expect(parsed.entries[0]?.body).toContain('without looking back');

    const md = toMarkdownExport('Jack', entries);
    expect(md).toContain('# Jack — Journey');
    expect(md).toContain('First day of kindergarten');
    expect(md).toContain('recorded by Emma');
  });

  it('journaling is blocked until recovery is armed — on the write path itself', async () => {
    const unarmed = new JourneyStore(CryptoEnvelope.create(testArgon2id), [
      { wrappedBy: 'passphrase', iv: '', ciphertext: '', salt: '', createdAt: '' },
    ]);
    await expect(unarmed.addEntry(entryFixture())).rejects.toThrow(/recovery paths are armed/);
    await expect(unarmed.addAsset('a', randomBytes(8))).rejects.toThrow(/recovery paths are armed/);
  });

  it('a rehydrated store on a recovered device reads everything back', async () => {
    const envelope = CryptoEnvelope.create(testArgon2id);
    const store = new JourneyStore(envelope, ARMED);
    await store.addEntry(entryFixture());
    const photo = randomBytes(64);
    await store.addAsset('asset-1', photo);

    // New device: restore the envelope from the recovery phrase, hydrate from ciphertext.
    const { words, wrapped } = await envelope.wrapWithNewRecoveryPhrase();
    const restoredEnvelope = await CryptoEnvelope.fromRecoveryPhrase(words, wrapped, testArgon2id);
    const restored = JourneyStore.fromCiphertext(restoredEnvelope, ARMED, store.ciphertextRows());

    const entries = await restored.readEntries('jack');
    expect(entries[0]?.title).toBe('First day of kindergarten');
    const asset = await restored.readAsset('asset-1');
    expect(Array.from(asset ?? [])).toEqual(Array.from(photo));
  });
});

describe('ceremonies (section 14)', () => {
  it('defines the four worksheet ceremonies at 13, 16, 17, 21', () => {
    expect(CEREMONIES.map((c) => c.atAge)).toEqual([13, 16, 17, 21]);
    expect(CEREMONIES.at(-1)?.id).toBe('recognize');
    for (const c of CEREMONIES) expect(c.steps.length).toBeGreaterThanOrEqual(3);
  });

  it('plans a ceremony against the child\'s actual birthday', () => {
    const plan = planCeremony('recognize', 'jack', '2020-06-15');
    expect(plan.targetDate).toBe('2041-06-15');
    expect(plan.completedOn).toBeNull();
  });

  it('finds the next ceremony from any age', () => {
    expect(nextCeremony('2020-06-15', '2026-08-26')?.id).toBe('intro');
    expect(nextCeremony('2008-01-01', '2026-08-26')?.id).toBe('recognize');
    expect(nextCeremony('2000-01-01', '2026-08-26')).toBeNull();
  });

  it('sealed letters stay sealed until their ceremony completes', () => {
    const letter = entryFixture({
      id: 'letter1',
      kind: 'letter',
      sealedUntil: { ceremony: 'intro' },
      title: 'From Grandpa',
    });
    expect(isOpenable(letter, '2039-01-01', [])).toBe(false);
    expect(isOpenable(letter, '2039-01-01', ['intro'])).toBe(true);
    const dated = entryFixture({ id: 'l2', sealedUntil: '2030-01-01' });
    expect(isOpenable(dated, '2029-12-31', [])).toBe(false);
    expect(isOpenable(dated, '2030-01-01', [])).toBe(true);
  });
});

describe('the Story of Your Childhood (section 37)', () => {
  const entries = [
    entryFixture({ id: 'p1', date: '2020-02-01', title: 'We found out', body: 'Positive test.', authorVoice: 'mother' }),
    entryFixture({ id: 'y0m', date: '2020-08-01', title: 'First smile', body: 'At his father, of course.', authorVoice: 'mother' }),
    entryFixture({ id: 'y0d', date: '2020-09-01', title: 'Night shifts', body: 'We have an arrangement, he and I.', authorVoice: 'father', authorName: 'Will' }),
    entryFixture({ id: 'y5', date: '2026-07-01', kind: 'prayer', title: 'For school', body: 'Lord, go with him.', authorVoice: 'father', authorName: 'Will' }),
    entryFixture({ id: 'y5b', date: '2026-08-01', kind: 'answered-prayer', title: 'He loves it', body: 'Thank you.', authorVoice: 'mother' }),
  ];

  it('weaves two voice threads through the same years', () => {
    const story = buildStory('Jack', '2020-06-15', entries);
    expect(story.chapters[0]?.heading).toBe('Before you were born');
    const firstYear = story.chapters.find((c) => c.year === 0)!;
    expect(firstYear.motherThread.map((e) => e.id)).toEqual(['y0m']);
    expect(firstYear.fatherThread.map((e) => e.id)).toEqual(['y0d']);
    expect(story.stats.prayers).toBe(1);
    expect(story.stats.answeredPrayers).toBe(1);
  });

  it('renders the handover artifact', () => {
    const md = renderStoryMarkdown(buildStory('Jack', '2020-06-15', entries));
    expect(md).toContain('# The Story of Your Childhood');
    expect(md).toContain('From your mother');
    expect(md).toContain('From your father');
    expect(md).toContain('Before you were born');
  });

  it('threads filter by child and voice', () => {
    const all = thread(entries, 'jack');
    expect(all).toHaveLength(5);
    expect(thread(entries, 'jack', 'father')).toHaveLength(2);
    expect(thread(entries, 'nobody')).toHaveLength(0);
  });
});
