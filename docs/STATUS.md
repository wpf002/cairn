# Build status — Phases 0–8

All eight phases of the roadmap are built and gated. 190 tests, substrate
validator green at full scope, mobile app typechecks clean.

| Phase | Delivered | Gate |
|---|---|---|
| 0 — Foundation | `@cairn/stages` (14 stages to 22, role curves, pregnancy math, counter), `@cairn/framework` (7 categories, ▲/● signals, voice resolution), `@cairn/canon` (66-book canon, ref parser, review state), `@cairn/substrate` (claim types, warrants, doctrinal ruleset, coverage, retrieval), `@cairn/escalation` (ACOG/AAP rules, additive-only) | ✅ escalation suite green; build fails on unprovenanced fixture / missing warrant / missing misuse / scripture on descriptive |
| 1 — Data + auth + crypto | `@cairn/crypto` (Argon2id floor, BIP39, envelope, escrow, keychain, journaling gate), `@cairn/db` (Person + time-bounded edges incl. grandparent/mentor/godparent, onboarding state machine, Prisma schema) | ✅ all four §33a conditions in tests |
| 2 — Substrate v1 | 98→133 units: weeks 4–40 (37 weekly dev + 21 formation + care/practical), ages 0–5 all categories, voiced pairs + solo variants | ✅ 602/602 MVP slots |
| 3 — Pregnancy surface | `@cairn/trackers` (kicks w/ baseline flags, 5-1-1, IOM weight, symptoms w/ prevalence, bag, birth plan, ICS appointments, 21-year album, thank-you-only notifications), Expo app shell | ✅ Forbes parity table (docs/PHASE-3-GATE.md) |
| 4 — Home + dashboards | `@cairn/dashboard` (TODAY, 10-section child dashboard, roadmap visual), voiced parent-formation units, 4 screens | ✅ mother/father same account render differently; single mother: zero father-voice leaks |
| 5 — Help Me Parent This | `@cairn/ai` (Anthropic SDK adapter — claude-opus-5, streaming, prompt caching — 7-block contract, pipeline enforcement in code) | ✅ red-team suite: suppression, fabrication, diagnosis, guilt, voice leak, fail-closed |
| 6 — Journey | `@cairn/journey` (voice-threaded entries, 4 ceremonies to Recognize@21, sealed letters, encrypted store, export, Story renderer) | ✅ ciphertext-only rows; export survives deletion; recovery rehydrates |
| 7 — Monetization | `@cairn/monetization` (entitlements, RevenueCat seam, annual-first paywall). Amendment recorded: multi-child + export free | ✅ tests |
| 8 — Expansion | Ages 5–21: 8 descriptive stage units + 3 formation bands (coach years, consultant years incl. cross-voiced pornography briefs, counselor years to the Recognize ceremony) | ✅ 714/714 full-scope slots, gate now enforced in CI |

## Deliberately not built (release-time wiring)

- **Live service keys**: Supabase project, RevenueCat products, the backend
  proxy holding the Anthropic API key (never in the app bundle),
  expo-notifications / image-picker wiring. All seams exist and are typed.
- **Native Argon2id**: injected interface; mobile supplies react-native-argon2
  or libsodium at release. Parameter floor enforced regardless.
- **Named reviewers**: `doc-gate` / `tobias-gate` are role placeholders. The
  competitive analysis is blunt that named humans are the trust — hiring, not
  code.

## Deferred by roadmap decision (§28, revisit post-launch)

Community layer (needs moderation tooling) · trying-to-conceive · 3D fetal
renderings (2D for MVP) · Apple Health · in-product help assistant.

## Amendments adopted from the competitive analysis

1. Multi-child profiles free (Kinedu's 3.2★ lesson) — §30 amended in code.
2. Export free forever — memories never ransomed.
3. Closing-window notifications — the ▲/● model drives them (`closingWindows`).
4. The counter (weeks to 21) on TODAY and as rare milestone notifications.
5. Notification types that could express nagging do not exist in the type system.
