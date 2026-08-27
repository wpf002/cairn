import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  bagProgress,
  fullAlbum,
  albumProgress,
  newHospitalBag,
  nextAppointment,
  suggestedSchedule,
  toggleItem,
  type ChecklistItem,
} from '@cairn/trackers';
import { Card } from '../components/Card';
import { useFamily } from '../state/family';
import { colors, spacing, type } from '../theme';

/**
 * Preparation surface: hospital bag, appointment rhythm, bump album.
 * The birth plan editor lives one tap deeper; its export is plain text.
 */
export function PrepareScreen() {
  const family = useFamily();
  const [bag, setBag] = useState<readonly ChecklistItem[]>(newHospitalBag());
  const album = fullAlbum();

  const schedule = family.dueDate ? suggestedSchedule(family.dueDate) : [];
  const next = family.dueDate ? nextAppointment(schedule, family.today) : null;
  const progress = bagProgress(bag);
  const albumStats = albumProgress(album, 'pregnancy');

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: spacing.md }}>
      {next ? (
        <Card label="NEXT APPOINTMENT">
          <Text style={type.heading}>{next.label}</Text>
          <Text style={type.body}>
            {next.date} — {next.inDays === 0 ? 'today' : `in ${next.inDays} days`}
          </Text>
          {next.note ? <Text style={type.soft}>{next.note}</Text> : null}
          <Text style={[type.soft, { marginTop: spacing.sm }]}>
            The full rhythm exports to your phone calendar so both of you see it.
          </Text>
        </Card>
      ) : null}

      <Card label={`HOSPITAL BAG · ${progress.done}/${progress.total}`}>
        {bag.map((item) => (
          <Pressable key={item.id} style={styles.row} onPress={() => setBag(toggleItem(bag, item.id))}>
            <View style={[styles.check, item.done && styles.checked]} />
            <View style={{ flex: 1 }}>
              <Text style={[type.body, item.done && styles.doneText]}>{item.label}</Text>
              <Text style={type.soft}>{item.forWhom}</Text>
            </View>
          </Pressable>
        ))}
      </Card>

      <Card label={`BUMP ALBUM · ${albumStats.filled}/${albumStats.total} WEEKS`}>
        <Text style={type.body}>
          One photo a week through pregnancy — and the album keeps going after birth: monthly through the
          first year, yearly to twenty-one. Photos are encrypted on your phone before they are stored
          anywhere; nobody at Cairn can see them.
        </Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: spacing.sm, gap: spacing.sm },
  check: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.stone,
    marginRight: spacing.sm,
  },
  checked: { backgroundColor: colors.indigo, borderColor: colors.indigo },
  doneText: { textDecorationLine: 'line-through', color: colors.inkSoft },
});
