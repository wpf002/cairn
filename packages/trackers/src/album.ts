import type { CalendarDate } from '@cairn/stages';

/**
 * The bump photo album — the retention bridge across the birth cliff.
 *
 * Competitive research: The Bump's weekly bump album that expands after birth
 * into the baby's first year is "the single best idea in the category"
 * because it is the only feature that survives the birth transition. Cairn's
 * version continues to twenty-one, and every photo is client-side encrypted
 * (invariant 5) — this module models the album; @cairn/crypto seals the
 * bytes.
 */
export type AlbumPhase = 'pregnancy' | 'first-year' | 'childhood';

export interface AlbumSlot {
  readonly phase: AlbumPhase;
  /** Pregnancy week (4–40), month of first year (1–12), or year (2–21). */
  readonly index: number;
  readonly label: string;
  /** Asset id of the encrypted photo, when one is placed. */
  readonly assetId: string | null;
  readonly takenOn: CalendarDate | null;
}

export function pregnancySlots(): AlbumSlot[] {
  const out: AlbumSlot[] = [];
  for (let week = 4; week <= 40; week += 1) {
    out.push({ phase: 'pregnancy', index: week, label: `Week ${week}`, assetId: null, takenOn: null });
  }
  return out;
}

export function firstYearSlots(): AlbumSlot[] {
  const out: AlbumSlot[] = [];
  for (let month = 1; month <= 12; month += 1) {
    out.push({ phase: 'first-year', index: month, label: `Month ${month}`, assetId: null, takenOn: null });
  }
  return out;
}

export function childhoodSlots(): AlbumSlot[] {
  const out: AlbumSlot[] = [];
  for (let year = 2; year <= 21; year += 1) {
    out.push({ phase: 'childhood', index: year, label: `Age ${year}`, assetId: null, takenOn: null });
  }
  return out;
}

/** The full 21-year album: 37 + 12 + 20 slots. */
export function fullAlbum(): AlbumSlot[] {
  return [...pregnancySlots(), ...firstYearSlots(), ...childhoodSlots()];
}

export function placePhoto(
  slots: readonly AlbumSlot[],
  phase: AlbumPhase,
  index: number,
  assetId: string,
  takenOn: CalendarDate,
): AlbumSlot[] {
  return slots.map((s) => (s.phase === phase && s.index === index ? { ...s, assetId, takenOn } : s));
}

export function albumProgress(slots: readonly AlbumSlot[], phase: AlbumPhase): { filled: number; total: number } {
  const inPhase = slots.filter((s) => s.phase === phase);
  return { filled: inPhase.filter((s) => s.assetId !== null).length, total: inPhase.length };
}

/** The slot a family would naturally fill next, given where they are. */
export function currentSlot(
  slots: readonly AlbumSlot[],
  position: { phase: AlbumPhase; index: number },
): AlbumSlot | null {
  return slots.find((s) => s.phase === position.phase && s.index === position.index) ?? null;
}
