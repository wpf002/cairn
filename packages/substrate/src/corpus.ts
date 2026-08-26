import type { Unit } from './types.js';
import { UNITS } from './units/index.js';

/** The shipped corpus. Everything the app can retrieve. */
export function allUnits(): readonly Unit[] {
  return UNITS;
}

export function unitById(id: string, version?: number): Unit | null {
  const matches = UNITS.filter((u) => u.id === id);
  if (matches.length === 0) return null;
  if (version !== undefined) return matches.find((u) => u.version === version) ?? null;
  return matches.reduce((latest, u) => (u.version > latest.version ? u : latest));
}
