import type { Unit } from '../types.js';
import { PREGNANCY_DEVELOPMENT_UNITS } from './pregnancy.development.js';
import { PREGNANCY_FORMATION_UNITS } from './pregnancy.formation.js';
import { PREGNANCY_CARE_UNITS } from './pregnancy.care.js';
import { CHILDHOOD_DEVELOPMENT_UNITS } from './childhood.development.js';
import { CHILDHOOD_SEE_UNITS } from './childhood.see.js';
import { CHILDHOOD_RECEIVE_UNITS } from './childhood.receive.js';
import { CHILDHOOD_FORMATION_UNITS } from './childhood.formation.js';
import { PARENT_FORMATION_UNITS } from './parent.formation.js';
import { EXPANSION_DEVELOPMENT_UNITS } from './expansion.development.js';
import { EXPANSION_CHILDHOOD_UNITS } from './expansion.childhood.js';
import { EXPANSION_ADOLESCENCE_UNITS } from './expansion.adolescence.js';
import { EXPANSION_ADULT_UNITS } from './expansion.adult.js';
import { DEPTH_HEAR_UNITS } from './depth.hear.js';
import { DEPTH_SEE_UNITS } from './depth.see.js';
import { DEPTH_EXPERIENCE_UNITS } from './depth.experience.js';
import { DEPTH_BELIEVE_UNITS } from './depth.believe.js';
import { DEPTH_BECOME_UNITS } from './depth.become.js';

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
  ...EXPANSION_DEVELOPMENT_UNITS,
  ...EXPANSION_CHILDHOOD_UNITS,
  ...EXPANSION_ADOLESCENCE_UNITS,
  ...EXPANSION_ADULT_UNITS,
  ...DEPTH_HEAR_UNITS,
  ...DEPTH_SEE_UNITS,
  ...DEPTH_EXPERIENCE_UNITS,
  ...DEPTH_BELIEVE_UNITS,
  ...DEPTH_BECOME_UNITS,
];
