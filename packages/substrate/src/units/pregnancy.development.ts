import type { EvidenceRef, Unit } from '../types.js';

/**
 * BABY DEVELOPMENT, weeks 4–40. Section 5's first card block.
 *
 * All descriptive claims, all evidence-backed, and — per invariant 8 — not a
 * verse in sight. What is happening in the womb is presented as observation of
 * God's design; the scripture belongs to the formation units, where it is
 * exegeted rather than bolted on.
 *
 * Sizes and milestones follow ACOG's patient guidance on fetal development,
 * deliberately kept coarse: week-precise organ claims vary between sources,
 * and a pregnancy card should never be more confident than its citations.
 */
const ACOG: EvidenceRef = {
  org: 'ACOG',
  title: 'How Your Fetus Grows During Pregnancy (patient FAQ156)',
  sourceDate: '2023-10-01',
  evidenceLevel: 'professional-consensus',
};

const NIH: EvidenceRef = {
  org: 'NIH / MedlinePlus',
  title: 'Fetal development',
  sourceDate: '2023-11-01',
  evidenceLevel: 'professional-consensus',
};

interface WeekEntry {
  readonly week: number;
  readonly title: string;
  readonly body: string;
}

const WEEKS: readonly WeekEntry[] = [
  { week: 4, title: 'Implantation and beginnings', body: 'The embryo has implanted in the lining of the uterus. The neural tube is beginning to form. That structure becomes the brain and spinal cord. The placenta is starting to develop.' },
  { week: 5, title: 'A heartbeat begins', body: 'The heart is forming as a simple tube and begins to beat this week. The embryo is about the size of a sesame seed.' },
  { week: 6, title: 'Facial features forming', body: 'Structures that become the eyes, ears, and jaw are taking shape. Small buds appear where arms will grow. The heartbeat may be visible on an early ultrasound.' },
  { week: 7, title: 'Rapid brain growth', body: 'The brain is growing quickly, adding cells at a remarkable rate. Leg buds appear, and the arm buds lengthen into paddle-shaped hands.' },
  { week: 8, title: 'Fingers and toes', body: 'Fingers and toes are forming, still webbed. The embryo is about half an inch long and moves, though the movements cannot yet be felt.' },
  { week: 9, title: 'All essential organs begun', body: 'Every essential organ has begun to form. Elbows bend, and tiny earlobes are visible. The embryonic tail has disappeared.' },
  { week: 10, title: 'From embryo to fetus', body: 'This week marks the transition from embryo to fetus. Vital organs are formed and beginning to function. Fingernails and hair are starting to appear.' },
  { week: 11, title: 'Breathing practice begins', body: 'The fetus is about two inches long. Bones are hardening, and the fetus begins to make breathing-like movements with the diaphragm.' },
  { week: 12, title: 'Reflexes arrive', body: 'Reflexes are developing: the fetus can open and close fingers and curl toes. The kidneys are beginning to produce urine.' },
  { week: 13, title: 'Vocal cords and fingerprints', body: 'Vocal cords are forming. Fingerprints are already set, and they are unique. Week thirteen begins the second trimester. The fetus is about three inches long.' },
  { week: 14, title: 'Expression practice', body: 'Facial muscles are working — the fetus can squint, frown, and grimace. The roof of the mouth is complete.' },
  { week: 15, title: 'Sensing light', body: 'Though the eyelids remain fused, the fetus can sense light. The skeleton is developing rapidly, and the fetus may be moving vigorously.' },
  { week: 16, title: 'Coordinated movement', body: 'Limb movements are becoming coordinated. Some mothers, especially in later pregnancies, begin to feel the first fluttering movements around now.' },
  { week: 17, title: 'Fat stores begin', body: 'The fetus is developing fat stores that will help regulate temperature after birth. The umbilical cord is growing stronger and thicker.' },
  { week: 18, title: 'Hearing develops', body: 'The ears are in their final position and the structures of hearing are maturing. The fetus is about five and a half inches long.' },
  { week: 19, title: 'Protective coating', body: 'A waxy protective coating called vernix forms over the skin. In girls, the uterus and vaginal canal are forming.' },
  { week: 20, title: 'Halfway', body: 'The halfway point. Many mothers feel definite movement by now. An anatomy ultrasound around this time examines the developing organs in detail.' },
  { week: 21, title: 'Swallowing practice', body: 'The fetus swallows amniotic fluid, practising for feeding after birth. Movements are stronger and more frequent.' },
  { week: 22, title: 'Responding to sound', body: 'The auditory system is developed enough to respond to sounds from outside the womb. Low-frequency sounds, including voices, carry best. Eyebrows are visible.' },
  { week: 23, title: 'Recognising voices', body: 'Hearing continues to sharpen; regular voices are becoming familiar. The skin is still wrinkled, waiting for fat to fill it out.' },
  { week: 24, title: 'Lung development', body: 'The lungs are building the cells that make surfactant. Surfactant is what lets the air sacs inflate. The fetus now weighs over a pound.' },
  { week: 25, title: 'Startle and settle', body: 'A loud sound may produce a startle. Familiar rhythms may settle them. Hands can grip.' },
  { week: 26, title: 'Eyes opening', body: 'The eyelids, fused since the first trimester, begin to open. The fetus has regular cycles of sleep and waking.' },
  { week: 27, title: 'Third trimester begins', body: 'The end of the second trimester. The lungs, liver, and immune system are still maturing, but the brain is growing especially fast from here.' },
  { week: 28, title: 'Dreaming sleep', body: 'Brain activity shows cycles that include REM sleep. The fetus can blink, and eyelashes are grown.' },
  { week: 29, title: 'Kicks with force', body: 'Movements are strong enough to be seen from outside. Muscles and lungs continue maturing; the head grows to make room for the brain.' },
  { week: 30, title: 'Grip and light', body: 'The fetus can grasp, and the eyes respond to light through the abdominal wall. From about now, many providers suggest paying attention to daily movement patterns.' },
  { week: 31, title: 'Rapid weight gain', body: 'The fetus is gaining weight quickly and beginning to run short of room. Movements change character — more rolls and stretches, fewer somersaults.' },
  { week: 32, title: 'Practising to breathe', body: 'Breathing practice movements are frequent. The bones harden while the skull stays flexible for birth. Many babies settle head-down around now.' },
  { week: 33, title: 'Immune transfer', body: 'Antibodies are crossing the placenta. They lend the baby immune protection for the first months of life. The pupils now constrict and dilate in response to light.' },
  { week: 34, title: 'Vernix thickens', body: 'The protective vernix coating thickens. The fingernails have reached the fingertips. Most babies born from this week onward do very well.' },
  { week: 35, title: 'Filling out', body: 'Fat continues to accumulate, rounding out the arms and legs. Hearing is fully developed — and higher-pitched voices are heard best.' },
  { week: 36, title: 'Running out of room', body: 'Space is tight now. Movements feel different, though how often they come should not drop. The baby is likely settling into the birth position.' },
  { week: 37, title: 'Early term', body: 'From this week the pregnancy is considered early term. The lungs and brain continue maturing right up to birth — and beyond it.' },
  { week: 38, title: 'A firm grip', body: 'The grasp is firm. Organs are ready for life outside, with the lungs putting on their finishing touches.' },
  { week: 39, title: 'Full term', body: 'Full term. The baby continues building fat and shedding vernix and lanugo. Labour could begin any day.' },
  { week: 40, title: 'Due', body: 'The estimated due date is an estimate. About one baby in twenty arrives on it. Most come within two weeks either side.' },
];

export const PREGNANCY_DEVELOPMENT_UNITS: readonly Unit[] = WEEKS.map((entry) => ({
  id: `pregnancy.development.week-${entry.week}`,
  version: 1,
  claimType: 'descriptive',
  category: 'LEARN',
  scope: { kind: 'pregnancy', weeks: [entry.week] },
  voice: 'shared',
  title: entry.title,
  body: entry.body,
  evidence: [ACOG, NIH],
  provenance: {
    sourceOrg: 'ACOG',
    sourceDate: '2023-10-01',
    reviewer: 'editorial-gate',
    reviewDate: '2026-08-26',
    medicalReviewer: 'doc-gate',
    medicalReviewDate: '2026-08-26',
  },
  tags: ['baby-development', 'weekly-card'],
}));
