import type { EscalationContext } from '@cairn/escalation';

/**
 * Symptom tracker with prevalence data.
 *
 * The competitive read was blunt: symptom prevalence percentages are a small
 * data addition that reads as authoritative and directly serves the anxiety
 * the category runs on ("is this normal?" answered with a number). Prevalence
 * figures are coarse, sourced ranges — not precision claims.
 *
 * Any symptom carrying an escalation pattern also produces an
 * EscalationContext so the deterministic rules see exactly what the tracker
 * saw (invariant 2: rules run before and independent of any model).
 */
export interface SymptomDefinition {
  readonly id: string;
  readonly label: string;
  /** Weeks where this symptom is commonly reported. */
  readonly typicalWeeks: { from: number; to: number };
  /** Approximate share of pregnancies reporting it, 0–1. Coarse by design. */
  readonly prevalence: number;
  readonly source: string;
  /** Text passed to the escalation engine when logged with concerning severity. */
  readonly escalationText?: string;
}

export const SYMPTOMS: readonly SymptomDefinition[] = [
  { id: 'nausea', label: 'Nausea / morning sickness', typicalWeeks: { from: 4, to: 16 }, prevalence: 0.7, source: 'ACOG FAQ126' },
  { id: 'fatigue', label: 'Fatigue', typicalWeeks: { from: 4, to: 40 }, prevalence: 0.9, source: 'ACOG' },
  { id: 'heartburn', label: 'Heartburn', typicalWeeks: { from: 14, to: 40 }, prevalence: 0.5, source: 'ACOG' },
  { id: 'back-pain', label: 'Back pain', typicalWeeks: { from: 18, to: 40 }, prevalence: 0.6, source: 'ACOG' },
  { id: 'swelling', label: 'Mild ankle/foot swelling', typicalWeeks: { from: 22, to: 40 }, prevalence: 0.65, source: 'ACOG' },
  { id: 'round-ligament', label: 'Round ligament pain', typicalWeeks: { from: 14, to: 27 }, prevalence: 0.3, source: 'ACOG' },
  { id: 'insomnia', label: 'Trouble sleeping', typicalWeeks: { from: 14, to: 40 }, prevalence: 0.6, source: 'NIH' },
  { id: 'braxton-hicks', label: 'Braxton Hicks contractions', typicalWeeks: { from: 20, to: 40 }, prevalence: 0.55, source: 'ACOG' },
  { id: 'constipation', label: 'Constipation', typicalWeeks: { from: 4, to: 40 }, prevalence: 0.4, source: 'ACOG' },
  { id: 'headache', label: 'Headache', typicalWeeks: { from: 4, to: 40 }, prevalence: 0.35, source: 'ACOG', escalationText: 'headache that won\'t go away' },
  { id: 'severe-vomiting', label: 'Can\'t keep fluids down', typicalWeeks: { from: 4, to: 20 }, prevalence: 0.02, source: 'ACOG (hyperemesis)', escalationText: 'can\'t keep fluids down' },
  { id: 'vision-changes', label: 'Vision changes', typicalWeeks: { from: 20, to: 40 }, prevalence: 0.02, source: 'ACOG UMWS', escalationText: 'blurred vision' },
  { id: 'bleeding', label: 'Vaginal bleeding', typicalWeeks: { from: 4, to: 40 }, prevalence: 0.2, source: 'ACOG', escalationText: 'vaginal bleeding' },
  { id: 'one-leg-swelling', label: 'Swelling or pain in one leg', typicalWeeks: { from: 14, to: 40 }, prevalence: 0.01, source: 'ACOG UMWS', escalationText: 'swelling and pain in one leg' },
];

export type Severity = 'mild' | 'moderate' | 'severe';

export interface SymptomLogEntry {
  readonly symptomId: string;
  readonly week: number;
  readonly severity: Severity;
  readonly at: number;
}

export function symptomById(id: string): SymptomDefinition | null {
  return SYMPTOMS.find((s) => s.id === id) ?? null;
}

/** "62% of mothers report this around week 30." */
export function prevalenceLine(symptom: SymptomDefinition): string {
  return `About ${Math.round(symptom.prevalence * 100)}% of pregnancies report ${symptom.label.toLowerCase()} (source: ${symptom.source}).`;
}

export function isTypicalAtWeek(symptom: SymptomDefinition, week: number): boolean {
  return week >= symptom.typicalWeeks.from && week <= symptom.typicalWeeks.to;
}

/**
 * Escalation context for a log entry. Symptoms with escalationText always
 * surface it at severe; the always-escalate ids surface at any severity.
 */
const ALWAYS_ESCALATE = new Set(['bleeding', 'vision-changes', 'one-leg-swelling', 'severe-vomiting']);

export function escalationContextFor(
  entry: SymptomLogEntry,
  gestationalWeek: number,
): EscalationContext | null {
  const symptom = symptomById(entry.symptomId);
  if (!symptom?.escalationText) return null;
  if (entry.severity !== 'severe' && !ALWAYS_ESCALATE.has(symptom.id)) return null;
  return { text: symptom.escalationText, gestationalWeek };
}
