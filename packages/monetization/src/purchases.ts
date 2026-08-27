import type { EntitlementState } from './entitlements.js';

/**
 * The RevenueCat seam. Section 31: RevenueCat abstracts App Store and Play
 * billing. Like the Anthropic adapter, the concrete client is injected at the app boundary;
 * this interface is everything the app is allowed to know about billing.
 */
export interface OfferingProduct {
  readonly productId: string;
  /** Localized price string from the store. */
  readonly localizedPrice: string;
}

export interface PurchasesAdapter {
  getOfferings(): Promise<readonly OfferingProduct[]>;
  purchase(productId: string): Promise<{ readonly entitled: boolean; readonly expiresOn: string | null }>;
  restore(): Promise<{ readonly entitled: boolean; readonly expiresOn: string | null }>;
}

/** Fold a purchase/restore result into entitlement state. */
export function applyPurchaseResult(
  state: EntitlementState,
  result: { entitled: boolean; expiresOn: string | null },
): EntitlementState {
  if (!result.entitled) return state;
  return { ...state, tier: 'premium', expiresOn: result.expiresOn };
}
