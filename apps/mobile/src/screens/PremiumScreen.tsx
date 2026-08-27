import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { paywall } from '@cairn/monetization';
import { Card } from '../components/Card';
import { colors, spacing, type } from '../theme';

/**
 * The paywall — annual first, preselected, with the trust lines that are
 * Cairn's actual differentiation rendered where the buying decision happens.
 * Purchases run through the injected RevenueCat adapter in release builds.
 */
export function PremiumScreen() {
  const p = paywall();
  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: spacing.md }}>
      <Text style={type.label}>CAIRN PREMIUM</Text>
      <Text style={[type.display, { marginBottom: spacing.sm }]}>{p.valueLine}</Text>

      {p.options.map((o) => (
        <Pressable key={o.productId} style={[styles.option, o.preselected && styles.optionSelected]}>
          <Text style={[type.heading, o.preselected && { color: colors.accent }]}>{o.headline}</Text>
          {o.preselected ? <Text style={type.soft}>Most families choose annual</Text> : null}
        </Pressable>
      ))}

      <Card label="WHAT PREMIUM ADDS">
        {[
          'Unlimited Help Me Parent This',
          'Spouse sharing — two voices, one family, genuinely different views of the same child',
          'Encrypted photo and video in the Journey',
          'Ceremony flows with letters from grandparents and mentors',
          'The Story of Your Childhood at twenty-one',
          'Family devotionals, conversation guides, advanced adolescent guidance',
        ].map((f) => (
          <Text key={f} style={[type.body, { marginBottom: spacing.xs }]}>· {f}</Text>
        ))}
      </Card>

      <Card label="WHAT NEVER CHANGES">
        {p.trustLines.map((t) => (
          <Text key={t} style={[type.body, { marginBottom: spacing.xs }]}>· {t}</Text>
        ))}
      </Card>

      <View style={styles.restore}>
        <Text style={type.soft}>Restore purchases</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  option: {
    backgroundColor: colors.card,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.line,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  optionSelected: { borderColor: colors.accent, backgroundColor: colors.accentSoft },
  restore: { alignItems: 'center', paddingVertical: spacing.md },
});
