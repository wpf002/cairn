import { isValidScriptureRef, parseScriptureRef, ScriptureRefError } from '@cairn/canon';
import { CATEGORIES } from '@cairn/framework';
import { FIRST_COVERED_WEEK, LAST_COVERED_WEEK, STAGES } from '@cairn/stages';
import { checkDoctrine } from './doctrine.js';
import { unitKey, type Unit } from './types.js';

/**
 * The Phase 0 gate.
 *
 * Section 16a states what CI must fail on, and every one of those conditions is
 * a rule below with the invariant it enforces attached, so a failing build says
 * which promise was broken rather than which regular expression did not match.
 */
export type Severity = 'error' | 'warning';

export interface Violation {
  readonly unit: string;
  readonly rule: string;
  /** The roadmap invariant or section this rule enforces. */
  readonly enforces: string;
  readonly severity: Severity;
  readonly message: string;
}

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const STAGE_IDS = new Set(STAGES.map((s) => s.id));

/**
 * Any scripture-shaped token in free prose.
 *
 * Used to enforce the hard half of invariant 8: a descriptive unit carrying a
 * scripture reference fails, whether the reference sits in a `warrant` field or
 * is dropped into the body text, because a verse bolted onto a fetal anatomy
 * card is the same misuse either way.
 */
const SCRIPTURE_IN_PROSE =
  /\b((?:[1-3]\s*)?(?:Genesis|Gen|Exodus|Exod|Leviticus|Lev|Numbers|Num|Deuteronomy|Deut|Joshua|Josh|Judges|Judg|Ruth|Samuel|Sam|Kings|Kgs|Chronicles|Chron|Ezra|Nehemiah|Neh|Esther|Esth|Job|Psalms?|Psa?|Proverbs|Prov|Ecclesiastes|Eccl|Song of (?:Solomon|Songs)|Isaiah|Isa|Jeremiah|Jer|Lamentations|Lam|Ezekiel|Ezek|Daniel|Dan|Hosea|Hos|Joel|Amos|Obadiah|Obad|Jonah|Micah|Mic|Nahum|Nah|Habakkuk|Hab|Zephaniah|Zeph|Haggai|Hag|Zechariah|Zech|Malachi|Mal|Matthew|Matt|Mark|Luke|John|Acts|Romans|Rom|Corinthians|Cor|Galatians|Gal|Ephesians|Eph|Philippians|Phil|Colossians|Col|Thessalonians|Thess|Timothy|Tim|Titus|Philemon|Phlm|Hebrews|Heb|James|Jas|Peter|Pet|Jude|Revelation|Rev)\.?\s+\d+(?::\d+)?)/;

function err(unit: Unit, rule: string, enforces: string, message: string): Violation {
  return { unit: unitKey(unit), rule, enforces, severity: 'error', message };
}

function warn(unit: Unit, rule: string, enforces: string, message: string): Violation {
  return { unit: unitKey(unit), rule, enforces, severity: 'warning', message };
}

function nonEmpty(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

/** Validate one unit against every invariant that applies to it. */
export function validateUnit(unit: Unit): Violation[] {
  const v: Violation[] = [];

  // ---- Identity and versioning (invariant 6) -------------------------------
  if (!/^[a-z0-9]+(?:[.-][a-z0-9]+)*$/.test(unit.id)) {
    v.push(err(unit, 'id.format', 'invariant 6', 'Unit id must be lowercase dot- or dash-separated.'));
  }
  if (!Number.isInteger(unit.version) || unit.version < 1) {
    v.push(err(unit, 'version.format', 'invariant 6', 'Unit version must be an integer >= 1.'));
  }
  if (unit.version > 1 && !unit.supersedes) {
    v.push(
      err(unit, 'version.supersedes', 'invariant 6', 'Version > 1 must name the id@version it supersedes; units are never edited in place.'),
    );
  }

  // ---- Shape --------------------------------------------------------------
  if (!CATEGORIES.includes(unit.category)) {
    v.push(err(unit, 'category.unknown', 'section 13', `Unknown category ${String(unit.category)}.`));
  }
  if (!nonEmpty(unit.title)) v.push(err(unit, 'title.empty', 'section 19', 'Unit needs a title.'));
  if (!nonEmpty(unit.body)) v.push(err(unit, 'body.empty', 'section 19', 'Unit needs a body.'));

  if (unit.scope.kind === 'pregnancy') {
    if (unit.scope.weeks.length === 0) {
      v.push(err(unit, 'scope.empty', 'section 5', 'Pregnancy scope names no weeks.'));
    }
    for (const week of unit.scope.weeks) {
      if (week < FIRST_COVERED_WEEK || week > LAST_COVERED_WEEK) {
        v.push(
          err(unit, 'scope.week-range', 'section 5', `Week ${week} is outside the covered span ${FIRST_COVERED_WEEK}–${LAST_COVERED_WEEK}.`),
        );
      }
    }
  } else {
    const stages = unit.scope.stages === 'all' ? [] : unit.scope.stages;
    if (unit.scope.kind === 'stage' && stages.length === 0) {
      v.push(err(unit, 'scope.empty', 'section 6', 'Stage scope names no stages.'));
    }
    for (const stage of stages) {
      if (!STAGE_IDS.has(stage)) {
        v.push(err(unit, 'scope.unknown-stage', 'section 6', `Unknown stage id ${stage}.`));
      }
    }
  }

  // ---- Provenance (invariant 1) -------------------------------------------
  const p = unit.provenance;
  for (const field of ['sourceOrg', 'sourceDate', 'reviewer', 'reviewDate'] as const) {
    if (!nonEmpty(p?.[field])) {
      v.push(err(unit, `provenance.${field}`, 'invariant 1', `Provenance is missing ${field}. No unprovenanced content ships.`));
    }
  }
  for (const field of ['sourceDate', 'reviewDate'] as const) {
    const value = p?.[field];
    if (nonEmpty(value) && !ISO_DATE.test(value)) {
      v.push(err(unit, `provenance.${field}.format`, 'invariant 1', `${field} must be an ISO calendar date.`));
    }
  }

  // ---- Claim type rules (section 16a, invariant 8) -------------------------
  switch (unit.claimType) {
    case 'normative': {
      if (!unit.warrant) {
        v.push(
          err(unit, 'warrant.missing', 'invariant 8', 'A normative unit must carry a scriptural warrant. No warrant, no ship.'),
        );
        break;
      }
      const w = unit.warrant;
      if (!w.passages || w.passages.length === 0) {
        v.push(err(unit, 'warrant.passages.empty', 'invariant 8', 'A warrant must name at least one passage.'));
      }
      for (const passage of w.passages ?? []) {
        try {
          parseScriptureRef(passage);
        } catch (e) {
          const reason = e instanceof ScriptureRefError ? e.message : String(e);
          v.push(err(unit, 'warrant.passages.unresolvable', 'invariant 8', reason));
        }
      }
      if (!nonEmpty(w.exegesis)) {
        v.push(err(unit, 'warrant.exegesis', 'section 16', 'A warrant must say what the passage actually says, in context.'));
      }
      if (!nonEmpty(w.application)) {
        v.push(err(unit, 'warrant.application', 'section 16', 'A warrant must say how the passage legitimately informs parenting.'));
      }
      if (!nonEmpty(w.misuse)) {
        v.push(
          err(
            unit,
            'warrant.misuse',
            'invariant 8',
            'A warrant must state how this passage is commonly misapplied. The misuse field is not optional decoration.',
          ),
        );
      }
      if (!nonEmpty(w.theologicalReviewer)) {
        v.push(err(unit, 'warrant.reviewer', 'invariant 1', 'A warrant must name its theological reviewer.'));
      }
      if (!nonEmpty(w.reviewDate) || !ISO_DATE.test(w.reviewDate)) {
        v.push(err(unit, 'warrant.reviewDate', 'invariant 1', 'A warrant must carry an ISO review date.'));
      }
      break;
    }

    case 'descriptive': {
      if (!unit.evidence || unit.evidence.length === 0) {
        v.push(
          err(unit, 'evidence.missing', 'section 18', 'A descriptive unit must cite evidence from an authoritative professional source.'),
        );
      }
      for (const e of unit.evidence ?? []) {
        if (!nonEmpty(e.org) || !nonEmpty(e.title)) {
          v.push(err(unit, 'evidence.incomplete', 'section 19', 'Every evidence ref needs an organisation and a title.'));
        }
        if (!nonEmpty(e.sourceDate) || !ISO_DATE.test(e.sourceDate)) {
          v.push(err(unit, 'evidence.sourceDate', 'section 19', 'Every evidence ref needs an ISO source date.'));
        }
      }
      if (unit.warrant) {
        v.push(
          err(
            unit,
            'descriptive.carries-warrant',
            'invariant 8',
            'A descriptive unit must not carry a scriptural warrant. Fetal anatomy is an observation of God\'s design, not a proof text.',
          ),
        );
      }
      const inProse = SCRIPTURE_IN_PROSE.exec(`${unit.title}\n${unit.body}`);
      if (inProse) {
        v.push(
          err(
            unit,
            'descriptive.scripture-in-prose',
            'invariant 8',
            `A descriptive unit must carry no scripture reference; found "${inProse[0]}". Section 16a forbids bolting a verse onto a developmental claim to make it feel biblical.`,
          ),
        );
      }
      break;
    }

    case 'prudential': {
      if (unit.warrant) {
        v.push(
          warn(unit, 'prudential.carries-warrant', 'section 16a', 'A prudential unit needs no warrant; if this claim is normative, mark it so.'),
        );
      }
      break;
    }

    default:
      v.push(err(unit, 'claimType.unknown', 'section 16a', `Unknown claim type ${String(unit.claimType)}.`));
  }

  // ---- Medical claims need a clinician (section 18, 19) --------------------
  if (unit.claimType === 'descriptive' && unit.evidence?.some((e) => e.evidenceLevel === 'clinical-guideline')) {
    if (!nonEmpty(p?.medicalReviewer)) {
      v.push(err(unit, 'provenance.medicalReviewer', 'section 19', 'A unit resting on a clinical guideline needs a named medical reviewer.'));
    }
  }

  // ---- Voice and household (invariant 9, section 16b) ----------------------
  if (unit.voice !== 'mother' && unit.voice !== 'father' && unit.voice !== 'shared') {
    v.push(err(unit, 'voice.unknown', 'invariant 9', `Unknown voice ${String(unit.voice)}.`));
  }

  // ---- The action test (section 2) ----------------------------------------
  if (unit.claimType === 'normative' && (!unit.actions || unit.actions.length === 0)) {
    v.push(
      warn(
        unit,
        'actions.missing',
        'section 2',
        'A normative unit with no action is an article. The app must continuously translate knowledge into parental action.',
      ),
    );
  }

  // ---- Doctrinal ruleset (section 16a) ------------------------------------
  for (const finding of checkDoctrine(`${unit.title}\n${unit.body}\n${(unit.actions ?? []).join('\n')}`)) {
    v.push({
      unit: unitKey(unit),
      rule: finding.ruleId,
      enforces: 'section 16a doctrinal ruleset',
      severity: finding.severity,
      message: `${finding.summary} — "${finding.excerpt}". ${finding.rationale}`,
    });
  }

  return v;
}

export interface CorpusReport {
  readonly violations: readonly Violation[];
  readonly errors: number;
  readonly warnings: number;
  readonly unitCount: number;
  readonly ok: boolean;
}

/** Validate a whole corpus, including cross-unit rules. */
export function validateCorpus(units: readonly Unit[]): CorpusReport {
  const violations: Violation[] = [];
  const seen = new Map<string, Unit>();

  for (const unit of units) {
    violations.push(...validateUnit(unit));
    const key = unitKey(unit);
    if (seen.has(key)) {
      violations.push({
        unit: key,
        rule: 'corpus.duplicate',
        enforces: 'invariant 6',
        severity: 'error',
        message: 'Two units share an id and version. Corrections create a new version.',
      });
    }
    seen.set(key, unit);
  }

  // Cross-references must resolve.
  const ids = new Set(units.map((u) => u.id));
  for (const unit of units) {
    if (unit.pairedWith && !ids.has(unit.pairedWith)) {
      violations.push({
        unit: unitKey(unit),
        rule: 'corpus.paired-missing',
        enforces: 'section 16b',
        severity: 'error',
        message: `pairedWith names ${unit.pairedWith}, which is not in the corpus.`,
      });
    }
    if (unit.soloVariantOf) {
      const parent = units.find((u) => u.id === unit.soloVariantOf);
      if (!parent) {
        violations.push({
          unit: unitKey(unit),
          rule: 'corpus.solo-missing',
          enforces: 'section 16b',
          severity: 'error',
          message: `soloVariantOf names ${unit.soloVariantOf}, which is not in the corpus.`,
        });
      } else if (parent.voice === 'shared') {
        violations.push({
          unit: unitKey(unit),
          rule: 'corpus.solo-of-shared',
          enforces: 'section 16b',
          severity: 'warning',
          message: 'A solo variant of a shared unit is redundant; shared units already serve every household.',
        });
      }
    }
    if (unit.supersedes && !units.some((u) => unitKey(u) === unit.supersedes)) {
      violations.push({
        unit: unitKey(unit),
        rule: 'corpus.supersedes-missing',
        enforces: 'invariant 6',
        severity: 'warning',
        message: `supersedes names ${unit.supersedes}, which is not in this corpus. Superseded versions should be retained.`,
      });
    }
  }

  const errors = violations.filter((x) => x.severity === 'error').length;
  const warnings = violations.length - errors;
  return { violations, errors, warnings, unitCount: units.length, ok: errors === 0 };
}

export { isValidScriptureRef };
