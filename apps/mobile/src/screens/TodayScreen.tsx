import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { buildToday } from '@cairn/dashboard';
import { allUnits } from '@cairn/substrate';
import { Card } from '../components/Card';
import { useFamily } from '../state/family';
import { colors, spacing, type } from '../theme';

/**
 * TODAY — the product surface (sections 20, 29). One block per pregnancy and
 * child; a focus, an action, a counter. Readable in under a minute.
 */
export function TodayScreen({ onOpenChild }: { onOpenChild: (id: string) => void }) {
  const family = useFamily();
  const today = buildToday(
    {
      audience: family.audience,
      greetingName: family.motherName,
      dueDate: family.dueDate,
      motherName: family.motherName,
      children: family.children,
    },
    allUnits(),
    family.today,
  );

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: spacing.md }}>
      <Text style={type.label}>TODAY</Text>
      {today.blocks.map((block) => (
        <Card key={block.id}>
          <Text
            style={type.heading}
            onPress={block.kind === 'child' ? () => onOpenChild(block.id) : undefined}
          >
            {block.headline}
          </Text>
          <Text style={type.soft}>{block.subline}</Text>
          {block.focus ? (
            <View style={{ marginTop: spacing.sm }}>
              <Text style={[type.body, { fontWeight: '600' }]}>{block.focus.unit.title}</Text>
              {block.action ? <Text style={styles.action}>Today: {block.action}</Text> : null}
            </View>
          ) : null}
          <Text style={styles.counter}>{block.counterLine}</Text>
        </Card>
      ))}

      {today.parentFocus ? (
        <Card label="BECOMING THE PARENT THEY NEED">
          <Text style={type.heading}>{today.parentFocus.unit.title}</Text>
          <Text style={[type.body, { marginTop: spacing.xs }]}>{today.parentFocus.unit.body}</Text>
          {today.parentFocus.unit.actions?.[0] ? (
            <Text style={styles.action}>· {today.parentFocus.unit.actions[0]}</Text>
          ) : null}
        </Card>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  action: { ...type.body, color: colors.accent, marginTop: spacing.xs },
  counter: { ...type.soft, marginTop: spacing.sm, letterSpacing: 0.4 },
});
