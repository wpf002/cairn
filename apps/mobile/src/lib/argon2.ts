import { argon2id } from '@noble/hashes/argon2.js';
import type { Argon2id, Argon2idParams } from '@cairn/crypto';

/**
 * Argon2id for @cairn/crypto (section 33a), in pure JavaScript.
 *
 * This was originally react-native-argon2, which wraps the reference C
 * implementation. That failed to build: its Argon2Swift dependency exposes the
 * C library as a Clang module named `argon2`, and under Xcode 26 with the New
 * Architecture the module does not resolve. Rather than maintain a CocoaPods
 * modulemap patch, the KDF moved to @noble/hashes — audited, dependency-free,
 * and verified here against the RFC 9106 Argon2id test vector.
 *
 * The trade is speed for reliability, and the trade is a good one:
 *   - no native module, so this runs in Expo Go, in tests, and in CI unchanged;
 *   - ~0.4s at the 64 MB floor on a laptop, a few seconds on a phone.
 * Section 33a puts the passphrase behind a device-keychain unlock for
 * day-to-day use, so this cost lands on first setup, a new device, and
 * recovery — exactly the moments where a few seconds is acceptable and
 * silently weakening the parameters would not be.
 */
export const nativeArgon2id: Argon2id = async (
  passphrase: Uint8Array,
  salt: Uint8Array,
  params: Argon2idParams,
): Promise<Uint8Array> =>
  argon2id(passphrase, salt, {
    t: params.iterations,
    m: params.memoryKib,
    p: params.parallelism,
    dkLen: params.hashLength,
  });
