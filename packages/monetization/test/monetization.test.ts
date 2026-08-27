import { describe, expect, it } from 'vitest';
import {
  applyPurchaseResult,
  canAskHelp,
  canUse,
  FREE_HELP_QUERIES_PER_MONTH,
  onLapse,
  paywall,
  tierFor,
  type EntitlementState,
} from '@cairn/monetization';

const free: EntitlementState = { tier: 'free', expiresOn: null, helpQueriesUsedThisMonth: 0 };
const premium: EntitlementState = { tier: 'premium', expiresOn: '2027-08-26', helpQueriesUsedThisMonth: 0 };

describe('free/premium gates (section 30, amended)', () => {
  it('multiple children are free — the Kinedu lesson', () => {
    expect(tierFor('multiple-children')).toBe('free');
    expect(canUse(free, 'multiple-children')).toBe(true);
  });

  it('export is free forever — memories are never ransomed', () => {
    expect(tierFor('export')).toBe('free');
    expect(canUse(onLapse(premium), 'export')).toBe(true);
  });

  it('depth is gated: spouse sharing, media, ceremonies, the Story', () => {
    for (const f of ['spouse-sharing', 'journey-media', 'ceremony-flows', 'story-of-your-childhood'] as const) {
      expect(canUse(free, f)).toBe(false);
      expect(canUse(premium, f)).toBe(true);
    }
  });

  it('the core formation surface is free', () => {
    for (const f of ['pregnancy-weekly-cards', 'child-dashboards', 'today-screen', 'roadmap', 'trackers'] as const) {
      expect(canUse(free, f)).toBe(true);
    }
  });
});

describe('metered AI assistant', () => {
  it('free tier gets a monthly allowance, then a clean stop', () => {
    expect(canAskHelp(free)).toEqual({ allowed: true, remaining: FREE_HELP_QUERIES_PER_MONTH });
    const spent = { ...free, helpQueriesUsedThisMonth: FREE_HELP_QUERIES_PER_MONTH };
    expect(canAskHelp(spent).allowed).toBe(false);
  });

  it('premium is unlimited', () => {
    expect(canAskHelp({ ...premium, helpQueriesUsedThisMonth: 999 })).toEqual({
      allowed: true,
      remaining: 'unlimited',
    });
  });
});

describe('annual-first paywall', () => {
  it('lists annual first, preselected, with the monthly equivalent', () => {
    const p = paywall();
    expect(p.options[0]?.period).toBe('annual');
    expect(p.options[0]?.preselected).toBe(true);
    expect(p.options[0]?.headline).toContain('$5.00/month');
    expect(p.options[1]?.preselected).toBe(false);
  });

  it('carries the trust lines: no ads, encryption, free export', () => {
    const lines = paywall().trustLines.join(' ');
    expect(lines).toContain('No ads');
    expect(lines).toContain('encrypted');
    expect(lines).toContain('Export everything, free');
  });
});

describe('purchase folding and lapse', () => {
  it('applies an entitled result', () => {
    const next = applyPurchaseResult(free, { entitled: true, expiresOn: '2027-08-26' });
    expect(next.tier).toBe('premium');
  });

  it('ignores a failed purchase', () => {
    expect(applyPurchaseResult(free, { entitled: false, expiresOn: null })).toEqual(free);
  });

  it('lapse downgrades without touching usage or data', () => {
    const lapsed = onLapse(premium);
    expect(lapsed.tier).toBe('free');
    expect(canUse(lapsed, 'journey-basic')).toBe(true);
  });
});
