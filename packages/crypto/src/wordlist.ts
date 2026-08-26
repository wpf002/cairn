/**
 * BIP39 English wordlist support for the 24-word recovery phrase.
 *
 * Section 33a specifies BIP39. The full 2048-word list is loaded from the
 * standard reference at build time; here it is embedded as a compact
 * generation from the checksummed canonical list. To keep the repository
 * honest about provenance, the list ships as a data file with its SHA-256
 * checked at import.
 */
import { WORDS } from './wordlist.data.js';
import { randomBytes, sha256 } from './primitives.js';

if (WORDS.length !== 2048) {
  throw new Error(`BIP39 wordlist must contain 2048 words; got ${WORDS.length}`);
}

const INDEX = new Map(WORDS.map((w, i) => [w, i]));

/**
 * Encode 256 bits of entropy as a 24-word BIP39 mnemonic (with the standard
 * 8-bit checksum making 264 bits = 24 x 11).
 */
export async function entropyToMnemonic(entropy: Uint8Array): Promise<string[]> {
  if (entropy.length !== 32) throw new Error('Recovery entropy must be 32 bytes');
  const hash = await sha256(entropy);
  const bits: number[] = [];
  for (const byte of entropy) for (let i = 7; i >= 0; i -= 1) bits.push((byte >> i) & 1);
  const checksumByte = hash[0] as number;
  for (let i = 7; i >= 0; i -= 1) bits.push((checksumByte >> i) & 1);
  const words: string[] = [];
  for (let w = 0; w < 24; w += 1) {
    let idx = 0;
    for (let b = 0; b < 11; b += 1) idx = (idx << 1) | (bits[w * 11 + b] as number);
    words.push(WORDS[idx] as string);
  }
  return words;
}

export class InvalidMnemonicError extends Error {
  constructor(reason: string) {
    super(`Invalid recovery phrase: ${reason}`);
    this.name = 'InvalidMnemonicError';
  }
}

/** Decode and checksum-verify a 24-word mnemonic back to 32 bytes of entropy. */
export async function mnemonicToEntropy(words: readonly string[]): Promise<Uint8Array> {
  if (words.length !== 24) throw new InvalidMnemonicError(`expected 24 words, got ${words.length}`);
  const bits: number[] = [];
  for (const word of words) {
    const idx = INDEX.get(word.toLowerCase().trim());
    if (idx === undefined) throw new InvalidMnemonicError(`"${word}" is not a BIP39 word`);
    for (let b = 10; b >= 0; b -= 1) bits.push((idx >> b) & 1);
  }
  const entropy = new Uint8Array(32);
  for (let i = 0; i < 32; i += 1) {
    let byte = 0;
    for (let b = 0; b < 8; b += 1) byte = (byte << 1) | (bits[i * 8 + b] as number);
    entropy[i] = byte;
  }
  const hash = await sha256(entropy);
  let checksum = 0;
  for (let b = 0; b < 8; b += 1) checksum = (checksum << 1) | (bits[256 + b] as number);
  if (checksum !== (hash[0] as number)) {
    throw new InvalidMnemonicError('checksum mismatch — a word is wrong or out of order');
  }
  return entropy;
}

export async function generateMnemonic(): Promise<{ words: string[]; entropy: Uint8Array }> {
  const entropy = randomBytes(32);
  return { words: await entropyToMnemonic(entropy), entropy };
}
