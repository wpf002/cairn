import Purchases, { LOG_LEVEL } from 'react-native-purchases';
import { Platform } from 'react-native';
import type { OfferingProduct, PurchasesAdapter } from '@cairn/monetization';

/**
 * RevenueCat adapter (section 31: RevenueCat abstracts App Store and Play).
 *
 * The public SDK key is safe to embed — it can only read offerings and start
 * purchases the store itself authorises. Returns null until the keys are set,
 * so the paywall renders its unconfigured state rather than crashing.
 */
export const PREMIUM_ENTITLEMENT = 'premium';

function expiryOf(info: { entitlements: { active: Record<string, { expirationDate: string | null }> } }): {
  entitled: boolean;
  expiresOn: string | null;
} {
  const active = info.entitlements.active[PREMIUM_ENTITLEMENT];
  if (!active) return { entitled: false, expiresOn: null };
  // RevenueCat gives an ISO instant; Cairn's entitlement state is calendar-date.
  return { entitled: true, expiresOn: active.expirationDate?.slice(0, 10) ?? null };
}

export function revenueCatAdapter(): PurchasesAdapter | null {
  const key =
    Platform.OS === 'ios'
      ? process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY
      : process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY;
  if (!key) return null;

  Purchases.setLogLevel(__DEV__ ? LOG_LEVEL.DEBUG : LOG_LEVEL.ERROR);
  Purchases.configure({ apiKey: key });

  return {
    async getOfferings(): Promise<readonly OfferingProduct[]> {
      const offerings = await Purchases.getOfferings();
      return (offerings.current?.availablePackages ?? []).map((p) => ({
        productId: p.product.identifier,
        localizedPrice: p.product.priceString,
      }));
    },

    async purchase(productId: string) {
      const offerings = await Purchases.getOfferings();
      const pkg = offerings.current?.availablePackages.find(
        (p) => p.product.identifier === productId,
      );
      if (!pkg) throw new Error(`No RevenueCat package for product ${productId}`);
      const { customerInfo } = await Purchases.purchasePackage(pkg);
      return expiryOf(customerInfo);
    },

    async restore() {
      return expiryOf(await Purchases.restorePurchases());
    },
  };
}
