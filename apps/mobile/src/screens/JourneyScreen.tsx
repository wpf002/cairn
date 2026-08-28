import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CEREMONIES, MILESTONE_MOMENTS, nextCeremony } from '@cairn/journey';
import { Card } from '../components/Card';
import { Segments } from '../components/ui';
import { RoadmapScreen } from './RoadmapScreen';
import { useFamily } from '../state/family';
import { colors, spacing, type } from '../theme';

/**
 * Journey — family memory, Milestone Moments, and the 21-year path.
 *
 * The roadmap used to be its own tab. It is the same story told at a
 * different zoom — where this child is on the twenty-one years — so it lives
 * here as a second section rather than as a sixth destination.
 */
export function JourneyScreen() {
  const [section, setSection] = useState<'memory' | 'path'>('memory');
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: spacing.lg, paddingTop: spacing.lg }}>
        <Segments
          value={section}
          onChange={setSection}
          options={[
            { id: 'memory', label: 'Memory' },
            { id: 'path', label: 'The path' },
          ]}
        />
      </View>
      {section === 'memory' ? <MemorySection /> : <RoadmapScreen />}
    </View>
  );
}

function MemorySection() {
  const family = useFamily();
  const child = family.children[0] ?? null;
  const upcoming = child ? nextCeremony(child.birthdate, family.today) : null;

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: spacing.md }}>
      <Text style={type.label}>JOURNEY</Text>

      {upcoming && child ? (
        <Card label={`NEXT MILESTONE MOMENT — AGE ${upcoming.atAge}`}>
          <Text style={type.heading}>{upcoming.title}</Text>
          <Text style={[type.body, { marginTop: spacing.xs }]}>{upcoming.purpose}</Text>
          <View style={{ marginTop: spacing.sm }}>
            {upcoming.steps.map((s, i) => (
              <Text key={s} style={[type.body, { marginBottom: spacing.xs }]}>
                {i + 1}. {s}
              </Text>
            ))}
          </View>
          {upcoming.lettersInvited ? (
            <Text style={type.soft}>
              Grandparents and mentors you have invited can write letters from their own devices —
              sealed until the ceremony.
            </Text>
          ) : null}
        </Card>
      ) : null}

      <Card label="MOMENTS WORTH CAPTURING">
        {MILESTONE_MOMENTS.map((m) => (
          <Text key={m} style={[type.body, { marginBottom: 2 }]}>· {m}</Text>
        ))}
      </Card>

      <Card label="THE STORY OF YOUR CHILDHOOD">
        <Text style={type.body}>
          Everything you record — milestones, prayers, the funny things they said, photos, the hard
          seasons and the answered prayers — becomes, at twenty-one, a single record: your thread and
          your spouse's thread through the same years, woven into one story and given at the Recognize
          ceremony.
        </Text>
        <Text style={[type.soft, { marginTop: spacing.sm }]}>
          Assembled on your device, from data only your family can decrypt. Export everything, any
          time, in formats that outlive this app.
        </Text>
      </Card>

      <Card label="CEREMONIES AHEAD">
        {CEREMONIES.map((c) => (
          <View key={c.id} style={styles.row}>
            <Text style={styles.age}>{c.atAge}</Text>
            <Text style={type.body}>{c.title}</Text>
          </View>
        ))}
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginBottom: spacing.xs },
  age: { ...type.heading, color: colors.indigo, width: 28 },
});
