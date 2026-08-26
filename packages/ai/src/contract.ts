import type { Escalation } from '@cairn/escalation';

/**
 * The seven-block response contract. Roadmap section 25.
 *
 * WHEN THIS MAY NEED PROFESSIONAL ATTENTION is populated by @cairn/escalation
 * deterministically before the model runs. The model can add to it. It can
 * never remove from it — enforced by construction in the pipeline, which
 * builds that block itself and only ever appends model additions.
 */
export interface HelpResponse {
  readonly whatsProbablyHappening: string;
  readonly howToRespond: readonly string[];
  readonly whatNotToDo: readonly string[];
  readonly conversationToHave: string;
  readonly biblicalPerspective: {
    readonly text: string;
    /** Scripture refs — must come from cited units' warrants, never invented. */
    readonly passages: readonly string[];
  };
  readonly prayer: string;
  readonly professionalAttention: readonly Escalation[];
  /** Unit ids (id@version) the answer is grounded in. Invariant 3. */
  readonly citations: readonly string[];
}

/** What the model is asked to return — everything except the escalation block. */
export interface ModelDraft {
  readonly whatsProbablyHappening: string;
  readonly howToRespond: readonly string[];
  readonly whatNotToDo: readonly string[];
  readonly conversationToHave: string;
  readonly biblicalPerspective: { readonly text: string; readonly passages: readonly string[] };
  readonly prayer: string;
  /** Optional extra cautions the model wants to add to the professional block. */
  readonly additionalCautions?: readonly string[];
  readonly citations: readonly string[];
}

export interface DraftProblem {
  readonly field: string;
  readonly problem: string;
}

function isStringArray(x: unknown): x is string[] {
  return Array.isArray(x) && x.every((s) => typeof s === 'string');
}

/** Structural validation of the model's JSON. Content rules live in the pipeline. */
export function parseDraft(raw: string): { draft: ModelDraft | null; problems: DraftProblem[] } {
  const problems: DraftProblem[] = [];
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    // Models love to wrap JSON in fences; strip and retry before giving up.
    const stripped = raw.replace(/^```(?:json)?\s*/m, '').replace(/```\s*$/m, '');
    try {
      parsed = JSON.parse(stripped);
    } catch {
      return { draft: null, problems: [{ field: '(root)', problem: 'Response is not valid JSON.' }] };
    }
  }
  const o = parsed as Record<string, unknown>;
  if (typeof o.whatsProbablyHappening !== 'string' || !o.whatsProbablyHappening.trim()) {
    problems.push({ field: 'whatsProbablyHappening', problem: 'Required non-empty string.' });
  }
  if (!isStringArray(o.howToRespond) || o.howToRespond.length === 0) {
    problems.push({ field: 'howToRespond', problem: 'Required non-empty string array.' });
  }
  if (!isStringArray(o.whatNotToDo)) problems.push({ field: 'whatNotToDo', problem: 'Required string array.' });
  if (typeof o.conversationToHave !== 'string') {
    problems.push({ field: 'conversationToHave', problem: 'Required string.' });
  }
  const bp = o.biblicalPerspective as Record<string, unknown> | undefined;
  if (!bp || typeof bp.text !== 'string' || !isStringArray(bp.passages)) {
    problems.push({ field: 'biblicalPerspective', problem: 'Required { text, passages[] }.' });
  }
  if (typeof o.prayer !== 'string') problems.push({ field: 'prayer', problem: 'Required string.' });
  if (!isStringArray(o.citations)) problems.push({ field: 'citations', problem: 'Required string array.' });
  if (o.additionalCautions !== undefined && !isStringArray(o.additionalCautions)) {
    problems.push({ field: 'additionalCautions', problem: 'Must be a string array when present.' });
  }
  if (problems.length > 0) return { draft: null, problems };
  return { draft: parsed as ModelDraft, problems: [] };
}
