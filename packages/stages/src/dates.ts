/**
 * Date arithmetic for Cairn.
 *
 * Every date in the substrate and in family records is a calendar date, not an
 * instant. Birthdays, due dates and stage boundaries must not shift because a
 * family crossed a timezone or a daylight-saving boundary, so all arithmetic
 * runs on UTC-noon anchors of `YYYY-MM-DD` strings.
 */

/** A calendar date with no time and no zone. Always `YYYY-MM-DD`. */
export type CalendarDate = string;

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;

export class InvalidDateError extends Error {
  constructor(value: string) {
    super(`Not a valid YYYY-MM-DD calendar date: ${JSON.stringify(value)}`);
    this.name = 'InvalidDateError';
  }
}

/** Parse a calendar date to a UTC-noon millisecond anchor. */
export function toUtcAnchor(date: CalendarDate): number {
  const m = ISO_DATE.exec(date);
  if (!m) throw new InvalidDateError(date);
  const year = Number(m[1]);
  const month = Number(m[2]);
  const day = Number(m[3]);
  if (month < 1 || month > 12 || day < 1 || day > 31) throw new InvalidDateError(date);
  const ms = Date.UTC(year, month - 1, day, 12, 0, 0, 0);
  const round = new Date(ms);
  // Rejects 2025-02-30 and friends, which Date.UTC would silently roll forward.
  if (round.getUTCFullYear() !== year || round.getUTCMonth() !== month - 1 || round.getUTCDate() !== day) {
    throw new InvalidDateError(date);
  }
  return ms;
}

/** Format a UTC anchor back to a calendar date. */
export function fromUtcAnchor(ms: number): CalendarDate {
  const d = new Date(ms);
  const y = String(d.getUTCFullYear()).padStart(4, '0');
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  const day = String(d.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export const MS_PER_DAY = 86_400_000;
export const MS_PER_WEEK = MS_PER_DAY * 7;

/** Whole days from `from` to `to`. Negative when `to` precedes `from`. */
export function daysBetween(from: CalendarDate, to: CalendarDate): number {
  return Math.round((toUtcAnchor(to) - toUtcAnchor(from)) / MS_PER_DAY);
}

/** Whole completed weeks from `from` to `to`. */
export function weeksBetween(from: CalendarDate, to: CalendarDate): number {
  const days = daysBetween(from, to);
  return days < 0 ? -Math.floor(-days / 7) : Math.floor(days / 7);
}

export function addDays(date: CalendarDate, days: number): CalendarDate {
  return fromUtcAnchor(toUtcAnchor(date) + days * MS_PER_DAY);
}

/**
 * Whole completed calendar months from `from` to `to`.
 *
 * Calendar months, not 30.44-day averages: a child born on 3 March is exactly
 * one month old on 3 April, which is what a parent means and what every
 * pediatric reference table assumes.
 */
export function monthsBetween(from: CalendarDate, to: CalendarDate): number {
  const a = new Date(toUtcAnchor(from));
  const b = new Date(toUtcAnchor(to));
  let months =
    (b.getUTCFullYear() - a.getUTCFullYear()) * 12 + (b.getUTCMonth() - a.getUTCMonth());
  if (b.getUTCDate() < a.getUTCDate()) months -= 1;
  return months;
}

/** Fractional age in years, used for the overlapping role curves. */
export function yearsBetween(from: CalendarDate, to: CalendarDate): number {
  return daysBetween(from, to) / 365.2425;
}

/** Today as a calendar date, in the caller's local zone. */
export function today(now: Date = new Date()): CalendarDate {
  const y = String(now.getFullYear()).padStart(4, '0');
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}
