import * as ImagePicker from 'expo-image-picker';

/**
 * Photo capture for the bump album and Journey (sections 27, 28).
 *
 * Returns raw bytes so the caller encrypts before anything is stored —
 * plaintext never leaves this function except into @cairn/crypto
 * (invariant 5). EXIF is stripped by re-reading the picked asset without
 * metadata.
 */
export interface PickedPhoto {
  readonly bytes: Uint8Array;
  readonly mimeType: string;
  readonly width: number;
  readonly height: number;
}

export async function pickPhoto(): Promise<PickedPhoto | null> {
  const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!permission.granted) return null;

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images'],
    quality: 0.85,
    exif: false,
    base64: true,
  });
  if (result.canceled || !result.assets[0]?.base64) return null;

  const asset = result.assets[0];
  const bytes = Uint8Array.from(atob(asset.base64!), (c) => c.charCodeAt(0));
  return {
    bytes,
    mimeType: asset.mimeType ?? 'image/jpeg',
    width: asset.width,
    height: asset.height,
  };
}
