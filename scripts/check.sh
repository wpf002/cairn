#!/usr/bin/env bash
# The gate I keep forgetting to run before committing.
#
# Twice now a commit has gone out red: once with a flaky BIP39 test, once
# with an unescaped apostrophe that broke four test files at collection time.
# Both would have been caught by running this. Run it, or wire it as a
# pre-commit hook.
set -euo pipefail
cd "$(dirname "$0")/.."
echo "==> typecheck"
npx tsc -p tsconfig.json
echo "==> mobile typecheck"
(cd apps/mobile && npx tsc --noEmit)
echo "==> tests"
npx vitest run
echo "==> substrate gate"
npx tsx packages/substrate/src/cli/validate.ts
echo
echo "All green."
