import { Alert } from 'react-native';
import { buildToday } from '@cairn/dashboard';
import { allUnits, ledeFor } from '@cairn/substrate';
import { firstAvailableVerse } from '@cairn/canon';
import {
  AddCard,
  Action,
  Card,
  CardTitle,
  ChildCard,
  PrayerCard,
  ScriptureCard,
  Screen,
  SectionLabel,
  VerseLine,
} from '../components/ui';
import { useFamily } from '../state/family';
import { colors } from '../theme';

/**
 * TODAY — the home screen (sections 20, 29).
 *
 * Scripture sits at the top, because the roadmap's claim is that this is a
 * Christian formation platform and the faith layer should be the first thing
 * a parent meets rather than something they scroll to.
 *
 * Under it, one compact card per child — a pregnancy is a child here too,
 * carried in that child's own card rather than on a separate Weeks tab.
 * Everything about a child lives one tap in, so the home screen stays
 * scannable instead of stacking a dashboard per child.
 */
export function TodayScreen({
  onOpenChild,
  onOpenPregnancy,
}: {
  onOpenChild: (id: string) => void;
  onOpenPregnancy: () => void;
}) {
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

  // Scripture is drawn from the warrant of the units already chosen for today,
  // so what a parent reads is tied to what they are being asked to do.
  const verse = firstAvailableVerse(
    today.blocks
      .flatMap((b) => b.focus?.unit.warrant?.passages ?? [])
      .concat(today.parentFocus?.unit.warrant?.passages ?? []),
  );

  const parentVerse = today.parentFocus?.unit.warrant
    ? firstAvailableVerse(today.parentFocus.unit.warrant.passages)
    : null;

  return (
    <Screen>
      {verse ? (
        <>
          <SectionLabel>TODAY'S SCRIPTURE</SectionLabel>
          <ScriptureCard reference={verse.reference}>{verse.text}</ScriptureCard>
        </>
      ) : null}

      <SectionLabel>YOUR CHILDREN</SectionLabel>
      {today.blocks.map((block) => {
        const counter = splitCounter(block.counterLine);
        const pregnancy = block.kind === 'pregnancy';
        return (
          <ChildCard
            key={block.id}
            name={pregnancy ? 'Baby' : (block.headline.split(' — ')[0] ?? block.headline)}
            stage={pregnancy ? weekLine(block.headline) : (block.headline.split(' — ')[1] ?? '')}
            metricValue={counter?.value ?? ''}
            metricUnit={shortUnit(counter?.unit ?? '')}
            progress={block.progress}
            action={block.action ?? undefined}
            tint={pregnancy ? colors.violet : colors.teal}
            verse={block.focus?.unit.warrant ? firstAvailableVerse(block.focus.unit.warrant.passages) : null}
            onPress={pregnancy ? onOpenPregnancy : () => onOpenChild(block.id)}
          />
        );
      })}

      <AddCard
        label="Add a child"
        onPress={() =>
          Alert.alert(
            'Add a child',
            'Onboarding captures a name, a birthdate or due date, and your voice. Wired up when the encrypted profile store lands.',
          )
        }
      />

      {today.parentFocus ? (
        <>
          <SectionLabel color={colors.violet}>FOR YOU</SectionLabel>
          <Card accent={colors.violet}>
            <CardTitle>{today.parentFocus.unit.title}</CardTitle>
            {today.parentFocus.unit.actions?.[0] ? (
              <Action color={colors.violet}>{today.parentFocus.unit.actions[0]}</Action>
            ) : null}
            {parentVerse ? (
              <VerseLine reference={parentVerse.reference} text={parentVerse.text} tint={colors.violet} />
            ) : null}
          </Card>
        </>
      ) : null}

      <PrayerCard>
        Father, you knew these children before we did. Give us today what they need from us. Amen.
      </PrayerCard>
    </Screen>
  );
}

/**
 * Counter units, shortened for the card lane.
 * "days until the due date" reads fine in a hero and collides with a name in
 * a row, so the row gets the short form.
 */
function shortUnit(unit: string): string {
  if (unit.startsWith('days until')) return 'days left';
  if (unit.startsWith('weeks until')) return 'weeks to 21';
  return unit;
}

/** "Emma — 13 weeks pregnant" becomes "Week 13". */
function weekLine(headline: string): string {
  const m = /(\d+)\s*weeks/.exec(headline);
  return m ? `Week ${m[1]} · due soon` : 'Pregnancy';
}

/** "772 weeks until 21" splits into the figure and its unit. */
function splitCounter(line: string | undefined): { value: string; unit: string } | null {
  if (!line) return null;
  const m = /^([\d,]+)\s+(.*)$/.exec(line.trim());
  if (!m || !m[1] || !m[2]) return null;
  return { value: m[1], unit: m[2] };
}
