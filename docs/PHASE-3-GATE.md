# Phase 3 gate — parity against the Forbes metric list

Per §36, Phase 3 gates on parity with the Forbes Health pregnancy-app
evaluation metrics, minus community and trying-to-conceive (deferred by
decision, §28).

| Forbes metric | Status | Where |
|---|---|---|
| iOS + Android availability | ✅ architecture | Expo app, both targets (`apps/mobile`) |
| Fetal development content | ✅ | 37 weekly descriptive units, ACOG/NIH-sourced (`pregnancy.development.ts`) |
| Customized pregnancy timeline | ✅ | due-date-anchored `pregnancyStatus` + week cards |
| Weight tracker | ✅ | IOM/NAM bands by BMI category (`weight.ts`) |
| Symptom tracking | ✅ | 14 symptoms with prevalence %, escalation-wired (`symptoms.ts`) |
| Health & wellness content | ✅ | TAKING CARE OF MOM units, per trimester |
| Kick counter | ✅ | baseline-aware, escalation-wired (`kicks.ts`) |
| Contraction timer | ✅ | 5-1-1 detection (`contractions.ts`) |
| Appointment tracking + calendar integration | ✅ | rhythm generator + ICS export (`appointments.ts`) |
| Hospital bag list | ✅ | template + progress (`checklists.ts`) |
| Exportable birth plan | ✅ | plain-text export with faith block (`checklists.ts`) |
| Push notifications & reminders | ✅ logic | weekly cards, appointment reminders, counter milestones (`notifications.ts`) — device wiring via expo-notifications at release |
| Bump photo album | ✅ | 37-week album continuing to age 21 (`album.ts`) — the birth-cliff bridge |
| 3D fetal renderings | ⏳ deferred | §28 decision: 2D illustration for MVP, license decision later |
| Community / social | ⏳ deferred | §28: Phase 8, gated on moderation tooling |
| TTC support | ⏳ deferred | §28: needs its own editorial treatment |

Store ratings are earned post-launch and not claimable here.

Documented category weaknesses designed against: no ads (invariant 10), no
dark-pattern trial popups (Kinedu's 3.2★), escalation banners cannot be
dismissed by UI code (invariant 2), notification types that could express
nagging do not exist in the type system.
