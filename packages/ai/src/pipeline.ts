import { evaluate, mergeModelEscalations, type Escalation, type EscalationContext } from '@cairn/escalation';
import { assertNoAbsentParentLeak, type Audience } from '@cairn/framework';
import { monthsBetween, stageForMonths, type CalendarDate } from '@cairn/stages';
import { checkDoctrine, selectUnits, unitKey, type ResolvedUnit, type Unit } from '@cairn/substrate';
import { parseDraft, type DraftProblem, type HelpResponse, type ModelDraft } from './contract.js';
import { buildRepairPrompt, buildSystemPrompt } from './prompt.js';
import { MAX_REPAIR_ATTEMPTS, type ModelAdapter } from './model.js';

/**
 * Help Me Parent This. Roadmap section 25 and Phase 5's gate, as one pipeline:
 *
 *   1. Escalation rules run FIRST, deterministically, on the raw situation.
 *   2. Retrieval runs voice- and household-filtered (invariant 9).
 *   3. The model drafts six of the seven blocks.
 *   4. Enforcement: citations must name retrieved units; scripture must come
 *      from cited warrants; diagnosis and doctrine violations fail the draft;
 *      the escalation block is built here from the deterministic set plus
 *      model additions — the model never touches the deterministic set.
 *
 * Every enforcement is code, not prompt. The prompt asks; the pipeline checks.
 */
export interface HelpQuery {
  readonly situation: string;
  readonly audience: Audience;
  readonly child?: { readonly birthdate: CalendarDate };
  readonly gestationalWeek?: number;
  readonly on: CalendarDate;
}

export interface HelpResult {
  readonly response: HelpResponse;
  /** What was retrieved, for the citations UI. */
  readonly retrieved: readonly ResolvedUnit[];
  /** Enforcement notes, for audit logging. */
  readonly enforcement: readonly string[];
}

export class UngroundedResponseError extends Error {
  constructor(readonly problems: readonly DraftProblem[]) {
    super(
      `Model response failed grounding after repair: ${problems.map((p) => `${p.field}: ${p.problem}`).join('; ')}`,
    );
    this.name = 'UngroundedResponseError';
  }
}

/** Content rules a structurally-valid draft must still pass. */
export function auditDraft(
  draft: ModelDraft,
  retrieved: readonly ResolvedUnit[],
  audience: Audience,
): { problems: DraftProblem[]; enforcement: string[] } {
  const problems: DraftProblem[] = [];
  const enforcement: string[] = [];

  const retrievedKeys = new Set(retrieved.map((r) => unitKey(r.unit)));
  const retrievedById = new Map(retrieved.map((r) => [unitKey(r.unit), r]));

  // Invariant 3: citations must resolve to retrieved units, and there must be some.
  if (draft.citations.length === 0) {
    problems.push({ field: 'citations', problem: 'Every answer must cite the units it is grounded in.' });
  }
  for (const c of draft.citations) {
    if (!retrievedKeys.has(c)) {
      problems.push({ field: 'citations', problem: `"${c}" was not in the retrieved set. Cite only retrieved units.` });
    }
  }

  // Scripture may only come from cited warrants (no fabricated warrant).
  const allowedPassages = new Set<string>();
  for (const c of draft.citations) {
    const r = retrievedById.get(c);
    for (const p of r?.unit.warrant?.passages ?? []) allowedPassages.add(p.toLowerCase().replace(/\s+/g, ' '));
  }
  for (const p of draft.biblicalPerspective.passages) {
    const norm = p.toLowerCase().replace(/\s+/g, ' ');
    if (!allowedPassages.has(norm)) {
      problems.push({
        field: 'biblicalPerspective.passages',
        problem: `"${p}" is not carried by any cited unit's warrant. Scripture must come from cited units.`,
      });
    }
  }

  // Invariant 9: cited units must be servable to this audience. The retrieval
  // already filtered, so this only fires if the model cites a unit that
  // reached it some other way — belt and braces.
  try {
    assertNoAbsentParentLeak(
      draft.citations
        .map((c) => retrievedById.get(c))
        .filter((r): r is ResolvedUnit => Boolean(r))
        .map((r) => ({ id: r.unit.id, voice: r.unit.voice, resolved: r.decision })),
      audience,
    );
  } catch (e) {
    problems.push({ field: 'citations', problem: e instanceof Error ? e.message : String(e) });
  }

  // Invariant 4 + doctrine: run the same ruleset content ships under.
  // Checked per field, not over joined prose — a legitimate "do not…" in one
  // field must not exempt a violation in another.
  const proseFields: ReadonlyArray<readonly [string, string]> = [
    ['whatsProbablyHappening', draft.whatsProbablyHappening],
    ...draft.howToRespond.map((t, i) => [`howToRespond[${i}]`, t] as const),
    ...draft.whatNotToDo.map((t, i) => [`whatNotToDo[${i}]`, t] as const),
    ['conversationToHave', draft.conversationToHave],
    ['biblicalPerspective.text', draft.biblicalPerspective.text],
    ['prayer', draft.prayer],
  ];
  for (const [field, text] of proseFields) {
    for (const finding of checkDoctrine(text)) {
      if (finding.severity === 'error') {
        problems.push({ field, problem: `${finding.summary}: "${finding.excerpt}"` });
      } else {
        enforcement.push(`doctrine warning in ${field}: ${finding.summary}`);
      }
    }
  }
  const prose = proseFields.map(([, t]) => t).join('\n');

  // Diagnosis pattern beyond the doctrine rule: naming conditions.
  const DIAGNOSIS =
    /\b(?:your child (?:has|likely has|probably has|may have)|this (?:is|sounds like|looks like))\s+(?:adhd|autism|asd|odd|ocd|a (?:disorder|condition)|(?:clinical )?depression|an anxiety disorder|bipolar)/i;
  const m = DIAGNOSIS.exec(prose);
  if (m) {
    problems.push({ field: '(prose)', problem: `Diagnosis language is forbidden (invariant 4): "${m[0]}"` });
  }

  return { problems, enforcement };
}

export async function helpMeParentThis(
  query: HelpQuery,
  units: readonly Unit[],
  adapter: ModelAdapter,
): Promise<HelpResult> {
  const enforcement: string[] = [];

  // ---- 1. Deterministic escalation, before and independent of the model ----
  const months = query.child ? monthsBetween(query.child.birthdate, query.on) : undefined;
  const escalationContext: EscalationContext = {
    text: query.situation,
    ...(months !== undefined ? { childAgeMonths: months } : {}),
    ...(query.gestationalWeek !== undefined ? { gestationalWeek: query.gestationalWeek } : {}),
  };
  const deterministic = evaluate(escalationContext);
  if (deterministic.length > 0) {
    enforcement.push(`deterministic escalations: ${deterministic.map((e) => e.ruleId).join(', ')}`);
  }

  // ---- 2. Voice-filtered retrieval --------------------------------------
  const stage = months !== undefined ? stageForMonths(months) : null;
  const retrieved = selectUnits(units, {
    audience: query.audience,
    ...(stage ? { stage: stage.id } : {}),
    ...(query.gestationalWeek !== undefined && !stage ? { week: query.gestationalWeek } : {}),
    includeCrossVoice: false,
  });

  // ---- 3–4. Draft, validate, repair once, audit -------------------------
  const system = buildSystemPrompt(retrieved, {
    ...(months !== undefined ? { childAgeMonths: months } : {}),
    ...(stage ? { stageLabel: stage.label } : {}),
    ...(query.gestationalWeek !== undefined ? { gestationalWeek: query.gestationalWeek } : {}),
  });

  let raw = await adapter.complete({ system, user: query.situation, responseFormat: 'json' });
  let attempt = 0;
  let draft: ModelDraft | null = null;
  let problems: DraftProblem[] = [];

  for (;;) {
    const parsed = parseDraft(raw);
    if (parsed.draft) {
      const audit = auditDraft(parsed.draft, retrieved, query.audience);
      enforcement.push(...audit.enforcement);
      if (audit.problems.length === 0) {
        draft = parsed.draft;
        break;
      }
      problems = audit.problems;
    } else {
      problems = parsed.problems;
    }
    if (attempt >= MAX_REPAIR_ATTEMPTS) break;
    attempt += 1;
    raw = await adapter.complete({
      system: `${system}\n\n${buildRepairPrompt(problems)}`,
      user: query.situation,
      responseFormat: 'json',
    });
  }

  if (!draft) throw new UngroundedResponseError(problems);

  // ---- 5. Build the escalation block: deterministic + model additions ----
  const modelAdditions: Escalation[] = (draft.additionalCautions ?? []).map((text, i) => ({
    ruleId: `model.caution-${i + 1}`,
    urgency: 'routine',
    referral: 'pediatrician',
    message: text,
    source: { org: 'Cairn AI', title: 'Model-suggested caution', sourceDate: query.on },
    matched: 'model-addition',
  }));
  const professionalAttention = mergeModelEscalations(deterministic, modelAdditions);

  return {
    response: {
      whatsProbablyHappening: draft.whatsProbablyHappening,
      howToRespond: draft.howToRespond,
      whatNotToDo: draft.whatNotToDo,
      conversationToHave: draft.conversationToHave,
      biblicalPerspective: draft.biblicalPerspective,
      prayer: draft.prayer,
      professionalAttention,
      citations: draft.citations,
    },
    retrieved,
    enforcement,
  };
}
