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
import { JourneyScreen } from './src/screens/JourneyScreen';
import { PremiumScreen } from './src/screens/PremiumScreen';
import { proxyAdapter } from './src/lib/ai';
import { colors, spacing, type } from './src/theme';

/**
 * Section 23 navigation, scoped to what exists: HOME (Today), MY CHILDREN,
 * PREGNANCY (week card + trackers + prepare), ROADMAP. ASK arrives with
 * Phase 5, BIBLE/PROFILE later.
 */
type Tab = 'today' | 'children' | 'pregnancy' | 'ask' | 'journey' | 'roadmap' | 'premium';

const TABS: { id: Tab; label: string; glyph: string }[] = [
  { id: 'today', label: 'Today', glyph: '◐' },
  { id: 'children', label: 'Children', glyph: '✻' },
  { id: 'pregnancy', label: 'Weeks', glyph: '◍' },
  { id: 'ask', label: 'Ask', glyph: '❞' },
  { id: 'journey', label: 'Journey', glyph: '◈' },
  { id: 'roadmap', label: 'Path', glyph: '▲' },
];

type PregnancySub = 'week' | 'trackers' | 'prepare';

/**
 * ASK's model adapter. Routes through Cairn's Edge Function so the Anthropic
 * key never enters the bundle; null until EXPO_PUBLIC_AI_PROXY_URL is set.
 */
const anthropic = proxyAdapter();

export default function App() {
  const [tab, setTab] = useState<Tab>('today');
  const [openChildId, setOpenChildId] = useState<string | null>(null);
  const [pregnancySub, setPregnancySub] = useState<PregnancySub>('week');

  return (
    <FamilyContext.Provider value={DEMO_FAMILY}>
      <SafeAreaView style={styles.root}>
        <StatusBar style="dark" />
        <View style={styles.header}>
          <Text style={type.display}>Cairn</Text>
          <Pressable onPress={() => setTab('premium')}>
            <Text style={styles.premiumLink}>Premium</Text>
          </Pressable>
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
          {tab === 'ask' && <AskScreen adapter={anthropic} />}
          {tab === 'journey' && <JourneyScreen />}
          {tab === 'roadmap' && <RoadmapScreen />}
          {tab === 'premium' && <PremiumScreen />}
        </View>

        <View style={styles.tabs}>
          {TABS.map((t) => (
            <Pressable key={t.id} style={styles.tab} onPress={() => setTab(t.id)}>
              <Text style={[styles.tabGlyph, tab === t.id && styles.tabActive]}>{t.glyph}</Text>
              <Text style={[styles.tabText, tab === t.id && styles.tabActive]} numberOfLines={1}>
                {t.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </SafeAreaView>
    </FamilyContext.Provider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
  header: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  premiumLink: { ...type.soft, color: colors.indigo, fontWeight: '600' },
  tabs: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: colors.line,
    backgroundColor: colors.card,
  },
  tab: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: spacing.sm, paddingHorizontal: 2 },
  tabGlyph: { fontSize: 17, color: colors.stone, marginBottom: 3 },
  /*
   * numberOfLines={1} plus adjustsFontSizeToFit on the label: six tabs across
   * a 402pt bar leaves about 67pt each, and without this "Pregnancy" wrapped
   * mid-word to "Pregnanc / y" on an iPhone 17. Shrinking beats wrapping for
   * a fixed-height bar.
   */
  // Fixed size for every label. adjustsFontSizeToFit previously shrank only
  // the longest one, so the row rendered at three different sizes.
  tabText: { fontSize: 10.5, fontWeight: '700', letterSpacing: 0.2, color: colors.stone, textAlign: 'center' },
  tabActive: { color: colors.indigo },
  subTabs: {
    flexDirection: 'row',
    gap: spacing.lg,
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.sm,
  },
  subTabText: { ...type.soft, fontWeight: '600', paddingVertical: 4 },
  subTabActive: { color: colors.indigo },
});
