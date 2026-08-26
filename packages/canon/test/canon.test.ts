import { describe, expect, it } from 'vitest';
import {
  BOOKS,
  findBook,
  isCurrent,
  isValidScriptureRef,
  parseScriptureRef,
  ScriptureRefError,
} from '@cairn/canon';

describe('the canon (section 17)', () => {
  it('has sixty-six books', () => {
    expect(BOOKS).toHaveLength(66);
    expect(BOOKS.filter((b) => b.testament === 'OT')).toHaveLength(39);
    expect(BOOKS.filter((b) => b.testament === 'NT')).toHaveLength(27);
  });

  it('resolves names, abbreviations, and casing', () => {
    expect(findBook('Ephesians')?.name).toBe('Ephesians');
    expect(findBook('eph')?.name).toBe('Ephesians');
    expect(findBook('Ps.')?.name).toBe('Psalms');
    expect(findBook('1 thess')?.name).toBe('1 Thessalonians');
    expect(findBook('Song of Songs')?.name).toBe('Song of Solomon');
    expect(findBook('Tobit')).toBeNull();
  });
});

describe('scripture reference parsing (invariant 8 support)', () => {
  it('parses the anchor passages of section 16a', () => {
    for (const ref of [
      'Deuteronomy 6:6-9',
      '1 Corinthians 11:1',
      'Titus 2:7',
      'Ephesians 5:25-33',
      'Ephesians 6:4',
      'Colossians 3:21',
      '1 Thessalonians 2:7-12',
      'Proverbs 3:11-12',
      'Deuteronomy 6:20-25',
      'Joshua 4:4-7',
      'Luke 2:41-52',
      'Matthew 3:17',
      'Proverbs 22:6',
      '2 Thessalonians 3:10',
      'Psalm 78:1-8',
      '2 Timothy 3:14-15',
      '1 Peter 3:15',
      'Luke 2:52',
      'Galatians 5:22-23',
      'Micah 6:8',
      'Romans 12:2',
      'Psalm 139',
    ]) {
      expect(isValidScriptureRef(ref), ref).toBe(true);
    }
  });

  it('normalizes display form', () => {
    expect(parseScriptureRef('eph 6:4').display).toBe('Ephesians 6:4');
    expect(parseScriptureRef('Psalm 139:13-16').display).toBe('Psalms 139:13-16');
  });

  it('rejects what a string check would wave through', () => {
    expect(() => parseScriptureRef('Ephesans 6:4')).toThrow(ScriptureRefError);
    expect(() => parseScriptureRef('Ephesians 9:1')).toThrow(/6 chapter/);
    expect(() => parseScriptureRef('Proverbs 22:6-2')).toThrow(/ends before/);
    expect(() => parseScriptureRef('Psalm 151')).toThrow(ScriptureRefError);
    expect(isValidScriptureRef('just a sentence')).toBe(false);
  });

  it('handles cross-chapter ranges', () => {
    const ref = parseScriptureRef('Genesis 1:1-2:3');
    expect(ref.chapterEnd).toBe(2);
    expect(ref.display).toBe('Genesis 1:1-2:3');
  });
});

describe('review currency (section 19)', () => {
  it('treats a review as current within three years', () => {
    const signoff = {
      gate: 'theological' as const,
      status: 'approved' as const,
      reviewer: 'T. Reviewer',
      reviewDate: '2025-01-01',
    };
    expect(isCurrent(signoff, '2026-08-01')).toBe(true);
    expect(isCurrent(signoff, '2028-06-01')).toBe(false);
  });
});
