import type { Category } from './categories.js';
import type { Voice } from './voice.js';

/**
 * The worksheet's two markers, kept as two independent signals.
 *
 * Roadmap section 11, finding 2: the printed legend defines
 *   ▲ = a year where this item is especially important to your child's life
 *   ● = a year where there are special opportunities for you and your child
 * Those are semantically different and collapsing them into one weight would
 * throw away the distinction the worksheet author drew. Section 21: emphasis
 * orders the dashboard, opportunity drives THIS MONTH and push notifications,
 * because opportunity windows close and that is what deserves a nudge.
 */
export interface Signal {
  readonly emphasis: boolean;
  readonly opportunity: boolean;
}

export const NO_SIGNAL: Signal = { emphasis: false, opportunity: false };

/** Inclusive age band in whole years. */
export interface AgeBand {
  readonly from: number;
  readonly to: number;
}

export type ItemSource = 'worksheet' | 'derived' | 'new';

export interface FrameworkItem {
  readonly id: string;
  readonly category: Category;
  readonly label: string;
  /** Sub-copy as printed on the worksheet, where there is any. */
  readonly detail?: string;
  readonly voice: Voice;
  readonly source: ItemSource;
  /**
   * Constants run the full 1–21 span. Section 11, finding 3: two rows do this
   * — Dad Loving Mom, and "I love you" — and they must be modelled as always-on
   * rather than surfaced as a stage-specific tip, or the app ends up telling a
   * parent to love their child in week 400 as though it were news.
   */
  readonly constant: boolean;
  readonly emphasisBands: readonly AgeBand[];
  readonly opportunityBands: readonly AgeBand[];
  /** Discrete years, for ceremonies rather than bands. */
  readonly discreteYears?: readonly number[];
  /** Section 16b cross-voice pairing: the other parent's counterpart. */
  readonly pairedWith?: string;
  readonly note?: string;
}

function inBands(year: number, bands: readonly AgeBand[]): boolean {
  return bands.some((b) => year >= b.from && year <= b.to);
}

/** The signal an item carries at a given age in whole years. */
export function signalAt(item: FrameworkItem, years: number): Signal {
  const year = Math.floor(years);
  if (item.discreteYears?.includes(year)) return { emphasis: true, opportunity: true };
  return {
    emphasis: inBands(year, item.emphasisBands),
    opportunity: inBands(year, item.opportunityBands),
  };
}

export function isActive(item: FrameworkItem, years: number): boolean {
  const s = signalAt(item, years);
  return item.constant || s.emphasis || s.opportunity;
}

/**
 * Dashboard ordering.
 *
 * Items carrying both markers rank top — section 11, finding 5: one-on-one time
 * in the teen years is the only row on the worksheet that does, and it should
 * be weighted accordingly. Constants sort last within their tier: they are true
 * every week, so they are never the news of the week.
 */
export function rankScore(item: FrameworkItem, years: number): number {
  const s = signalAt(item, years);
  let score = 0;
  if (s.emphasis) score += 2;
  if (s.opportunity) score += 2;
  if (s.emphasis && s.opportunity) score += 1;
  if (item.constant) score -= 0.5;
  return score;
}

export function rankItems(items: readonly FrameworkItem[], years: number): FrameworkItem[] {
  return [...items]
    .filter((i) => isActive(i, years))
    .sort((a, b) => rankScore(b, years) - rankScore(a, years) || a.id.localeCompare(b.id));
}

/**
 * Items whose opportunity window is closing.
 *
 * The single push notification a parent will thank the app for: not "here is
 * content", but "you have N years left where this lands". Nothing else in the
 * category sends this.
 */
export interface ClosingWindow {
  readonly item: FrameworkItem;
  /** Last year of the opportunity window the child is currently inside. */
  readonly closesAtAge: number;
  readonly yearsRemaining: number;
}

export function closingWindows(
  items: readonly FrameworkItem[],
  years: number,
  withinYears = 3,
): ClosingWindow[] {
  const year = Math.floor(years);
  const out: ClosingWindow[] = [];
  for (const item of items) {
    if (item.constant) continue;
    const bands = [...item.opportunityBands, ...item.emphasisBands];
    const current = bands.find((b) => year >= b.from && year <= b.to);
    if (!current) continue;
    const remaining = current.to - year;
    if (remaining <= withinYears) {
      out.push({ item, closesAtAge: current.to, yearsRemaining: remaining });
    }
  }
  return out.sort((a, b) => a.yearsRemaining - b.yearsRemaining || a.item.id.localeCompare(b.item.id));
}
