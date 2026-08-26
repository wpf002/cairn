/**
 * The Protestant canon, sixty-six books.
 *
 * Roadmap section 17 sets the theological baseline at historic orthodox
 * Christianity, practically broad evangelical Protestantism. The canon list is
 * therefore the sixty-six-book Protestant canon; a reference outside it is a
 * validation failure rather than a silent pass, because a scripture reference
 * that does not resolve is a provenance hole.
 */
export type Testament = 'OT' | 'NT';

export interface Book {
  readonly name: string;
  readonly testament: Testament;
  readonly chapters: number;
  /** Common abbreviations and alternate spellings, lowercased. */
  readonly aliases: readonly string[];
}

export const BOOKS: readonly Book[] = [
  { name: 'Genesis', testament: 'OT', chapters: 50, aliases: ['gen', 'ge', 'gn'] },
  { name: 'Exodus', testament: 'OT', chapters: 40, aliases: ['exod', 'ex', 'exo'] },
  { name: 'Leviticus', testament: 'OT', chapters: 27, aliases: ['lev', 'lv'] },
  { name: 'Numbers', testament: 'OT', chapters: 36, aliases: ['num', 'nm', 'nu'] },
  { name: 'Deuteronomy', testament: 'OT', chapters: 34, aliases: ['deut', 'dt', 'deu'] },
  { name: 'Joshua', testament: 'OT', chapters: 24, aliases: ['josh', 'jos'] },
  { name: 'Judges', testament: 'OT', chapters: 21, aliases: ['judg', 'jdg'] },
  { name: 'Ruth', testament: 'OT', chapters: 4, aliases: ['rth', 'ru'] },
  { name: '1 Samuel', testament: 'OT', chapters: 31, aliases: ['1 sam', '1sam', '1sa', 'i samuel'] },
  { name: '2 Samuel', testament: 'OT', chapters: 24, aliases: ['2 sam', '2sam', '2sa', 'ii samuel'] },
  { name: '1 Kings', testament: 'OT', chapters: 22, aliases: ['1 kgs', '1kgs', '1ki', 'i kings'] },
  { name: '2 Kings', testament: 'OT', chapters: 25, aliases: ['2 kgs', '2kgs', '2ki', 'ii kings'] },
  { name: '1 Chronicles', testament: 'OT', chapters: 29, aliases: ['1 chr', '1chr', '1ch'] },
  { name: '2 Chronicles', testament: 'OT', chapters: 36, aliases: ['2 chr', '2chr', '2ch'] },
  { name: 'Ezra', testament: 'OT', chapters: 10, aliases: ['ezr'] },
  { name: 'Nehemiah', testament: 'OT', chapters: 13, aliases: ['neh', 'ne'] },
  { name: 'Esther', testament: 'OT', chapters: 10, aliases: ['esth', 'est'] },
  { name: 'Job', testament: 'OT', chapters: 42, aliases: ['jb'] },
  { name: 'Psalms', testament: 'OT', chapters: 150, aliases: ['psalm', 'ps', 'psa', 'pss'] },
  { name: 'Proverbs', testament: 'OT', chapters: 31, aliases: ['prov', 'pr', 'prv'] },
  { name: 'Ecclesiastes', testament: 'OT', chapters: 12, aliases: ['eccl', 'ecc', 'qoh'] },
  { name: 'Song of Solomon', testament: 'OT', chapters: 8, aliases: ['song', 'sos', 'canticles', 'song of songs'] },
  { name: 'Isaiah', testament: 'OT', chapters: 66, aliases: ['isa', 'is'] },
  { name: 'Jeremiah', testament: 'OT', chapters: 52, aliases: ['jer', 'je'] },
  { name: 'Lamentations', testament: 'OT', chapters: 5, aliases: ['lam', 'la'] },
  { name: 'Ezekiel', testament: 'OT', chapters: 48, aliases: ['ezek', 'eze', 'ezk'] },
  { name: 'Daniel', testament: 'OT', chapters: 12, aliases: ['dan', 'dn'] },
  { name: 'Hosea', testament: 'OT', chapters: 14, aliases: ['hos', 'ho'] },
  { name: 'Joel', testament: 'OT', chapters: 3, aliases: ['joe', 'jl'] },
  { name: 'Amos', testament: 'OT', chapters: 9, aliases: ['am'] },
  { name: 'Obadiah', testament: 'OT', chapters: 1, aliases: ['obad', 'ob'] },
  { name: 'Jonah', testament: 'OT', chapters: 4, aliases: ['jon', 'jnh'] },
  { name: 'Micah', testament: 'OT', chapters: 7, aliases: ['mic', 'mi'] },
  { name: 'Nahum', testament: 'OT', chapters: 3, aliases: ['nah', 'na'] },
  { name: 'Habakkuk', testament: 'OT', chapters: 3, aliases: ['hab', 'hb'] },
  { name: 'Zephaniah', testament: 'OT', chapters: 3, aliases: ['zeph', 'zep'] },
  { name: 'Haggai', testament: 'OT', chapters: 2, aliases: ['hag', 'hg'] },
  { name: 'Zechariah', testament: 'OT', chapters: 14, aliases: ['zech', 'zec'] },
  { name: 'Malachi', testament: 'OT', chapters: 4, aliases: ['mal', 'ml'] },
  { name: 'Matthew', testament: 'NT', chapters: 28, aliases: ['matt', 'mt', 'mat'] },
  { name: 'Mark', testament: 'NT', chapters: 16, aliases: ['mk', 'mrk'] },
  { name: 'Luke', testament: 'NT', chapters: 24, aliases: ['lk', 'luk'] },
  { name: 'John', testament: 'NT', chapters: 21, aliases: ['jn', 'joh'] },
  { name: 'Acts', testament: 'NT', chapters: 28, aliases: ['ac', 'act'] },
  { name: 'Romans', testament: 'NT', chapters: 16, aliases: ['rom', 'ro'] },
  { name: '1 Corinthians', testament: 'NT', chapters: 16, aliases: ['1 cor', '1cor', '1co'] },
  { name: '2 Corinthians', testament: 'NT', chapters: 13, aliases: ['2 cor', '2cor', '2co'] },
  { name: 'Galatians', testament: 'NT', chapters: 6, aliases: ['gal', 'ga'] },
  { name: 'Ephesians', testament: 'NT', chapters: 6, aliases: ['eph', 'ep'] },
  { name: 'Philippians', testament: 'NT', chapters: 4, aliases: ['phil', 'php'] },
  { name: 'Colossians', testament: 'NT', chapters: 4, aliases: ['col'] },
  { name: '1 Thessalonians', testament: 'NT', chapters: 5, aliases: ['1 thess', '1thess', '1th'] },
  { name: '2 Thessalonians', testament: 'NT', chapters: 3, aliases: ['2 thess', '2thess', '2th'] },
  { name: '1 Timothy', testament: 'NT', chapters: 6, aliases: ['1 tim', '1tim', '1ti'] },
  { name: '2 Timothy', testament: 'NT', chapters: 4, aliases: ['2 tim', '2tim', '2ti'] },
  { name: 'Titus', testament: 'NT', chapters: 3, aliases: ['tit', 'ti'] },
  { name: 'Philemon', testament: 'NT', chapters: 1, aliases: ['phlm', 'phm'] },
  { name: 'Hebrews', testament: 'NT', chapters: 13, aliases: ['heb'] },
  { name: 'James', testament: 'NT', chapters: 5, aliases: ['jas', 'jm'] },
  { name: '1 Peter', testament: 'NT', chapters: 5, aliases: ['1 pet', '1pet', '1pe'] },
  { name: '2 Peter', testament: 'NT', chapters: 3, aliases: ['2 pet', '2pet', '2pe'] },
  { name: '1 John', testament: 'NT', chapters: 5, aliases: ['1 jn', '1jn', '1jo'] },
  { name: '2 John', testament: 'NT', chapters: 1, aliases: ['2 jn', '2jn', '2jo'] },
  { name: '3 John', testament: 'NT', chapters: 1, aliases: ['3 jn', '3jn', '3jo'] },
  { name: 'Jude', testament: 'NT', chapters: 1, aliases: ['jud', 'jd'] },
  { name: 'Revelation', testament: 'NT', chapters: 22, aliases: ['rev', 're', 'apocalypse'] },
];

const LOOKUP = new Map<string, Book>();
for (const book of BOOKS) {
  LOOKUP.set(book.name.toLowerCase(), book);
  LOOKUP.set(book.name.toLowerCase().replace(/\s+/g, ''), book);
  for (const alias of book.aliases) {
    LOOKUP.set(alias, book);
    LOOKUP.set(alias.replace(/\s+/g, ''), book);
  }
}

/** Resolve a book name or abbreviation. Trailing periods and case are ignored. */
export function findBook(name: string): Book | null {
  const key = name.trim().toLowerCase().replace(/\.$/, '');
  return LOOKUP.get(key) ?? LOOKUP.get(key.replace(/\s+/g, '')) ?? null;
}
