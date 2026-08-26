/**
 * Editorial review state. Roadmap sections 17, 19 and invariant 1.
 *
 * Tobias is a theological editorial system, not a scripture search engine.
 * That means a queue, a ruleset and sign-off state on units — modelled here so
 * the CI gate has something to check rather than a convention to hope for.
 */
export type ReviewStatus = 'draft' | 'in-review' | 'changes-requested' | 'approved';

export type ReviewGate = 'theological' | 'medical' | 'editorial';

export interface Signoff {
  readonly gate: ReviewGate;
  readonly status: ReviewStatus;
  /** Named human. Section 19 requires a reviewer, not an organisation. */
  readonly reviewer: string;
  /** ISO calendar date the review was completed. */
  readonly reviewDate: string;
  readonly notes?: string;
}

export const REVIEW_VALIDITY_YEARS = 3;

/** A review that is older than the validity window no longer counts as current. */
export function isCurrent(signoff: Signoff, on: string): boolean {
  const reviewed = Date.parse(`${signoff.reviewDate}T12:00:00Z`);
  const now = Date.parse(`${on}T12:00:00Z`);
  if (Number.isNaN(reviewed) || Number.isNaN(now)) return false;
  const years = (now - reviewed) / (365.2425 * 86_400_000);
  return years <= REVIEW_VALIDITY_YEARS && years >= 0;
}

export function isApproved(signoffs: readonly Signoff[], gate: ReviewGate, on: string): boolean {
  return signoffs.some((s) => s.gate === gate && s.status === 'approved' && isCurrent(s, on));
}
