/**
 * Cryptographic primitives, bound to @noble.
 *
 * Roadmap section 33a. This was originally written against WebCrypto on the
 * assumption that Expo supplied `crypto.subtle` via polyfill. It does not:
 * Hermes has no WebCrypto, and the first launch on a simulator crashed at
 * module load reading `globalThis.crypto.subtle`. The assumption had never
 * been executed, only typechecked.
 *
 * The audited @noble libraries implement exactly the algorithms section 33a
 * specifies — AES-256-GCM for content, XChaCha20-Poly1305 for media streams,
 * HKDF-SHA-256 for subkey derivation, Argon2id for the passphrase — in pure
 * JavaScript, so one implementation now runs identically on device, in Node
 * and in CI. No home-rolled cryptography exists anywhere in this repository,
 * and nothing here depends on a host polyfill being present.
 *
 * Argon2id stays injected rather than imported here: the app and the tests
 * pass different implementations (the real KDF and a fast deterministic
 * stand-in), and the parameter floor is enforced regardless of which arrives.
 */

import { gcm } from '@noble/ciphers/aes.js';
import { xchacha20poly1305 } from '@noble/ciphers/chacha.js';
import { randomBytes as nobleRandomBytes } from '@noble/ciphers/utils.js';
import { hkdf as nobleHkdf } from '@noble/hashes/hkdf.js';
import { sha256 as sha256Hash } from '@noble/hashes/sha2.js';

export interface Argon2idParams {
  /** Memory cost in KiB. Section 33a floor: 64 MB. */
  readonly memoryKib: number;
  readonly iterations: number;
  readonly parallelism: number;
  /** Output length in bytes. */
  readonly hashLength: number;
}

export const ARGON2ID_FLOOR: Argon2idParams = {
  memoryKib: 64 * 1024,
  iterations: 3,
  parallelism: 1,
  hashLength: 32,
};

export type Argon2id = (
  passphrase: Uint8Array,
  salt: Uint8Array,
  params: Argon2idParams,
) => Promise<Uint8Array>;

export class WeakKdfParamsError extends Error {
  constructor(params: Argon2idParams) {
    super(
      `Argon2id parameters below the section 33a floor: got ${params.memoryKib} KiB memory, ` +
        `${params.iterations} iteration(s); require >= ${ARGON2ID_FLOOR.memoryKib} KiB and ` +
        `>= ${ARGON2ID_FLOOR.iterations} iterations.`,
    );
    this.name = 'WeakKdfParamsError';
  }
}

export function assertKdfParams(params: Argon2idParams): void {
  if (
    params.memoryKib < ARGON2ID_FLOOR.memoryKib ||
    params.iterations < ARGON2ID_FLOOR.iterations ||
    params.parallelism < 1 ||
    params.hashLength < 32
  ) {
    throw new WeakKdfParamsError(params);
  }
}

export function randomBytes(length: number): Uint8Array {
  return nobleRandomBytes(length);
}

/** AES-256-GCM encrypt. Fresh 12-byte IV per call, never reused. */
export interface Sealed {
  readonly iv: Uint8Array;
  readonly ciphertext: Uint8Array;
}

/**
 * An AES-256 key. Previously a WebCrypto `CryptoKey`, which was opaque and
 * non-extractable; @noble takes raw bytes, so the wrapper keeps the same
 * shape and the same one-way discipline at the call sites.
 */
export interface AesKey {
  readonly raw: Uint8Array;
}

export async function importAesKey(raw: Uint8Array): Promise<AesKey> {
  if (raw.length !== 32) throw new Error('AES-256 key must be 32 bytes');
  return { raw };
}

export async function seal(key: AesKey, plaintext: Uint8Array, aad?: Uint8Array): Promise<Sealed> {
  const iv = randomBytes(12);
  const ciphertext = gcm(key.raw, iv, aad).encrypt(plaintext);
  return { iv, ciphertext };
}

export async function open(key: AesKey, sealed: Sealed, aad?: Uint8Array): Promise<Uint8Array> {
  return gcm(key.raw, sealed.iv, aad).decrypt(sealed.ciphertext);
}

/**
 * XChaCha20-Poly1305, specified in section 33a for media streams: its 24-byte
 * nonce can be generated randomly for every photo without birthday-bound
 * concerns, which AES-GCM's 12-byte IV cannot promise across a 21-year album.
 */
export interface SealedMedia {
  readonly nonce: Uint8Array;
  readonly ciphertext: Uint8Array;
}

export async function sealMedia(key: AesKey, plaintext: Uint8Array, aad?: Uint8Array): Promise<SealedMedia> {
  const nonce = randomBytes(24);
  return { nonce, ciphertext: xchacha20poly1305(key.raw, nonce, aad).encrypt(plaintext) };
}

export async function openMedia(key: AesKey, sealed: SealedMedia, aad?: Uint8Array): Promise<Uint8Array> {
  return xchacha20poly1305(key.raw, sealed.nonce, aad).decrypt(sealed.ciphertext);
}

/** HKDF-SHA-256, for deriving purpose-bound subkeys from a root secret. */
export async function hkdf(
  secret: Uint8Array,
  salt: Uint8Array,
  info: string,
  length = 32,
): Promise<Uint8Array> {
  return nobleHkdf(sha256Hash, secret, salt, new TextEncoder().encode(info), length);
}

export async function sha256(data: Uint8Array): Promise<Uint8Array> {
  return sha256Hash(data);
}

export function toBase64(bytes: Uint8Array): string {
  let s = '';
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s);
}

export function fromBase64(text: string): Uint8Array {
  const s = atob(text);
  const out = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i += 1) out[i] = s.charCodeAt(i);
  return out;
}

export function utf8(text: string): Uint8Array {
  return new TextEncoder().encode(text);
}

export function fromUtf8(bytes: Uint8Array): string {
  return new TextDecoder().decode(bytes);
}

export function constantTimeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= (a[i] as number) ^ (b[i] as number);
  return diff === 0;
}
