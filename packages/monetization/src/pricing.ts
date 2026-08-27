/**
 * Pricing presentation. Section 30: annual-first — the value story is a
 * 21-year relationship, and monthly billing invites monthly cancellation at
 * exactly the moments parenting gets hard.
 */
export interface Price {
  readonly productId: string;
  readonly period: 'annual' | 'monthly';
  readonly usd: number;
  /** Store-formatted display string comes from the store at runtime; this is the fallback. */
  readonly display: string;
}

export const PRICES: readonly Price[] = [
  { productId: 'cairn.premium.annual', period: 'annual', usd: 59.99, display: '$59.99/year' },
  { productId: 'cairn.premium.monthly', period: 'monthly', usd: 7.99, display: '$7.99/month' },
];

export interface PaywallPresentation {
  /** Annual is listed first and preselected. */
  readonly options: readonly (Price & { readonly headline: string; readonly preselected: boolean })[];
  readonly valueLine: string;
  readonly trustLines: readonly string[];
}

export function paywall(): PaywallPresentation {
  const annual = PRICES.find((p) => p.period === 'annual')!;
  const monthly = PRICES.find((p) => p.period === 'monthly')!;
  const monthlyEquivalent = annual.usd / 12;
  return {
    options: [
      {
        ...annual,
        headline: `${annual.display} — about $${monthlyEquivalent.toFixed(2)}/month`,
        preselected: true,
      },
      { ...monthly, headline: monthly.display, preselected: false },
    ],
    valueLine:
      'One subscription, the whole family, the whole road — pregnancy through the ceremony at twenty-one.',
    trustLines: [
      'No ads. Ever. At any tier.',
      'Your journal and photos are encrypted on your device — we cannot read them, subscribed or not.',
      'Export everything, free, forever. Your memories are never held hostage.',
      'Cancel any time; everything you recorded stays yours and stays readable.',
    ],
  };
}
