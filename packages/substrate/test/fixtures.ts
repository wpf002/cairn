import { defineUnit, type Unit } from '@cairn/substrate';

/** A fully valid normative unit, used as the baseline for mutation tests. */
export function validNormative(overrides: Partial<Unit> = {}): Unit {
  return defineUnit({
    id: 'receive.correction-without-humiliation',
    version: 1,
    claimType: 'normative',
    category: 'RECEIVE',
    scope: { kind: 'stage', stages: ['preschool'] },
    voice: 'shared',
    title: 'Correction without humiliation',
    body:
      'Discipline at this age is corrective, not retaliatory. The goal of correction is the formation of the child, never the discharge of the parent\'s frustration.',
    actions: [
      'Before correcting, name the behaviour out loud rather than the child\'s character.',
      'After correction lands, reconnect within ten minutes — correction ends in restored relationship.',
    ],
    warrant: {
      passages: ['Ephesians 6:4', 'Colossians 3:21'],
      exegesis:
        'Ephesians 6:4 addresses fathers with a prohibition and a positive command: do not provoke your children to anger, but bring them up in the discipline and instruction of the Lord. Paideia (discipline) in Greek usage is formative training, not retaliation.',
      application:
        'Christian authority over a child is exercised for the child\'s formation rather than the parent\'s emotional convenience. Correction that humiliates provokes; correction that instructs forms.',
      misuse:
        'This passage is commonly reduced to a proof text for parental authority alone, quoting the second half while ignoring the warning against provoking — inverting its actual emphasis.',
      theologicalReviewer: 'tobias-gate',
      reviewDate: '2026-08-01',
    },
    provenance: {
      sourceOrg: 'Cairn editorial',
      sourceDate: '2026-08-01',
      reviewer: 'editorial-gate',
      reviewDate: '2026-08-01',
    },
    ...overrides,
  });
}

/** A fully valid descriptive unit. */
export function validDescriptive(overrides: Partial<Unit> = {}): Unit {
  return defineUnit({
    id: 'pregnancy.week22.hearing',
    version: 1,
    claimType: 'descriptive',
    category: 'LEARN',
    scope: { kind: 'pregnancy', weeks: [22] },
    voice: 'shared',
    title: 'Your baby is beginning to hear',
    body:
      'At 22 weeks the auditory system is developed enough to respond to sounds from outside the womb. Low-frequency sounds — including voices — carry best.',
    evidence: [
      {
        org: 'ACOG',
        title: 'Fetal development month by month',
        sourceDate: '2023-10-01',
        evidenceLevel: 'professional-consensus',
      },
    ],
    provenance: {
      sourceOrg: 'ACOG',
      sourceDate: '2023-10-01',
      reviewer: 'editorial-gate',
      reviewDate: '2026-08-01',
      medicalReviewer: 'doc-gate',
      medicalReviewDate: '2026-08-01',
    },
    ...overrides,
  });
}

export function validPrudential(overrides: Partial<Unit> = {}): Unit {
  return defineUnit({
    id: 'pregnancy.week36.hospital-bag',
    version: 1,
    claimType: 'prudential',
    category: 'LEARN',
    scope: { kind: 'pregnancy', weeks: [36] },
    voice: 'shared',
    title: 'Pack the hospital bag',
    body: 'Keep a packed hospital bag by the door from week 36.',
    actions: ['Pack a bag for mom, a bag for baby, and chargers.'],
    provenance: {
      sourceOrg: 'Cairn editorial',
      sourceDate: '2026-08-01',
      reviewer: 'editorial-gate',
      reviewDate: '2026-08-01',
    },
    ...overrides,
  });
}
