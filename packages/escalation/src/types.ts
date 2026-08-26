/**
 * Deterministic medical and safety escalation. Roadmap invariant 2.
 *
 * These are rules, not model output. They are evaluated before and independent
 * of any model call, and the model may add escalation but can never remove it.
 * That ordering is the whole point: a language model that is having a bad day
 * must not be able to suppress "call your obstetric provider now".
 */

/** How fast the family needs to act. Ordered; higher is more urgent. */
export type Urgency = 'emergency' | 'urgent' | 'same-day' | 'routine' | 'informational';

export const URGENCY_ORDER: Readonly<Record<Urgency, number>> = {
  emergency: 4,
  urgent: 3,
  'same-day': 2,
  routine: 1,
  informational: 0,
};

/** Who the family should contact. Deliberately concrete. */
export type Referral =
  | 'emergency-services'
  | 'obstetric-provider'
  | 'pediatrician'
  | 'primary-care'
  | 'mental-health-crisis-line'
  | 'child-protective-services'
  | 'poison-control'
  | 'lactation-consultant';

export type Domain = 'pregnancy' | 'postpartum' | 'infant' | 'child' | 'adolescent' | 'parent' | 'any';

export interface EscalationRule {
  readonly id: string;
  readonly domain: Domain;
  readonly urgency: Urgency;
  readonly referral: Referral;
  /** What the parent is told, verbatim. Written to be read at 3am. */
  readonly message: string;
  /** The authority this rule rests on. Section 18: no rule without a source. */
  readonly source: { readonly org: string; readonly title: string; readonly sourceDate: string };
  /** Free-text symptom patterns that fire this rule. */
  readonly patterns: readonly RegExp[];
  /** Structured predicate, for rules that depend on age or gestation rather than words. */
  readonly predicate?: (ctx: EscalationContext) => boolean;
  /** Longer explanation, shown under the message when the parent taps through. */
  readonly detail?: string;
}

/** Everything the rule engine is allowed to look at. */
export interface EscalationContext {
  /** Free text the parent typed. Section 25's Help Me Parent This input. */
  readonly text?: string;
  /** Completed weeks of gestation, when a pregnancy is active. */
  readonly gestationalWeek?: number;
  /** Days since birth, when the mother is postpartum. */
  readonly postpartumDays?: number;
  /** The child's age in whole months, when the question is about a child. */
  readonly childAgeMonths?: number;
  /** Structured symptom flags a tracker may set without the parent typing anything. */
  readonly flags?: readonly string[];
  /** Measured temperature in Celsius, from a tracker. */
  readonly temperatureCelsius?: number;
}

export interface Escalation {
  readonly ruleId: string;
  readonly urgency: Urgency;
  readonly referral: Referral;
  readonly message: string;
  readonly detail?: string;
  readonly source: EscalationRule['source'];
  /** Why this fired, for auditability and for the red-team suite in Phase 5. */
  readonly matched: string;
}
