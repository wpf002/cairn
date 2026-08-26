import { StyleSheet, Text, View } from 'react-native';
import type { Escalation } from '@cairn/escalation';
import { colors, spacing, type } from '../theme';

/**
 * Renders deterministic escalations. This component has no dismiss button for
 * emergency/urgent items by design — invariant 2 extends to the UI: what the
 * rules raised, the interface does not bury.
 */
export function EscalationBanner({ escalations }: { escalations: readonly Escalation[] }) {
  if (escalations.length === 0) return null;
  return (
    <View>
      {escalations.map((e) => (
        <View key={e.ruleId} style={styles.banner}>
          <Text style={styles.urgency}>{e.urgency.toUpperCase()}</Text>
          <Text style={styles.message}>{e.message}</Text>
          <Text style={styles.source}>
            {e.source.org} — {e.source.title}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: colors.warnSoft,
    borderLeftWidth: 4,
    borderLeftColor: colors.warn,
    borderRadius: 10,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  urgency: { ...type.label, color: colors.warn },
  message: { ...type.body, marginTop: spacing.xs },
  source: { ...type.soft, marginTop: spacing.sm },
});
