import {
  controlAndResponsibility,
  countdown,
  roleMixForYears,
  ROLE_BANDS,
  ROLES,
  yearsBetween,
  type CalendarDate,
  type RoleBand,
} from '@cairn/stages';
import { WORKSHEET_ITEMS, signalAt } from '@cairn/framework';

/**
 * The 21-year roadmap visual. Section 22.
 *
 * Sampled per year so the app can draw the four role bands, the crossing
 * control/responsibility curves, and the milestone markers without any
 * curve math in the view layer.
 */
export interface RoadmapSample {
  readonly year: number;
  readonly mix: Readonly<Record<RoleBand, number>>;
  readonly parentalControl: number;
  readonly childResponsibility: number;
}

export interface RoadmapMarker {
  readonly year: number;
  readonly label: string;
  readonly kind: 'ceremony' | 'window-opens' | 'window-closes';
}

export interface RoadmapViewModel {
  readonly samples: readonly RoadmapSample[];
  readonly markers: readonly RoadmapMarker[];
  readonly currentYear: number | null;
  readonly weeksElapsed: number;
  readonly weeksTotal: number;
  readonly roleSummaries: ReadonlyArray<{ id: RoleBand; label: string; range: string; summary: string }>;
}

const CEREMONY_LABELS: Readonly<Record<number, string>> = {
  13: 'Intro ceremony — entering adolescence',
  16: 'Growing ceremony',
  17: 'Releasing ceremony',
  21: 'Recognize ceremony — adulthood, publicly marked',
};

export function buildRoadmap(birthdate: CalendarDate | null, on: CalendarDate): RoadmapViewModel {
  const samples: RoadmapSample[] = [];
  for (let year = 0; year <= 21; year += 1) {
    const cr = controlAndResponsibility(year);
    samples.push({
      year,
      mix: roleMixForYears(year),
      parentalControl: cr.parentalControl,
      childResponsibility: cr.childResponsibility,
    });
  }

  const markers: RoadmapMarker[] = [];
  const ceremonies = WORKSHEET_ITEMS.find((i) => i.id === 'experience.ceremonies');
  for (const year of ceremonies?.discreteYears ?? []) {
    markers.push({ year, label: CEREMONY_LABELS[year] ?? 'Milestone', kind: 'ceremony' });
  }
  // Window edges worth drawing: where a non-constant item's band opens or closes.
  for (const item of WORKSHEET_ITEMS) {
    if (item.constant || item.discreteYears) continue;
    for (const band of [...item.emphasisBands, ...item.opportunityBands]) {
      markers.push({ year: band.from, label: `${item.label} begins`, kind: 'window-opens' });
      markers.push({ year: band.to, label: `${item.label} window closes`, kind: 'window-closes' });
    }
  }
  markers.sort((a, b) => a.year - b.year);

  const years = birthdate ? Math.floor(yearsBetween(birthdate, on)) : null;
  const c = birthdate ? countdown(birthdate, 21, on) : null;

  return {
    samples,
    markers,
    currentYear: years !== null && years >= 0 && years <= 21 ? years : null,
    weeksElapsed: c?.weeksElapsed ?? 0,
    weeksTotal: c?.weeksTotal ?? 1096,
    roleSummaries: ROLE_BANDS.map((id) => ({
      id,
      label: ROLES[id].label,
      range: ROLES[id].nominalRange,
      summary: ROLES[id].summary,
    })),
  };
}

/** Which framework rows are lit at a given age — for the "what should I emphasise now" strip. */
export function activeRowsAt(years: number): ReadonlyArray<{ id: string; label: string; emphasis: boolean; opportunity: boolean }> {
  return WORKSHEET_ITEMS.map((item) => {
    const s = signalAt(item, years);
    return { id: item.id, label: item.label, emphasis: s.emphasis || item.constant, opportunity: s.opportunity };
  }).filter((r) => r.emphasis || r.opportunity);
}
