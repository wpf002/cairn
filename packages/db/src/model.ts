import type { HouseholdShape, Voice } from '@cairn/framework';
import type { CalendarDate } from '@cairn/stages';

/**
 * The data model, as types the app programs against.
 *
 * Invariant 7: one Person row per human; parent/child/guardian relationships
 * are time-bounded edges, not columns. A blended family, a guardianship that
 * starts at eight, a co-parent added later — all of these are new edges, not
 * schema migrations.
 *
 * Invariant 5 shapes the field split: anything a parent typed about a child is
 * ciphertext by the time it reaches these rows. The plaintext fields that
 * remain are the minimum the server needs to route and gate: ids, role edges,
 * subscription state, and the child's stage as an opaque number.
 */

export interface Person {
  readonly id: string;
  readonly kind: 'adult' | 'child';
  readonly createdAt: string;
}

/** An adult's account. Auth is Supabase; this row is Cairn's view of it. */
export interface Account {
  readonly personId: string;
  readonly authUserId: string;
  /** Which voice this adult reads the substrate in. Section 16b. */
  readonly voice: Voice;
  readonly householdShape: HouseholdShape;
  readonly createdAt: string;
}

/**
 * A relationship edge. Time-bounded: `from`/`until` bound its validity, and an
 * open edge has `until: null`. History is kept, never overwritten.
 */
export type RelationshipRole =
  | 'mother'
  | 'father'
  | 'guardian'
  | 'step-parent'
  | 'grandparent'
  | 'mentor'
  | 'godparent';

/** What an edge lets the adult do. Scoped per section 29 point 4. */
export type PermissionScope =
  | 'full' // read + write + grant: the child's parents
  | 'contribute' // read + add memories/letters: grandparents, mentors (ceremony flow, section 14)
  | 'view'; // read-only

export interface RelationshipEdge {
  readonly id: string;
  readonly adultId: string;
  readonly childId: string;
  readonly role: RelationshipRole;
  readonly scope: PermissionScope;
  readonly from: CalendarDate;
  readonly until: CalendarDate | null;
  /** Who granted this edge. Grants require an existing `full` edge. */
  readonly grantedBy: string;
}

/** The child's server-visible row. Everything personal is in the sealed record. */
export interface ChildRow {
  readonly personId: string;
  /**
   * Stage as an opaque integer index (section 33a: "stage assignment as an
   * opaque integer"). Recomputed client-side from the encrypted birthdate and
   * pushed up so notifications can be scheduled without the server ever
   * knowing a birthday.
   */
  readonly stageIndex: number | null;
  /** Sealed blob: name, birthdate, gender, notes, challenges — everything. */
  readonly sealedRecord: { iv: string; ciphertext: string; keyId: string } | null;
}

export interface Pregnancy {
  readonly id: string;
  readonly accountPersonId: string;
  /**
   * The due date is stored server-side in plaintext by explicit decision:
   * week-by-week notifications and TODAY-screen scheduling need it before any
   * client is online, it does not identify a born child, and the row is
   * deleted (not archived) when the pregnancy record converts to a child.
   */
  readonly dueDate: CalendarDate;
  readonly createdAt: string;
  /** Set when the pregnancy converts to a child record or is closed. */
  readonly closedAt: string | null;
}

// ---- Edge validity ---------------------------------------------------------

export function edgeActiveOn(edge: RelationshipEdge, on: CalendarDate): boolean {
  return edge.from <= on && (edge.until === null || edge.until >= on);
}

/** Active edges for a child on a date, strongest scope first. */
export function activeEdges(
  edges: readonly RelationshipEdge[],
  childId: string,
  on: CalendarDate,
): RelationshipEdge[] {
  const rank: Record<PermissionScope, number> = { full: 2, contribute: 1, view: 0 };
  return edges
    .filter((e) => e.childId === childId && edgeActiveOn(e, on))
    .sort((a, b) => rank[b.scope] - rank[a.scope]);
}

export function scopeFor(
  edges: readonly RelationshipEdge[],
  adultId: string,
  childId: string,
  on: CalendarDate,
): PermissionScope | null {
  const mine = activeEdges(edges, childId, on).filter((e) => e.adultId === adultId);
  return mine[0]?.scope ?? null;
}

export class PermissionDeniedError extends Error {
  constructor(need: PermissionScope, have: PermissionScope | null) {
    super(`This action needs ${need} access; the adult has ${have ?? 'no'} access.`);
    this.name = 'PermissionDeniedError';
  }
}

export function assertScope(
  edges: readonly RelationshipEdge[],
  adultId: string,
  childId: string,
  need: PermissionScope,
  on: CalendarDate,
): void {
  const rank: Record<PermissionScope, number> = { full: 2, contribute: 1, view: 0 };
  const have = scopeFor(edges, adultId, childId, on);
  if (have === null || rank[have] < rank[need]) throw new PermissionDeniedError(need, have);
}

/**
 * Granting rules: only a `full` edge may grant, revoke, or change edges; an
 * adult cannot revoke the last `full` edge on a child (a child record must
 * always have at least one responsible adult).
 */
export function canGrant(
  edges: readonly RelationshipEdge[],
  granterId: string,
  childId: string,
  on: CalendarDate,
): boolean {
  return scopeFor(edges, granterId, childId, on) === 'full';
}

export function canRevoke(
  edges: readonly RelationshipEdge[],
  revokerId: string,
  edgeId: string,
  on: CalendarDate,
): { allowed: boolean; reason: string } {
  const edge = edges.find((e) => e.id === edgeId);
  if (!edge) return { allowed: false, reason: 'No such edge.' };
  if (!canGrant(edges, revokerId, edge.childId, on)) {
    return { allowed: false, reason: 'Only an adult with full access may revoke access.' };
  }
  if (edge.scope === 'full') {
    const fulls = activeEdges(edges, edge.childId, on).filter((e) => e.scope === 'full');
    if (fulls.length <= 1) {
      return { allowed: false, reason: 'A child record must keep at least one adult with full access.' };
    }
  }
  return { allowed: true, reason: 'ok' };
}
