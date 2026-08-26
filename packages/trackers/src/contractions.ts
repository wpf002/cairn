/**
 * Contraction timer with 5-1-1 detection.
 *
 * The rule providers actually give: contractions 5 minutes apart, lasting
 * 1 minute, sustained for 1 hour — call. Detected deterministically over the
 * recorded intervals; the message and referral belong to the caller's
 * escalation surface, not to a timer.
 */
export interface Contraction {
  readonly startedAt: number;
  readonly endedAt: number | null;
}

export interface ContractionLog {
  readonly contractions: readonly Contraction[];
}

export const EMPTY_CONTRACTION_LOG: ContractionLog = { contractions: [] };

export function startContraction(log: ContractionLog, at: number): ContractionLog {
  const last = log.contractions.at(-1);
  if (last && last.endedAt === null) return log; // one at a time
  return { contractions: [...log.contractions, { startedAt: at, endedAt: null }] };
}

export function endContraction(log: ContractionLog, at: number): ContractionLog {
  const last = log.contractions.at(-1);
  if (!last || last.endedAt !== null) return log;
  const contractions = [...log.contractions.slice(0, -1), { ...last, endedAt: at }];
  return { contractions };
}

export interface ContractionStats {
  /** Seconds, averaged over the window. */
  readonly averageDurationSec: number | null;
  /** Minutes between starts, averaged over the window. */
  readonly averageIntervalMin: number | null;
  readonly countInWindow: number;
}

export function contractionStats(log: ContractionLog, windowMs: number, now: number): ContractionStats {
  const inWindow = log.contractions.filter((c) => c.startedAt >= now - windowMs);
  const durations = inWindow
    .filter((c): c is Contraction & { endedAt: number } => c.endedAt !== null)
    .map((c) => (c.endedAt - c.startedAt) / 1000);
  const intervals: number[] = [];
  for (let i = 1; i < inWindow.length; i += 1) {
    intervals.push(((inWindow[i] as Contraction).startedAt - (inWindow[i - 1] as Contraction).startedAt) / 60_000);
  }
  return {
    averageDurationSec: durations.length ? durations.reduce((a, b) => a + b, 0) / durations.length : null,
    averageIntervalMin: intervals.length ? intervals.reduce((a, b) => a + b, 0) / intervals.length : null,
    countInWindow: inWindow.length,
  };
}

/**
 * 5-1-1: intervals <= 5 min, durations >= 60 sec, pattern held >= 1 hour.
 * Requires at least 6 contractions in the trailing hour so a pair of twinges
 * cannot trip it.
 */
export function fiveOneOne(log: ContractionLog, now: number): boolean {
  const hour = 60 * 60 * 1000;
  const inHour = log.contractions.filter((c) => c.startedAt >= now - hour && c.endedAt !== null);
  if (inHour.length < 6) return false;
  const first = inHour[0] as Contraction;
  if (now - first.startedAt < hour * 0.9) return false;
  for (let i = 1; i < inHour.length; i += 1) {
    const gap = ((inHour[i] as Contraction).startedAt - (inHour[i - 1] as Contraction).startedAt) / 60_000;
    if (gap > 6) return false; // small tolerance over the nominal 5
  }
  const avgDuration =
    inHour.reduce((a, c) => a + ((c.endedAt as number) - c.startedAt), 0) / inHour.length / 1000;
  return avgDuration >= 50;
}
