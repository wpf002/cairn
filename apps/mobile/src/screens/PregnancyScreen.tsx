import { useState } from 'react';
import { Text, View } from 'react-native';
import { pregnancyStatus } from '@cairn/stages';
import { Hero, Screen, Segments } from '../components/ui';
import { WeekScreen } from './WeekScreen';
import { TrackersScreen } from './TrackersScreen';
import { PrepareScreen } from './PrepareScreen';
import { useFamily } from '../state/family';
import { type as t } from '../theme';

type Section = 'week' | 'track' | 'prepare';

/**
 * The unborn child's page.
 *
 * A pregnancy is a child in Cairn's model, so everything about this one lives
 * here rather than on a separate Weeks tab: the week's development, the
 * trackers, and the preparation. Reached by tapping that child's card on the
 * home screen, exactly like a born child's dashboard.
 */
export function PregnancyScreen() {
  const family = useFamily();
  const [section, setSection] = useState<Section>('week');

  if (!family.dueDate) {
    return (
      <Screen>
        <Text style={t.body}>No pregnancy is being tracked.</Text>
      </Screen>
    );
  }

  const status = pregnancyStatus(family.dueDate, family.today);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <Hero
          variant="pregnancy"
          eyebrow={family.motherName}
          title={`Week ${status.week}`}
          sub={`Trimester ${status.trimester}`}
          metricValue={String(Math.max(0, status.daysUntilDue))}
          metricUnit="days until due"
          progress={Math.min(1, Math.max(0, status.gestationalDays / 280))}
        />
        <Segments
          value={section}
          onChange={setSection}
          options={[
            { id: 'week', label: 'This week' },
            { id: 'track', label: 'Track' },
            { id: 'prepare', label: 'Prepare' },
          ]}
        />
      </View>
      {section === 'week' ? <WeekScreen /> : null}
      {section === 'track' ? <TrackersScreen /> : null}
      {section === 'prepare' ? <PrepareScreen /> : null}
    </View>
  );
}
