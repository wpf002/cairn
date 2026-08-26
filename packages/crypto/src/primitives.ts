/**
 * Cryptographic primitives, bound to WebCrypto.
 *
 * Roadmap section 33a. The app runs on Expo, where `crypto.subtle` is
 * available via polyfill, and in tests on Node, where it is native. Everything
 * here is written against the standard so the same code runs in both — and so
 * no home-rolled cryptography exists anywhere in this repository.
 *
 * Argon2id is specified for passphrase derivation (never PBKDF2, section 33a).
 * WebCrypto does not ship Argon2id, so the KDF is injected: the mobile app
 * provides a native Argon2id (react-native-argon2 or libsodium), and tests
 * provide a deterministic stand-in. The parameter floor is enforced here
 * regardless of which implementation arrives.
 */

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

const subtle = globalThis.crypto.subtle;

export function randomBytes(length: number): Uint8Array {
  const out = new Uint8Array(length);
  globalThis.crypto.getRandomValues(out);
  return out;
}

/** AES-256-GCM encrypt. Fresh 12-byte IV per call, never reused. */
export interface Sealed {
  readonly iv: Uint8Array;
  readonly ciphertext: Uint8Array;
}

export async function importAesKey(raw: Uint8Array, usages: KeyUsage[] = ['encrypt', 'decrypt']): Promise<CryptoKey> {
  if (raw.length !== 32) throw new Error('AES-256 key must be 32 bytes');
  return subtle.importKey('raw', raw as BufferSource, { name: 'AES-GCM' }, false, usages);
}

export async function seal(key: CryptoKey, plaintext: Uint8Array, aad?: Uint8Array): Promise<Sealed> {
  const iv = randomBytes(12);
  const params: AesGcmParams = { name: 'AES-GCM', iv: iv as BufferSource };
  if (aad) params.additionalData = aad as BufferSource;
  const ciphertext = new Uint8Array(await subtle.encrypt(params, key, plaintext as BufferSource));
  return { iv, ciphertext };
}

export async function open(key: CryptoKey, sealed: Sealed, aad?: Uint8Array): Promise<Uint8Array> {
  const params: AesGcmParams = { name: 'AES-GCM', iv: sealed.iv as BufferSource };
  if (aad) params.additionalData = aad as BufferSource;
  return new Uint8Array(await subtle.decrypt(params, key, sealed.ciphertext as BufferSource));
}

/** HKDF-SHA-256, for deriving purpose-bound subkeys from a root secret. */
export async function hkdf(
  secret: Uint8Array,
  salt: Uint8Array,
  info: string,
  length = 32,
): Promise<Uint8Array> {
  const key = await subtle.importKey('raw', secret as BufferSource, 'HKDF', false, ['deriveBits']);
  const bits = await subtle.deriveBits(
    {
      name: 'HKDF',
      hash: 'SHA-256',
      salt: salt as BufferSource,
      info: new TextEncoder().encode(info) as BufferSource,
    },
    key,
    length * 8,
  );
  return new Uint8Array(bits);
}

export async function sha256(data: Uint8Array): Promise<Uint8Array> {
  return new Uint8Array(await subtle.digest('SHA-256', data as BufferSource));
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
