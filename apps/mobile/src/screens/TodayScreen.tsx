import { StyleSheet, Text, View } from 'react-native';
import { buildToday } from '@cairn/dashboard';
import { allUnits, ledeFor, readingMinutes } from '@cairn/substrate';
import { Action, Card, CardTitle, Counter, Expandable, Lede, Meta, Screen, SectionLabel } from '../components/ui';
import { useFamily } from '../state/family';
import { colors, spacing, type } from '../theme';

/**
 * TODAY — the product surface (sections 20, 29).
 *
 * Rebuilt against how Glorify actually composes its Today screen, which is the
 * one UX repeatedly called best-in-class in this category: no body copy at
 * all. A date line, the title as the big line, a duration on every item, and
 * the prose one tap down. Cairn was rendering an 82-word body flat here, which
 * is what made the app read as a wall of text on the first screen a parent
 * sees.
 *
 * The counter is a figure, not a sentence. Parent Cue's entire brand is "936
 * weeks" as a number a parent looks at; Cairn's runs to twenty-one and was
 * buried in grey body text.
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
    <Screen>
      {today.blocks.map((block) => {
        const focus = block.focus?.unit;
        const counter = splitCounter(block.counterLine);
        return (
          <Card key={block.id} onPress={block.kind === 'child' ? () => onOpenChild(block.id) : undefined}>
            <Text style={styles.eyebrow}>{block.headline.toUpperCase()}</Text>
            <Text style={styles.subline}>{block.subline}</Text>

            {focus ? (
              <View style={styles.focus}>
                <CardTitle>{focus.title}</CardTitle>
                <Lede>{ledeFor(focus)}</Lede>
                {block.action ? <Action>{block.action}</Action> : null}
              </View>
            ) : null}

            {counter ? <Counter value={counter.value} unit={counter.unit} /> : <Meta>{block.counterLine}</Meta>}
          </Card>
        );
      })}

      {today.parentFocus ? (
        <>
          <SectionLabel>BECOMING THE PARENT THEY NEED</SectionLabel>
          <Card tone="quiet">
            <CardTitle>{today.parentFocus.unit.title}</CardTitle>
            <Expandable
              summary={<Lede>{ledeFor(today.parentFocus.unit)}</Lede>}
              openLabel={`Read more · ${readingMinutes(today.parentFocus.unit.body)} min`}
            >
              <Text style={type.body}>{today.parentFocus.unit.body}</Text>
            </Expandable>
            {today.parentFocus.unit.actions?.[0] ? (
              <Action>{today.parentFocus.unit.actions[0]}</Action>
            ) : null}
          </Card>
        </>
      ) : null}
    </Screen>
  );
}

/**
 * Pull the number out of a counter line so it can be set as a figure.
 * "772 weeks until 21" becomes 772 / "weeks until 21".
 */
function splitCounter(line: string | undefined): { value: string; unit: string } | null {
  if (!line) return null;
  const m = /^([\d,]+)\s+(.*)$/.exec(line.trim());
  if (!m || !m[1] || !m[2]) return null;
  return { value: m[1], unit: m[2] };
}

const styles = StyleSheet.create({
  eyebrow: { ...type.label, color: colors.accent },
  subline: { ...type.meta, marginTop: spacing.xs },
  focus: { marginTop: spacing.md },
});
