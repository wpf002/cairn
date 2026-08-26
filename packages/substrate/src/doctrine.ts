/**
 * The doctrinal ruleset. Roadmap sections 16a, 16b and 17.
 *
 * These are lint rules over unit prose, not a theology engine. They catch the
 * specific, recurring failures that would cost the product the credibility the
 * whole thing runs on — and they fail the build, because section 16a says CI
 * fails on any unit flagged by the ruleset.
 *
 * Every rule states what it is protecting and why, because a rule a future
 * editor cannot justify is a rule they will delete.
 */
export interface DoctrinalRule {
  readonly id: string;
  readonly summary: string;
  /** What this rule protects. Shown in the CI failure. */
  readonly rationale: string;
  readonly pattern: RegExp;
  /** Text that, if also present, means the unit is naming the error to refute it. */
  readonly exemptIfPresent?: RegExp;
  readonly severity: 'error' | 'warning';
}

export const DOCTRINAL_RULES: readonly DoctrinalRule[] = [
  {
    id: 'doctrine.proverbs-22-6-as-guarantee',
    summary: 'Proverbs 22:6 presented as a guaranteed outcome',
    rationale:
      'Section 16a names Proverbs 22:6 as one of the two most abused verses in Christian parenting. Read as a promise, it tells a grieving parent of a prodigal that they failed. Proverbs are wisdom sayings about how the world generally works, not covenant guarantees.',
    pattern:
      /\b(guarantee[sd]?|promise[sd]?|will (?:always|never|certainly)|is assured)\b[^.]{0,120}\b(depart|return to (?:the )?faith|come back to (?:god|christ|the lord))\b/i,
    exemptIfPresent: /\b(not a (?:guarantee|promise)|misread|misuse|misappl|common misapplication)\b/i,
    severity: 'error',
  },
  {
    id: 'doctrine.rod-as-corporal-punishment-prescription',
    summary: 'A "spare the rod" text used to prescribe hitting a child',
    rationale:
      'Section 16 requires that authority be exercised for the child\'s formation rather than the parent\'s emotional convenience. Cairn does not issue physical-discipline prescriptions from proverbial shepherd imagery; doing so puts the app on the wrong side of both the text and every safeguarding standard it is subject to.',
    pattern: /\b(spank|smack|hit|strike|paddle|whip)\w*\b[^.]{0,80}\b(child|children|son|daughter|toddler|kid)\b/i,
    exemptIfPresent: /\b(do not|never|instead of|rather than|misuse|misappl|not a (?:mandate|prescription))\b/i,
    severity: 'error',
  },
  {
    id: 'doctrine.prosperity-outcome',
    summary: 'Obedience or faithfulness framed as buying a material or behavioural outcome',
    rationale:
      'Section 17 sets the baseline at historic orthodox Christianity. Transactional framing — do this and God will deliver that — is neither orthodox nor kind to a family whose outcome did not arrive.',
    pattern:
      /\b(if you (?:just )?(?:pray|obey|tithe|have faith|trust)\b[^.]{0,100}\bgod will\b|god will (?:bless|reward|give) you with\b)/i,
    exemptIfPresent: /\b(misuse|misappl|not how|does not work|prosperity)\b/i,
    severity: 'error',
  },
  {
    id: 'doctrine.single-parent-deficiency',
    summary: 'Language implying a single-parent household is a failed or deficient household',
    rationale:
      'Section 16b rule 4: no unit anywhere implies a single-parent household is a failed household, and the Tobias gate reviews for this explicitly. This is the rule most likely to be violated by accident, in a subordinate clause.',
    pattern:
      /\b(broken home|incomplete family|missing (?:a )?(?:father|mother) figure means|without a (?:father|mother),? (?:a )?child (?:will|cannot|can't)|real family (?:needs|requires))\b/i,
    severity: 'error',
  },
  {
    id: 'doctrine.diagnosis',
    summary: 'Diagnostic language in a content unit',
    rationale:
      'Invariant 4 and section 18: the product does not diagnose pregnancy complications, developmental disorders, mental health conditions or pediatric illness. Escalation is the only path, and it lives in @cairn/escalation.',
    pattern:
      /\b(your child (?:has|is)\s+(?:autistic|adhd|autism|depressed|anxious disorder)|this (?:means|indicates) (?:your child |they )?(?:has|have)\b)/i,
    exemptIfPresent: /\b(only a (?:clinician|doctor|pediatrician|provider) can|not a diagnosis|speak (?:to|with) your)\b/i,
    severity: 'error',
  },
  {
    id: 'doctrine.denominational-partisanship',
    summary: 'A disputed question stated as settled without acknowledging other traditions',
    rationale:
      'Section 17: where Christian traditions legitimately differ, the app states that Christians hold several major interpretations and explains the major positions fairly.',
    pattern:
      /\b(the only (?:biblical|christian) (?:view|position|way) (?:on|about)\b|any (?:real|true) christian (?:believes|knows|would))\b/i,
    exemptIfPresent: /\bchristians hold\b/i,
    severity: 'error',
  },
  {
    id: 'doctrine.guilt-lever',
    summary: 'Guilt or shame used as the motivation for a parenting action',
    rationale:
      'Section 25 and the competitive read on Glorify: the category rewards gentle habit design and punishes guilt. A parent already carries enough. Motivation comes from what the child needs, not from what the parent has failed to do.',
    pattern:
      /\b(if you (?:really )?loved (?:your|them)|a good (?:christian )?(?:parent|mother|father) (?:would|never)|you (?:should|ought to) feel)\b/i,
    exemptIfPresent: /\b(misuse|do not|never say|avoid saying)\b/i,
    severity: 'error',
  },
  {
    id: 'doctrine.absolute-developmental-deadline',
    summary: 'A developmental milestone stated as a hard deadline',
    rationale:
      'Section 6: development does not occur cleanly on birthdays and guidance uses ranges, not rigid deadlines. Hard deadlines manufacture anxiety and are not what the sources say.',
    pattern: /\bby (?:age )?\d+ (?:months?|years?),? (?:your child|they|he|she) (?:must|should already|has to)\b/i,
    exemptIfPresent: /\b(most|typically|generally|range|around|about)\b/i,
    severity: 'warning',
  },
];

export interface DoctrinalFinding {
  readonly ruleId: string;
  readonly severity: 'error' | 'warning';
  readonly summary: string;
  readonly rationale: string;
  readonly excerpt: string;
}

/** Run the ruleset over one block of prose. */
export function checkDoctrine(text: string): DoctrinalFinding[] {
  const findings: DoctrinalFinding[] = [];
  for (const rule of DOCTRINAL_RULES) {
    const match = rule.pattern.exec(text);
    if (!match) continue;
    if (rule.exemptIfPresent?.test(text)) continue;
    findings.push({
      ruleId: rule.id,
      severity: rule.severity,
      summary: rule.summary,
      rationale: rule.rationale,
      excerpt: match[0].slice(0, 160),
    });
  }
  return findings;
}
