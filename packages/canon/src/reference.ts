import { findBook, type Book } from './books.js';

/**
 * A scripture reference, parsed rather than trusted as a string.
 *
 * Chapter numbers are bounds-checked against the canon; verse numbers are not,
 * because Cairn does not ship a verse-count table. "3 John 1:20" therefore
 * passes despite the letter having fifteen verses. Catching that class of
 * error is the theological reviewer's job, and the gate is honest about which
 * half it can automate.
 *
 * Invariant 8 requires every normative unit to carry a warrant naming at least
 * one passage. A warrant naming "Ephesans 6:40" would satisfy a string check
 * and cite nothing, so references are parsed, the book is resolved against the
 * canon, and the chapter is bounds-checked before a unit can ship.
 */
export interface ScriptureRef {
  readonly book: string;
  readonly chapter: number;
  /** Absent for a whole-chapter reference such as `Psalm 139`. */
  readonly verseStart?: number;
  readonly verseEnd?: number;
  /** Cross-chapter references such as `Luke 2:41-52` stay within a chapter; this is for `Genesis 1:1-2:3`. */
  readonly chapterEnd?: number;
  /** Normalized display form. */
  readonly display: string;
}

export class ScriptureRefError extends Error {
  constructor(
    readonly input: string,
    reason: string,
  ) {
    super(`Invalid scripture reference ${JSON.stringify(input)}: ${reason}`);
    this.name = 'ScriptureRefError';
  }
}

/*
 * Book, then either `chapter:verse[-[chapter:]verse]`, or a bare number with
 * an optional bare range. The bare form means a chapter range in a normal book
 * ("Psalm 120-134") and a verse range in a one-chapter book ("Jude 17-19"),
 * which is resolved after the book is known.
 */
const REF =
  /^\s*((?:[1-3]\s*)?[A-Za-z][A-Za-z\s.]*?)\s*(\d+)(?::(\d+)(?:\s*[-–]\s*(?:(\d+):)?(\d+))?|\s*[-–]\s*(\d+))?\s*$/;

/** Parse `Ephesians 6:4`, `Deuteronomy 6:6-9`, `Psalm 139`, `Genesis 1:1-2:3`. */
export function parseScriptureRef(input: string): ScriptureRef {
  const m = REF.exec(input);
  if (!m) throw new ScriptureRefError(input, 'unrecognised format');

  const bookName = (m[1] ?? '').replace(/\s+/g, ' ').trim();
  const book: Book | null = findBook(bookName);
  if (!book) throw new ScriptureRefError(input, `"${bookName}" is not a book of the 66-book canon`);

  let chapter = Number(m[2]);
  let verseStart = m[3] ? Number(m[3]) : undefined;
  let chapterEnd = m[4] ? Number(m[4]) : m[6] ? Number(m[6]) : undefined;
  let verseEnd = m[5] ? Number(m[5]) : undefined;

  /*
   * Single-chapter books are cited by verse alone. "3 John 4", "Jude 24" and
   * "Philemon 6" name verses, not chapters — the chapter is implied because
   * there is only one. Reading the bare number as a chapter would reject the
   * standard form of every citation from Obadiah, Philemon, 2 John, 3 John
   * and Jude, including the "3 John 4" the roadmap itself cites in section 12.
   */
  if (book.chapters === 1 && verseStart === undefined) {
    verseStart = chapter;
    chapter = 1;
    // A bare range on a one-chapter book is a verse range, not a chapter range.
    if (chapterEnd !== undefined) {
      verseEnd = chapterEnd;
      chapterEnd = undefined;
    }
  }

  if (chapter < 1 || chapter > book.chapters) {
    throw new ScriptureRefError(input, `${book.name} has ${book.chapters} chapter(s), not ${chapter}`);
  }

  if (chapterEnd !== undefined) {
    if (chapterEnd < chapter) throw new ScriptureRefError(input, 'range ends before it begins');
    if (chapterEnd > book.chapters) {
      throw new ScriptureRefError(input, `${book.name} has ${book.chapters} chapter(s), not ${chapterEnd}`);
    }
  } else if (verseStart !== undefined && verseEnd !== undefined && verseEnd < verseStart) {
    throw new ScriptureRefError(input, 'verse range ends before it begins');
  }

  let display = `${book.name} ${chapter}`;
  if (verseStart === undefined && chapterEnd !== undefined) {
    display += `-${chapterEnd}`;
  }
  if (verseStart !== undefined) {
    display += `:${verseStart}`;
    if (chapterEnd !== undefined && verseEnd !== undefined) display += `-${chapterEnd}:${verseEnd}`;
    else if (verseEnd !== undefined) display += `-${verseEnd}`;
  }

  const ref: {
    book: string;
    chapter: number;
    display: string;
    verseStart?: number;
    verseEnd?: number;
    chapterEnd?: number;
  } = { book: book.name, chapter, display };
  if (verseStart !== undefined) ref.verseStart = verseStart;
  if (verseEnd !== undefined) ref.verseEnd = verseEnd;
  if (chapterEnd !== undefined) ref.chapterEnd = chapterEnd;
  return ref;
}

export function isValidScriptureRef(input: string): boolean {
  try {
    parseScriptureRef(input);
    return true;
  } catch {
    return false;
  }
}

export function formatScriptureRef(ref: ScriptureRef): string {
  return ref.display;
}
