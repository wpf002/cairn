# Cairn

Christian family formation platform — conception through age 21.

A cairn is a trail marker: stones stacked one at a time to show the way through.

## What this is

Cairn accompanies parents from the first positive pregnancy test through the day
their child enters adulthood. Week-by-week through pregnancy; stage-by-stage
from birth to twenty-one. Every stage answers four questions:

1. **What is happening?** — development, explained from authoritative sources.
2. **What does my child need from me right now?** — parenting guidance.
3. **How should I think about this as a Christian parent?** — Scripture, in context.
4. **What can I actually do today?** — specific actions.

See [`docs/`](docs/) for the roadmap and competitive analysis.

## Architecture

pnpm workspace, TypeScript throughout.

| Package | Owns |
|---|---|
| `@cairn/stages` | Birthdate → developmental stage; role curves (Caretaker → Coach → Consultant → Counselor); pregnancy weeks; the weeks-remaining counter |
| `@cairn/framework` | The seven categories (SEE / RECEIVE / EXPERIENCE / HEAR / LEARN / BELIEVE / BECOME); worksheet signal model (▲ emphasis / ● opportunity); voice + household-shape resolution |
| `@cairn/canon` | The 66-book canon, scripture reference parsing, theological review state, context blocks |
| `@cairn/substrate` | Content units + provenance; claim-type validator; doctrinal ruleset; coverage gate; retrieval |
| `@cairn/escalation` | Deterministic medical + safety triggers. Evaluated before any model call; the model can add, never remove |
| `@cairn/crypto` | Client-side envelope encryption, key derivation, recovery (Phase 1) |
| `@cairn/db` | Prisma / Supabase Postgres (Phase 1) |
| `@cairn/ai` | Anthropic SDK adapter, retrieval-bound generation, response contracts (Phase 5) |
| `apps/mobile` | Expo / React Native (Phase 3+) |

## Invariants (enforced in CI, not in process)

1. No unprovenanced content ships.
2. Escalation is deterministic; the model may add escalation, never remove it.
3. AI is retrieval-bound and cites the units used.
4. The model does not diagnose.
5. Minor data is encrypted client-side; the server holds ciphertext only.
6. Content units are immutable and versioned.
7. One `Person` row per human; relationships are time-bounded edges.
8. Every normative unit carries a scriptural warrant with exegesis, application,
   and stated misuse. Descriptive units carry evidence refs and no scripture.
9. Voice (mother / father / shared) is a first-class dimension; no unit assumes
   a two-parent household.
10. No advertising. Ever.

## Development

```bash
pnpm install
npx tsc -p tsconfig.json   # typecheck
npx vitest run              # tests
pnpm validate:substrate     # the content gate
```
