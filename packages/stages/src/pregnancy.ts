import { addDays, daysBetween, today, type CalendarDate } from './dates.js';

/**
 * The pregnancy track. Roadmap section 5, weeks 4 through 40.
 *
 * Gestational age is dated from the last menstrual period, which is the
 * convention every obstetric source in section 18 uses: a pregnancy is
 * 280 days from LMP, and 266 days from conception. The app never asks a mother
 * to convert between the two.
 */

/** Days from LMP to the estimated due date. */
export const GESTATION_DAYS = 280;
/** Days from conception to the estimated due date. */
export const POST_CONCEPTION_DAYS = 266;

/** First and last weeks the substrate covers. Section 35. */
export const FIRST_COVERED_WEEK = 4;
export const LAST_COVERED_WEEK = 40;

export type Trimester = 1 | 2 | 3;

export interface PregnancyStatus {
  /** Completed weeks of gestation. Clinically, "you are 22 weeks" means 22w0d–22w6d. */
  readonly week: number;
  /** Days into the current week, 0–6. */
  readonly dayOfWeek: number;
  /** Total completed days of gestation. */
  readonly gestationalDays: number;
  readonly trimester: Trimester;
  /** Days until the estimated due date. Negative once past it. */
  readonly daysUntilDue: number;
  readonly dueDate: CalendarDate;
  /** True while the week falls inside the covered span of the substrate. */
  readonly hasContent: boolean;
  /** True at or past 42 weeks, where every obstetric source escalates. */
  readonly postTerm: boolean;
}

export function dueDateFromLmp(lastMenstrualPeriod: CalendarDate): CalendarDate {
  return addDays(lastMenstrualPeriod, GESTATION_DAYS);
}

export function dueDateFromConception(conception: CalendarDate): CalendarDate {
  return addDays(conception, POST_CONCEPTION_DAYS);
}

export function lmpFromDueDate(dueDate: CalendarDate): CalendarDate {
  return addDays(dueDate, -GESTATION_DAYS);
}

function trimesterForWeek(week: number): Trimester {
  if (week < 14) return 1;
  if (week < 28) return 2;
  return 3;
}

/** Where a pregnancy stands on a given day. */
export function pregnancyStatus(dueDate: CalendarDate, on: CalendarDate = today()): PregnancyStatus {
  const daysUntilDue = daysBetween(on, dueDate);
  const gestationalDays = GESTATION_DAYS - daysUntilDue;
  const week = Math.floor(gestationalDays / 7);
  const dayOfWeek = ((gestationalDays % 7) + 7) % 7;
  return {
    week,
    dayOfWeek,
    gestationalDays,
    trimester: trimesterForWeek(week),
    daysUntilDue,
    dueDate,
    hasContent: week >= FIRST_COVERED_WEEK && week <= LAST_COVERED_WEEK,
    postTerm: week >= 42,
  };
}

/** Every week the pregnancy substrate must cover, 4 through 40. */
export function coveredWeeks(): readonly number[] {
  const out: number[] = [];
  for (let w = FIRST_COVERED_WEEK; w <= LAST_COVERED_WEEK; w += 1) out.push(w);
  return out;
}

/** Clinical shorthand: 22w3d. */
export function formatGestationalAge(status: PregnancyStatus): string {
  return `${status.week}w${status.dayOfWeek}d`;
}
