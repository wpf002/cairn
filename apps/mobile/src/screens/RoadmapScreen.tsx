import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { buildRoadmap } from '@cairn/dashboard';
import { Card } from '../components/Card';
import { useFamily } from '../state/family';
import { colors, spacing, type } from '../theme';

/**
 * The 21-year roadmap — section 22. Role bands as stacked bars per year,
 * control/responsibility as opposing tracks, ceremonies as markers.
 */
const BAND_COLORS: Record<string, string> = {
  caretaker: '#4A6B57',
  coach: '#6E8B6F',
  consultant: '#9AA98A',
  counselor: '#C7CBB4',
};

export function RoadmapScreen() {
  const family = useFamily();
  const child = family.children[0] ?? null;
  const rm = buildRoadmap(child?.birthdate ?? null, family.today);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: spacing.md }}>
      <Text style={type.label}>THE 21-YEAR ROADMAP</Text>
      {child ? (
        <Text style={[type.display, { marginBottom: spacing.md }]}>
          {child.name}: week {rm.weeksElapsed.toLocaleString('en-US')} of {rm.weeksTotal.toLocaleString('en-US')}
        </Text>
      ) : null}

      <Card label="YOUR ROLE, YEAR BY YEAR">
        <View style={styles.chart}>
          {rm.samples.map((s) => (
            <View key={s.year} style={styles.column}>
              {(['counselor', 'consultant', 'coach', 'caretaker'] as const).map((band) => (
                <View
                  key={band}
                  style={{
                    flex: Math.max(s.mix[band], 0.001),
                    backgroundColor: BAND_COLORS[band],
                    opacity: rm.currentYear === s.year ? 1 : 0.55,
                  }}
                />
              ))}
            </View>
          ))}
        </View>
        <View style={styles.legend}>
          {rm.roleSummaries.map((r) => (
            <View key={r.id} style={styles.legendItem}>
              <View style={[styles.swatch, { backgroundColor: BAND_COLORS[r.id] }]} />
              <Text style={type.soft}>{r.label} ({r.range})</Text>
            </View>
          ))}
        </View>
      </Card>

      <Card label="CONTROL HANDS OVER TO RESPONSIBILITY">
        <View style={styles.chart}>
          {rm.samples.map((s) => (
            <View key={s.year} style={styles.column}>
              <View style={{ flex: Math.max(s.childResponsibility, 0.001), backgroundColor: colors.indigoSoft }} />
              <View style={{ flex: Math.max(s.parentalControl, 0.001), backgroundColor: colors.indigo }} />
            </View>
          ))}
        </View>
        <Text style={type.soft}>
          Dark: parental control. Light: your child’s own responsibility. The handover is the plan,
          not the failure.
        </Text>
      </Card>

      <Card label="MILESTONE MOMENTS">
        {rm.markers
          .filter((m) => m.kind === 'ceremony')
          .map((m) => (
            <View key={m.year} style={styles.marker}>
              <Text style={styles.markerYear}>{m.year}</Text>
              <Text style={type.body}>{m.label}</Text>
            </View>
          ))}
        <Text style={[type.soft, { marginTop: spacing.sm }]}>
          The Recognize ceremony at 21 is the capstone the whole roadmap points at — the day the
          formation work is publicly declared finished and the relationship changes.
        </Text>
      </Card>

      {rm.roleSummaries.map((r) => (
        <Card key={r.id} label={`${r.label.toUpperCase()} (${r.range})`}>
          <Text style={type.body}>{r.summary}</Text>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  chart: { flexDirection: 'row', height: 120, gap: 2, marginBottom: spacing.sm },
  column: { flex: 1, flexDirection: 'column', borderRadius: 2, overflow: 'hidden' },
  legend: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  swatch: { width: 10, height: 10, borderRadius: 2 },
  marker: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.xs },
  markerYear: { ...type.heading, color: colors.indigo, width: 28 },
});
