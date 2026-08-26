import type { Unit } from '../types.js';
import { PREGNANCY_DEVELOPMENT_UNITS } from './pregnancy.development.js';
import { PREGNANCY_FORMATION_UNITS } from './pregnancy.formation.js';
import { PREGNANCY_CARE_UNITS } from './pregnancy.care.js';
import { CHILDHOOD_DEVELOPMENT_UNITS } from './childhood.development.js';
import { CHILDHOOD_SEE_UNITS } from './childhood.see.js';
import { CHILDHOOD_RECEIVE_UNITS } from './childhood.receive.js';
import { CHILDHOOD_FORMATION_UNITS } from './childhood.formation.js';
import { PARENT_FORMATION_UNITS } from './parent.formation.js';

/**
 * Substrate v1 — the Phase 2 corpus.
 *
 * Scope per section 35: pregnancy weeks 4–40 and ages 0–5, all seven
 * categories, both voices (voiced pairs where the split is heavy, shared
 * elsewhere), with solo variants where a unit assumes a second adult.
 */
export const UNITS: readonly Unit[] = [
  ...PREGNANCY_DEVELOPMENT_UNITS,
  ...PREGNANCY_FORMATION_UNITS,
  ...PREGNANCY_CARE_UNITS,
  ...CHILDHOOD_DEVELOPMENT_UNITS,
  ...CHILDHOOD_SEE_UNITS,
  ...CHILDHOOD_RECEIVE_UNITS,
  ...CHILDHOOD_FORMATION_UNITS,
  ...PARENT_FORMATION_UNITS,
];
