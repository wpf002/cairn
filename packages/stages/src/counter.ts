import { daysBetween, fromUtcAnchor, toUtcAnchor, today, type CalendarDate } from './dates.js';

/**
 * The finite-time counter.
 *
 * A child is at home for a countable number of weeks and the number only goes
 * down. Naming it is what turns a content library into something a parent opens
 * on a Tuesday. Cairn counts to twenty-one — the age of the Recognize ceremony
 * in section 14 — rather than to eighteen.
 */

/** Nominal span, for copy: birth to the twenty-first birthday. */
export const NOMINAL_WEEKS_TO_21 = 1096;
export const NOMINAL_WEEKS_TO_18 = 939;

/** Anniversary of a calendar date, rolling 29 February back to 28 February. */
export function addYears(date: CalendarDate, years: number): CalendarDate {
  const d = new Date(toUtcAnchor(date));
  const targetYear = d.getUTCFullYear() + years;
  const month = d.getUTCMonth();
  const day = d.getUTCDate();
  const candidate = Date.UTC(targetYear, month, day, 12, 0, 0, 0);
  const check = new Date(candidate);
  if (check.getUTCMonth() !== month) {
    // 29 February in a non-leap target year.
    return fromUtcAnchor(Date.UTC(targetYear, month, day - 1, 12, 0, 0, 0));
  }
  return fromUtcAnchor(candidate);
}

export interface Countdown {
  /** The birthday being counted to. */
  readonly toAge: number;
  readonly targetDate: CalendarDate;
  /** Whole weeks remaining. Zero once the birthday has passed. */
  readonly weeksRemaining: number;
  readonly daysRemaining: number;
  /** Whole weeks already spent. */
  readonly weeksElapsed: number;
  /** Total weeks in the span, for rendering a progress bar. */
  readonly weeksTotal: number;
  /** 0 to 1. */
  readonly fractionElapsed: number;
  /** True once the target birthday has passed. */
  readonly complete: boolean;
}

/**
 * Weeks left before a child reaches a given age.
 *
 * Computed from the actual birthdate rather than a fixed constant, so leap
 * years and a February birthday give the honest number rather than a rounded
 * marketing one.
 */
export function countdown(
  birthdate: CalendarDate,
  toAge = 21,
  on: CalendarDate = today(),
): Countdown {
  const targetDate = addYears(birthdate, toAge);
  const daysTotal = daysBetween(birthdate, targetDate);
  const daysElapsed = Math.max(0, daysBetween(birthdate, on));
  const daysRemaining = Math.max(0, daysBetween(on, targetDate));
  const weeksTotal = Math.floor(daysTotal / 7);
  return {
    toAge,
    targetDate,
    weeksRemaining: Math.floor(daysRemaining / 7),
    daysRemaining,
    weeksElapsed: Math.min(weeksTotal, Math.floor(daysElapsed / 7)),
    weeksTotal,
    fractionElapsed: Math.min(1, Math.max(0, daysElapsed / daysTotal)),
    complete: daysRemaining === 0,
  };
}
