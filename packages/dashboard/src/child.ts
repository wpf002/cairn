import {
  CATEGORIES,
  CATEGORY_DEFINITIONS,
  closingWindows,
  rankItems,
  WORKSHEET_ITEMS,
  type Audience,
  type Category,
  type ClosingWindow,
  type FrameworkItem,
} from '@cairn/framework';
import {
  isTransitioning,
  monthsBetween,
  nextStage,
  rolePosition,
  stageForMonths,
  yearsBetween,
  type CalendarDate,
  type Stage,
} from '@cairn/stages';
import { groupByCategory, selectUnits, type ResolvedUnit, type Unit } from '@cairn/substrate';

/**
 * The per-child age dashboard. Section 21.
 *
 * Ten sections: DEVELOPMENT, the seven category sections (voice-resolved),
 * WATCH FOR, THIS MONTH. Emphasis orders the framework items; opportunity
 * drives THIS MONTH — opportunity windows close, and that is what deserves
 * the parent's attention this month rather than someday.
 */
export interface ChildDashboard {
  readonly childId: string;
  readonly childName: string;
  readonly ageYears: number;
  readonly ageMonths: number;
  readonly stage: Stage | null;
  /** "TRANSITIONING INTO PRE-ADOLESCENCE" when near the boundary. */
  readonly transitionBanner: string | null;
  /** "COACH → EARLY CONSULTANT" */
  readonly roleLabel: string;
  /** Descriptive units — Understand Your Child. */
  readonly development: readonly ResolvedUnit[];
  /** The seven categories, voice-resolved, dashboard order. */
  readonly categories: ReadonlyArray<{
    readonly category: Category;
    readonly heading: string;
    readonly units: readonly ResolvedUnit[];
    readonly frameworkItems: readonly FrameworkItem[];
  }>;
  /** Escalation-adjacent observations worth attention — routed to rules, never diagnosis. */
  readonly watchFor: readonly string[];
  /** 3–5 practical actions, opportunity-driven. */
  readonly thisMonth: readonly string[];
  readonly closingWindows: readonly ClosingWindow[];
}

export interface ChildInput {
  readonly id: string;
  readonly name: string;
  readonly birthdate: CalendarDate;
}

const WATCH_FOR_BY_STAGE: Readonly<Record<string, readonly string[]>> = {
  newborn: [
    'Fever of 100.4°F (38°C) or higher — emergency at this age, call the pediatrician now.',
    'Fewer wet diapers, unusual sleepiness, or refusal to feed.',
    'Your own mood: sadness or disconnection that is not lifting is common and treatable — tell your provider.',
  ],
  'early-infancy': [
    'Not responding to loud sounds, or no social smile by around 3 months — worth raising at the next visit.',
    'Stiffness or marked floppiness in the body.',
  ],
  'later-infancy': [
    'No babbling, no response to their name by around 9 months, or loss of any skill they had — losing skills is always worth a call.',
  ],
  'early-toddler': [
    'No single words by 16 months, or loss of words they had.',
    'No pointing or showing things to you by 15 months.',
  ],
  toddler: [
    'Loss of any language or social skill — always a call, never wait-and-see.',
    'Tantrums that regularly injure the child or others, or last most of an hour.',
  ],
  preschool: [
    'Speech mostly unintelligible to strangers by 4.',
    'Play that never includes other children by 4–5.',
    'Talk of body secrets with an adult or older child — stay calm, ask open questions, and take it seriously.',
  ],
};

export function buildChildDashboard(
  child: ChildInput,
  audience: Audience,
  units: readonly Unit[],
  on: CalendarDate,
): ChildDashboard {
  const months = monthsBetween(child.birthdate, on);
  const years = yearsBetween(child.birthdate, on);
  const stage = stageForMonths(months);
  const role = rolePosition(years);

  const resolved = stage
    ? selectUnits(units, { audience, stage: stage.id, includeCrossVoice: true })
    : [];

  const development = resolved.filter((r) => r.unit.claimType === 'descriptive');
  const normative = resolved.filter((r) => r.unit.claimType !== 'descriptive');
  const normativeGrouped = groupByCategory(normative);

  const ranked = rankItems(WORKSHEET_ITEMS, years);
  const windows = closingWindows(WORKSHEET_ITEMS, years, 3);

  // THIS MONTH: actions from opportunity-signalled units first, then emphasis.
  const withSignal = normative
    .filter((r) => r.unit.actions?.length)
    .sort((a, b) => {
      const score = (u: Unit) =>
        (u.signal?.opportunity ? 2 : 0) + (u.signal?.emphasis ? 1 : 0);
      return score(b.unit) - score(a.unit);
    });
  const thisMonth: string[] = [];
  for (const r of withSignal) {
    for (const action of r.unit.actions ?? []) {
      if (thisMonth.length < 5) thisMonth.push(action);
    }
    if (thisMonth.length >= 5) break;
  }

  const transition =
    stage && isTransitioning(months)
      ? `TRANSITIONING INTO ${(nextStage(stage.id)?.label ?? '').toUpperCase()}`
      : null;

  return {
    childId: child.id,
    childName: child.name,
    ageYears: Math.floor(years),
    ageMonths: months,
    stage,
    transitionBanner: transition,
    roleLabel: role.label,
    development,
    categories: CATEGORIES.map((category) => ({
      category,
      heading: CATEGORY_DEFINITIONS[category].dashboardHeading,
      units: normativeGrouped.get(category) ?? [],
      frameworkItems: ranked.filter((i) => i.category === category),
    })),
    watchFor: stage ? (WATCH_FOR_BY_STAGE[stage.id] ?? []) : [],
    thisMonth,
    closingWindows: windows,
  };
}
