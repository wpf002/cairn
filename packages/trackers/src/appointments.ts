import { addDays, daysBetween, lmpFromDueDate, type CalendarDate } from '@cairn/stages';

/**
 * The prenatal appointment rhythm, generated from the due date.
 *
 * Typical schedule: every 4 weeks to 28, every 2 to 36, weekly to birth, with
 * the anatomy scan around 20 and glucose screening 24–28. Generated as
 * suggestions the mother edits to her provider's actual bookings; exported as
 * calendar entries via the phone's own calendar (section 28: appointment
 * tracking with phone-calendar integration).
 */
export interface SuggestedAppointment {
  readonly week: number;
  readonly date: CalendarDate;
  readonly label: string;
  readonly note?: string;
}

export function suggestedSchedule(dueDate: CalendarDate): SuggestedAppointment[] {
  const lmp = lmpFromDueDate(dueDate);
  const at = (week: number) => addDays(lmp, week * 7);
  const out: SuggestedAppointment[] = [];
  for (let week = 8; week <= 28; week += 4) {
    out.push({ week, date: at(week), label: `Prenatal visit (~week ${week})` });
  }
  for (let week = 30; week <= 36; week += 2) {
    out.push({ week, date: at(week), label: `Prenatal visit (~week ${week})` });
  }
  for (let week = 37; week <= 40; week += 1) {
    out.push({ week, date: at(week), label: `Weekly visit (~week ${week})` });
  }
  const annotate = (week: number, note: string) => {
    const hit = out.find((a) => a.week === week);
    if (hit) Object.assign(hit, { note });
  };
  annotate(20, 'Anatomy ultrasound is typically scheduled around this visit.');
  annotate(24, 'Glucose screening is typically done between weeks 24 and 28.');
  annotate(36, 'Group B strep swab is typically done between weeks 36 and 37.');
  return out;
}

/** ICS export for phone-calendar integration; one VEVENT per appointment. */
export function toIcs(appointments: readonly SuggestedAppointment[], calendarName = 'Cairn — Prenatal'): string {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Cairn//Prenatal//EN',
    `X-WR-CALNAME:${calendarName}`,
  ];
  for (const a of appointments) {
    const stamp = a.date.replace(/-/g, '');
    lines.push(
      'BEGIN:VEVENT',
      `UID:cairn-prenatal-${a.week}@cairn`,
      `DTSTART;VALUE=DATE:${stamp}`,
      `SUMMARY:${a.label}`,
      ...(a.note ? [`DESCRIPTION:${a.note}`] : []),
      'END:VEVENT',
    );
  }
  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
}

/** Days until the next appointment on or after `on`. */
export function nextAppointment(
  appointments: readonly SuggestedAppointment[],
  on: CalendarDate,
): (SuggestedAppointment & { inDays: number }) | null {
  const upcoming = appointments
    .map((a) => ({ ...a, inDays: daysBetween(on, a.date) }))
    .filter((a) => a.inDays >= 0)
    .sort((a, b) => a.inDays - b.inDays);
  return upcoming[0] ?? null;
}
