import { monthsBetween, type CalendarDate, today } from './dates.js';

/**
 * The fourteen developmental stages, conception excluded.
 *
 * Roadmap section 6. Ranges are half-open in whole months: a stage covers
 * `[minMonths, maxMonths)`, so a child of exactly 36 months is Preschool and
 * not Toddler. Section 6's governing rule is that development does not happen
 * on birthdays, so these are placement bands and the guidance inside them is
 * always expressed as a range.
 */
export type StageId =
  | 'newborn'
  | 'early-infancy'
  | 'later-infancy'
  | 'early-toddler'
  | 'toddler'
  | 'preschool'
  | 'early-childhood'
  | 'middle-childhood'
  | 'pre-adolescence'
  | 'early-adolescence'
  | 'middle-adolescence'
  | 'late-adolescence'
  | 'emerging-adult'
  | 'young-adult';

export interface Stage {
  readonly id: StageId;
  /** Display name, as printed in the roadmap. */
  readonly label: string;
  /** Inclusive lower bound, whole months since birth. */
  readonly minMonths: number;
  /** Exclusive upper bound, whole months since birth. */
  readonly maxMonths: number;
  /** Human-readable band, for dashboard headers. */
  readonly range: string;
  /** Zero-based position, for ordering and "next stage" lookups. */
  readonly index: number;
}

const RAW: ReadonlyArray<Omit<Stage, 'index'>> = [
  { id: 'newborn', label: 'Newborn', minMonths: 0, maxMonths: 3, range: '0–3 months' },
  { id: 'early-infancy', label: 'Early Infancy', minMonths: 3, maxMonths: 6, range: '3–6 months' },
  { id: 'later-infancy', label: 'Later Infancy', minMonths: 6, maxMonths: 12, range: '6–12 months' },
  { id: 'early-toddler', label: 'Early Toddler', minMonths: 12, maxMonths: 24, range: '12–24 months' },
  { id: 'toddler', label: 'Toddler', minMonths: 24, maxMonths: 36, range: '2–3 years' },
  { id: 'preschool', label: 'Preschool', minMonths: 36, maxMonths: 60, range: '3–5 years' },
  { id: 'early-childhood', label: 'Early Childhood', minMonths: 60, maxMonths: 84, range: '5–7 years' },
  { id: 'middle-childhood', label: 'Middle Childhood', minMonths: 84, maxMonths: 108, range: '7–9 years' },
  { id: 'pre-adolescence', label: 'Pre-Adolescence', minMonths: 108, maxMonths: 132, range: '9–11 years' },
  { id: 'early-adolescence', label: 'Early Adolescence', minMonths: 132, maxMonths: 156, range: '11–13 years' },
  { id: 'middle-adolescence', label: 'Middle Adolescence', minMonths: 156, maxMonths: 180, range: '13–15 years' },
  { id: 'late-adolescence', label: 'Late Adolescence', minMonths: 180, maxMonths: 216, range: '15–18 years' },
  { id: 'emerging-adult', label: 'Emerging Adult', minMonths: 216, maxMonths: 240, range: '18–20 years' },
  { id: 'young-adult', label: 'Young Adult', minMonths: 240, maxMonths: 264, range: '20–22 years' },
];

export const STAGES: ReadonlyArray<Stage> = RAW.map((s, index) => ({ ...s, index }));

const BY_ID = new Map<StageId, Stage>(STAGES.map((s) => [s.id, s]));

/**
 * Two deliberate departures from the printed table in section 6, recorded here
 * rather than buried, because both change which content a real family sees.
 *
 * 1. The printed table lists Emerging Adult as 18–19 and Young Adult as 20–21,
 *    leaving a twelve-month hole across a young person's twentieth year. The
 *    bands are widened to 18–20 and 20–22 so placement is total: no birthdate
 *    ever resolves to nothing.
 * 2. The printed upper bound of 21 would drop a family out of the product on
 *    the twenty-first birthday, which is the exact day of the Recognize
 *    ceremony (section 14) that the whole framework points at. Young Adult
 *    therefore runs to the twenty-second birthday, so the capstone is reachable
 *    from inside the app rather than one day after it closes.
 */
export const STAGE_RANGE_NOTES = [
  'Emerging Adult widened from 18–19 to 18–20 to close the printed gap at age 19–20.',
  'Young Adult widened from 20–21 to 20–22 so the age-21 Recognize ceremony falls inside the stage.',
] as const;

/** The oldest month boundary the substrate covers. Past this, a family has graduated. */
export const MAX_STAGE_MONTHS = 264;

export function stageById(id: StageId): Stage {
  const stage = BY_ID.get(id);
  if (!stage) throw new Error(`Unknown stage id: ${id}`);
  return stage;
}

/**
 * Place a child by whole months since birth.
 *
 * Returns `null` past the end of the covered span (the twenty-second birthday)
 * and throws on negative input, which would mean the child is not born yet and
 * belongs in the pregnancy track instead.
 */
export function stageForMonths(months: number): Stage | null {
  if (!Number.isFinite(months)) throw new TypeError('months must be finite');
  if (months < 0) {
    throw new RangeError('months must be >= 0; an unborn child belongs to the pregnancy track');
  }
  const floored = Math.floor(months);
  return STAGES.find((s) => floored >= s.minMonths && floored < s.maxMonths) ?? null;
}

/** Place a child by birthdate. `null` once the child is past the covered span. */
export function stageForBirthdate(birthdate: CalendarDate, on: CalendarDate = today()): Stage | null {
  return stageForMonths(monthsBetween(birthdate, on));
}

/** The stage after this one, or `null` at the end of the span. */
export function nextStage(id: StageId): Stage | null {
  const stage = stageById(id);
  return STAGES[stage.index + 1] ?? null;
}

export function previousStage(id: StageId): Stage | null {
  const stage = stageById(id);
  return stage.index === 0 ? null : (STAGES[stage.index - 1] ?? null);
}

/**
 * How far through the current stage a child is, 0 to 1.
 *
 * Section 21's dashboard reads "TRANSITIONING INTO PRE-ADOLESCENCE" rather than
 * a flat stage name, and this is what makes that possible: past roughly 0.8 the
 * app should be talking about what comes next.
 */
export function stageProgress(months: number): number {
  const stage = stageForMonths(months);
  if (!stage) return 1;
  const span = stage.maxMonths - stage.minMonths;
  return Math.min(1, Math.max(0, (months - stage.minMonths) / span));
}

/** True when a child is close enough to the next stage that guidance should look forward. */
export function isTransitioning(months: number, threshold = 0.8): boolean {
  const stage = stageForMonths(months);
  if (!stage) return false;
  return stageProgress(months) >= threshold && nextStage(stage.id) !== null;
}
