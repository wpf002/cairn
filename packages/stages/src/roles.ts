import { yearsBetween, type CalendarDate, today } from './dates.js';

/**
 * The parent's changing role. Roadmap section 12.
 *
 *   CARETAKER -> COACH -> CONSULTANT -> COUNSELOR
 *
 * Section 12 is explicit that these are overlapping curves and not hard
 * transitions: a fifteen-year-old still needs care, a four-year-old can already
 * be coached. So the model is a weighted mix at every age rather than a lookup,
 * and every role keeps a residual floor so it never reads as switched off.
 */
export type RoleBand = 'caretaker' | 'coach' | 'consultant' | 'counselor';

export const ROLE_BANDS: readonly RoleBand[] = ['caretaker', 'coach', 'consultant', 'counselor'];

export interface RoleDefinition {
  readonly id: RoleBand;
  readonly label: string;
  /** The band as printed in section 12, for display. */
  readonly nominalRange: string;
  /** One-line statement of what the parent is doing in this band. */
  readonly summary: string;
  /** Section 12's "in practice" list. */
  readonly practices: readonly string[];
}

export const ROLES: Readonly<Record<RoleBand, RoleDefinition>> = {
  caretaker: {
    id: 'caretaker',
    label: 'Caretaker',
    nominalRange: '~0–5',
    summary: 'Protect, nurture, attach, regulate, provide, and establish safety and boundaries.',
    practices: [
      'Feed',
      'Protect',
      'Comfort',
      'Regulate',
      'Establish secure attachment',
      'Establish routines',
      'Provide boundaries',
      'Teach basic behavior',
      'Maintain safety',
    ],
  },
  coach: {
    id: 'coach',
    label: 'Coach',
    nominalRange: '~6–12',
    summary: 'Teach, model, correct, practice, encourage, and help the child learn from failure.',
    practices: [
      'Demonstrate',
      'Practice',
      'Correct',
      'Encourage',
      'Let the child try',
      'Allow manageable failure',
      'Debrief mistakes',
      'Build skills',
      'Give responsibilities',
      'Reinforce character',
    ],
  },
  consultant: {
    id: 'consultant',
    label: 'Consultant',
    nominalRange: '~13–18',
    summary: 'Advise, question, mentor, release responsibility, and prepare for adulthood.',
    practices: [
      'Ask questions',
      'Provide perspective',
      'Discuss consequences',
      'Offer advice',
      'Let the teenager make appropriate choices',
      'Allow real-world consequences when safe',
      'Support decision-making',
      'Respect increasing independence',
      'Maintain moral and household boundaries',
      'Prepare the child for independent adulthood',
    ],
  },
  counselor: {
    id: 'counselor',
    label: 'Counselor',
    nominalRange: '~19–21',
    summary:
      'Bless, affirm, stay available, speak when asked, and recognize adulthood publicly.',
    practices: [
      'Wait to be invited',
      'Give counsel without conditions attached',
      'Stop managing consequences entirely',
      'Honor their household, their money, their calendar, their decisions',
      'Keep the door open without keeping a leash on it',
      'Mark the transition out loud rather than letting it happen by drift',
    ],
  },
};

/** Weight of every role at a given age. Always sums to 1. */
export type RoleMix = Readonly<Record<RoleBand, number>>;

interface Curve {
  /** Age in years where the role starts rising from its floor. */
  riseStart: number;
  /** Age where it reaches full weight. */
  plateauStart: number;
  /** Age where it starts falling. `null` means it never falls. */
  plateauEnd: number | null;
  /** Age where it reaches its floor again. */
  fallEnd: number;
  /** Residual weight the role never drops below. Section 12: nothing switches off. */
  floor: number;
}

const CURVES: Readonly<Record<RoleBand, Curve>> = {
  caretaker: { riseStart: -1, plateauStart: 0, plateauEnd: 5, fallEnd: 13, floor: 0.1 },
  coach: { riseStart: 3, plateauStart: 6, plateauEnd: 12, fallEnd: 18, floor: 0.07 },
  consultant: { riseStart: 10, plateauStart: 13, plateauEnd: 18, fallEnd: 21, floor: 0.07 },
  counselor: { riseStart: 16, plateauStart: 19, plateauEnd: null, fallEnd: Infinity, floor: 0.02 },
};

function membership(years: number, c: Curve): number {
  let raw: number;
  if (years <= c.riseStart) raw = 0;
  else if (years < c.plateauStart) raw = (years - c.riseStart) / (c.plateauStart - c.riseStart);
  else if (c.plateauEnd === null || years <= c.plateauEnd) raw = 1;
  else if (years >= c.fallEnd) raw = 0;
  else raw = 1 - (years - c.plateauEnd) / (c.fallEnd - c.plateauEnd);
  return c.floor + (1 - c.floor) * Math.min(1, Math.max(0, raw));
}

/**
 * The blend of parental roles appropriate to a given age in years.
 *
 * Normalized so a dashboard can render it directly as proportions of a bar
 * (section 22's timeline) without re-deriving anything.
 */
export function roleMixForYears(years: number): RoleMix {
  if (!Number.isFinite(years)) throw new TypeError('years must be finite');
  const raw = ROLE_BANDS.map((id) => membership(years, CURVES[id]));
  const total = raw.reduce((a, b) => a + b, 0);
  const out = {} as Record<RoleBand, number>;
  ROLE_BANDS.forEach((id, i) => {
    out[id] = (raw[i] as number) / total;
  });
  return out;
}

export function roleMixForBirthdate(birthdate: CalendarDate, on: CalendarDate = today()): RoleMix {
  return roleMixForYears(yearsBetween(birthdate, on));
}

/** The single heaviest role at this age. */
export function primaryRole(years: number): RoleBand {
  const mix = roleMixForYears(years);
  return ROLE_BANDS.reduce((best, id) => (mix[id] > mix[best] ? id : best), ROLE_BANDS[0] as RoleBand);
}

export interface RolePosition {
  readonly primary: RoleBand;
  /** The next role up, when it is already carrying meaningful weight. */
  readonly emerging: RoleBand | null;
  readonly mix: RoleMix;
  /**
   * Dashboard string, e.g. `COACH -> EARLY CONSULTANT`.
   * Section 21 renders this under the child's stage.
   */
  readonly label: string;
}

/**
 * Where a parent sits on the curve, including the role they are moving into.
 *
 * `emerging` fires when the next role up carries at least 35% of the primary
 * role's weight — early enough that an eleven-year-old's dashboard already
 * reads COACH -> EARLY CONSULTANT, as section 21's example shows, without
 * every age reading as a transition.
 */
export function rolePosition(years: number, emergingRatio = 0.35): RolePosition {
  const mix = roleMixForYears(years);
  const primary = primaryRole(years);
  const primaryIndex = ROLE_BANDS.indexOf(primary);
  const next = ROLE_BANDS[primaryIndex + 1] ?? null;
  const emerging = next && mix[next] >= mix[primary] * emergingRatio ? next : null;
  const label = emerging
    ? `${ROLES[primary].label.toUpperCase()} → EARLY ${ROLES[emerging].label.toUpperCase()}`
    : ROLES[primary].label.toUpperCase();
  return { primary, emerging, mix, label };
}

/**
 * Parental control and child responsibility, 0 to 1, as section 12's core
 * principle: control declines while responsibility rises. Section 22 draws
 * these as the two bars under the timeline.
 */
export function controlAndResponsibility(years: number): {
  readonly parentalControl: number;
  readonly childResponsibility: number;
} {
  const t = Math.min(1, Math.max(0, years / 21));
  // A logistic centred near twelve: control holds through early childhood, then
  // gives way through adolescence rather than declining linearly from birth.
  const control = 1 / (1 + Math.exp((years - 12) / 3));
  const responsibility = 1 - control;
  return {
    parentalControl: Math.min(1, Math.max(0, control * (1 - 0.05 * t))),
    childResponsibility: Math.min(1, Math.max(0, responsibility)),
  };
}
