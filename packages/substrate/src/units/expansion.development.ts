import type { EvidenceRef, Unit } from '../types.js';

/**
 * UNDERSTAND YOUR CHILD, five to twenty-one. Section 8 continued for the
 * Phase 8 expansion — one descriptive unit per stage, CDC/AAP-grounded,
 * ranges not deadlines, no diagnosis.
 */
const CDC: EvidenceRef = {
  org: 'CDC',
  title: 'Child Development — middle childhood and adolescence overviews',
  sourceDate: '2023-06-01',
  evidenceLevel: 'professional-consensus',
};
const AAP: EvidenceRef = {
  org: 'AAP',
  title: 'Bright Futures: Guidelines for Health Supervision of Infants, Children, and Adolescents',
  sourceDate: '2024-01-01',
  evidenceLevel: 'professional-consensus',
};
const NIMH: EvidenceRef = {
  org: 'NIH / NIMH',
  title: 'The Teen Brain: 7 Things to Know',
  sourceDate: '2023-01-01',
  evidenceLevel: 'professional-consensus',
};

const MEDICAL = {
  sourceOrg: 'CDC / AAP',
  sourceDate: '2023-06-01',
  reviewer: 'editorial-gate',
  reviewDate: '2026-08-26',
  medicalReviewer: 'doc-gate',
  medicalReviewDate: '2026-08-26',
} as const;

export const EXPANSION_DEVELOPMENT_UNITS: readonly Unit[] = [
  {
    id: 'child.develop.early-childhood',
    version: 1,
    claimType: 'descriptive',
    category: 'LEARN',
    scope: { kind: 'stage', stages: ['early-childhood'] },
    voice: 'shared',
    title: 'Five to seven: industry begins',
    body:
      'School entry reorganises a child\'s world around competence: reading, writing, rules, and the discovery that skills are compared. Concrete logic is arriving — fairness becomes an obsession because the mind can finally weigh it. Losing is still hard; the regulation machinery is better than at four and years from finished. Children this age typically believe what trusted adults say almost without filter, which is a responsibility more than a convenience.',
    evidence: [CDC, AAP],
    provenance: MEDICAL,
    tags: ['understand-your-child'],
  },
  {
    id: 'child.develop.middle-childhood',
    version: 1,
    claimType: 'descriptive',
    category: 'LEARN',
    scope: { kind: 'stage', stages: ['middle-childhood'] },
    voice: 'shared',
    title: 'Seven to nine: the age of comparison',
    body:
      'Around this band children begin measuring themselves against peers in earnest — at sports, in reading groups, in friendship rank. Competence and identity start fusing: "I am good at" and "I am" blur. Friendships deepen and their ruptures genuinely hurt. Moral reasoning is rule-based and earnest; hypocrisy in adults is now noticed and filed. This is typically the last fully-open window before peer opinion begins competing with parental voice.',
    evidence: [CDC],
    provenance: MEDICAL,
    tags: ['understand-your-child', 'comparison'],
  },
  {
    id: 'child.develop.pre-adolescence',
    version: 1,
    claimType: 'descriptive',
    category: 'LEARN',
    scope: { kind: 'stage', stages: ['pre-adolescence'] },
    voice: 'shared',
    title: 'Nine to eleven: the door begins to swing',
    body:
      'Puberty\'s earliest changes commonly begin in this band — for many girls from around eight to ten, boys typically a year or two later — alongside a cognitive shift toward abstraction. Self-consciousness rises sharply; the imagined audience arrives. Peer belonging starts reorganising choices. Children this age still want parental closeness and are beginning to be embarrassed by it in public, both at once, and both sincerely. Whatever conversations feel too early in this window will feel too late in the next.',
    evidence: [CDC, AAP],
    provenance: MEDICAL,
    tags: ['understand-your-child', 'puberty'],
  },
  {
    id: 'child.develop.early-adolescence',
    version: 1,
    claimType: 'descriptive',
    category: 'LEARN',
    scope: { kind: 'stage', stages: ['early-adolescence'] },
    voice: 'shared',
    title: 'Eleven to thirteen: renovation begins',
    body:
      'The adolescent brain begins a decade-long renovation: the emotional and reward systems mature years ahead of the prefrontal control systems, which is why a bright thirteen-year-old can reason like an adult at dinner and decide like a child at a sleepover. Sleep timing genuinely shifts later. Peer acceptance temporarily rivals almost everything for motivational force. Mood swings are largely hardware, not character — and the teenager finds them as bewildering as you do.',
    evidence: [NIMH, AAP],
    provenance: MEDICAL,
    tags: ['understand-your-child', 'teen-brain'],
  },
  {
    id: 'child.develop.middle-adolescence',
    version: 1,
    claimType: 'descriptive',
    category: 'LEARN',
    scope: { kind: 'stage', stages: ['middle-adolescence'] },
    voice: 'shared',
    title: 'Thirteen to fifteen: identity under construction',
    body:
      'Identity work moves to centre stage: trying on styles, opinions, and allegiances is the developmental task, not instability of character. Risk appetite peaks in the presence of peers specifically — the same teen alone is measurably more cautious. Abstract idealism arrives, and with it the capacity to be genuinely disappointed in institutions, parents included. Arguments are often reasoning practice; the debater usually still holds most of your values underneath the position-testing.',
    evidence: [NIMH, CDC],
    provenance: MEDICAL,
    tags: ['understand-your-child', 'identity'],
  },
  {
    id: 'child.develop.late-adolescence',
    version: 1,
    claimType: 'descriptive',
    category: 'LEARN',
    scope: { kind: 'stage', stages: ['late-adolescence'] },
    voice: 'shared',
    title: 'Fifteen to eighteen: the near-adult',
    body:
      'Reasoning capacity approaches adult levels in calm conditions well before it stabilises under stress, fatigue, or peer presence. Long-term planning becomes genuinely possible and genuinely practised. Romantic relationships carry real weight now. Independence claims accelerate; research consistently finds late adolescents make better decisions when they hold real responsibility with real consequences than when tightly managed. The parent\'s leverage is shifting, measurably, from control to relationship.',
    evidence: [NIMH, AAP],
    provenance: MEDICAL,
    tags: ['understand-your-child'],
  },
  {
    id: 'child.develop.emerging-adult',
    version: 1,
    claimType: 'descriptive',
    category: 'LEARN',
    scope: { kind: 'stage', stages: ['emerging-adult'] },
    voice: 'shared',
    title: 'Eighteen to twenty: legally adult, still finishing',
    body:
      'The prefrontal systems governing planning, impulse control, and risk-weighing continue maturing into the mid-twenties. Emerging adults typically explore identity across work, worldview, and relationships with more freedom and less structure than at any other point in life. Instability of address, plans, and conviction in this window is developmentally typical rather than alarming. Parental influence continues — reorganised around invitation rather than authority.',
    evidence: [NIMH],
    provenance: MEDICAL,
    tags: ['understand-your-child', 'emerging-adulthood'],
  },
  {
    id: 'child.develop.young-adult',
    version: 1,
    claimType: 'descriptive',
    category: 'LEARN',
    scope: { kind: 'stage', stages: ['young-adult'] },
    voice: 'shared',
    title: 'Twenty to twenty-one: consolidation',
    body:
      'The identity exploration of the late teens typically begins consolidating: commitments — vocational, relational, spiritual — start being made rather than sampled. Executive function is near its adult plateau. Financial and residential independence usually arrive unevenly, in stages, and a young adult moving between dependence and independence is following the modern norm, not failing at adulthood. What most predicts a strong parent-child relationship from here is whether the parent has actually changed roles.',
    evidence: [NIMH, CDC],
    provenance: MEDICAL,
    tags: ['understand-your-child'],
  },
];
