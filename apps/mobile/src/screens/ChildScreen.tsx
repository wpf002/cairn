import { StyleSheet, Text, View } from 'react-native';
import { buildChildDashboard } from '@cairn/dashboard';
import { allUnits, ledeFor, readingMinutes } from '@cairn/substrate';
import type { Unit } from '@cairn/substrate';
import {
  Action,
  Card,
  CardTitle,
  CategoryChip,
  Divider,
  Expandable,
  Lede,
  PageTitle,
  Screen,
  SectionLabel,
  Source,
} from '../components/ui';
import { useFamily } from '../state/family';
import { categoryColor, colors, spacing, type } from '../theme';

/**
 * The per-child age dashboard — section 21's ten sections, voice-resolved.
 *
 * Every section previously printed each unit's full body inline, so a single
 * stage produced several thousand words on one scroll. Now each unit shows its
 * headline and one sentence, with the body and its scriptural warrant behind a
 * tap that states the reading time up front.
 */
export function ChildScreen({ childId }: { childId: string }) {
  const family = useFamily();
  const child = family.children.find((c) => c.id === childId);
  if (!child) return null;

  const view = buildChildDashboard(child, family.audience, allUnits(), family.today);

  return (
    <Screen>
      <PageTitle sub={`${view.stage ? view.stage.label : 'Grown'}${view.stage ? ` · ${view.stage.range}` : ''}`}>
        {view.childName}
      </PageTitle>

      <View style={styles.roleRow}>
        <Text style={styles.rolePill}>{view.roleLabel}</Text>
        {view.transitionBanner ? <Text style={styles.transition}>{view.transitionBanner}</Text> : null}
      </View>

      {view.development.length > 0 ? (
        <>
          <SectionLabel>UNDERSTAND YOUR CHILD</SectionLabel>
          {view.development.map(({ unit }) => (
            <Card key={unit.id}>
              <UnitBlock unit={unit} />
            </Card>
          ))}
        </>
      ) : null}

      {view.categories.map((section) =>
        section.units.length === 0 ? null : (
          <View key={section.category}>
            <SectionLabel color={categoryColor[section.category]?.fg}>{section.heading}</SectionLabel>
            <Card accent={categoryColor[section.category]?.fg}>
              {section.units.map(({ unit, decision }, i) => (
                <View key={unit.id}>
                  {i > 0 ? <Divider /> : null}
                  {decision === 'paired' ? <Text style={styles.tag}>What your spouse is carrying</Text> : null}
                  {decision === 'solo' ? <Text style={styles.tag}>For a parent carrying both roles</Text> : null}
                  <UnitBlock unit={unit} tint={categoryColor[section.category]?.fg} />
                </View>
              ))}
            </Card>
          </View>
        ),
      )}

      {view.thisMonth.length > 0 ? (
        <>
          <SectionLabel>THIS MONTH</SectionLabel>
          <Card accent={colors.amber} tone="quiet">
            {view.thisMonth.map((a) => (
              <Action key={a}>{a}</Action>
            ))}
          </Card>
        </>
      ) : null}

      {view.closingWindows.length > 0 ? (
        <>
          <SectionLabel>WINDOWS CLOSING</SectionLabel>
          <Card tone="quiet">
            {view.closingWindows.map((w, i) => (
              <View key={w.item.id}>
                {i > 0 ? <Divider /> : null}
                <Text style={type.body}>{w.item.label}</Text>
                <Text style={styles.windowMeta}>
                  About {w.yearsRemaining} year{w.yearsRemaining === 1 ? '' : 's'} left.
                </Text>
              </View>
            ))}
          </Card>
        </>
      ) : null}

      {view.watchFor.length > 0 ? (
        <>
          <SectionLabel>WATCH FOR</SectionLabel>
          <Card tone="quiet">
            {view.watchFor.map((w) => (
              <Text key={w} style={styles.watchItem}>
                {w}
              </Text>
            ))}
            <Text style={styles.watchNote}>
              Worth a conversation with your pediatrician. Never a diagnosis.
            </Text>
          </Card>
        </>
      ) : null}
    </Screen>
  );
}

/** One unit: headline, one sentence, and the rest behind a tap. */
function UnitBlock({ unit, tint }: { unit: Unit; tint?: string }) {
  const minutes = readingMinutes(unit.body);
  return (
    <View style={styles.unit}>
      <CardTitle>{unit.title}</CardTitle>
      <Expandable
        summary={<Lede>{ledeFor(unit)}</Lede>}
        openLabel={`Read more · ${minutes} min`}
        color={tint}
      >
        <Text style={type.body}>{unit.body}</Text>
        {unit.actions?.[0] ? <Action color={tint}>{unit.actions[0]}</Action> : null}
        {unit.warrant ? <Source>{unit.warrant.passages.join(' · ')}</Source> : null}
        {unit.evidence?.length ? <Source>Source: {unit.evidence.map((e) => e.org).join(', ')}</Source> : null}
      </Expandable>
    </View>
  );
}

const styles = StyleSheet.create({
  roleRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', marginBottom: spacing.md },
  rolePill: {
    ...type.label,
    color: colors.indigo,
    backgroundColor: colors.indigoSoft,
    paddingHorizontal: spacing.sm,
    paddingVertical: 5,
    borderRadius: 999,
    overflow: 'hidden',
  },
  transition: { ...type.meta, marginLeft: spacing.sm, flexShrink: 1 },
  unit: { paddingVertical: spacing.xs },
  tag: { ...type.meta, color: colors.indigo, marginTop: spacing.sm, fontWeight: '600' },
  windowMeta: { ...type.meta, marginTop: 2 },
  watchItem: { ...type.body, marginBottom: spacing.xs },
  watchNote: { ...type.meta, marginTop: spacing.sm },
});
