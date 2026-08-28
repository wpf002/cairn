import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { helpMeParentThis, type ModelAdapter, type HelpResult } from '@cairn/ai';
import { allUnits } from '@cairn/substrate';
import { Card } from '../components/Card';
import { EscalationBanner } from '../components/EscalationBanner';
import { useFamily } from '../state/family';
import { colors, spacing, type } from '../theme';

/**
 * ASK — Help Me Parent This. Section 25's seven blocks, rendered in order,
 * with the professional-attention block styled by the same escalation banner
 * the trackers use. Citations render at the bottom: every answer shows its
 * grounding, because invariant 3 is a UI feature, not just a pipeline rule.
 *
 * The model adapter is injected — anthropicAdapter() in release builds, where
 * the API key lives behind Cairn's own backend proxy rather than in the app
 * bundle. When no adapter is configured, the screen says so honestly rather
 * than pretending (section 35: gaps are explicit in the UI).
 */
export function AskScreen({ adapter }: { adapter: ModelAdapter | null }) {
  const family = useFamily();
  const [situation, setSituation] = useState('');
  const [childId, setChildId] = useState(family.children[0]?.id ?? null);
  const [result, setResult] = useState<HelpResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const ask = async () => {
    if (!adapter || !situation.trim()) return;
    const child = family.children.find((c) => c.id === childId);
    setBusy(true);
    setError(null);
    try {
      const r = await helpMeParentThis(
        {
          situation,
          audience: family.audience,
          ...(child ? { child: { birthdate: child.birthdate } } : {}),
          on: family.today,
        },
        allUnits(),
        adapter,
      );
      setResult(r);
    } catch {
      setError(
        'That answer did not meet Cairn\'s grounding standards, so it was not shown. Try rephrasing — or if this is urgent, contact your provider directly.',
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: spacing.md }}>
      <Card>
        <View style={styles.childRow}>
          {family.children.map((c) => (
            <Pressable key={c.id} onPress={() => setChildId(c.id)}>
              <Text style={[styles.childChip, childId === c.id && styles.childChipActive]}>{c.name}</Text>
            </Pressable>
          ))}
        </View>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Describe what's happening — e.g. “My eight-year-old has started lying about small things.”"
          placeholderTextColor={colors.stone}
          value={situation}
          onChangeText={setSituation}
        />
        <Pressable style={[styles.primary, (!adapter || busy) && styles.disabled]} onPress={ask} disabled={!adapter || busy}>
          {busy ? <ActivityIndicator color="#fff" /> : <Text style={styles.primaryText}>Ask</Text>}
        </Pressable>
        {!adapter ? (
          <Text style={type.soft}>
            The AI assistant is not configured in this build. Everything else in Cairn works without it.
          </Text>
        ) : null}
        {error ? <Text style={[type.body, { color: colors.warn, marginTop: spacing.sm }]}>{error}</Text> : null}
      </Card>

      {result ? (
        <View>
          <EscalationBanner escalations={result.response.professionalAttention} />
          <Card label="WHAT'S PROBABLY HAPPENING">
            <Text style={type.body}>{result.response.whatsProbablyHappening}</Text>
          </Card>
          <Card label="HOW TO RESPOND">
            {result.response.howToRespond.map((t) => (
              <Text key={t} style={[type.body, { marginBottom: spacing.xs }]}>· {t}</Text>
            ))}
          </Card>
          <Card label="WHAT NOT TO DO">
            {result.response.whatNotToDo.map((t) => (
              <Text key={t} style={[type.body, { marginBottom: spacing.xs }]}>· {t}</Text>
            ))}
          </Card>
          <Card label="CONVERSATION TO HAVE">
            <Text style={type.body}>{result.response.conversationToHave}</Text>
          </Card>
          <Card label="BIBLICAL PERSPECTIVE">
            <Text style={type.body}>{result.response.biblicalPerspective.text}</Text>
            <Text style={styles.passages}>{result.response.biblicalPerspective.passages.join(' · ')}</Text>
          </Card>
          <Card label="PRAYER">
            <Text style={[type.body, { fontStyle: 'italic' }]}>{result.response.prayer}</Text>
          </Card>
          <Card label="GROUNDED IN">
            {result.response.citations.map((c) => (
              <Text key={c} style={type.soft}>{c}</Text>
            ))}
            <Text style={[type.soft, { marginTop: spacing.xs }]}>
              Every answer cites the reviewed content it draws from. Cairn's assistant cannot answer from
              thin air — by design.
            </Text>
          </Card>
        </View>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  input: {
    ...type.body,
    minHeight: 90,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 10,
    padding: spacing.sm,
    textAlignVertical: 'top',
    marginBottom: spacing.sm,
  },
  primary: {
    backgroundColor: colors.indigo,
    borderRadius: 10,
    paddingVertical: spacing.sm + 4,
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  disabled: { opacity: 0.5 },
  primaryText: { color: '#fff', fontWeight: '600', fontSize: 15 },
  childRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.sm },
  childChip: { ...type.soft, borderWidth: 1, borderColor: colors.line, borderRadius: 14, paddingHorizontal: 12, paddingVertical: 4 },
  childChipActive: { color: colors.indigo, borderColor: colors.indigo },
  passages: { ...type.soft, marginTop: spacing.sm, fontStyle: 'italic' },
});
