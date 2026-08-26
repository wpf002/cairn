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
      'First-trimester fatigue and nausea are near-universal and typically peak around weeks 8–10, easing for most women early in the second trimester. Small frequent meals, fluids, and rest help; vitamin B6 and doxylamine are commonly recommended by providers when food strategies are not enough. About 7 in 10 pregnant women experience nausea in early pregnancy.',
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
    title: 'The middle trimester: energy, appetite, and exercise',
    body:
      'Most women feel best in the second trimester: nausea usually fades, energy returns, and appetite increases. Around 150 minutes of moderate activity per week — walking, swimming, prenatal classes — is recommended for most pregnancies without complications. Round ligament pain (sharp side twinges with position changes) is common and normal; persistent or severe pain is not, and belongs to your provider.',
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
    title: 'Why sleep position matters now, and daily movement awareness',
    body:
      'From around 28 weeks, settling to sleep on your side is associated with lower risk of stillbirth than lying flat on your back; waking up on your back is common and not a cause for alarm — the position you fall asleep in is the one you hold longest. From the same point, get to know your baby\'s daily movement pattern. It is the pattern that matters: a noticeable reduction from what is normal for your baby is a same-day call to your provider, every time.',
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
    title: 'Her first trimester is your first assignment',
    body:
      'She is exhausted and possibly sick, and none of it shows yet, which means the world keeps expecting full speed from her. Your job this trimester is to be the one person who adjusts. Take over the smells that trigger her (cooking, trash, coffee). Guard her evenings. Learn the warning-signs list so she is not the only one carrying it. Nobody will see any of this, which is rather the point.',
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
    title: 'Know the birth plan cold, and be ready to speak it',
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
    title: 'Keep the hospital bag packed from week 36',
    body:
      'From week 36, keep a packed bag by the door: documents and phone chargers; comfortable clothes and toiletries for mom; a going-home outfit and blanket for the baby; the installed car seat checked before labour, not during it. The blessing you chose goes in the bag too.',
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
    title: 'The appointment rhythm, so nothing surprises you',
    body:
      'A typical schedule: visits every four weeks until about 28 weeks, every two weeks until 36, then weekly until birth — with an anatomy scan around 20 weeks and glucose screening around 24–28. Put them in both calendars. Partners who attend the appointments they can are not spectating; they are learning the same information at the same time, which is what shared decisions are made of.',
    actions: [
      'Enter the full expected appointment rhythm into both phones now.',
      'Decide which appointments the partner attends — the anatomy scan at minimum.',
    ],
    provenance: EDITORIAL_ONLY,
    tags: ['appointments', 'calendar'],
  },
];
