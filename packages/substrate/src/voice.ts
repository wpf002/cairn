import type { Unit } from './types.js';

/**
 * The voice gate.
 *
 * Cairn's warrants and provenance were enforced in CI from Phase 0, and its
 * prose was not — so the prose drifted into a register that reads as
 * machine-written: long bodies, an em-dash in three units out of four, and a
 * mid-sentence colon doing the work a full stop should do.
 *
 * Measured on the corpus before this gate existed:
 *   median body 82 words, p90 107, max 126
 *   240 em-dashes across 199 units
 *   205 mid-sentence colon-explainers
 *   82 of 199 titles over eight words
 *
 * The rules below are budgets, not bans. One em-dash in a unit is a choice;
 * one in every unit is a tic. A tired parent at 6am gets a sentence they can
 * finish, and that is a countable property rather than a matter of taste.
 */
export type VoiceSeverity = 'error' | 'warning';

export interface VoiceFinding {
  readonly unit: string;
  readonly rule: string;
  readonly severity: VoiceSeverity;
  readonly message: string;
  /** What to look at, when the rule found a specific span. */
  readonly excerpt?: string;
}

export function words(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function sentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Budgets, by field. Section 20: TODAY must be readable in under a minute. */
export const VOICE_BUDGETS = {
  /** A card headline a parent reads at a glance. */
  titleWords: 9,
  /** One sentence that can carry a card on its own. */
  ledeWords: 24,
  /** The depth behind a tap. Long enough to say something, short enough to finish. */
  bodyWords: 75,
  /** Longest single sentence anywhere. Past this, a tired reader loses the thread. */
  sentenceWords: 32,
  /** One thing to actually do. */
  actionWords: 20,
  /** Em-dashes per unit. One is emphasis; more is a habit. */
  emDashesPerUnit: 1,
  /** Mid-sentence colons per unit, the "claim: explanation" construction. */
  colonExplainersPerUnit: 1,
} as const;

interface Tic {
  readonly id: string;
  readonly pattern: RegExp;
  readonly severity: VoiceSeverity;
  readonly message: string;
}

/**
 * Constructions that mark prose as machine-written in this genre.
 *
 * Every one of these was found in Cairn's own corpus. They are not banned
 * words; they are patterns that, at volume, produce the flat authoritative
 * register the substrate had drifted into.
 */
export const VOICE_TICS: readonly Tic[] = [
  {
    id: 'voice.not-x-but-y',
    pattern: /\b(?:is|are|was|were)\s+not\s+[^.,;]{2,50}[,;]?\s+(?:it|they)\s+(?:is|are)\b/gi,
    severity: 'error',
    message: 'The "it is not X, it is Y" construction. State the thing once, positively.',
  },
  {
    id: 'voice.verdict-opener',
    pattern: /(?:^|\.\s)(?:That|This) is (?:the|what|why|precisely|exactly)\b/g,
    severity: 'error',
    message: 'A sentence that opens by pronouncing a verdict on the previous one. Cut it or fold it in.',
  },
  {
    id: 'voice.which-is-exactly',
    pattern: /\bwhich is (?:exactly|precisely)\b/gi,
    severity: 'error',
    message: 'A clause that tells the reader their own conclusion.',
  },
  {
    id: 'voice.hollow-intensifier',
    pattern: /\b(?:genuinely|precisely|exactly)\b/gi,
    severity: 'warning',
    message: 'Intensifier doing no work. The sentence is usually stronger without it.',
  },
  {
    id: 'voice.and-that-is',
    pattern: /\band that is\b/gi,
    severity: 'warning',
    message: 'Summation tacked onto a sentence that already landed.',
  },
];

const EM_DASH = /—/g;
/** A colon between two lowercase words: the "claim: explanation" tic. */
const COLON_EXPLAINER = /[a-z]: [a-z]/g;

function count(text: string, re: RegExp): number {
  return (text.match(re) ?? []).length;
}

/** Lint one unit's prose. */
export function lintVoice(unit: Unit): VoiceFinding[] {
  const out: VoiceFinding[] = [];
  const add = (rule: string, severity: VoiceSeverity, message: string, excerpt?: string) => {
    out.push(excerpt ? { unit: unit.id, rule, severity, message, excerpt } : { unit: unit.id, rule, severity, message });
  };

  if (words(unit.title) > VOICE_BUDGETS.titleWords) {
    add(
      'voice.title-length',
      'error',
      `Title is ${words(unit.title)} words; budget is ${VOICE_BUDGETS.titleWords}.`,
      unit.title,
    );
  }

  if (unit.lede !== undefined && words(unit.lede) > VOICE_BUDGETS.ledeWords) {
    add('voice.lede-length', 'error', `Lede is ${words(unit.lede)} words; budget is ${VOICE_BUDGETS.ledeWords}.`, unit.lede);
  }

  if (words(unit.body) > VOICE_BUDGETS.bodyWords) {
    add('voice.body-length', 'error', `Body is ${words(unit.body)} words; budget is ${VOICE_BUDGETS.bodyWords}.`);
  }

  for (const sentence of sentences(unit.body)) {
    if (words(sentence) > VOICE_BUDGETS.sentenceWords) {
      add(
        'voice.sentence-length',
        'error',
        `A sentence runs ${words(sentence)} words; budget is ${VOICE_BUDGETS.sentenceWords}.`,
        sentence.slice(0, 90),
      );
    }
  }

  for (const action of unit.actions ?? []) {
    if (words(action) > VOICE_BUDGETS.actionWords) {
      add(
        'voice.action-length',
        'error',
        `An action runs ${words(action)} words; budget is ${VOICE_BUDGETS.actionWords}.`,
        action.slice(0, 90),
      );
    }
  }

  const prose = `${unit.title}\n${unit.lede ?? ''}\n${unit.body}`;

  const dashes = count(prose, EM_DASH);
  if (dashes > VOICE_BUDGETS.emDashesPerUnit) {
    add('voice.em-dash-density', 'error', `${dashes} em-dashes; budget is ${VOICE_BUDGETS.emDashesPerUnit}.`);
  }

  const colons = count(prose, COLON_EXPLAINER);
  if (colons > VOICE_BUDGETS.colonExplainersPerUnit) {
    add(
      'voice.colon-explainer',
      'error',
      `${colons} mid-sentence colons; budget is ${VOICE_BUDGETS.colonExplainersPerUnit}. Most want a full stop.`,
    );
  }

  for (const tic of VOICE_TICS) {
    const match = tic.pattern.exec(prose);
    tic.pattern.lastIndex = 0;
    if (match) add(tic.id, tic.severity, tic.message, match[0].slice(0, 80));
  }

  return out;
}

export interface VoiceReport {
  readonly findings: readonly VoiceFinding[];
  readonly errors: number;
  readonly warnings: number;
  readonly medianBodyWords: number;
  readonly ok: boolean;
}

export function lintCorpusVoice(units: readonly Unit[]): VoiceReport {
  const findings = units.flatMap(lintVoice);
  const lengths = units.map((u) => words(u.body)).sort((a, b) => a - b);
  const errors = findings.filter((f) => f.severity === 'error').length;
  return {
    findings,
    errors,
    warnings: findings.length - errors,
    medianBodyWords: lengths[Math.floor(lengths.length / 2)] ?? 0,
    ok: errors === 0,
  };
}
