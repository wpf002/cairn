import type { Category, Signal, Voice, HouseholdShape } from '@cairn/framework';
import type { StageId } from '@cairn/stages';

/**
 * A substrate unit: the atom of Cairn's content.
 *
 * Roadmap section 16a. Every unit is answerable to Scripture, but not in the
 * same way, which is why claim type is the first field and everything else
 * hangs off it:
 *
 *   normative   — what a parent should do, value, model, say or aim at.
 *                 Requires a full scriptural warrant. No warrant, no ship.
 *   descriptive — what is happening physically or developmentally.
 *                 Requires evidence refs, and carries no scripture at all.
 *   prudential  — practical technique with no moral weight. Requires neither,
 *                 but must not contradict a normative unit.
 *
 * The reason descriptive units carry no scripture is section 16's ban on
 * shallow verse matching. Psalm 139 makes a claim about God's knowledge of a
 * person before birth. It does not make a claim about the auditory cortex.
 * Attaching it to a fetal anatomy card because both involve a womb is exactly
 * the misuse the Tobias role exists to prevent — and parents notice.
 */
export type ClaimType = 'normative' | 'descriptive' | 'prudential';

/** Where the unit applies. Pregnancy is dated in weeks; childhood in stages. */
export type UnitScope =
  | { readonly kind: 'pregnancy'; readonly weeks: readonly number[] }
  | { readonly kind: 'stage'; readonly stages: readonly StageId[] }
  /** Parent-formation content that is not indexed to the child's age. Section 26. */
  | { readonly kind: 'parent'; readonly stages: readonly StageId[] | 'all' };

/** Strength of the evidence behind a descriptive claim. Section 18. */
export type EvidenceLevel =
  | 'clinical-guideline'
  | 'systematic-review'
  | 'cohort-study'
  | 'professional-consensus'
  | 'textbook';

export interface EvidenceRef {
  /** AAP, ACOG, CDC, NIH, or a named journal. Section 18. */
  readonly org: string;
  readonly title: string;
  readonly url?: string;
  /** ISO calendar date the source was published or last revised. */
  readonly sourceDate: string;
  readonly evidenceLevel: EvidenceLevel;
}

/**
 * The scriptural warrant. Required on every normative unit, invariant 8.
 *
 * `misuse` is not optional decoration. Section 16a: every warrant states the
 * common misapplication, because the two most abused verses in Christian
 * parenting are Ephesians 6:4 and Proverbs 22:6 and the app's job is to
 * disarm the abuse rather than repeat it.
 */
export interface Warrant {
  /** At least one. Parsed and canon-checked by the validator, not trusted. */
  readonly passages: readonly string[];
  /** What the passage actually says, in context. */
  readonly exegesis: string;
  /** How it legitimately informs parenting. */
  readonly application: string;
  /** How this passage is commonly misapplied. */
  readonly misuse: string;
  readonly theologicalReviewer: string;
  readonly reviewDate: string;
}

/** Section 19's provenance chain, as a record rather than a diagram. */
export interface Provenance {
  readonly sourceOrg: string;
  readonly sourceDate: string;
  readonly reviewer: string;
  readonly reviewDate: string;
  /** Present when a clinician signed off. Required for medical claims. */
  readonly medicalReviewer?: string;
  readonly medicalReviewDate?: string;
}

/**
 * A unit is immutable and versioned. Invariant 6: corrections create a new
 * version and nothing is edited in place, so a parent who acted on last year's
 * guidance can still see what it said.
 */
export interface Unit {
  readonly id: string;
  readonly version: number;
  /** The `id@version` this replaces, when it replaces one. */
  readonly supersedes?: string;
  readonly claimType: ClaimType;
  readonly category: Category;
  readonly scope: UnitScope;
  readonly voice: Voice;
  /** Household shapes this unit is written for. Absent means all of them. */
  readonly householdShapes?: readonly HouseholdShape[];
  /**
   * Written for a parent carrying both roles. Section 16b rule 2 requires this
   * to be its own unit rather than a string substitution.
   */
  readonly soloVariantOf?: string;
  /** Section 16b cross-voice pairing: the other parent's counterpart. */
  readonly pairedWith?: string;
  readonly title: string;
  /**
   * One sentence that can carry a card on its own.
   *
   * TODAY and the dashboards show title + lede + one action; `body` is the
   * depth behind a tap. Before this existed, every card rendered the full
   * body — a median of 82 words — which is what made the app read as a wall
   * of text rather than something a parent finishes at 6am.
   */
  readonly lede?: string;
  readonly body: string;
  /**
   * Section 2's fourth question, "what can I actually do today". A unit with a
   * claim and no action is an article, and the roadmap's single screen test
   * rejects articles.
   */
  readonly actions?: readonly string[];
  readonly signal?: Signal;
  readonly warrant?: Warrant;
  readonly evidence?: readonly EvidenceRef[];
  readonly provenance: Provenance;
  readonly tags?: readonly string[];
}

export function unitKey(unit: Unit): string {
  return `${unit.id}@${unit.version}`;
}

/** Authoring helper: keeps literal types narrow and gives editors completion. */
export function defineUnit<T extends Unit>(unit: T): T {
  return unit;
}
