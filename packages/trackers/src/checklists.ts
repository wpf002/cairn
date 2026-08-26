/**
 * Hospital bag and birth plan. Section 28 table stakes.
 *
 * The birth plan exports to plain text deliberately — it is read by nurses on
 * paper in a hurry, and a format that outlives the app is a section 33a value
 * applied to a smaller artifact.
 */
export interface ChecklistItem {
  readonly id: string;
  readonly label: string;
  readonly forWhom: 'mom' | 'baby' | 'partner' | 'documents';
  readonly done: boolean;
}

export const HOSPITAL_BAG_TEMPLATE: readonly Omit<ChecklistItem, 'done'>[] = [
  { id: 'id-insurance', label: 'Photo ID, insurance card, hospital paperwork', forWhom: 'documents' },
  { id: 'birth-plan', label: 'Printed birth plan (two copies)', forWhom: 'documents' },
  { id: 'pediatrician', label: 'Pediatrician name and contact', forWhom: 'documents' },
  { id: 'phone-charger', label: 'Phone + long charging cable', forWhom: 'mom' },
  { id: 'comfortable-clothes', label: 'Comfortable clothes and going-home outfit', forWhom: 'mom' },
  { id: 'toiletries', label: 'Toiletries, hair ties, lip balm', forWhom: 'mom' },
  { id: 'nursing-bra', label: 'Nursing bras / comfortable underwear', forWhom: 'mom' },
  { id: 'blessing', label: 'The blessing you chose to say over the baby', forWhom: 'documents' },
  { id: 'baby-outfits', label: 'Two going-home outfits (newborn + 0-3m)', forWhom: 'baby' },
  { id: 'baby-blanket', label: 'Receiving blanket', forWhom: 'baby' },
  { id: 'car-seat', label: 'Car seat installed and checked', forWhom: 'baby' },
  { id: 'partner-clothes', label: 'Change of clothes', forWhom: 'partner' },
  { id: 'partner-snacks', label: 'Snacks and water', forWhom: 'partner' },
  { id: 'partner-pillow', label: 'Pillow (hospital ones are spoken for)', forWhom: 'partner' },
];

export function newHospitalBag(): ChecklistItem[] {
  return HOSPITAL_BAG_TEMPLATE.map((t) => ({ ...t, done: false }));
}

export function toggleItem(items: readonly ChecklistItem[], id: string): ChecklistItem[] {
  return items.map((i) => (i.id === id ? { ...i, done: !i.done } : i));
}

export function bagProgress(items: readonly ChecklistItem[]): { done: number; total: number } {
  return { done: items.filter((i) => i.done).length, total: items.length };
}

// ---- Birth plan -------------------------------------------------------------

export interface BirthPlan {
  readonly motherName: string;
  readonly supportPeople: readonly string[];
  readonly provider: string;
  readonly environment: readonly string[]; // e.g. 'dim lights', 'own music'
  readonly painManagement: 'undecided' | 'unmedicated-preferred' | 'epidural-preferred' | 'open';
  readonly laborPreferences: readonly string[];
  readonly newbornPreferences: readonly string[]; // e.g. 'immediate skin-to-skin'
  readonly feedingPlan: 'breastfeeding' | 'formula' | 'combination' | 'undecided';
  readonly religiousNotes: string; // e.g. baptism/blessing wishes
  readonly flexibilityNote: string;
}

export function emptyBirthPlan(motherName: string): BirthPlan {
  return {
    motherName,
    supportPeople: [],
    provider: '',
    environment: [],
    painManagement: 'undecided',
    laborPreferences: [],
    newbornPreferences: [],
    feedingPlan: 'undecided',
    religiousNotes: '',
    flexibilityNote:
      'We know birth may not follow a plan. Where medical judgment requires a change, we ask to be told what is happening and why, as it happens.',
  };
}

/** Plain-text export, printable, nurse-readable. */
export function exportBirthPlan(plan: BirthPlan): string {
  const lines: string[] = [];
  lines.push(`BIRTH PLAN — ${plan.motherName}`);
  if (plan.provider) lines.push(`Provider: ${plan.provider}`);
  if (plan.supportPeople.length) lines.push(`Support people: ${plan.supportPeople.join(', ')}`);
  lines.push('');
  if (plan.environment.length) lines.push(`Environment: ${plan.environment.join('; ')}`);
  lines.push(`Pain management: ${plan.painManagement.replace(/-/g, ' ')}`);
  if (plan.laborPreferences.length) lines.push(`Labor: ${plan.laborPreferences.join('; ')}`);
  if (plan.newbornPreferences.length) lines.push(`Newborn: ${plan.newbornPreferences.join('; ')}`);
  lines.push(`Feeding: ${plan.feedingPlan.replace(/-/g, ' ')}`);
  if (plan.religiousNotes) lines.push(`Faith: ${plan.religiousNotes}`);
  lines.push('');
  lines.push(plan.flexibilityNote);
  return lines.join('\n');
}
