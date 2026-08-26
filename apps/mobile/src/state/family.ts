import { createContext, useContext } from 'react';
import type { Audience } from '@cairn/framework';
import type { CalendarDate } from '@cairn/stages';

/**
 * The family context every screen reads.
 *
 * In the shipped app this is hydrated from the encrypted local store after
 * unlock; in development it carries a demo family so every surface renders.
 */
export interface ChildProfile {
  readonly id: string;
  readonly name: string;
  readonly birthdate: CalendarDate;
}

export interface FamilyState {
  readonly audience: Audience;
  readonly dueDate: CalendarDate | null;
  readonly motherName: string;
  readonly children: readonly ChildProfile[];
  readonly today: CalendarDate;
}

export const DEMO_FAMILY: FamilyState = {
  audience: { voice: 'mother', householdShape: 'two-parent' },
  dueDate: '2027-03-01',
  motherName: 'Emma',
  children: [{ id: 'jack', name: 'Jack', birthdate: '2020-06-15' }],
  today: '2026-08-26',
};

export const FamilyContext = createContext<FamilyState>(DEMO_FAMILY);
export const useFamily = (): FamilyState => useContext(FamilyContext);
