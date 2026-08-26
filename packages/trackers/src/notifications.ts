import { addDays, countdown, pregnancyStatus, type CalendarDate } from '@cairn/stages';

/**
 * Notification planning — pure logic; the device scheduler is injected at the
 * app layer.
 *
 * The competitive rule Cairn holds itself to: a push notification must be one
 * a parent will thank the app for. Three kinds qualify: the weekly card
 * arriving, an appointment reminder the family asked for, and a closing
 * opportunity window (Phase 4). Streak nags, re-engagement bait, and upsells
 * are not in the type — by design, there is no way to express them.
 */
export type PlannedNotification =
  | { kind: 'weekly-card'; week: number; date: CalendarDate; title: string; body: string }
  | { kind: 'appointment'; date: CalendarDate; title: string; body: string }
  | { kind: 'counter-milestone'; date: CalendarDate; title: string; body: string };

/** One notification per covered week, on the morning the week turns. */
export function planWeeklyCards(dueDate: CalendarDate): PlannedNotification[] {
  const out: PlannedNotification[] = [];
  for (let week = 4; week <= 40; week += 1) {
    // The date this gestational week begins:
    const status = pregnancyStatus(dueDate, dueDate); // anchor: due date = 40w0d
    void status;
    const daysBefore = (40 - week) * 7;
    const date = addDays(dueDate, -daysBefore);
    out.push({
      kind: 'weekly-card',
      week,
      date,
      title: `Week ${week}`,
      body: 'Your new week is ready — development, care, and this week\'s practical steps.',
    });
  }
  return out;
}

/** Reminder the day before each appointment. */
export function planAppointmentReminders(
  appointments: readonly { date: CalendarDate; label: string }[],
): PlannedNotification[] {
  return appointments.map((a) => ({
    kind: 'appointment',
    date: addDays(a.date, -1),
    title: 'Appointment tomorrow',
    body: a.label,
  }));
}

/**
 * Counter milestones: round-number weeks remaining to 21. Rare on purpose —
 * four per childhood, not four per month.
 */
export function planCounterMilestones(birthdate: CalendarDate): PlannedNotification[] {
  const marks = [1000, 750, 500, 250, 100];
  const out: PlannedNotification[] = [];
  const c = countdown(birthdate, 21, birthdate);
  for (const mark of marks) {
    if (mark >= c.weeksTotal) continue;
    const date = addDays(birthdate, (c.weeksTotal - mark) * 7);
    out.push({
      kind: 'counter-milestone',
      date,
      title: `${mark} weeks left at home`,
      body: 'A marker on the long road — worth a prayer tonight.',
    });
  }
  return out;
}
