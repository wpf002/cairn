/**
 * Free / premium gates. Roadmap section 30, with one deliberate amendment
 * from the competitive analysis, recorded here because it departs from the
 * roadmap's printed free/premium split:
 *
 *   MULTIPLE CHILD PROFILES ARE FREE. The roadmap listed them as premium;
 *   the competitive research showed Kinedu's 3.2-star Android rating traces
 *   directly to paywalling what families already had, and a gate on family
 *   size punishes precisely the largest, most committed families. Cairn
 *   gates depth, not children.
 *
 * No advertising exists at any tier (invariant 10) — there is no field for
 * it in this model on purpose.
 */
export type Tier = 'free' | 'premium';

export type Feature =
  | 'pregnancy-weekly-cards'
  | 'trackers'
  | 'child-dashboards'
  | 'multiple-children' // free, by decision above
  | 'today-screen'
  | 'roadmap'
  | 'daily-encouragement'
  | 'help-me-parent-this' // free tier: limited monthly uses
  | 'help-me-parent-this-unlimited'
  | 'spouse-sharing' // the second seat: two voices on one family
  | 'cross-voice-pairing' // seeing what your spouse is carrying
  | 'journey-basic' // milestones + prayers
  | 'journey-media' // encrypted photos/video
  | 'ceremony-flows'
  | 'letters-from-circle' // grandparent/mentor contributions
  | 'story-of-your-childhood'
  | 'family-devotionals'
  | 'conversation-guides'
  | 'advanced-adolescent-guidance'
  | 'custom-prayer-plans'
  | 'export'; // export is FREE: a family's memories are never ransomed

const PREMIUM_FEATURES: ReadonlySet<Feature> = new Set<Feature>([
  'help-me-parent-this-unlimited',
  'spouse-sharing',
  'cross-voice-pairing',
  'journey-media',
  'ceremony-flows',
  'letters-from-circle',
  'story-of-your-childhood',
  'family-devotionals',
  'conversation-guides',
  'advanced-adolescent-guidance',
  'custom-prayer-plans',
]);

/** Free-tier allowance for the AI assistant, per calendar month. */
export const FREE_HELP_QUERIES_PER_MONTH = 3;

export function tierFor(feature: Feature): Tier {
  return PREMIUM_FEATURES.has(feature) ? 'premium' : 'free';
}

export interface EntitlementState {
  readonly tier: Tier;
  /** ISO date premium expires; null for free or lifetime. */
  readonly expiresOn: string | null;
  readonly helpQueriesUsedThisMonth: number;
}

export function canUse(state: EntitlementState, feature: Feature): boolean {
  if (tierFor(feature) === 'free') return true;
  return state.tier === 'premium';
}

/** The one metered feature. Premium is unlimited; free gets the monthly allowance. */
export function canAskHelp(state: EntitlementState): { allowed: boolean; remaining: number | 'unlimited' } {
  if (state.tier === 'premium') return { allowed: true, remaining: 'unlimited' };
  const remaining = Math.max(0, FREE_HELP_QUERIES_PER_MONTH - state.helpQueriesUsedThisMonth);
  return { allowed: remaining > 0, remaining };
}

/**
 * Grace on expiry: encrypted family data never becomes hostage. On lapse,
 * premium features close but reading, journal-basic, and export stay open
 * forever. This function says what lapse means; nothing anywhere deletes.
 */
export function onLapse(state: EntitlementState): EntitlementState {
  return { ...state, tier: 'free', expiresOn: null };
}
