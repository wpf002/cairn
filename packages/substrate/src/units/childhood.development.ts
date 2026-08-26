import type { EvidenceRef, Unit } from '../types.js';

/**
 * UNDERSTAND YOUR CHILD, birth to five. Section 8.
 *
 * Descriptive units translating developmental science into parental
 * understanding — what is normal, what is developmental rather than
 * defiant, and what changes the parenting strategy. CDC milestone framing,
 * ranges not deadlines (section 6), no diagnosis anywhere (invariant 4).
 */
const CDC: EvidenceRef = {
  org: 'CDC',
  title: "Learn the Signs. Act Early. — developmental milestones (2022 revision)",
  sourceDate: '2022-02-01',
  evidenceLevel: 'professional-consensus',
};
const AAP_BF: EvidenceRef = {
  org: 'AAP',
  title: 'Bright Futures: Guidelines for Health Supervision',
  sourceDate: '2024-01-01',
  evidenceLevel: 'professional-consensus',
};

const MEDICAL = {
  sourceOrg: 'CDC',
  sourceDate: '2022-02-01',
  reviewer: 'editorial-gate',
  reviewDate: '2026-08-26',
  medicalReviewer: 'doc-gate',
  medicalReviewDate: '2026-08-26',
} as const;

export const CHILDHOOD_DEVELOPMENT_UNITS: readonly Unit[] = [
  {
    id: 'child.develop.newborn',
    version: 1,
    claimType: 'descriptive',
    category: 'LEARN',
    scope: { kind: 'stage', stages: ['newborn'] },
    voice: 'shared',
    title: 'What a newborn is actually doing',
    body:
      'A newborn\'s work is regulation: learning, with your help, to manage hunger, temperature, and states of alertness. Crying is communication, not manipulation — newborns are neurologically incapable of manipulation. Most newborns feed 8–12 times a day, sleep 14–17 hours in fragments, and begin calming to familiar voices within weeks. Responding quickly and consistently to a newborn does not spoil them; it builds the security everything later stands on.',
    evidence: [CDC, AAP_BF],
    provenance: MEDICAL,
    tags: ['understand-your-child', 'regulation'],
  },
  {
    id: 'child.develop.early-infancy',
    version: 1,
    claimType: 'descriptive',
    category: 'LEARN',
    scope: { kind: 'stage', stages: ['early-infancy'] },
    voice: 'shared',
    title: 'Three to six months: the social dawn',
    body:
      'Around this band most babies begin social smiling, laughing, and turn-taking "conversations" of coos and expressions — the foundations of all later communication. Rolling typically begins, hands are discovered, and everything goes to the mouth, which is how infants explore. Your face, exaggerated and close, is more developmentally valuable than any toy on the market.',
    evidence: [CDC],
    provenance: MEDICAL,
    tags: ['understand-your-child', 'social-development'],
  },
  {
    id: 'child.develop.later-infancy',
    version: 1,
    claimType: 'descriptive',
    category: 'LEARN',
    scope: { kind: 'stage', stages: ['later-infancy'] },
    voice: 'shared',
    title: 'Six to twelve months: attachment shows its face',
    body:
      'Separation anxiety and wariness of strangers typically emerge in this band — and they are signs of healthy attachment, not regression: your baby has learned who their people are. Most babies in this window sit, then crawl or scoot, may pull to stand, babble in strings, and respond to their name. Object permanence arrives: things that vanish now exist somewhere, which is why peekaboo suddenly becomes theology-grade drama.',
    evidence: [CDC],
    provenance: MEDICAL,
    tags: ['understand-your-child', 'attachment'],
  },
  {
    id: 'child.develop.early-toddler',
    version: 1,
    claimType: 'descriptive',
    category: 'LEARN',
    scope: { kind: 'stage', stages: ['early-toddler'] },
    voice: 'shared',
    title: 'Twelve to twenty-four months: a will arrives before its brakes',
    body:
      'Walking, first words, pointing, and imitation define this band — and so does the collision at its heart: a toddler\'s desire for autonomy arrives long before the brain systems that regulate frustration. Tantrums in this window are overflow, not defiance; the prefrontal machinery for self-control is years from ready. A calm adult presence during the storm is the regulation the toddler is borrowing until they grow their own.',
    evidence: [CDC],
    provenance: MEDICAL,
    tags: ['understand-your-child', 'autonomy', 'tantrums'],
  },
  {
    id: 'child.develop.toddler',
    version: 1,
    claimType: 'descriptive',
    category: 'LEARN',
    scope: { kind: 'stage', stages: ['toddler'] },
    voice: 'shared',
    title: 'Two to three: "no" is a developmental achievement',
    body:
      'Vocabulary typically explodes across this band — from around 50 words toward multi-word sentences — and with language comes the discovery of the self who can refuse. What reads as intentional defiance in a two-year-old is usually a developing desire for autonomy combined with immature emotional regulation: the child is practising being a person, using the only tools installed so far. Offering two acceptable choices works with this drive; head-on will contests work against it, and the toddler has more stamina.',
    evidence: [CDC],
    provenance: MEDICAL,
    tags: ['understand-your-child', 'autonomy', 'language'],
  },
  {
    id: 'child.develop.preschool',
    version: 1,
    claimType: 'descriptive',
    category: 'LEARN',
    scope: { kind: 'stage', stages: ['preschool'] },
    voice: 'shared',
    title: 'Three to five: imagination, questions, and the birth of conscience',
    body:
      'Pretend play becomes elaborate, "why?" becomes constant, and most children this age begin genuine cooperative play with peers. Magical thinking is normal — the line between imagined and real is still under construction, which is why monsters are real at bedtime and why a preschooler\'s untruths are usually wish-speech rather than calculated lying. Early conscience appears: rules matter intensely, if inconsistently, and being caught matters more than the rule. All of this is on schedule.',
    evidence: [CDC],
    provenance: MEDICAL,
    tags: ['understand-your-child', 'imagination', 'conscience'],
  },
];
