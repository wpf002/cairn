/**
 * Cairn's visual language.
 *
 * Every token the app uses lives here, so retuning the look is a one-file
 * change. Design targets, from the competitive read: Glorify owns "best UX in
 * the Christian category" on calm colour, generous whitespace and no guilt
 * mechanics; Kinedu's 3.2 Android rating is what clutter and dark patterns
 * earn. Cairn is stone and warm neutral, one accent, and no badge, streak, or
 * red dot exists anywhere in the system.
 *
 * The palette has to work for a tired parent at 6am and at 11pm, so contrast
 * is high and saturation is low: nothing here glows.
 */
export const colors = {
  /** Page ground. Warm off-white, never pure #FFF, which glares at night. */
  bg: '#F6F4EF',
  /** A quiet raised surface for secondary cards. */
  bgRaised: '#EFEBE3',
  /** Primary card. */
  card: '#FFFFFF',

  /** Body and headline text. Near-black with warmth, not #000. */
  ink: '#23221F',
  /** Secondary text. Passes AA on both bg and card. */
  inkSoft: '#5F5B53',
  /** Metadata and labels. */
  stone: '#8A8579',

  /** The one accent: deep moss. Used for actions and nothing decorative. */
  accent: '#3F6B52',
  /** Accent text on light ground, darkened for contrast on body-size type. */
  accentInk: '#2F5340',
  accentSoft: '#E6EDE7',

  /** Escalation only. Never used for emphasis or decoration. */
  warn: '#8A4B3B',
  warnSoft: '#F5E7E2',

  line: '#E5E0D7',
} as const;

export const spacing = { xs: 4, sm: 8, md: 16, lg: 20, xl: 32, xxl: 56 } as const;

export const radius = { card: 16, pill: 999 } as const;

/**
 * Type scale.
 *
 * Body sits at 16/25. The previous 15/22 was below iOS's default reading size
 * and produced the dense grey slabs the app was criticised for; line height at
 * roughly 1.55 is what makes a paragraph finishable.
 */
export const type = {
  /** Once per screen. */
  display: { fontSize: 30, lineHeight: 36, fontWeight: '700' as const, color: colors.ink, letterSpacing: -0.4 },
  /** A card headline. */
  heading: { fontSize: 19, lineHeight: 25, fontWeight: '600' as const, color: colors.ink, letterSpacing: -0.2 },
  /** The one sentence that carries a card. Slightly larger than body. */
  lede: { fontSize: 17, lineHeight: 25, color: colors.ink },
  body: { fontSize: 16, lineHeight: 25, color: colors.ink },
  soft: { fontSize: 15, lineHeight: 22, color: colors.inkSoft },
  /** Counters, rendered as a figure rather than a sentence. */
  figure: { fontSize: 34, lineHeight: 38, fontWeight: '700' as const, color: colors.ink, letterSpacing: -0.8 },
  label: { fontSize: 12, lineHeight: 16, fontWeight: '700' as const, color: colors.stone, letterSpacing: 1.1 },
  meta: { fontSize: 13, lineHeight: 18, color: colors.stone },
} as const;
