import type { Category, Voice } from '@cairn/framework';
import type { CalendarDate } from '@cairn/stages';

/**
 * The Journey data model. Sections 27 and 37.
 *
 * Designed so The Story Of Your Childhood at twenty-one is a rendering
 * problem, not a migration: every entry carries its date, its author's voice,
 * its child, and (where it applies) the framework category it belongs to.
 * Two parents produce two threads through the same years — that is the thing
 * no other product can produce, and it falls straight out of `authorVoice`.
 */
export type EntryKind =
  | 'milestone'
  | 'prayer'
  | 'answered-prayer'
  | 'memory'
  | 'quote' // funny or profound things the child said
  | 'letter' // sealed letters, including ceremony letters
  | 'photo'
  | 'reflection' // parent's own processing of a season
  | 'tradition';

export interface JourneyEntry {
  readonly id: string;
  readonly childId: string;
  readonly kind: EntryKind;
  readonly date: CalendarDate;
  /** Who wrote it — the mother's thread and the father's thread stay distinct. */
  readonly authorVoice: Voice;
  readonly authorName: string;
  readonly title: string;
  readonly body: string;
  /**
   * Where this lands in the formation framework, when it does. A first job
   * is EXPERIENCE; a first prayer is BELIEVE; "I'm proud of you" said and
   * received is HEAR. Milestone capture mapped to the seven categories is
   * the Brightwheel pattern with Cairn's curriculum (section 29.3).
   */
  readonly category?: Category;
  /** Encrypted media asset ids attached to this entry. */
  readonly assetIds: readonly string[];
  /** Letters can be sealed until a date or ceremony. */
  readonly sealedUntil?: CalendarDate | { readonly ceremony: string };
  readonly tags: readonly string[];
}

export function newEntry(
  fields: Omit<JourneyEntry, 'assetIds' | 'tags'> & Partial<Pick<JourneyEntry, 'assetIds' | 'tags'>>,
): JourneyEntry {
  return { assetIds: [], tags: [], ...fields };
}

/** Whether a sealed letter may be opened on a given date. */
export function isOpenable(entry: JourneyEntry, on: CalendarDate, completedCeremonies: readonly string[]): boolean {
  if (!entry.sealedUntil) return true;
  if (typeof entry.sealedUntil === 'string') return on >= entry.sealedUntil;
  return completedCeremonies.includes(entry.sealedUntil.ceremony);
}

/** Entries for one child, one voice thread, oldest first. */
export function thread(entries: readonly JourneyEntry[], childId: string, voice?: Voice): JourneyEntry[] {
  return entries
    .filter((e) => e.childId === childId && (voice === undefined || e.authorVoice === voice))
    .sort((a, b) => a.date.localeCompare(b.date) || a.id.localeCompare(b.id));
}
