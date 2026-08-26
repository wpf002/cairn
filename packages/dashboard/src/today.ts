import type { Audience } from '@cairn/framework';
import {
  countdown,
  monthsBetween,
  pregnancyStatus,
  rolePosition,
  stageForMonths,
  yearsBetween,
  type CalendarDate,
} from '@cairn/stages';
import { selectUnits, type ResolvedUnit, type Unit } from '@cairn/substrate';
import type { ChildInput } from './child.js';

/**
 * The TODAY screen. Section 20 — the product surface, per the Brightwheel
 * read: everything else is depth behind this one recurring artifact.
 *
 * Contextual: one block per pregnancy and per child, each reduced to a
 * headline, one focus unit, one action, and the counter. Depth is a tap away;
 * TODAY itself must be readable in under a minute by a tired parent.
 */
export interface TodayBlock {
  readonly kind: 'pregnancy' | 'child';
  readonly id: string;
  readonly headline: string;
  readonly subline: string;
  /** The single focus unit chosen for today. */
  readonly focus: ResolvedUnit | null;
  /** One action, lifted from the focus unit. */
  readonly action: string | null;
  /** Weeks remaining to 21 (children) or days to due date (pregnancy). */
  readonly counterLine: string;
}

export interface TodayViewModel {
  readonly greetingName: string;
  readonly blocks: readonly TodayBlock[];
  /** Parent-formation focus — Becoming The Parent They Need, voiced. */
  readonly parentFocus: ResolvedUnit | null;
}

export interface TodayInput {
  readonly audience: Audience;
  readonly greetingName: string;
  readonly dueDate: CalendarDate | null;
  readonly motherName: string;
  readonly children: readonly ChildInput[];
}

/** Deterministic day-index so the focus rotates daily without randomness. */
function dayIndex(on: CalendarDate): number {
  return Math.floor(Date.parse(`${on}T12:00:00Z`) / 86_400_000);
}

function pick<T>(items: readonly T[], seed: number): T | null {
  if (items.length === 0) return null;
  return items[seed % items.length] ?? null;
}

export function buildToday(input: TodayInput, units: readonly Unit[], on: CalendarDate): TodayViewModel {
  const blocks: TodayBlock[] = [];
  const seed = dayIndex(on);

  if (input.dueDate) {
    const status = pregnancyStatus(input.dueDate, on);
    const resolved = status.hasContent
      ? selectUnits(units, { audience: input.audience, week: status.week, includeCrossVoice: true })
      : [];
    const descriptive = resolved.find((r) => r.unit.claimType === 'descriptive');
    const actionable = resolved.filter((r) => r.unit.actions?.length);
    const focus = pick(actionable, seed) ?? descriptive ?? null;
    blocks.push({
      kind: 'pregnancy',
      id: 'pregnancy',
      headline: `${input.motherName} — ${status.week} weeks pregnant`,
      subline: descriptive?.unit.title ?? 'A new week is coming.',
      focus,
      action: focus?.unit.actions?.[0] ?? null,
      counterLine:
        status.daysUntilDue > 0 ? `${status.daysUntilDue} days until the due date` : 'Due now',
    });
  }

  for (const child of input.children) {
    const months = monthsBetween(child.birthdate, on);
    if (months < 0) continue;
    const stage = stageForMonths(months);
    const years = yearsBetween(child.birthdate, on);
    const role = rolePosition(years);
    const resolved = stage
      ? selectUnits(units, { audience: input.audience, stage: stage.id, includeCrossVoice: true })
      : [];
    const actionable = resolved.filter((r) => r.unit.actions?.length && r.unit.claimType !== 'descriptive');
    const focus = pick(actionable, seed + child.id.length);
    const c = countdown(child.birthdate, 21, on);
    blocks.push({
      kind: 'child',
      id: child.id,
      headline: `${child.name} — ${stage ? stage.label : 'grown'}`,
      subline: `Your role: ${role.label}`,
      focus,
      action: focus?.unit.actions?.[0] ?? null,
      counterLine: c.complete
        ? 'The formation years are complete.'
        : `${c.weeksRemaining.toLocaleString('en-US')} weeks until 21`,
    });
  }

  // Parent formation: voiced, rotating daily.
  const parentUnits = selectUnits(units, {
    audience: input.audience,
    stage: 'newborn', // parent-scoped units with stages:'all' match any stage query
    includeCrossVoice: false,
  }).filter((r) => r.unit.scope.kind === 'parent');
  const parentFocus = pick(parentUnits, seed);

  return { greetingName: input.greetingName, blocks, parentFocus };
}
