/**
 * Kick counter. Section 28 table stakes; section 18 escalation-aware.
 *
 * The clinical convention: count distinct movements and note how long ten
 * take. The tracker never diagnoses — what it does is surface the mother's
 * own baseline and hand a deterministic flag to @cairn/escalation when a
 * session is markedly slower than her established pattern.
 */
export interface KickSession {
  readonly id: string;
  /** Epoch ms; injected, never read from a clock inside this module. */
  readonly startedAt: number;
  readonly kicks: readonly number[]; // epoch ms of each recorded movement
  readonly endedAt: number | null;
  readonly targetCount: number;
}

export function startKickSession(id: string, startedAt: number, targetCount = 10): KickSession {
  return { id, startedAt, kicks: [], endedAt: null, targetCount };
}

export function recordKick(session: KickSession, at: number): KickSession {
  if (session.endedAt !== null) return session;
  const kicks = [...session.kicks, at];
  const endedAt = kicks.length >= session.targetCount ? at : null;
  return { ...session, kicks, endedAt };
}

export function endKickSession(session: KickSession, at: number): KickSession {
  return session.endedAt === null ? { ...session, endedAt: at } : session;
}

/** Minutes the session took to reach target (or to end). Null when unfinished. */
export function sessionMinutes(session: KickSession): number | null {
  if (session.endedAt === null) return null;
  return (session.endedAt - session.startedAt) / 60_000;
}

export interface KickBaseline {
  /** Median minutes-to-ten across completed sessions. */
  readonly medianMinutes: number;
  readonly sessions: number;
}

export function kickBaseline(history: readonly KickSession[]): KickBaseline | null {
  const done = history
    .map(sessionMinutes)
    .filter((m): m is number => m !== null)
    .sort((a, b) => a - b);
  if (done.length < 3) return null;
  const mid = Math.floor(done.length / 2);
  const median = done.length % 2 === 1 ? (done[mid] as number) : ((done[mid - 1] as number) + (done[mid] as number)) / 2;
  return { medianMinutes: median, sessions: done.length };
}

/**
 * Whether this session should raise the reduced-movement escalation flag.
 *
 * Two triggers, both deterministic: a session that ran 2 hours without
 * reaching ten movements (the standard clinical threshold), or a completed
 * session more than 3x the mother's own median. The flag id matches the rule
 * in @cairn/escalation, which owns the message and the referral.
 */
export const REDUCED_MOVEMENT_FLAG = 'maternal.reduced-fetal-movement';

export function movementConcern(
  session: KickSession,
  baseline: KickBaseline | null,
  now: number,
): { flag: typeof REDUCED_MOVEMENT_FLAG } | null {
  const elapsedMinutes = ((session.endedAt ?? now) - session.startedAt) / 60_000;
  if (session.kicks.length < session.targetCount && elapsedMinutes >= 120) {
    return { flag: REDUCED_MOVEMENT_FLAG };
  }
  const minutes = sessionMinutes(session);
  if (minutes !== null && baseline !== null && minutes > baseline.medianMinutes * 3) {
    return { flag: REDUCED_MOVEMENT_FLAG };
  }
  return null;
}
