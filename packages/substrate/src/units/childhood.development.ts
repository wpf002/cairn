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
      'A newborn\'s work is regulation. Learning, with your help, to manage hunger, temperature and states of alertness. Crying is communication. Newborns are neurologically incapable of manipulation. Most feed 8 to 12 times a day, sleep 14 to 17 hours in fragments, and begin calming to familiar voices within weeks. Answering a newborn quickly does not spoil them. It builds the security everything later stands on.',
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
      'Most babies start social smiling now. Laughing, and turn-taking conversations of coos and expressions, which are the foundation of all later communication. Rolling typically begins. Hands get discovered. Everything goes in the mouth, which is how infants explore. Your face, exaggerated and close, is worth more developmentally than any toy on the market.',
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
    title: 'Six to twelve months',
    lede: 'Separation anxiety is a sign of healthy attachment, not regression.',
    body:
      'Separation anxiety and wariness of strangers typically emerge now. Both are signs of healthy attachment rather than regression. Your baby has learned who their people are. Most babies in this window sit, then crawl or scoot, may pull to stand, babble in strings, and respond to their name. Object permanence arrives. Things that vanish now exist somewhere, and peekaboo becomes serious drama.',
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
    title: 'Twelve to twenty-four months',
    lede: 'The will arrives long before the brakes do.',
    body:
      'Walking. First words. Pointing. Imitation. And a collision at the heart of it. A toddler\'s desire for autonomy arrives long before the brain systems that regulate frustration. Tantrums here are overflow rather than defiance, because the prefrontal systems for self-control are years from ready. A calm adult during the storm is the regulation a toddler borrows until they grow their own.',
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
    title: 'Two to three years',
    lede: 'Saying no is a developmental achievement.',
    body:
      'Vocabulary typically explodes now, from around 50 words toward multi-word sentences. With language comes the discovery of a self who can refuse. What reads as deliberate defiance is usually a developing drive for autonomy plus immature emotional regulation. The child is practising being a person with the only tools installed so far. Two acceptable choices work with that drive. Head-on contests work against it, and the toddler has more stamina.',
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
    title: 'Three to five years',
    lede: 'Imagination, constant questions, and the first stirrings of conscience.',
    body:
      'Pretend play becomes elaborate. "Why?" becomes constant. Most children this age begin genuinely cooperative play with peers. Magical thinking is normal, because the line between imagined and real is still under construction. Monsters are real at bedtime, and a preschooler\'s untruths are usually wish-speech rather than calculated lying. Early conscience appears. Rules matter intensely, if inconsistently. All of this is on schedule.',
    evidence: [CDC],
    provenance: MEDICAL,
    tags: ['understand-your-child', 'imagination', 'conscience'],
  },
];
