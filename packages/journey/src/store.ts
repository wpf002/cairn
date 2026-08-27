import {
  assertJournalingAllowed,
  type CryptoEnvelope,
  type SealedRecord,
  type WrappedKey,
} from '@cairn/crypto';
import type { JourneyEntry } from './entries.js';

/**
 * The encrypted journey store.
 *
 * Entries are sealed per child with the envelope's child-record keys before
 * anything is persisted; media goes through per-asset keys. The store refuses
 * its very first write until two recovery paths are armed (section 33a) —
 * the check lives here, on the write path, not in onboarding UI where it
 * could be skipped.
 */
export interface SealedEntryRow {
  readonly entryId: string;
  readonly childId: string;
  readonly sealed: SealedRecord;
}

export interface SealedAssetRow {
  readonly assetId: string;
  readonly sealed: SealedRecord;
}

export class JourneyStore {
  private entries: SealedEntryRow[] = [];
  private assets: SealedAssetRow[] = [];

  constructor(
    private readonly envelope: CryptoEnvelope,
    private readonly wrappedKeys: readonly WrappedKey[],
  ) {}

  /** Section 33a gate 4: no journaling until recovery is genuinely armed. */
  private assertWritable(): void {
    assertJournalingAllowed(this.wrappedKeys);
  }

  async addEntry(entry: JourneyEntry): Promise<SealedEntryRow> {
    this.assertWritable();
    const sealed = await this.envelope.sealChildRecord(entry.childId, entry);
    const row: SealedEntryRow = { entryId: entry.id, childId: entry.childId, sealed };
    this.entries.push(row);
    return row;
  }

  async addAsset(assetId: string, bytes: Uint8Array): Promise<SealedAssetRow> {
    this.assertWritable();
    const sealed = await this.envelope.sealMedia(assetId, bytes);
    const row: SealedAssetRow = { assetId, sealed };
    this.assets.push(row);
    return row;
  }

  /** What a server (or a breach) would see. */
  ciphertextRows(): { entries: readonly SealedEntryRow[]; assets: readonly SealedAssetRow[] } {
    return { entries: [...this.entries], assets: [...this.assets] };
  }

  async readEntries(childId: string): Promise<JourneyEntry[]> {
    const rows = this.entries.filter((r) => r.childId === childId);
    const out: JourneyEntry[] = [];
    for (const row of rows) {
      out.push(await this.envelope.openChildRecord<JourneyEntry>(childId, row.sealed));
    }
    return out.sort((a, b) => a.date.localeCompare(b.date) || a.id.localeCompare(b.id));
  }

  async readAsset(assetId: string): Promise<Uint8Array | null> {
    const row = this.assets.find((a) => a.assetId === assetId);
    if (!row) return null;
    return this.envelope.openMedia(assetId, row.sealed);
  }

  /** Hydrate from persisted ciphertext (app reinstall, new device after recovery). */
  static fromCiphertext(
    envelope: CryptoEnvelope,
    wrappedKeys: readonly WrappedKey[],
    rows: { entries: readonly SealedEntryRow[]; assets: readonly SealedAssetRow[] },
  ): JourneyStore {
    const store = new JourneyStore(envelope, wrappedKeys);
    store.entries = [...rows.entries];
    store.assets = [...rows.assets];
    return store;
  }
}
