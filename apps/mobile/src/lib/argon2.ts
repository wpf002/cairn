import argon2 from 'react-native-argon2';
import type { Argon2id, Argon2idParams } from '@cairn/crypto';

/**
 * Native Argon2id for @cairn/crypto (section 33a).
 *
 * react-native-argon2 wraps the reference C implementation on iOS and
 * Android. It takes string inputs and returns hex, so this adapter converts
 * at the boundary; @cairn/crypto's WeakKdfParamsError still enforces the
 * 64 MB floor downstream. Requires a dev build (expo prebuild) — Expo Go
 * cannot load native modules.
 */
function toHex(bytes: Uint8Array): string {
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
}

function fromHex(hex: string): Uint8Array {
  const out = new Uint8Array(hex.length / 2);
  for (let i = 0; i < out.length; i += 1) out[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  return out;
}

export const nativeArgon2id: Argon2id = async (
  passphrase: Uint8Array,
  salt: Uint8Array,
  params: Argon2idParams,
): Promise<Uint8Array> => {
  const { rawHash } = await argon2(
    // The library hashes the UTF-8 of the string it is given; the passphrase
    // arrives as UTF-8 bytes, so decode without re-encoding surprises.
    new TextDecoder().decode(passphrase),
    toHex(salt),
    {
      mode: 'argon2id',
      // The salt is passed as hex; without this the library would hash the
      // hex *string* as UTF-8 and silently derive a different key.
      saltEncoding: 'hex',
      memory: params.memoryKib,
      iterations: params.iterations,
      parallelism: params.parallelism,
      hashLength: params.hashLength,
    },
  );
  return fromHex(rawHash);
};
