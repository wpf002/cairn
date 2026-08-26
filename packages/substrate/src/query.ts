import {
  assertNoAbsentParentLeak,
  resolveVoice,
  type Audience,
  type Category,
  type VoiceDecision,
} from '@cairn/framework';
import type { StageId } from '@cairn/stages';
import type { Unit } from './types.js';

/**
 * Retrieval over the substrate.
 *
 * Invariant 3 makes generation retrieval-bound, and section 16b's rule 4 makes
 * voice filtering a hard requirement rather than a ranking preference. Both run
 * here, before anything reaches a model or a screen, so there is one place to
 * audit rather than one per surface.
 */
export interface ResolvedUnit {
  readonly unit: Unit;
  readonly decision: Extract<VoiceDecision, 'serve' | 'solo' | 'paired'>;
  readonly reason: string;
}

export interface Query {
  readonly audience: Audience;
  readonly stage?: StageId;
  readonly week?: number;
  readonly categories?: readonly Category[];
  /** Include cross-voice units the other parent is carrying. Section 16b. */
  readonly includeCrossVoice?: boolean;
}

function inScope(unit: Unit, query: Query): boolean {
  if (query.week !== undefined && unit.scope.kind === 'pregnancy') {
    return unit.scope.weeks.includes(query.week);
  }
  if (query.stage !== undefined && (unit.scope.kind === 'stage' || unit.scope.kind === 'parent')) {
    return unit.scope.stages === 'all' || unit.scope.stages.includes(query.stage);
  }
  return false;
}

export function selectUnits(units: readonly Unit[], query: Query): ResolvedUnit[] {
  const soloIndex = new Map<string, Unit>();
  for (const u of units) if (u.soloVariantOf) soloIndex.set(u.soloVariantOf, u);

  const out: ResolvedUnit[] = [];

  for (const unit of units) {
    // A solo variant is never selected directly; it is reached through its parent.
    if (unit.soloVariantOf) continue;
    if (!inScope(unit, query)) continue;
    if (query.categories && !query.categories.includes(unit.category)) continue;
    if (unit.householdShapes && !unit.householdShapes.includes(query.audience.householdShape)) continue;

    const resolution = resolveVoice(unit.voice, query.audience, {
      hasSoloVariant: soloIndex.has(unit.id),
      crossVoice: Boolean(unit.pairedWith) && Boolean(query.includeCrossVoice),
    });

    if (resolution.decision === 'withhold') continue;

    if (resolution.decision === 'solo') {
      const variant = soloIndex.get(unit.id);
      if (variant) out.push({ unit: variant, decision: 'solo', reason: resolution.reason });
      continue;
    }

    out.push({ unit, decision: resolution.decision, reason: resolution.reason });
  }

  // Invariant 9, checked rather than assumed.
  assertNoAbsentParentLeak(
    out.map((r) => ({ id: r.unit.id, voice: r.unit.voice, resolved: r.decision })),
    query.audience,
  );

  return out;
}

/** Units grouped by category, in the dashboard's order. */
export function groupByCategory(resolved: readonly ResolvedUnit[]): Map<Category, ResolvedUnit[]> {
  const map = new Map<Category, ResolvedUnit[]>();
  for (const r of resolved) {
    const list = map.get(r.unit.category) ?? [];
    list.push(r);
    map.set(r.unit.category, list);
  }
  return map;
}
