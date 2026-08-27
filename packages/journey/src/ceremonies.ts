import type { CalendarDate } from '@cairn/stages';
import { addYears } from '@cairn/stages';

/**
 * Milestone Moments. Section 14.
 *
 * The worksheet's four ceremonies, generalized to sons and daughters, plus
 * the broader milestone set. The letter-writing flow is the centerpiece:
 * parents, grandparents, and mentors write letters the app collects, seals,
 * and reveals at the ceremony. Contributors need only a `contribute` edge
 * (Phase 1's permission model) — this is why that scope exists.
 */
export interface CeremonyDefinition {
  readonly id: string;
  readonly atAge: number;
  readonly title: string;
  readonly purpose: string;
  /** Steps the app walks the family through. */
  readonly steps: readonly string[];
  readonly lettersInvited: boolean;
}

export const CEREMONIES: readonly CeremonyDefinition[] = [
  {
    id: 'intro',
    atAge: 13,
    title: 'Intro into Adulthood',
    purpose:
      'Marking the entry into adolescence: the child hears, from the adults who know them, that the road to adulthood has begun and that they will not walk it alone.',
    steps: [
      'Choose the circle: parents, grandparents, and one or two trusted adults.',
      'Each writes a letter: the character they already see, and one hope for the teenage years.',
      'Plan a shared experience the child would call fun — the ceremony rides along, it does not replace the fun.',
      'Read the letters aloud, or give them to be read privately — know your child.',
      'Close with a blessing said over them by name.',
    ],
    lettersInvited: true,
  },
  {
    id: 'growing',
    atAge: 16,
    title: 'Growing in Adulthood',
    purpose:
      'Mid-adolescence: naming the growth since thirteen, and handing over a real, visible increase in trust and responsibility.',
    steps: [
      'Review together what they now carry that they did not at thirteen.',
      'Name one significant new freedom and the responsibility that rides with it.',
      'One letter each from mother and father: "what I admire about who you are becoming."',
      'Mark it with a meal or trip that is theirs to choose.',
    ],
    lettersInvited: true,
  },
  {
    id: 'releasing',
    atAge: 17,
    title: 'Releasing to Adulthood',
    purpose:
      'The deliberate loosening before launch: the parent states, out loud, that the remaining year is preparation for self-government, not extended childhood.',
    steps: [
      'Walk through the practical floor together: money, work, faith, home skills — what is still untaught gets a plan.',
      'Shift one real domain entirely to them: their money, their schedule, their alarm.',
      'A letter from each parent about trust — given, not earned back.',
    ],
    lettersInvited: true,
  },
  {
    id: 'recognize',
    atAge: 21,
    title: 'Recognize Adulthood',
    purpose:
      'The capstone the whole framework points at: the parents publicly declare the formation work finished and the relationship changed — adult to adult, peer-with-history. Most families never mark this, which is exactly why Cairn walks them through it.',
    steps: [
      'Gather the circle that has watched them grow — the same people who wrote at thirteen where possible.',
      'Letters from the circle: the adult they see, spoken as to an adult.',
      'The parents say the words out loud: "You are a man/woman now. We recognize it. Our role changes today."',
      'Give a marker they will keep — the family Bible, a ring, the letters bound.',
      'The Story of Your Childhood is given here: twenty-one years, both parents\' threads, one record.',
    ],
    lettersInvited: true,
  },
];

/** Broader milestone moments worth capturing (section 14's list). */
export const MILESTONE_MOMENTS = [
  'Beginning school',
  'First phone',
  'Entering adolescence',
  'First job',
  'Driving',
  'First date',
  'High-school graduation',
  'Turning 18',
  'Baptism or public profession of faith',
  'First major responsibility',
  'Leaving home',
  'First apartment or dorm',
  'First full-time job',
  'Engagement',
] as const;

export interface CeremonyPlan {
  readonly ceremonyId: string;
  readonly childId: string;
  readonly targetDate: CalendarDate;
  readonly invitedContributors: readonly string[]; // adult person ids with contribute scope
  readonly letterEntryIds: readonly string[];
  readonly completedOn: CalendarDate | null;
}

export function planCeremony(
  ceremonyId: string,
  childId: string,
  birthdate: CalendarDate,
): CeremonyPlan {
  const ceremony = CEREMONIES.find((c) => c.id === ceremonyId);
  if (!ceremony) throw new Error(`Unknown ceremony: ${ceremonyId}`);
  return {
    ceremonyId,
    childId,
    targetDate: addYears(birthdate, ceremony.atAge),
    invitedContributors: [],
    letterEntryIds: [],
    completedOn: null,
  };
}

export function nextCeremony(birthdate: CalendarDate, on: CalendarDate): CeremonyDefinition | null {
  for (const c of CEREMONIES) {
    if (addYears(birthdate, c.atAge) >= on) return c;
  }
  return null;
}
