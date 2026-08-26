import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FamilyContext, DEMO_FAMILY } from './src/state/family';
import { WeekScreen } from './src/screens/WeekScreen';
import { TrackersScreen } from './src/screens/TrackersScreen';
import { PrepareScreen } from './src/screens/PrepareScreen';
import { colors, spacing, type } from './src/theme';

/**
 * Phase 3 shell: the pregnancy surface. Navigation is a deliberate three-tab
 * minimum — section 23's full navigation arrives with Phase 4's home screen.
 */
type Tab = 'week' | 'trackers' | 'prepare';

const TABS: { id: Tab; label: string }[] = [
  { id: 'week', label: 'This Week' },
  { id: 'trackers', label: 'Trackers' },
  { id: 'prepare', label: 'Prepare' },
];

export default function App() {
  const [tab, setTab] = useState<Tab>('week');
  return (
    <FamilyContext.Provider value={DEMO_FAMILY}>
      <SafeAreaView style={styles.root}>
        <StatusBar style="dark" />
        <View style={styles.header}>
          <Text style={type.title}>Cairn</Text>
        </View>
        <View style={{ flex: 1 }}>
          {tab === 'week' && <WeekScreen />}
          {tab === 'trackers' && <TrackersScreen />}
          {tab === 'prepare' && <PrepareScreen />}
        </View>
        <View style={styles.tabs}>
          {TABS.map((t) => (
            <Pressable key={t.id} style={styles.tab} onPress={() => setTab(t.id)}>
              <Text style={[styles.tabText, tab === t.id && styles.tabActive]}>{t.label}</Text>
            </Pressable>
          ))}
        </View>
      </SafeAreaView>
    </FamilyContext.Provider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  header: { paddingHorizontal: spacing.md, paddingVertical: spacing.sm },
  tabs: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: colors.line,
    backgroundColor: colors.card,
  },
  tab: { flex: 1, alignItems: 'center', paddingVertical: spacing.md },
  tabText: { ...type.soft, fontWeight: '600' },
  tabActive: { color: colors.accent },
});
