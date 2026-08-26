/**
 * Cairn's visual language.
 *
 * Competitive read: Glorify owns "best UX in the Christian category" with calm
 * colours, generous whitespace, and no guilt mechanics. Cairn's palette is
 * stone and warm neutrals — a cairn is stacked stone — with one accent.
 * No badges, no streaks, no red dots anywhere in the design system.
 */
export const colors = {
  bg: '#F7F5F1',
  card: '#FFFFFF',
  ink: '#2B2A27',
  inkSoft: '#6B675F',
  stone: '#8A8578',
  accent: '#4A6B57', // deep moss — the one accent
  accentSoft: '#E4EBE6',
  warn: '#8A4B3B',
  warnSoft: '#F4E5E0',
  line: '#E7E3DB',
} as const;

export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 } as const;

export const type = {
  title: { fontSize: 26, fontWeight: '700' as const, color: colors.ink },
  heading: { fontSize: 18, fontWeight: '600' as const, color: colors.ink },
  label: { fontSize: 12, fontWeight: '600' as const, color: colors.stone, letterSpacing: 1.2 },
  body: { fontSize: 15, lineHeight: 22, color: colors.ink },
  soft: { fontSize: 13, lineHeight: 19, color: colors.inkSoft },
} as const;
