# Setup — live services

What is wired, what is left, and exactly what you have to do by hand.

## Already done

| Piece | State |
|---|---|
| Supabase CLI | Installed (`brew`), `supabase/` scaffold committed |
| Postgres schema | `supabase/migrations/20260827000000_init.sql`, generated from `packages/db/prisma/schema.prisma` — 7 tables |
| Row-level security | `supabase/migrations/20260827000001_rls.sql` — 9 policies, every table deny-by-default. Verified applied against a local stack |
| Supabase client | `apps/mobile/src/lib/supabase.ts` — AsyncStorage session persistence, returns `null` until env vars are set |
| Native Argon2id | `apps/mobile/src/lib/argon2.ts` — `react-native-argon2`, hex salt encoding, satisfies `@cairn/crypto`'s 64 MB floor |
| Notifications | `apps/mobile/src/lib/notifications.ts` — closing-window nudges only, staggered weekly, never a content drip |
| Photo picker | `apps/mobile/src/lib/photos.ts` — returns raw bytes for client-side encryption, EXIF stripped |
| RevenueCat adapter | `apps/mobile/src/lib/purchases.ts` — reads the public SDK key from env, returns `null` when unset |
| Expo config plugins | `app.json` — notifications + image-picker with an honest photos permission string |

## Local development, right now

```bash
supabase start
```

`apps/mobile/.env` already points at the local stack (`127.0.0.1:54321`) with the
standard local anon key. Nothing else is needed to run against a real Postgres
with the real RLS policies.

## What you have to do by hand

Accounts and payment details are yours to create — never mine.

### 1. Hosted Supabase (free tier)
1. supabase.com → **New project**.
2. Project Settings → API → copy **Project URL** and **anon public** key.
3. Paste both into `apps/mobile/.env`.
4. Push the schema: `supabase link --project-ref <ref>` then `supabase db push`.

### 2. Anthropic API key
You said you'd get this. It must **never** go in `.env` — `EXPO_PUBLIC_*` vars
are compiled into the app bundle and are trivially extractable. Put the key in
a Supabase Edge Function that proxies to the Anthropic API, and set
`EXPO_PUBLIC_AI_PROXY_URL` to that function's URL.

### 3. RevenueCat — free at your stage
Free until **$2,500/month tracked revenue**, then 1% of revenue above that. No
card required to start. I can't create the account for you (account creation
with credentials is off-limits for me), but it's about five minutes:
1. app.revenuecat.com → sign up.
2. Create project **Cairn** → add iOS and Android apps with bundle id `app.cairn.family`.
3. Create an entitlement with identifier exactly **`premium`** (the adapter looks for that string).
4. Add products `cairn.premium.annual` and `cairn.premium.monthly`, attach both to the entitlement.
5. API keys → copy the **public SDK keys** into `EXPO_PUBLIC_REVENUECAT_IOS_KEY` / `_ANDROID_KEY`.

Products can't be created in RevenueCat until they exist in App Store Connect
and Play Console, so this comes after the developer accounts.

### 4. Developer accounts (do these first — approval takes days)
- Apple Developer Program, $99/yr → App Store Connect → new app, bundle `app.cairn.family`, subscription group with both products.
- Google Play Console, $25 once → new app → subscriptions.

## Dev build required

`react-native-argon2`, `expo-notifications` and `react-native-purchases` are
native modules — **Expo Go cannot load them**. Once you have an Apple account:

```bash
cd apps/mobile && npx expo prebuild && npx expo run:ios
```

## Open compliance decision

`ITSAppUsesNonExemptEncryption` is deliberately **not** set in `app.json`.
Cairn uses AES-256-GCM and Argon2id for its own data, which normally qualifies
for Apple's standard-encryption exemption — but that is a legal declaration
about your app, so it is yours to make at first submission, not mine to
pre-answer.
