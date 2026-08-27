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

/**
 * Budgets, by field.
 *
 * Calibrated against prose actually read from the field — Justin Whitmel
 * Earley, Gary Thomas, Paul David Tripp, Jen Wilkin, Sissy Goff, Sally
 * Clarkson, Parent Cue, Axis, Desiring God, The Gospel Coalition. Two specs
 * are taken from that survey verbatim: Parent Cue's headers run 2-6 words,
 * and Axis's parent prompts run 7-13 words with no em-dash at all.
 */
export const VOICE_BUDGETS = {
  /** A card headline a parent reads at a glance. Parent Cue's spec is 2-6. */
  titleWords: 7,
  /** First sentence of a body. Earley, Clarkson and Goff all open under 12. */
  openingSentenceWords: 14,
  /** One sentence that can carry a card on its own. */
  ledeWords: 24,
  /** The depth behind a tap. Long enough to say something, short enough to finish. */
  bodyWords: 75,
  /** Longest single sentence anywhere. Past this, a tired reader loses the thread. */
  sentenceWords: 32,
  /** One thing to actually do. */
  actionWords: 20,
  /**
   * Em-dashes per unit. One is emphasis; more is a habit.
   * Measured in the field: Gary Thomas ~1 per 250 words, Earley ~1 per 130.
   * Cairn was running ~1 per 28 — between two and nine times the genre.
   */
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
    /*
     * The loudest tell. Zero instances across 24 pages of real prose from the
     * field: no working writer in this genre tells the reader what conclusion
     * they have just reached.
     */
    id: 'voice.self-explaining-clause',
    pattern:
      /\b(?:which|and that) is (?:exactly|precisely)?\s?(?:what|why|the reason)\b|\bfor that reason\b/gi,
    severity: 'error',
    message: 'A clause explaining the sentence it is attached to. Cut it; the reader got there.',
  },
  {
    /*
     * Opening on the app's own furniture. The worksheet is Cairn's source, not
     * the parent's concern. No source in the field opens by describing its own
     * structure.
     */
    id: 'voice.apparatus-opener',
    pattern: /(?:^|\.\s)(?:The (?:worksheet|printed|second|first|final) \w+|Section \d+)/g,
    severity: 'error',
    message: 'Opens on Cairn\'s own apparatus. Start with the child, the room, or the sentence a parent says.',
  },
  {
    /*
     * Pseudo-rigorous hedging. Goff writes the same claim flat: "By nature,
     * girls want to please." The hedge adds no accuracy and costs the sentence
     * its spine.
     */
    id: 'voice.hedge',
    pattern:
      /\b(?:in most households|in many households|many children|at some level|disproportionately|a way that is|to some degree|tends to be)\b/gi,
    severity: 'warning',
    message: 'Pseudo-rigorous hedge. Say it flat or cut the claim.',
  },
  {
    /*
     * Latinate register drift. The genre's vocabulary is domestic: socks,
     * naps, dishes, the car on the way home.
     */
    id: 'voice.latinate-drift',
    pattern: /\b(?:machinery|cross-reference|instrumentation|apparatus|the data|structural)\b/gi,
    severity: 'warning',
    message: 'Register drift. The genre speaks in kitchens and cars, not systems.',
  },
  {
    id: 'voice.not-x-but-y',
    pattern: /\b(?:is|are|was|were)\s+not\s+[^.,;]{2,50}[,;]?\s+(?:it|they)\s+(?:is|are)\b/gi,
    severity: 'warning',
    message:
      'Antithesis is fine in this genre and near-universal in it. The tell is doing it abstractly. Put a concrete noun on both sides.',
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

  const bodySentences = sentences(unit.body);
  const opener = bodySentences[0];
  if (opener && words(opener) > VOICE_BUDGETS.openingSentenceWords) {
    add(
      'voice.opening-sentence',
      'error',
      `Opening sentence is ${words(opener)} words; budget is ${VOICE_BUDGETS.openingSentenceWords}.`,
      opener.slice(0, 90),
    );
  }

  for (const sentence of bodySentences) {
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

/**
 * The first sentence of a body, for surfaces that show one line.
 *
 * A fallback only. A unit that carries a real `lede` uses it; this keeps the
 * card surfaces working while the corpus is rewritten, rather than blocking
 * the UI on the copy pass.
 */
export function ledeFor(unit: Unit): string {
  if (unit.lede) return unit.lede;
  return sentences(unit.body)[0] ?? unit.body;
}

/**
 * Reading time, in whole minutes, floored at one.
 *
 * Every item on Glorify's Today screen carries a duration, and it is the
 * single cheapest thing that makes a content list feel finishable rather than
 * open-ended. 220 words per minute is the standard estimate for adult reading
 * on a phone.
 */
export function readingMinutes(text: string): number {
  return Math.max(1, Math.round(words(text) / 220));
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
