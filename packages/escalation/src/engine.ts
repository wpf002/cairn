import { CHILD_RULES } from './rules.child.js';
import { MATERNAL_RULES } from './rules.maternal.js';
import {
  URGENCY_ORDER,
  type Escalation,
  type EscalationContext,
  type EscalationRule,
} from './types.js';

export const ALL_RULES: readonly EscalationRule[] = [...MATERNAL_RULES, ...CHILD_RULES];

/**
 * Evaluate the escalation rules against a context.
 *
 * Pure and deterministic: same context, same result, no model anywhere near
 * it. Called before every Help Me Parent This response (section 25) and by the
 * trackers directly. Results are sorted most-urgent first, deduplicated by
 * rule, and the caller may append — invariant 2 says the model can add
 * escalation but never remove it, and the type system helps by exporting only
 * this additive merge.
 */
export function evaluate(ctx: EscalationContext, rules: readonly EscalationRule[] = ALL_RULES): Escalation[] {
  const out: Escalation[] = [];
  const text = ctx.text ?? '';
  const flags = new Set(ctx.flags ?? []);

  for (const rule of rules) {
    // A predicate can veto (age gates) or, for flag-driven rules, fire alone.
    if (rule.predicate && !rule.predicate(ctx)) continue;

    let matched: string | null = null;

    if (flags.has(rule.id)) {
      matched = `flag:${rule.id}`;
    } else if (text) {
      for (const pattern of rule.patterns) {
        const m = pattern.exec(text);
        if (m) {
          matched = m[0].slice(0, 120);
          break;
        }
      }
    }

    if (matched === null) continue;

    const escalation: Escalation = {
      ruleId: rule.id,
      urgency: rule.urgency,
      referral: rule.referral,
      message: rule.message,
      source: rule.source,
      matched,
      ...(rule.detail !== undefined ? { detail: rule.detail } : {}),
    };
    out.push(escalation);
  }

  return sortEscalations(out);
}

export function sortEscalations(escalations: readonly Escalation[]): Escalation[] {
  return [...escalations].sort(
    (a, b) => URGENCY_ORDER[b.urgency] - URGENCY_ORDER[a.urgency] || a.ruleId.localeCompare(b.ruleId),
  );
}

/**
 * Merge model-suggested escalations into the deterministic set.
 *
 * The deterministic set survives untouched; model additions are appended and
 * marked. There is intentionally no function in this package that removes an
 * escalation.
 */
export function mergeModelEscalations(
  deterministic: readonly Escalation[],
  modelAdditions: readonly Escalation[],
): Escalation[] {
  const have = new Set(deterministic.map((e) => e.ruleId));
  const additions = modelAdditions
    .filter((e) => !have.has(e.ruleId))
    .map((e) => ({ ...e, ruleId: e.ruleId.startsWith('model.') ? e.ruleId : `model.${e.ruleId}` }));
  return sortEscalations([...deterministic, ...additions]);
}

/** The highest urgency present, for a surface deciding how loudly to render. */
export function peakUrgency(escalations: readonly Escalation[]): Escalation['urgency'] | null {
  return escalations.length === 0 ? null : (escalations[0]?.urgency ?? null);
}
