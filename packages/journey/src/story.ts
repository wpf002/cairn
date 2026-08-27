import type { JourneyEntry } from './entries.js';

/**
 * THE STORY OF YOUR CHILDHOOD. Sections 27 and 37.
 *
 * Generated client-side at twenty-one, timed to the Recognize ceremony —
 * a rendering pass over the Journey, not a migration. Two voices means two
 * threads through the same years, woven: what the mother recorded and what
 * the father recorded, side by side in each chapter.
 */
export interface StoryChapter {
  readonly year: number; // age during this chapter
  readonly heading: string;
  readonly motherThread: readonly JourneyEntry[];
  readonly fatherThread: readonly JourneyEntry[];
  readonly shared: readonly JourneyEntry[];
}

export interface Story {
  readonly childName: string;
  readonly chapters: readonly StoryChapter[];
  readonly stats: {
    readonly entries: number;
    readonly prayers: number;
    readonly answeredPrayers: number;
    readonly photos: number;
    readonly letters: number;
    readonly years: number;
  };
}

function ageAt(birthdate: string, date: string): number {
  const [by, bm, bd] = birthdate.split('-').map(Number) as [number, number, number];
  const [y, m, d] = date.split('-').map(Number) as [number, number, number];
  let age = y - by;
  if (m < bm || (m === bm && d < bd)) age -= 1;
  return age;
}

export function buildStory(
  childName: string,
  birthdate: string,
  entries: readonly JourneyEntry[],
): Story {
  const byYear = new Map<number, JourneyEntry[]>();
  for (const entry of entries) {
    const age = ageAt(birthdate, entry.date);
    if (age < 0) {
      // Pregnancy entries belong to the beginning chapter.
      const list = byYear.get(-1) ?? [];
      list.push(entry);
      byYear.set(-1, list);
      continue;
    }
    const list = byYear.get(age) ?? [];
    list.push(entry);
    byYear.set(age, list);
  }

  const chapters: StoryChapter[] = [...byYear.entries()]
    .sort(([a], [b]) => a - b)
    .map(([year, list]) => ({
      year,
      heading:
        year === -1
          ? 'Before you were born'
          : year === 0
            ? 'Your first year'
            : `Age ${year}`,
      motherThread: list.filter((e) => e.authorVoice === 'mother'),
      fatherThread: list.filter((e) => e.authorVoice === 'father'),
      shared: list.filter((e) => e.authorVoice === 'shared'),
    }));

  return {
    childName,
    chapters,
    stats: {
      entries: entries.length,
      prayers: entries.filter((e) => e.kind === 'prayer').length,
      answeredPrayers: entries.filter((e) => e.kind === 'answered-prayer').length,
      photos: entries.filter((e) => e.kind === 'photo').length,
      letters: entries.filter((e) => e.kind === 'letter').length,
      years: chapters.filter((c) => c.year >= 0).length,
    },
  };
}

/** Markdown rendering of the story — the artifact handed over at the Recognize ceremony. */
export function renderStoryMarkdown(story: Story): string {
  const lines: string[] = [
    `# The Story of Your Childhood`,
    ``,
    `## ${story.childName}`,
    ``,
    `${story.stats.entries} moments recorded across ${story.stats.years} years — ` +
      `${story.stats.prayers} prayers (${story.stats.answeredPrayers} marked answered), ` +
      `${story.stats.letters} letters, ${story.stats.photos} photographs.`,
    ``,
  ];
  for (const chapter of story.chapters) {
    lines.push(`## ${chapter.heading}`, ``);
    const render = (label: string, thread: readonly JourneyEntry[]) => {
      if (thread.length === 0) return;
      lines.push(`### ${label}`, ``);
      for (const e of thread) {
        lines.push(`**${e.date} — ${e.title}**`, ``, e.body, ``);
      }
    };
    render('From your mother', chapter.motherThread);
    render('From your father', chapter.fatherThread);
    render('Together', chapter.shared);
  }
  return lines.join('\n');
}
