import type { EvidenceRef, Unit } from '../types.js';
import { T1, T2, T3, weeks } from './helpers.js';

/**
 * TAKING CARE OF MOM and the practical prep track. Sections 5 and 28.
 *
 * Descriptive units carry evidence and no scripture; prudential units carry
 * neither and must not contradict a normative unit. The trackers themselves
 * (kick counter, contraction timer, hospital bag) are Phase 3 surfaces; these
 * units are the guidance they render.
 */
const ACOG_NUTRITION: EvidenceRef = {
  org: 'ACOG',
  title: 'Nutrition During Pregnancy (patient FAQ001)',
  sourceDate: '2023-06-01',
  evidenceLevel: 'professional-consensus',
};
const ACOG_EXERCISE: EvidenceRef = {
  org: 'ACOG',
  title: 'Exercise During Pregnancy (patient FAQ119)',
  sourceDate: '2023-03-01',
  evidenceLevel: 'professional-consensus',
};
const ACOG_SLEEP: EvidenceRef = {
  org: 'NIH / NICHD',
  title: 'Sleep position in late pregnancy — cohort evidence summary',
  sourceDate: '2022-01-01',
  evidenceLevel: 'cohort-study',
};
const CDC_MOVEMENT: EvidenceRef = {
  org: 'ACOG',
  title: 'Fetal movement monitoring guidance',
  sourceDate: '2023-01-01',
  evidenceLevel: 'professional-consensus',
};

const MEDICAL = {
  sourceOrg: 'ACOG',
  sourceDate: '2023-06-01',
  reviewer: 'editorial-gate',
  reviewDate: '2026-08-26',
  medicalReviewer: 'doc-gate',
  medicalReviewDate: '2026-08-26',
} as const;

const EDITORIAL_ONLY = {
  sourceOrg: 'Cairn editorial',
  sourceDate: '2026-08-26',
  reviewer: 'editorial-gate',
  reviewDate: '2026-08-26',
} as const;

export const PREGNANCY_CARE_UNITS: readonly Unit[] = [
  {
    id: 'pregnancy.mom.t1.what-your-body-is-doing',
    version: 1,
    claimType: 'descriptive',
    category: 'RECEIVE',
    scope: { kind: 'pregnancy', weeks: T1 },
    voice: 'mother',
    title: 'Fatigue, nausea, and the invisible trimester',
    body:
      'Fatigue and nausea are near-universal in the first trimester. They typically peak around weeks 8 to 10 and ease early in the second. Small frequent meals, fluids, and rest help; vitamin B6 and doxylamine are commonly recommended by providers when food strategies are not enough. About 7 in 10 pregnant women experience nausea in early pregnancy.',
    evidence: [ACOG_NUTRITION],
    provenance: MEDICAL,
    tags: ['symptoms', 'first-trimester', 'prevalence'],
  },
  {
    id: 'pregnancy.mom.t2.movement-and-energy',
    version: 1,
    claimType: 'descriptive',
    category: 'RECEIVE',
    scope: { kind: 'pregnancy', weeks: T2 },
    voice: 'mother',
    title: 'Energy, appetite, and exercise',
    lede: 'Most women feel best in the second trimester. Nausea fades and energy returns.',
    body:
      'Most women feel best now. Nausea usually fades, energy returns, appetite increases. About 150 minutes of moderate activity a week is recommended for pregnancies without complications. Walking, swimming, prenatal classes. Round ligament pain is common and normal, the sharp side twinge when you change position. Pain that is severe or persistent is not, and belongs to your provider.',
    evidence: [ACOG_EXERCISE, ACOG_NUTRITION],
    provenance: MEDICAL,
    tags: ['exercise', 'second-trimester'],
  },
  {
    id: 'pregnancy.mom.t3.sleep-position-and-movement-counting',
    version: 1,
    claimType: 'descriptive',
    category: 'RECEIVE',
    scope: { kind: 'pregnancy', weeks: T3 },
    voice: 'mother',
    title: 'Sleep position and movement',
    lede: 'From 28 weeks, settle to sleep on your side. Waking on your back is not a cause for alarm.',
    body:
      'From about 28 weeks, settle to sleep on your side. That carries a lower stillbirth risk than lying flat on your back. Waking up on your back is common and fine. The position you fall asleep in is the one you hold longest. From the same point, learn your baby\'s daily movement pattern. The pattern is what matters. A clear drop from your baby's normal means calling your provider that day.',
    evidence: [ACOG_SLEEP, CDC_MOVEMENT],
    provenance: MEDICAL,
    tags: ['sleep', 'movement', 'third-trimester'],
  },
  {
    id: 'pregnancy.partner.t1.what-she-cannot-see-you-do',
    version: 1,
    claimType: 'prudential',
    category: 'RECEIVE',
    scope: { kind: 'pregnancy', weeks: T1 },
    voice: 'father',
    title: 'Her first trimester is your assignment',
    lede: 'None of it shows yet, so the world keeps expecting full speed from her.',
    body:
      'She is exhausted and probably sick, and none of it shows. So the world keeps expecting full speed from her. Your job this trimester is to be the one person who adjusts. Take over the smells that trigger her (cooking, trash, coffee). Guard her evenings. Learn the warning-signs list so she is not the only one carrying it. Nobody will see any of this, which is rather the point.',
    actions: [
      'Own the nausea triggers: cooking, dishes, trash — without commentary.',
      'Read the maternal warning signs yourself; know when a symptom means calling the provider.',
      'Ask her once a week: what is the heaviest thing you are carrying right now?',
    ],
    provenance: EDITORIAL_ONLY,
    tags: ['father', 'support', 'first-trimester'],
  },
  {
    id: 'pregnancy.partner.t3.labor-support',
    version: 1,
    claimType: 'prudential',
    category: 'LEARN',
    scope: { kind: 'pregnancy', weeks: T3 },
    voice: 'father',
    title: 'Know the birth plan cold',
    body:
      'In labour, she may not be able to advocate for herself, and you can. Know the birth plan well enough to state it without reading; know which preferences are strong and which are flexible; know the words she chose for pain relief decisions. Pack your own bag too — a support person who faints from hunger at hour fourteen is not supporting.',
    actions: [
      'Rehearse the birth plan out loud until you can state her top three preferences unprompted.',
      'Agree the code word that means "I have changed my mind, act on the new decision."',
      'Pack a support-person bag: food, water, chargers, a change of clothes.',
    ],
    provenance: EDITORIAL_ONLY,
    tags: ['father', 'birth', 'advocacy'],
  },
  {
    id: 'pregnancy.practical.hospital-bag',
    version: 1,
    claimType: 'prudential',
    category: 'LEARN',
    scope: { kind: 'pregnancy', weeks: weeks(34, 40) },
    voice: 'shared',
    title: 'Bag packed from week 36',
    lede: 'Keep it by the door. Documents, chargers, clothes, and the blessing you chose.',
    body:
      'Keep a packed bag by the door from week 36. Documents and phone chargers. Comfortable clothes and toiletries for mom. A going-home outfit and a blanket for the baby. Get the car seat installed and checked before labour rather than during it. The blessing you chose goes in the bag too.',
    actions: [
      'Pack three bags: mom, baby, support person. Done beats perfect.',
      'Have the car seat installation checked at a fitting station or by video guide before week 37.',
    ],
    provenance: EDITORIAL_ONLY,
    tags: ['hospital-bag', 'checklist'],
  },
  {
    id: 'pregnancy.practical.appointments',
    version: 1,
    claimType: 'prudential',
    category: 'LEARN',
    scope: { kind: 'pregnancy', weeks: T1 },
    voice: 'shared',
    title: 'The appointment rhythm',
    lede: 'Every four weeks until 28, every two until 36, then weekly until birth.',
    body:
      'Visits run every four weeks until about 28 weeks. Every two weeks until 36. Then weekly until birth. An anatomy scan lands around 20 weeks and glucose screening around 24 to 28. Put all of it in both calendars. A partner who comes is not spectating. He is hearing the same information at the same time, and shared decisions are built out of that.',
    actions: [
      'Enter the full expected appointment rhythm into both phones now.',
      'Decide which appointments the partner attends — the anatomy scan at minimum.',
    ],
    provenance: EDITORIAL_ONLY,
    tags: ['appointments', 'calendar'],
  },
];
