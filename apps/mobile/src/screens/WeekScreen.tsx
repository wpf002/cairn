import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { formatGestationalAge, pregnancyStatus } from '@cairn/stages';
import { groupByCategory, selectUnits, allUnits } from '@cairn/substrate';
import { CATEGORY_DEFINITIONS, CATEGORIES } from '@cairn/framework';
import { Card } from '../components/Card';
import { useFamily } from '../state/family';
import { colors, spacing, type } from '../theme';

/**
 * The week-by-week card. Section 5's structure, voice-resolved through the
 * same retrieval path Phase 5's AI will use — one filter, audited once.
 */
export function WeekScreen() {
  const family = useFamily();
  if (!family.dueDate) {
    return (
      <View style={styles.empty}>
        <Text style={type.body}>No active pregnancy on this account.</Text>
      </View>
    );
  }

  const status = pregnancyStatus(family.dueDate, family.today);
  const resolved = selectUnits(allUnits(), {
    audience: family.audience,
    week: status.week,
    includeCrossVoice: true,
  });
  const grouped = groupByCategory(resolved);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: spacing.md }}>
      <Text style={type.label}>WEEK {status.week} · {formatGestationalAge(status)} · TRIMESTER {status.trimester}</Text>
      <Text style={[type.display, { marginBottom: spacing.md }]}>
        {status.daysUntilDue > 0 ? `${status.daysUntilDue} days until your due date` : 'Due — any day now'}
      </Text>

      {!status.hasContent ? (
        <Card>
          <Text style={type.body}>
            Weekly cards run from week 4 to week 40. Your week is outside that span — your provider is
            the right guide for where you are now.
          </Text>
        </Card>
      ) : (
        CATEGORIES.map((category) => {
          const units = grouped.get(category) ?? [];
          if (units.length === 0) return null;
          return (
            <Card key={category} label={CATEGORY_DEFINITIONS[category].dashboardHeading}>
              {units.map(({ unit, decision }) => (
                <View key={unit.id} style={styles.unit}>
                  <Text style={type.heading}>{unit.title}</Text>
                  {decision === 'paired' ? (
                    <Text style={styles.paired}>What your spouse is carrying this week</Text>
                  ) : null}
                  <Text style={[type.body, { marginTop: spacing.xs }]}>{unit.body}</Text>
                  {unit.actions?.length ? (
                    <View style={{ marginTop: spacing.sm }}>
                      {unit.actions.map((a) => (
                        <Text key={a} style={styles.action}>· {a}</Text>
                      ))}
                    </View>
                  ) : null}
                  {unit.warrant ? (
                    <Text style={styles.provenance}>
                      {unit.warrant.passages.join(' · ')} — tap for context, including how this passage is
                      commonly misused.
                    </Text>
                  ) : null}
                  {unit.evidence?.length ? (
                    <Text style={styles.provenance}>
                      Source: {unit.evidence.map((e) => e.org).join(', ')}
                    </Text>
                  ) : null}
                </View>
              ))}
            </Card>
          );
        })
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.bg },
  unit: { marginBottom: spacing.md },
  action: { ...type.body, color: colors.indigo, marginBottom: 2 },
  paired: { ...type.soft, color: colors.indigo, marginTop: 2 },
  provenance: { ...type.soft, marginTop: spacing.sm, fontStyle: 'italic' },
});
