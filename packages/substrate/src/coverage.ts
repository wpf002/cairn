import { CATEGORIES, type Category, type Voice } from '@cairn/framework';
import { coveredWeeks, STAGES, type StageId } from '@cairn/stages';
import { validateUnit } from './validate.js';
import type { Unit } from './types.js';

/**
 * The coverage gate. Roadmap section 16a.
 *
 * "Backed by God's Word" is defined as a countable condition rather than a
 * feeling: every one of the seven categories, at every stage in scope, ships
 * with at least one normative unit carrying a full warrant — and per section
 * 16b, in every voice that stage requires.
 *
 * This is what Phase 2's gate runs.
 */
export type CoverageSlot =
  | { readonly kind: 'stage'; readonly stage: StageId; readonly category: Category; readonly voice: Voice }
  | { readonly kind: 'pregnancy'; readonly week: number; readonly category: Category; readonly voice: Voice };

export interface CoverageReport {
  readonly required: number;
  readonly covered: number;
  readonly missing: readonly CoverageSlot[];
  readonly complete: boolean;
}

export interface CoverageScope {
  /** Stages that must be covered. Omit for none. */
  readonly stages?: readonly StageId[];
  /** Pregnancy weeks that must be covered. Omit for none. */
  readonly weeks?: readonly number[];
  /**
   * Voices required per slot. Section 35: a father-only or mother-only launch
   * is not a viable half-step, so the MVP requires both.
   */
  readonly voices?: readonly Voice[];
  readonly categories?: readonly Category[];
}

/** A unit only counts toward coverage if it would actually pass the gate. */
function counts(unit: Unit): boolean {
  if (unit.claimType !== 'normative') return false;
  return validateUnit(unit).every((v) => v.severity !== 'error');
}

/** A voiced slot is satisfied by a unit in that voice, or by a shared unit. */
function servesVoice(unit: Unit, voice: Voice): boolean {
  return unit.voice === voice || unit.voice === 'shared';
}

export function coverage(units: readonly Unit[], scope: CoverageScope): CoverageReport {
  const categories = scope.categories ?? CATEGORIES;
  const voices = scope.voices ?? (['mother', 'father'] as const);
  const eligible = units.filter(counts);
  const missing: CoverageSlot[] = [];
  let required = 0;
  let covered = 0;

  for (const stage of scope.stages ?? []) {
    for (const category of categories) {
      for (const voice of voices) {
        required += 1;
        const hit = eligible.some(
          (u) =>
            u.category === category &&
            servesVoice(u, voice) &&
            (u.scope.kind === 'stage' || u.scope.kind === 'parent') &&
            (u.scope.stages === 'all' || u.scope.stages.includes(stage)),
        );
        if (hit) covered += 1;
        else missing.push({ kind: 'stage', stage, category, voice });
      }
    }
  }

  for (const week of scope.weeks ?? []) {
    for (const category of categories) {
      for (const voice of voices) {
        required += 1;
        const hit = eligible.some(
          (u) =>
            u.category === category &&
            servesVoice(u, voice) &&
            u.scope.kind === 'pregnancy' &&
            u.scope.weeks.includes(week),
        );
        if (hit) covered += 1;
        else missing.push({ kind: 'pregnancy', week, category, voice });
      }
    }
  }

  return { required, covered, missing, complete: missing.length === 0 };
}

/** Everything the product must eventually cover: all fourteen stages plus weeks 4–40. */
export const FULL_SCOPE: CoverageScope = {
  stages: STAGES.map((s) => s.id),
  weeks: coveredWeeks(),
  voices: ['mother', 'father'],
};

/**
 * Phase 2's scope. Section 35: pregnancy weeks 4–40 plus birth to five, both
 * voices, and nothing else pretends to be finished.
 */
export const MVP_SCOPE: CoverageScope = {
  stages: ['newborn', 'early-infancy', 'later-infancy', 'early-toddler', 'toddler', 'preschool'],
  weeks: coveredWeeks(),
  voices: ['mother', 'father'],
};

export function formatCoverage(report: CoverageReport): string {
  const pct = report.required === 0 ? 100 : Math.round((report.covered / report.required) * 1000) / 10;
  return `${report.covered}/${report.required} slots covered (${pct}%)`;
}
