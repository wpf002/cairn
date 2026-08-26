import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { buildChildDashboard } from '@cairn/dashboard';
import { allUnits } from '@cairn/substrate';
import { Card } from '../components/Card';
import { useFamily } from '../state/family';
import { colors, spacing, type } from '../theme';

/**
 * The per-child age dashboard — section 21's ten sections, voice-resolved.
 */
export function ChildScreen({ childId }: { childId: string }) {
  const family = useFamily();
  const child = family.children.find((c) => c.id === childId);
  if (!child) return null;

  const view = buildChildDashboard(child, family.audience, allUnits(), family.today);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: spacing.md }}>
      <Text style={type.label}>
        {view.stage ? view.stage.label.toUpperCase() : 'GROWN'} · {view.stage?.range ?? ''}
      </Text>
      <Text style={type.title}>{view.childName}</Text>
      {view.transitionBanner ? <Text style={styles.transition}>{view.transitionBanner}</Text> : null}
      <Text style={styles.role}>YOUR ROLE: {view.roleLabel}</Text>

      {view.development.length > 0 ? (
        <Card label="UNDERSTAND YOUR CHILD">
          {view.development.map(({ unit }) => (
            <View key={unit.id} style={styles.unit}>
              <Text style={type.heading}>{unit.title}</Text>
              <Text style={[type.body, { marginTop: spacing.xs }]}>{unit.body}</Text>
              {unit.evidence?.length ? (
                <Text style={styles.provenance}>Source: {unit.evidence.map((e) => e.org).join(', ')}</Text>
              ) : null}
            </View>
          ))}
        </Card>
      ) : null}

      {view.categories.map((section) =>
        section.units.length === 0 ? null : (
          <Card key={section.category} label={section.heading}>
            {section.units.map(({ unit, decision }) => (
              <View key={unit.id} style={styles.unit}>
                <Text style={type.heading}>{unit.title}</Text>
                {decision === 'paired' ? (
                  <Text style={styles.paired}>What your spouse is carrying</Text>
                ) : null}
                {decision === 'solo' ? (
                  <Text style={styles.paired}>Written for a parent carrying both roles</Text>
                ) : null}
                <Text style={[type.body, { marginTop: spacing.xs }]}>{unit.body}</Text>
                {unit.warrant ? (
                  <Text style={styles.provenance}>{unit.warrant.passages.join(' · ')}</Text>
                ) : null}
              </View>
            ))}
          </Card>
        ),
      )}

      {view.watchFor.length > 0 ? (
        <Card label="WATCH FOR">
          {view.watchFor.map((w) => (
            <Text key={w} style={[type.body, { marginBottom: spacing.xs }]}>· {w}</Text>
          ))}
          <Text style={type.soft}>
            These are observations worth a conversation with your pediatrician — never a diagnosis.
          </Text>
        </Card>
      ) : null}

      {view.thisMonth.length > 0 ? (
        <Card label="THIS MONTH">
          {view.thisMonth.map((a) => (
            <Text key={a} style={styles.action}>· {a}</Text>
          ))}
        </Card>
      ) : null}

      {view.closingWindows.length > 0 ? (
        <Card label="WINDOWS CLOSING">
          {view.closingWindows.map((w) => (
            <Text key={w.item.id} style={type.body}>
              {w.item.label} — about {w.yearsRemaining} year{w.yearsRemaining === 1 ? '' : 's'} left in this window.
            </Text>
          ))}
        </Card>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  transition: { ...type.label, color: colors.accent, marginTop: spacing.xs },
  role: { ...type.label, marginTop: spacing.xs, marginBottom: spacing.md },
  unit: { marginBottom: spacing.md },
  action: { ...type.body, color: colors.accent, marginBottom: spacing.xs },
  paired: { ...type.soft, color: colors.accent, marginTop: 2 },
  provenance: { ...type.soft, marginTop: spacing.sm, fontStyle: 'italic' },
});
