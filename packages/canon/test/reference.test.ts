import { describe, expect, it } from 'vitest';
import { parseScriptureRef } from '@cairn/canon';

describe('single-chapter books', () => {
  /*
   * Obadiah, Philemon, 2 John, 3 John and Jude are cited by verse alone,
   * because there is only one chapter to name. Reading the bare number as a
   * chapter rejected every standard citation from those five books —
   * including the "3 John 4" the roadmap itself cites in section 12, which is
   * how this was caught.
   */
  it.each([
    ['3 John 4', '3 John 1:4'],
    ['Jude 24', 'Jude 1:24'],
    ['Philemon 6', 'Philemon 1:6'],
    ['Obadiah 15', 'Obadiah 1:15'],
    ['2 John 6', '2 John 1:6'],
  ])('reads a bare number in %s as a verse', (input, expected) => {
    expect(parseScriptureRef(input).display).toBe(expected);
    expect(parseScriptureRef(input).chapter).toBe(1);
    expect(parseScriptureRef(input).verseStart).toBe(Number(input.split(' ').pop()));
  });

  it('reads a bare range in a one-chapter book as a verse range', () => {
    const ref = parseScriptureRef('Jude 17-19');
    expect(ref.display).toBe('Jude 1:17-19');
    expect(ref.verseStart).toBe(17);
    expect(ref.verseEnd).toBe(19);
    expect(ref.chapterEnd).toBeUndefined();
  });

  it('still reads a bare range in a multi-chapter book as a chapter range', () => {
    const ref = parseScriptureRef('Psalm 120-134');
    expect(ref.display).toBe('Psalms 120-134');
    expect(ref.chapter).toBe(120);
    expect(ref.chapterEnd).toBe(134);
    expect(ref.verseStart).toBeUndefined();
  });

  it('rejects a chapter number on a one-chapter book', () => {
    expect(() => parseScriptureRef('Jude 2:1')).toThrow(/1 chapter/);
  });
});
