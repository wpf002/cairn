/**
 * Voice and household shape. Roadmap section 16b, invariant 9.
 *
 * The same stage produces different guidance depending on which parent is
 * reading. This is a schema dimension and not a content variant, which is why
 * it exists in Phase 0 rather than arriving later as a migration.
 */
export type Voice = 'mother' | 'father' | 'shared';

export const VOICES: readonly Voice[] = ['mother', 'father', 'shared'];

export type HouseholdShape =
  | 'two-parent'
  | 'single-mother'
  | 'single-father'
  | 'blended'
  | 'guardian';

export const HOUSEHOLD_SHAPES: readonly HouseholdShape[] = [
  'two-parent',
  'single-mother',
  'single-father',
  'blended',
  'guardian',
];

export interface Audience {
  readonly voice: Voice;
  readonly householdShape: HouseholdShape;
}

/** How hard a category splits by voice. Section 16b's table. */
export type SplitDepth = 'heavy' | 'moderate' | 'light' | 'mostly-shared' | 'shared';

export const CATEGORY_SPLIT: Readonly<Record<string, SplitDepth>> = {
  SEE: 'heavy',
  HEAR: 'heavy',
  EXPERIENCE: 'moderate',
  RECEIVE: 'light',
  LEARN: 'mostly-shared',
  BELIEVE: 'mostly-shared',
  BECOME: 'shared',
};

/**
 * Whether a household has a second adult in the other parental role.
 *
 * A single mother has no father-voiced adult in the home; a guardian household
 * may have neither. Blended households do have both roles filled, by people
 * whose relationship to the child is not identical, which the content has to
 * handle rather than flatten.
 */
export function rolesPresent(shape: HouseholdShape): { mother: boolean; father: boolean } {
  switch (shape) {
    case 'two-parent':
    case 'blended':
      return { mother: true, father: true };
    case 'single-mother':
      return { mother: true, father: false };
    case 'single-father':
      return { mother: false, father: true };
    case 'guardian':
      // A guardian household's shape is genuinely unknown until the guardian
      // says otherwise. Assume neither role is filled by default and let the
      // solo variants carry the content, rather than assuming a family form.
      return { mother: false, father: false };
  }
}

/**
 * What to do with a unit written in `unitVoice` when `audience` is reading.
 *
 * - `serve`     render the unit as written
 * - `solo`      render its `soloVariant`, because the audience is carrying both
 *               roles and the unit as written assumes a second adult
 * - `paired`    the audience is not the voiced parent, but the unit is one they
 *               need to know their spouse is carrying (section 16b cross-voice)
 * - `withhold`  do not render
 */
export type VoiceDecision = 'serve' | 'solo' | 'paired' | 'withhold';

export interface VoiceResolution {
  readonly decision: VoiceDecision;
  readonly reason: string;
}

/**
 * Resolve one unit against one reader.
 *
 * The hard requirement in section 16b is the fourth rule: a single mother must
 * never receive a dashboard whose SEE section is built around a father who is
 * not present. That is enforced here, once, rather than being remembered at
 * every call site.
 */
export function resolveVoice(
  unitVoice: Voice,
  audience: Audience,
  options: { readonly hasSoloVariant?: boolean; readonly crossVoice?: boolean } = {},
): VoiceResolution {
  const { hasSoloVariant = false, crossVoice = false } = options;

  if (unitVoice === 'shared') {
    return { decision: 'serve', reason: 'Shared units are served to every audience unchanged.' };
  }

  if (unitVoice === audience.voice) {
    return { decision: 'serve', reason: 'Unit voice matches the reader.' };
  }

  // The reader is the other parent. Two questions decide it: is the voiced
  // parent present in this household at all, and is this a unit the reader
  // needs to know the other parent is carrying?
  const present = rolesPresent(audience.householdShape);
  const voicedParentPresent = unitVoice === 'mother' ? present.mother : present.father;

  if (!voicedParentPresent) {
    if (hasSoloVariant) {
      return {
        decision: 'solo',
        reason: `No ${unitVoice} is present in a ${audience.householdShape} household; serving the solo variant.`,
      };
    }
    return {
      decision: 'withhold',
      reason: `No ${unitVoice} is present in a ${audience.householdShape} household and this unit has no solo variant.`,
    };
  }

  if (crossVoice) {
    return {
      decision: 'paired',
      reason: 'Cross-voice unit: the reader needs to know what the other parent is carrying.',
    };
  }

  return { decision: 'withhold', reason: 'Voiced for the other parent and not marked cross-voice.' };
}

/**
 * Guard for invariant 9 and section 16b rule 4.
 *
 * Given a set of already-resolved units, confirm nothing voiced for an absent
 * parent leaked through. Phase 4's gate depends on this and Phase 5's retrieval
 * filter runs it before returning anything to a model.
 */
export function assertNoAbsentParentLeak(
  units: ReadonlyArray<{ readonly id: string; readonly voice: Voice; readonly resolved: VoiceDecision }>,
  audience: Audience,
): void {
  const present = rolesPresent(audience.householdShape);
  const leaks = units.filter((u) => {
    if (u.resolved !== 'serve' && u.resolved !== 'paired') return false;
    if (u.voice === 'shared' || u.voice === audience.voice) return false;
    return u.voice === 'mother' ? !present.mother : !present.father;
  });
  if (leaks.length > 0) {
    throw new Error(
      `Invariant 9 violated for a ${audience.householdShape} household reading as ${audience.voice}: ` +
        `units voiced for an absent parent were served — ${leaks.map((l) => l.id).join(', ')}`,
    );
  }
}
