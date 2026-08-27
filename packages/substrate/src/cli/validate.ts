#!/usr/bin/env tsx
/**
 * Substrate validator, run in CI.
 *
 * Exits non-zero on any error-severity violation, which is what makes
 * invariant 1 ("no unprovenanced content ships") a fact about the build rather
 * than a note in a document.
 */
import { allUnits } from '../corpus.js';
import { coverage, formatCoverage, FULL_SCOPE, MVP_SCOPE } from '../coverage.js';
import { validateCorpus } from '../validate.js';
import { lintCorpusVoice } from '../voice.js';

const RESET = '\u001b[0m';
const RED = '\u001b[31m';
const YELLOW = '\u001b[33m';
const GREEN = '\u001b[32m';
const DIM = '\u001b[2m';

function main(): void {
  const units = allUnits();
  const report = validateCorpus(units);

  console.log(`${DIM}cairn substrate validator${RESET}`);
  console.log(`  units:    ${report.unitCount}`);
  console.log(`  errors:   ${report.errors}`);
  console.log(`  warnings: ${report.warnings}`);

  for (const v of report.violations) {
    const colour = v.severity === 'error' ? RED : YELLOW;
    console.log(`\n${colour}${v.severity.toUpperCase()}${RESET} ${v.unit}  ${DIM}[${v.rule} - ${v.enforces}]${RESET}`);
    console.log(`  ${v.message}`);
  }

  const cov = coverage(units, MVP_SCOPE);
  console.log(`\n${DIM}MVP coverage (section 35 scope)${RESET}`);
  console.log(`  ${formatCoverage(cov)}`);

  const full = coverage(units, FULL_SCOPE);
  console.log(`${DIM}Full coverage (conception through 21, both voices)${RESET}`);
  console.log(`  ${formatCoverage(full)}`);
  if (!full.complete) {
    for (const slot of full.missing.slice(0, 10)) {
      const where = slot.kind === 'stage' ? slot.stage : `week ${slot.week}`;
      console.log(`  ${DIM}missing${RESET} ${where} - ${slot.category} - ${slot.voice}`);
    }
    console.log(`\n${RED}Full-scope coverage gate failed.${RESET}`);
    process.exit(1);
  }
  if (!cov.complete && units.length > 0) {
    const sample = cov.missing.slice(0, 10);
    for (const slot of sample) {
      const where = slot.kind === 'stage' ? slot.stage : `week ${slot.week}`;
      console.log(`  ${DIM}missing${RESET} ${where} - ${slot.category} - ${slot.voice}`);
    }
    if (cov.missing.length > sample.length) {
      console.log(`  ${DIM}... and ${cov.missing.length - sample.length} more${RESET}`);
    }
  }

  // Voice gate. Reported, not yet enforced: the corpus predates it and the
  // rewrite is in flight. Flip this to process.exit(1) when the count hits
  // zero, and it becomes as binding as the provenance gate.
  const voice = lintCorpusVoice(units);
  console.log(`\n${DIM}Voice gate (reporting only)${RESET}`);
  console.log(`  median body: ${voice.medianBodyWords} words`);
  console.log(`  errors: ${voice.errors}   warnings: ${voice.warnings}`);
  const byRule = new Map<string, number>();
  for (const f of voice.findings) byRule.set(f.rule, (byRule.get(f.rule) ?? 0) + 1);
  for (const [rule, n] of [...byRule.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${DIM}${String(n).padStart(4)}${RESET} ${rule}`);
  }

  if (report.errors > 0) {
    console.log(`\n${RED}Substrate gate failed.${RESET} ${report.errors} error(s).`);
    process.exit(1);
  }
  console.log(`\n${GREEN}Substrate gate passed.${RESET}`);
}

main();
