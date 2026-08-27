import { View } from 'react-native';
import { buildToday } from '@cairn/dashboard';
import { allUnits, ledeFor } from '@cairn/substrate';
import { firstAvailableVerse } from '@cairn/canon';
import {
  Action,
  Card,
  CardTitle,
  CategoryChip,
  Hero,
  Lede,
  MetricRow,
  PrayerCard,
  ScriptureCard,
  Screen,
  SectionLabel,
} from '../components/ui';
import { useFamily } from '../state/family';
import { categoryColor, colors } from '../theme';

/**
 * TODAY — the product surface (sections 20, 29).
 *
 * Composed the way the category leaders compose: a gradient hero carrying the
 * one number a parent should read from across the room, scripture on its own
 * deep surface in serif rather than buried behind a tap, a prayer, and one
 * action per child. The formation category of every card is shown as a
 * coloured chip, so the seven-category framework is visible before it is read.
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

  // The scripture surface takes the first passage Cairn ships verse text for,
  // drawn from the units already selected for today rather than a separate
  // verse-of-the-day feed. What a parent reads is warranted by what they are
  // being asked to do.
  const passages = today.blocks
    .flatMap((b) => b.focus?.unit.warrant?.passages ?? [])
    .concat(today.parentFocus?.unit.warrant?.passages ?? []);
  const verse = firstAvailableVerse(passages);

  return (
    <Screen>
      {today.blocks.map((block) => {
        const focus = block.focus?.unit;
        const counter = splitCounter(block.counterLine);
        const cat = focus ? categoryColor[focus.category] : undefined;
        return (
          <View key={block.id}>
            <Hero
              variant={block.kind === 'child' ? 'child' : 'pregnancy'}
              eyebrow={block.kind === 'child' ? (block.headline.split(' — ')[1] ?? '') : heroEyebrow(block)}
              title={heroTitle(block)}
              sub={block.subline}
              metricValue={counter?.value}
              metricUnit={counter?.unit}
              progress={block.progress}
              onPress={block.kind === 'child' ? () => onOpenChild(block.id) : undefined}
            />
            {focus ? (
              <Card accent={cat?.fg}>
                <CategoryChip category={focus.category} heading={focus.category} />
                <CardTitle>{focus.title}</CardTitle>
                <Lede>{ledeFor(focus)}</Lede>
                {block.action ? <Action color={cat?.fg}>{block.action}</Action> : null}
              </Card>
            ) : null}
          </View>
        );
      })}

      {verse ? (
        <>
          <SectionLabel>TODAY'S SCRIPTURE</SectionLabel>
          <ScriptureCard reference={verse.reference}>{verse.text}</ScriptureCard>
        </>
      ) : null}

      {today.parentFocus ? (
        <>
          <SectionLabel color={colors.violet}>BECOMING THE PARENT THEY NEED</SectionLabel>
          <Card accent={colors.violet}>
            <CardTitle>{today.parentFocus.unit.title}</CardTitle>
            <Lede>{ledeFor(today.parentFocus.unit)}</Lede>
            {today.parentFocus.unit.actions?.[0] ? (
              <Action color={colors.violet}>{today.parentFocus.unit.actions[0]}</Action>
            ) : null}
          </Card>
        </>
      ) : null}

      <PrayerCard>
        Father, you knew each of these children before we did. Give us today what they need from us,
        and make us the kind of people they can safely watch. Amen.
      </PrayerCard>
    </Screen>
  );
}

/** "Emma — 13 weeks pregnant" splits into the name and the week. */
function heroEyebrow(block: { headline: string; kind: string }): string {
  const [name] = block.headline.split(' — ');
  return name ?? block.headline;
}

function heroTitle(block: { headline: string; kind: string }): string {
  const parts = block.headline.split(' — ');
  const tail = parts[1] ?? '';
  if (block.kind === 'pregnancy') {
    const m = /(\d+)\s*weeks/.exec(tail);
    return m ? `Week ${m[1]}` : tail;
  }
  // For a child the name is the title and the stage is the eyebrow.
  return parts[0] ?? block.headline;
}

/** "772 weeks until 21" becomes 772 / "weeks until 21", so it can be set as a figure. */
function splitCounter(line: string | undefined): { value: string; unit: string } | null {
  if (!line) return null;
  const m = /^([\d,]+)\s+(.*)$/.exec(line.trim());
  if (!m || !m[1] || !m[2]) return null;
  return { value: m[1], unit: m[2] };
}
