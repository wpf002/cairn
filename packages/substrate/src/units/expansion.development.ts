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
      'School entry reorganises a child around competence. Reading, writing, rules, and the discovery that skills get compared. Concrete logic is arriving, so fairness becomes an obsession, because the mind can finally weigh it. Losing is still hard. Regulation is better than at four and years from finished. Children this age believe trusted adults almost without filter, which is a responsibility more than a convenience.',
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
      'Children begin measuring themselves against peers in earnest. Sports, reading groups, friendship rank. Competence and identity start fusing, so "I am good at" and "I am" blur together. Friendships deepen and their ruptures genuinely hurt. Moral reasoning is rule-based and earnest. Hypocrisy in adults gets noticed and filed. This is typically the last fully open window before peer opinion competes with a parent\'s voice.',
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
    title: 'Nine to eleven years',
    lede: 'What feels too early in this window will feel too late in the next.',
    body:
      'Puberty\'s earliest changes commonly begin now. For many girls from around eight to ten, boys typically a year or two later. A cognitive shift toward abstraction arrives alongside it. Self-consciousness rises sharply and the imagined audience appears. Peer belonging starts reorganising choices. Children this age want parental closeness and are embarrassed by it in public, both at once, both sincerely.',
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
      'The adolescent brain begins a decade-long renovation. Emotional and reward systems mature years ahead of the prefrontal control systems. A bright thirteen-year-old can reason like an adult at dinner and decide like a child at a sleepover. Sleep timing genuinely shifts later. Peer acceptance temporarily rivals almost everything for motivational force. Mood swings are largely hardware rather than character, and the teenager finds them as bewildering as you do.',
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
      'Identity work moves to centre stage. Trying on styles, opinions and allegiances is the developmental task rather than instability of character. Risk appetite peaks specifically in the presence of peers. The same teenager alone is measurably more cautious. Abstract idealism arrives, and with it the capacity to be genuinely disappointed in institutions, parents included. Arguments are often reasoning practice.',
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
      'Reasoning approaches adult levels in calm conditions. It stabilises under stress, fatigue and peer presence considerably later. Long-term planning becomes genuinely possible and genuinely practised. Romantic relationships carry real weight now. Independence claims accelerate. Research consistently finds late adolescents decide better holding real responsibility with real consequences than when tightly managed. Your leverage is shifting from control to relationship.',
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
      'Identity work starts consolidating now. Vocational, relational and spiritual commitments get made rather than sampled. Executive function is near its adult plateau. Financial and residential independence usually arrive unevenly, in stages. A young adult moving between dependence and independence is following the modern norm rather than failing at adulthood. What most predicts a strong relationship from here is whether the parent actually changed roles.',
    evidence: [NIMH, CDC],
    provenance: MEDICAL,
    tags: ['understand-your-child'],
  },
];
