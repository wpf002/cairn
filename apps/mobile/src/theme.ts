/**
 * Cairn's visual language.
 *
 * Rebuilt after the first version read as a document rather than an app: warm
 * neutrals, one green accent, and no imagery, so every screen looked like an
 * article. The category leaders do not work that way. Hallow, the #1 religious
 * app, runs a violet gradient brand over deep teal surfaces with saturated
 * illustration and gold accents. Glorify runs cream and one hot accent with
 * photography. Neither is monochrome and neither is beige.
 *
 * Cairn's system: indigo and violet for the spiritual surfaces, teal and moss
 * for growth, clay and amber for warmth, over a warm paper ground. Colour
 * carries meaning here rather than decoration — each of the seven formation
 * categories owns a hue, so a parent learns the map by looking at it.
 *
 * Still no badges, no streaks, no red dots. Colour is not a nag.
 */

/** Core ramp. */
export const colors = {
  /** Page ground. Warm paper, never pure white. */
  bg: '#F7F5F0',
  bgRaised: '#EFEBE2',
  card: '#FFFFFF',

  /** Deep surface for hero cards and scripture. Hallow's move, our hue. */
  deep: '#1E1B3A',
  deepSoft: '#302B57',

  ink: '#211F2E',
  inkSoft: '#5A5670',
  stone: '#8A8598',
  onDeep: '#FFFFFF',
  onDeepSoft: '#C9C3E8',

  /** Brand: indigo through violet. Used for the spiritual spine. */
  indigo: '#4C3FBF',
  indigoSoft: '#E7E4F9',
  violet: '#7A55C9',
  violetSoft: '#EFE6FA',

  /** Growth: teal and moss. Development, competence, becoming. */
  teal: '#1F7A72',
  tealSoft: '#DDEFEC',
  moss: '#3F6B52',
  mossSoft: '#E3EDE6',

  /** Warmth: clay and amber. Affection, words, milestones. */
  clay: '#B4573E',
  claySoft: '#FAE7E0',
  amber: '#B07A16',
  amberSoft: '#FBEFD8',

  /** Escalation only. Never decoration. */
  warn: '#A33A2C',
  warnSoft: '#F8E3DF',

  line: '#E4DFD5',
  lineDeep: 'rgba(255,255,255,0.16)',
} as const;

/**
 * The seven categories, each with a hue.
 *
 * Section 13's framework becomes legible at a glance: a parent scrolling the
 * dashboard sees which kind of formation each card belongs to before reading a
 * word of it.
 */
export const categoryColor: Record<string, { fg: string; bg: string; glyph: string }> = {
  SEE: { fg: colors.indigo, bg: colors.indigoSoft, glyph: '◉' },
  RECEIVE: { fg: colors.clay, bg: colors.claySoft, glyph: '❋' },
  EXPERIENCE: { fg: colors.amber, bg: colors.amberSoft, glyph: '◈' },
  HEAR: { fg: colors.violet, bg: colors.violetSoft, glyph: '❞' },
  LEARN: { fg: colors.teal, bg: colors.tealSoft, glyph: '✦' },
  BELIEVE: { fg: colors.indigo, bg: colors.indigoSoft, glyph: '✝' },
  BECOME: { fg: colors.moss, bg: colors.mossSoft, glyph: '▲' },
};

/** Gradients, as colour stops for expo-linear-gradient. */
export const gradients = {
  /** The pregnancy hero. Night into dawn. */
  pregnancy: ['#2A2358', '#4C3FBF', '#7A55C9'] as const,
  /** The child hero. Deep water into moss. */
  child: ['#1B2E4A', '#1F5F72', '#2F7A62'] as const,
  /** Scripture surface. */
  scripture: ['#1E1B3A', '#3B2F6B'] as const,
} as const;

export const spacing = { xs: 4, sm: 8, md: 14, lg: 20, xl: 28, xxl: 56 } as const;
export const radius = { sm: 10, card: 20, hero: 26, pill: 999 } as const;

/**
 * Type scale.
 *
 * A serif for scripture and for the counter, which is how every app in this
 * category signals that a line is sacred rather than instructional. iOS ships
 * New York; it costs nothing and it changes the register instantly.
 */
export const serif = 'Georgia';

export const type = {
  /** Screen title. One per screen, left-aligned with everything else. */
  display: { fontSize: 32, lineHeight: 37, fontWeight: '700' as const, color: colors.ink, letterSpacing: -0.6 },
  heading: { fontSize: 19, lineHeight: 25, fontWeight: '600' as const, color: colors.ink, letterSpacing: -0.2 },
  lede: { fontSize: 17, lineHeight: 25, color: colors.ink },
  body: { fontSize: 16, lineHeight: 25, color: colors.ink },
  soft: { fontSize: 15, lineHeight: 22, color: colors.inkSoft },
  /** Big numbers. Metrics a parent reads at a glance. */
  figure: { fontSize: 44, lineHeight: 48, fontWeight: '700' as const, letterSpacing: -1.4, color: colors.ink },
  figureSm: { fontSize: 26, lineHeight: 30, fontWeight: '700' as const, letterSpacing: -0.6, color: colors.ink },
  /** Scripture. Serif, generous, never squeezed. */
  verse: { fontFamily: serif, fontSize: 19, lineHeight: 30, color: colors.onDeep },
  verseRef: { fontSize: 13, letterSpacing: 1.4, fontWeight: '700' as const, color: colors.onDeepSoft },
  label: { fontSize: 11, lineHeight: 15, fontWeight: '800' as const, color: colors.stone, letterSpacing: 1.3 },
  meta: { fontSize: 13, lineHeight: 18, color: colors.stone },
} as const;
