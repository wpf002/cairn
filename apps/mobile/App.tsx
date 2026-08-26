import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FamilyContext, DEMO_FAMILY } from './src/state/family';
import { TodayScreen } from './src/screens/TodayScreen';
import { ChildScreen } from './src/screens/ChildScreen';
import { WeekScreen } from './src/screens/WeekScreen';
import { TrackersScreen } from './src/screens/TrackersScreen';
import { PrepareScreen } from './src/screens/PrepareScreen';
import { RoadmapScreen } from './src/screens/RoadmapScreen';
import { AskScreen } from './src/screens/AskScreen';
import { colors, spacing, type } from './src/theme';

/**
 * Section 23 navigation, scoped to what exists: HOME (Today), MY CHILDREN,
 * PREGNANCY (week card + trackers + prepare), ROADMAP. ASK arrives with
 * Phase 5, BIBLE/PROFILE later.
 */
type Tab = 'today' | 'children' | 'pregnancy' | 'ask' | 'roadmap';

const TABS: { id: Tab; label: string }[] = [
  { id: 'today', label: 'Today' },
  { id: 'children', label: 'My Children' },
  { id: 'pregnancy', label: 'Pregnancy' },
  { id: 'ask', label: 'Ask' },
  { id: 'roadmap', label: 'Roadmap' },
];

type PregnancySub = 'week' | 'trackers' | 'prepare';

export default function App() {
  const [tab, setTab] = useState<Tab>('today');
  const [openChildId, setOpenChildId] = useState<string | null>(null);
  const [pregnancySub, setPregnancySub] = useState<PregnancySub>('week');

  return (
    <FamilyContext.Provider value={DEMO_FAMILY}>
      <SafeAreaView style={styles.root}>
        <StatusBar style="dark" />
        <View style={styles.header}>
          <Text style={type.title}>Cairn</Text>
        </View>

        <View style={{ flex: 1 }}>
          {tab === 'today' && (
            <TodayScreen
              onOpenChild={(id) => {
                setOpenChildId(id);
                setTab('children');
              }}
            />
          )}
          {tab === 'children' && (
            <View style={{ flex: 1 }}>
              <View style={styles.subTabs}>
                {DEMO_FAMILY.children.map((c) => (
                  <Pressable key={c.id} onPress={() => setOpenChildId(c.id)}>
                    <Text
                      style={[
                        styles.subTabText,
                        (openChildId ?? DEMO_FAMILY.children[0]?.id) === c.id && styles.subTabActive,
                      ]}
                    >
                      {c.name}
                    </Text>
                  </Pressable>
                ))}
              </View>
              <ChildScreen childId={openChildId ?? DEMO_FAMILY.children[0]?.id ?? ''} />
            </View>
          )}
          {tab === 'pregnancy' && (
            <View style={{ flex: 1 }}>
              <View style={styles.subTabs}>
                {(['week', 'trackers', 'prepare'] as const).map((s) => (
                  <Pressable key={s} onPress={() => setPregnancySub(s)}>
                    <Text style={[styles.subTabText, pregnancySub === s && styles.subTabActive]}>
                      {s === 'week' ? 'This Week' : s === 'trackers' ? 'Trackers' : 'Prepare'}
                    </Text>
                  </Pressable>
                ))}
              </View>
              {pregnancySub === 'week' && <WeekScreen />}
              {pregnancySub === 'trackers' && <TrackersScreen />}
              {pregnancySub === 'prepare' && <PrepareScreen />}
            </View>
          )}
          {tab === 'ask' && <AskScreen flint={null} />}
          {tab === 'roadmap' && <RoadmapScreen />}
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
  subTabs: {
    flexDirection: 'row',
    gap: spacing.lg,
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.sm,
  },
  subTabText: { ...type.soft, fontWeight: '600', paddingVertical: 4 },
  subTabActive: { color: colors.accent },
});
