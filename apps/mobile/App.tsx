import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FamilyContext, DEMO_FAMILY } from './src/state/family';
import { TodayScreen } from './src/screens/TodayScreen';
import { ChildScreen } from './src/screens/ChildScreen';
import { PregnancyScreen } from './src/screens/PregnancyScreen';
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
type Tab = 'today' | 'ask' | 'journey' | 'premium';

/**
 * Three destinations.
 *
 * Children and Weeks are gone: a child's page is reached by tapping that
 * child on the home screen, and a pregnancy is a child, so its week-by-week
 * lives on that child's page too. Path folded into Journey, which is the same
 * story at a different zoom.
 */
const TABS: { id: Tab; label: string; glyph: string }[] = [
  { id: 'today', label: 'Today', glyph: '◐' },
  { id: 'ask', label: 'Ask', glyph: '❞' },
  { id: 'journey', label: 'Journey', glyph: '◈' },
];

/** What the home screen has opened, if anything. */
type Open = { kind: 'none' } | { kind: 'child'; id: string } | { kind: 'pregnancy' };

/**
 * ASK's model adapter. Routes through Cairn's Edge Function so the Anthropic
 * key never enters the bundle; null until EXPO_PUBLIC_AI_PROXY_URL is set.
 */
const anthropic = proxyAdapter();

export default function App() {
  const [tab, setTab] = useState<Tab>('today');
  const [open, setOpen] = useState<Open>({ kind: 'none' });

  return (
    <FamilyContext.Provider value={DEMO_FAMILY}>
      <SafeAreaView style={styles.root}>
        <StatusBar style="dark" />
        <View style={styles.header}>
          {open.kind === 'none' || tab !== 'today' ? (
            <Text style={type.display}>Cairn</Text>
          ) : (
            <Pressable onPress={() => setOpen({ kind: 'none' })} hitSlop={10}>
              <Text style={styles.back}>‹ Today</Text>
            </Pressable>
          )}
          <Pressable onPress={() => setTab('premium')}>
            <Text style={styles.premiumLink}>Premium</Text>
          </Pressable>
        </View>

        <View style={{ flex: 1 }}>
          {tab === 'today' && open.kind === 'none' && (
            <TodayScreen
              onOpenChild={(id) => setOpen({ kind: 'child', id })}
              onOpenPregnancy={() => setOpen({ kind: 'pregnancy' })}
            />
          )}
          {tab === 'today' && open.kind === 'child' && <ChildScreen childId={open.id} />}
          {tab === 'today' && open.kind === 'pregnancy' && <PregnancyScreen />}
          {tab === 'ask' && <AskScreen adapter={anthropic} />}
          {tab === 'journey' && <JourneyScreen />}
          {tab === 'premium' && <PremiumScreen />}
        </View>

        <View style={styles.tabs}>
          {TABS.map((t) => (
            <Pressable key={t.id} style={styles.tab} onPress={() => { setTab(t.id); setOpen({ kind: 'none' }); }}>
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
  back: { fontSize: 19, color: colors.indigo, fontWeight: '600' },
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
