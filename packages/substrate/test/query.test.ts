import { describe, expect, it } from 'vitest';
import { selectUnits, type Unit } from '@cairn/substrate';
import { validNormative } from './fixtures.js';

const fatherUnit = validNormative({
  id: 'see.father-character.preschool',
  voice: 'father',
  category: 'SEE',
});
const motherUnit = validNormative({
  id: 'see.mother-character.preschool',
  voice: 'mother',
  category: 'SEE',
  pairedWith: 'see.father-character.preschool',
});
const fatherWithPair = { ...fatherUnit, pairedWith: 'see.mother-character.preschool' } as Unit;
const soloUnit = validNormative({
  id: 'see.character.preschool.solo',
  voice: 'mother',
  soloVariantOf: 'see.father-character.preschool',
  category: 'SEE',
});
const sharedUnit = validNormative({ id: 'receive.shared.preschool', voice: 'shared' });

describe('retrieval (invariant 3 + 9)', () => {
  it('serves shared and own-voice units', () => {
    const result = selectUnits([fatherWithPair, motherUnit, sharedUnit], {
      audience: { voice: 'mother', householdShape: 'two-parent' },
      stage: 'preschool',
    });
    const ids = result.map((r) => r.unit.id);
    expect(ids).toContain('see.mother-character.preschool');
    expect(ids).toContain('receive.shared.preschool');
    expect(ids).not.toContain('see.father-character.preschool');
  });

  it('includes cross-voice pairs when asked and the spouse is present', () => {
    const result = selectUnits([fatherWithPair, motherUnit, sharedUnit], {
      audience: { voice: 'mother', householdShape: 'two-parent' },
      stage: 'preschool',
      includeCrossVoice: true,
    });
    const paired = result.find((r) => r.unit.id === 'see.father-character.preschool');
    expect(paired?.decision).toBe('paired');
  });

  it('substitutes the solo variant for a single mother', () => {
    const result = selectUnits([fatherWithPair, soloUnit, sharedUnit], {
      audience: { voice: 'mother', householdShape: 'single-mother' },
      stage: 'preschool',
      includeCrossVoice: true,
    });
    const ids = result.map((r) => r.unit.id);
    expect(ids).toContain('see.character.preschool.solo');
    expect(ids).not.toContain('see.father-character.preschool');
    expect(result.find((r) => r.unit.id === 'see.character.preschool.solo')?.decision).toBe('solo');
  });

  it('never returns a solo variant directly', () => {
    const result = selectUnits([soloUnit], {
      audience: { voice: 'mother', householdShape: 'two-parent' },
      stage: 'preschool',
    });
    expect(result).toEqual([]);
  });

  it('filters by category and scope', () => {
    const result = selectUnits([fatherWithPair, motherUnit, sharedUnit], {
      audience: { voice: 'father', householdShape: 'two-parent' },
      stage: 'preschool',
      categories: ['SEE'],
    });
    expect(result.map((r) => r.unit.id)).toEqual(['see.father-character.preschool']);
  });
});
