import type { FrameworkItem } from './signals.js';

/**
 * The BetterMan worksheet, transcribed. Roadmap section 11.
 *
 * Source: BetterMan Core Session 4, p.34, "The Smart Dad — He Knows His
 * Son/Daughter Needs." Ten printed rows across a 1–21 grid, with two marker
 * types. Everything marked `source: 'worksheet'` below is what the page
 * actually shows; everything marked `'derived'` is the mother-voiced
 * counterpart required by section 16b, and `'new'` is section 13's additions.
 *
 * The distinction is kept in the data because a claim about what a source says
 * and a claim about what Cairn concluded are different claims, and the Tobias
 * review gate needs to be able to tell them apart.
 */
export const WORKSHEET_ITEMS: readonly FrameworkItem[] = [
  // ---- TO SEE -------------------------------------------------------------
  {
    id: 'see.father-character',
    category: 'SEE',
    label: "Dad's character and spiritual life",
    voice: 'father',
    source: 'worksheet',
    constant: false,
    emphasisBands: [{ from: 5, to: 17 }],
    opportunityBands: [],
    pairedWith: 'see.mother-character',
  },
  {
    id: 'see.mother-character',
    category: 'SEE',
    label: "Mom's character and spiritual life",
    voice: 'mother',
    source: 'derived',
    constant: false,
    emphasisBands: [{ from: 5, to: 17 }],
    opportunityBands: [],
    pairedWith: 'see.father-character',
    note: 'Mother-voiced counterpart. The printed worksheet is father-voiced throughout; section 16b requires the pair.',
  },
  {
    id: 'see.dad-loving-mom',
    category: 'SEE',
    label: 'Dad loving Mom',
    voice: 'father',
    source: 'worksheet',
    constant: true,
    emphasisBands: [{ from: 1, to: 21 }],
    opportunityBands: [],
    pairedWith: 'see.mom-loving-dad',
    note: 'One of only two rows marked across the entire printed span.',
  },
  {
    id: 'see.mom-loving-dad',
    category: 'SEE',
    label: 'Mom loving Dad',
    voice: 'mother',
    source: 'derived',
    constant: true,
    emphasisBands: [{ from: 1, to: 21 }],
    opportunityBands: [],
    pairedWith: 'see.dad-loving-mom',
  },

  // ---- TO RECEIVE ---------------------------------------------------------
  {
    id: 'receive.affirming-encouragement',
    category: 'RECEIVE',
    label: 'Affirming encouragement',
    voice: 'shared',
    source: 'worksheet',
    constant: false,
    emphasisBands: [{ from: 5, to: 21 }],
    opportunityBands: [],
  },
  {
    id: 'receive.manhood-womanhood-instruction',
    category: 'RECEIVE',
    label: 'Manhood / womanhood instruction',
    detail:
      'Instruction on virtues and basic life skills; instruction on boys, girls, friends, school, and a job.',
    voice: 'father',
    source: 'worksheet',
    constant: false,
    emphasisBands: [],
    opportunityBands: [{ from: 6, to: 19 }],
    pairedWith: 'receive.womanhood-instruction-mother',
  },
  {
    id: 'receive.womanhood-instruction-mother',
    category: 'RECEIVE',
    label: 'Womanhood / manhood instruction',
    detail: 'The mother-voiced half of the same instruction, including what she carries for a son.',
    voice: 'mother',
    source: 'derived',
    constant: false,
    emphasisBands: [],
    opportunityBands: [{ from: 6, to: 19 }],
    pairedWith: 'receive.manhood-womanhood-instruction',
  },
  {
    id: 'receive.jesus-in-their-life',
    category: 'RECEIVE',
    label: 'Jesus in his or her life',
    detail:
      'Hearing the Gospel; learning about Jesus; knowing the Bible; understanding how to live as a Christian; opportunities to serve Jesus.',
    voice: 'shared',
    source: 'worksheet',
    constant: false,
    emphasisBands: [],
    opportunityBands: [{ from: 7, to: 19 }],
  },

  // ---- TO EXPERIENCE ------------------------------------------------------
  {
    id: 'experience.one-on-one',
    category: 'EXPERIENCE',
    label: 'Special one-on-one times',
    voice: 'shared',
    source: 'worksheet',
    constant: false,
    emphasisBands: [{ from: 13, to: 18 }],
    opportunityBands: [{ from: 9, to: 21 }],
    note: 'The only printed row carrying both markers simultaneously. Weight it accordingly.',
  },
  {
    id: 'experience.ceremonies',
    category: 'EXPERIENCE',
    label: 'Rites of passage',
    detail:
      'Printed as Manhood Ceremonies for His Son: Intro into Manhood (~13), Growing in Manhood (~16), Releasing to Manhood (~17), Recognize Manhood (~21).',
    voice: 'shared',
    source: 'worksheet',
    constant: false,
    emphasisBands: [],
    opportunityBands: [],
    discreteYears: [13, 16, 17, 21],
    note: 'Generalized to sons and daughters per section 14. The printed worksheet cites Robert Lewis, Raising a Modern-Day Knight, for creating ceremonies.',
  },

  // ---- TO HEAR ------------------------------------------------------------
  {
    id: 'hear.i-love-you',
    category: 'HEAR',
    label: '"I love you"',
    detail: 'Security. Belonging. Unconditional love. Attachment.',
    voice: 'shared',
    source: 'worksheet',
    constant: true,
    emphasisBands: [{ from: 1, to: 21 }],
    opportunityBands: [],
    note: 'The second of the two full-span rows. A twenty-one-year-old still needs to hear it.',
  },
  {
    id: 'hear.im-proud-of-you',
    category: 'HEAR',
    label: '"I\'m proud of you"',
    detail: 'Competence. Character. Effort. Growth. Encouragement.',
    voice: 'shared',
    source: 'worksheet',
    constant: false,
    emphasisBands: [{ from: 13, to: 21 }],
    opportunityBands: [],
    note: 'Back-loaded on the printed grid. Section 11, finding 4: this is an editorial claim about when competence-based affirmation lands, and the app respects it rather than flattening affirmation across all ages.',
  },
  {
    id: 'hear.i-admire-you',
    category: 'HEAR',
    label: '"I admire this about you"',
    detail: 'The parent recognizes qualities developing inside the child. Character is becoming visible.',
    voice: 'shared',
    source: 'worksheet',
    constant: false,
    emphasisBands: [{ from: 13, to: 21 }],
    opportunityBands: [],
  },
  {
    id: 'hear.i-respect-you',
    category: 'HEAR',
    label: '"I respect the person you\'re becoming"',
    detail: 'Increasing agency. Judgment. Responsibility. Competence. Maturity.',
    voice: 'shared',
    source: 'new',
    constant: false,
    emphasisBands: [{ from: 18, to: 21 }],
    opportunityBands: [{ from: 18, to: 20 }],
    note: 'From the handwritten "(respect)" circled beside TO HEAR on the source page. Not on the printed grid.',
  },
  {
    id: 'hear.i-trust-you',
    category: 'HEAR',
    label: '"I trust you" / "I need your counsel on this"',
    detail: 'Full adult standing. The parent begins receiving as well as giving. Peer-with-history.',
    voice: 'shared',
    source: 'new',
    constant: false,
    emphasisBands: [{ from: 21, to: 21 }],
    opportunityBands: [{ from: 20, to: 21 }],
    note: 'Section 13. The accumulation LOVE -> ENCOURAGEMENT -> ADMIRATION -> RESPECT -> TRUST ends here.',
  },
];

/**
 * The affirmation ladder. Section 13.
 *
 * None of these replaces the previous one; they accumulate. Encoded as an
 * ordered list so the dashboard can show a parent everything their child should
 * still be hearing, not only the newest line.
 */
export const AFFIRMATION_LADDER = [
  'hear.i-love-you',
  'hear.im-proud-of-you',
  'hear.i-admire-you',
  'hear.i-respect-you',
  'hear.i-trust-you',
] as const;

/** Everything a child of this age should still be hearing, oldest rung first. */
export function affirmationsAt(years: number): FrameworkItem[] {
  const byId = new Map(WORKSHEET_ITEMS.map((i) => [i.id, i]));
  return AFFIRMATION_LADDER.map((id) => byId.get(id))
    .filter((i): i is FrameworkItem => Boolean(i))
    .filter((i) => i.constant || i.emphasisBands.some((b) => Math.floor(years) >= b.from));
}
