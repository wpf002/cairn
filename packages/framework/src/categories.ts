/**
 * The seven categories. Roadmap section 13.
 *
 * SEE, RECEIVE, EXPERIENCE and HEAR come from the BetterMan worksheet
 * (section 11). LEARN and BELIEVE were implicit in it and are made explicit;
 * BECOME is new. Every stage from conception to twenty-one answers all seven.
 */
export type Category =
  | 'SEE'
  | 'RECEIVE'
  | 'EXPERIENCE'
  | 'HEAR'
  | 'LEARN'
  | 'BELIEVE'
  | 'BECOME';

export const CATEGORIES: readonly Category[] = [
  'SEE',
  'RECEIVE',
  'EXPERIENCE',
  'HEAR',
  'LEARN',
  'BELIEVE',
  'BECOME',
];

export interface CategoryDefinition {
  readonly id: Category;
  /** The question this category answers for the parent. */
  readonly question: string;
  /** Dashboard heading, before gendered substitution. */
  readonly dashboardHeading: string;
  /** Where it came from: the worksheet, or added. Section 13. */
  readonly origin: 'worksheet' | 'made-explicit' | 'new';
  /** Anchor passages from section 16a. A starting set, not a closed one. */
  readonly anchorPassages: readonly string[];
}

export const CATEGORY_DEFINITIONS: Readonly<Record<Category, CategoryDefinition>> = {
  SEE: {
    id: 'SEE',
    question: 'What should I model?',
    dashboardHeading: 'NEEDS TO SEE',
    origin: 'worksheet',
    anchorPassages: ['Deuteronomy 6:6-9', '1 Corinthians 11:1', 'Titus 2:7', 'Ephesians 5:25-33'],
  },
  RECEIVE: {
    id: 'RECEIVE',
    question: 'What does my child need from me?',
    dashboardHeading: 'NEEDS TO RECEIVE',
    origin: 'worksheet',
    anchorPassages: ['Ephesians 6:4', 'Colossians 3:21', '1 Thessalonians 2:7-12', 'Proverbs 3:11-12'],
  },
  EXPERIENCE: {
    id: 'EXPERIENCE',
    question: 'What should I intentionally expose them to?',
    dashboardHeading: 'NEEDS TO EXPERIENCE',
    origin: 'worksheet',
    anchorPassages: ['Deuteronomy 6:20-25', 'Joshua 4:4-7', 'Luke 2:41-52'],
  },
  HEAR: {
    id: 'HEAR',
    question: 'What words does my child need from me?',
    dashboardHeading: 'NEEDS TO HEAR',
    origin: 'worksheet',
    anchorPassages: ['Matthew 3:17', 'Proverbs 16:24', 'Proverbs 25:11'],
  },
  LEARN: {
    id: 'LEARN',
    question: 'What should I teach them?',
    dashboardHeading: 'NEEDS TO LEARN',
    origin: 'made-explicit',
    anchorPassages: ['Proverbs 1:8', 'Proverbs 22:6', '2 Thessalonians 3:10', 'Luke 16:10'],
  },
  BELIEVE: {
    id: 'BELIEVE',
    question: 'How should I help cultivate their understanding of God and Christianity?',
    dashboardHeading: 'THEIR FAITH',
    origin: 'made-explicit',
    anchorPassages: ['Deuteronomy 6:4-7', 'Psalm 78:1-8', '2 Timothy 1:5', '2 Timothy 3:14-15', '1 Peter 3:15'],
  },
  BECOME: {
    id: 'BECOME',
    question: 'What kind of person are we ultimately trying to help them become?',
    dashboardHeading: 'WHO THEY ARE BECOMING',
    origin: 'new',
    anchorPassages: ['Luke 2:52', 'Galatians 5:22-23', 'Micah 6:8', 'Romans 12:2'],
  },
};

/**
 * Luke 2:52 is the spine: wisdom (cognitive), stature (physical), favour with
 * God (spiritual), favour with man (social and emotional). The ten development
 * domains in section 7 map onto those four axes, and saying so explicitly is
 * what keeps the developmental content and the formation content one product
 * rather than two bolted together.
 */
export const MATURITY_AXES = ['wisdom', 'stature', 'favor-with-god', 'favor-with-man'] as const;
export type MaturityAxis = (typeof MATURITY_AXES)[number];

/** The ten developmental domains of section 7, mapped to Luke 2:52. */
export const DOMAINS = [
  'physical',
  'brain',
  'language',
  'emotional',
  'social',
  'cognitive',
  'independence',
  'identity',
  'faith',
  'sexual',
] as const;
export type Domain = (typeof DOMAINS)[number];

export const DOMAIN_TO_AXIS: Readonly<Record<Domain, MaturityAxis>> = {
  physical: 'stature',
  brain: 'wisdom',
  language: 'favor-with-man',
  emotional: 'favor-with-man',
  social: 'favor-with-man',
  cognitive: 'wisdom',
  independence: 'stature',
  identity: 'wisdom',
  faith: 'favor-with-god',
  sexual: 'stature',
};

/** Domains that only apply once a child is old enough. Section 7. */
export const AGE_GATED_DOMAINS: Readonly<Partial<Record<Domain, number>>> = {
  // Body awareness starts early; the substantive sexual-development track does not.
  sexual: 84, // 7 years, in months
};

export function domainAppliesAtMonths(domain: Domain, months: number): boolean {
  const gate = AGE_GATED_DOMAINS[domain];
  return gate === undefined || months >= gate;
}
