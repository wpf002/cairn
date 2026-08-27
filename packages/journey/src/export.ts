import type { JourneyEntry } from './entries.js';

/**
 * Full decrypted export, in formats that outlive the app. Section 33a:
 * export on demand; deletion is cryptographically meaningful; and the family
 * never depends on Cairn existing in 2047 to read their own memories.
 *
 * Two artifacts: a JSON file (lossless, re-importable) and a Markdown file
 * (human-readable forever). Media is exported alongside as plain files named
 * by asset id; the entries reference them by name.
 */
export interface JourneyExport {
  readonly format: 'cairn-journey-export';
  readonly version: 1;
  readonly exportedOn: string;
  readonly childName: string;
  readonly entries: readonly JourneyEntry[];
}

export function toJsonExport(childName: string, entries: readonly JourneyEntry[], on: string): string {
  const doc: JourneyExport = {
    format: 'cairn-journey-export',
    version: 1,
    exportedOn: on,
    childName,
    entries,
  };
  return JSON.stringify(doc, null, 2);
}

export function parseJsonExport(raw: string): JourneyExport {
  const doc = JSON.parse(raw) as JourneyExport;
  if (doc.format !== 'cairn-journey-export') throw new Error('Not a Cairn journey export.');
  return doc;
}

export function toMarkdownExport(childName: string, entries: readonly JourneyEntry[]): string {
  const lines: string[] = [`# ${childName} — Journey`, ''];
  let currentYear = '';
  for (const entry of entries) {
    const year = entry.date.slice(0, 4);
    if (year !== currentYear) {
      currentYear = year;
      lines.push(`## ${year}`, '');
    }
    lines.push(`### ${entry.date} — ${entry.title}`);
    lines.push(`*${entry.kind} · recorded by ${entry.authorName}*`, '');
    lines.push(entry.body, '');
    for (const asset of entry.assetIds) lines.push(`![photo](./${asset})`, '');
  }
  return lines.join('\n');
}
