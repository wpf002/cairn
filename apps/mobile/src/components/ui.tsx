import { useState, type PropsWithChildren, type ReactNode } from 'react';
import { LayoutAnimation, Platform, Pressable, ScrollView, StyleSheet, Text, UIManager, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { categoryColor, colors, gradients, radius, spacing, type } from '../theme';

/**
 * The shared UI vocabulary.
 *
 * The first version of this file produced a readable document and not an app:
 * white cards, grey text, one accent, no imagery, no numbers a parent could
 * read at a glance. Every leader in this category does the opposite. Hallow
 * runs a violet gradient over deep surfaces; Glorify puts a duration on every
 * row and a photograph behind its hero.
 *
 * So: gradient heroes, scripture on a deep surface in serif, metrics rendered
 * as figures and rings rather than sentences, and a hue per formation
 * category so the framework is visible before it is read.
 */

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export function Screen({ children }: PropsWithChildren) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.screenContent} showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
}

export function SectionLabel({ children, color }: PropsWithChildren<{ color?: string }>) {
  return <Text style={[styles.sectionLabel, color ? { color } : null]}>{children}</Text>;
}

/** The one big line on a screen. Left-aligned to the same gutter as everything else. */
export function PageTitle({ children, sub }: PropsWithChildren<{ sub?: string }>) {
  return (
    <View style={styles.pageTitle}>
      <Text style={type.display}>{children}</Text>
      {sub ? <Text style={styles.pageSub}>{sub}</Text> : null}
    </View>
  );
}

/**
 * The hero. A gradient panel carrying the child's name, the stage, and the
 * counter as a figure — the one thing a parent should be able to read from
 * across a room.
 */
export function Hero({
  eyebrow,
  title,
  sub,
  metricValue,
  metricUnit,
  progress,
  variant = 'child',
  onPress,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  metricValue?: string;
  metricUnit?: string;
  /** 0 to 1. Renders the bar under the metric. */
  progress?: number;
  variant?: 'child' | 'pregnancy';
  onPress?: () => void;
}) {
  const body = (
    <LinearGradient
      colors={[...(variant === 'pregnancy' ? gradients.pregnancy : gradients.child)]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.hero}
    >
      <Text style={styles.heroEyebrow}>{eyebrow.toUpperCase()}</Text>
      <Text style={styles.heroTitle}>{title}</Text>
      {sub ? <Text style={styles.heroSub}>{sub}</Text> : null}

      {metricValue ? (
        <View style={styles.heroMetric}>
          <Text style={styles.heroFigure}>{metricValue}</Text>
          {metricUnit ? <Text style={styles.heroUnit}>{metricUnit}</Text> : null}
        </View>
      ) : null}

      {progress !== undefined ? <ProgressBar value={progress} onDark /> : null}
    </LinearGradient>
  );
  return onPress ? (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      {body}
    </Pressable>
  ) : (
    body
  );
}

/** A thin bar. Progress through a stage, or through the twenty-one years. */
export function ProgressBar({ value, onDark = false, color }: { value: number; onDark?: boolean; color?: string }) {
  const pct = Math.min(1, Math.max(0, value));
  return (
    <View style={[styles.track, onDark && styles.trackOnDark]}>
      <View
        style={[
          styles.fill,
          { width: `${pct * 100}%`, backgroundColor: color ?? (onDark ? '#FFFFFF' : colors.indigo) },
        ]}
      />
    </View>
  );
}

/**
 * Scripture, on a deep surface, in serif.
 *
 * The roadmap's whole claim is that this is a Christian formation platform
 * rather than a parenting library, and the first build buried every passage
 * behind a "read more". Scripture now has its own surface and its own
 * typeface, so a parent can see the faith layer without opening anything.
 */
export function ScriptureCard({ reference, children }: PropsWithChildren<{ reference: string }>) {
  return (
    <LinearGradient
      colors={[...gradients.scripture]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.scripture}
    >
      <Text style={styles.scriptureLabel}>SCRIPTURE</Text>
      <Text style={type.verse}>{children}</Text>
      <Text style={styles.scriptureRef}>{reference.toUpperCase()}</Text>
    </LinearGradient>
  );
}

/** A short prayer, set apart. Section 5 ships one on every weekly card. */
export function PrayerCard({ children }: PropsWithChildren) {
  return (
    <View style={styles.prayer}>
      <Text style={styles.prayerLabel}>PRAYER</Text>
      <Text style={styles.prayerText}>{children}</Text>
    </View>
  );
}

/** A row of readable numbers. */
export function MetricRow({ items }: { items: { value: string; label: string; color?: string }[] }) {
  return (
    <View style={styles.metricRow}>
      {items.map((m) => (
        <View key={m.label} style={styles.metric}>
          <Text style={[type.figureSm, m.color ? { color: m.color } : null]}>{m.value}</Text>
          <Text style={styles.metricLabel}>{m.label.toUpperCase()}</Text>
        </View>
      ))}
    </View>
  );
}

export function Card({
  children,
  onPress,
  tone = 'default',
  accent,
}: PropsWithChildren<{ onPress?: () => void; tone?: 'default' | 'quiet'; accent?: string }>) {
  const body = (
    <View style={[styles.card, tone === 'quiet' && styles.cardQuiet, accent ? { borderLeftWidth: 4, borderLeftColor: accent } : null]}>
      {children}
    </View>
  );
  if (!onPress) return body;
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      {body}
    </Pressable>
  );
}

/**
 * A compact child row for TODAY.
 *
 * The home screen carries one of these per child and one for a pregnancy.
 * Everything about that child lives one tap in, so TODAY stays scannable
 * rather than stacking a full dashboard per child.
 */
export function ChildCard({
  name,
  stage,
  metricValue,
  metricUnit,
  progress,
  action,
  tint,
  onPress,
}: {
  name: string;
  stage: string;
  metricValue: string;
  metricUnit: string;
  progress: number;
  action?: string;
  tint: string;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.childCard}>
        <View style={styles.childTop}>
          <View style={[styles.avatar, { backgroundColor: tint }]}>
            <Text style={styles.avatarText}>{name.slice(0, 1).toUpperCase()}</Text>
          </View>
          <View style={styles.childIdentity}>
            <Text style={styles.childName} numberOfLines={1}>
              {name}
            </Text>
            <Text style={styles.childStage} numberOfLines={1}>
              {stage}
            </Text>
          </View>
          <View style={styles.childMetric}>
            <Text style={[type.figureSm, { color: tint }]} numberOfLines={1}>
              {metricValue}
            </Text>
            <Text style={styles.childMetricUnit} numberOfLines={2}>
              {metricUnit}
            </Text>
          </View>
        </View>
        <ProgressBar value={progress} color={tint} />
        {action ? (
          <Text style={styles.childAction} numberOfLines={2}>
            {action}
          </Text>
        ) : null}
      </View>
    </Pressable>
  );
}

/** Add a child, from the home screen. */
export function AddCard({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.addCard}>
        <Text style={styles.addPlus}>+</Text>
        <Text style={styles.addText}>{label}</Text>
      </View>
    </Pressable>
  );
}

/** A segmented control for sub-sections inside a page. */
export function Segments<T extends string>({
  value,
  options,
  onChange,
}: {
  value: T;
  options: { id: T; label: string }[];
  onChange: (id: T) => void;
}) {
  return (
    <View style={styles.segments}>
      {options.map((o) => (
        <Pressable key={o.id} onPress={() => onChange(o.id)} style={[styles.segment, value === o.id && styles.segmentOn]}>
          <Text style={[styles.segmentText, value === o.id && styles.segmentTextOn]}>{o.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

/** A category chip: the glyph and hue that make the framework visible. */
export function CategoryChip({ category, heading }: { category: string; heading: string }) {
  const c = categoryColor[category] ?? { fg: colors.stone, bg: colors.bgRaised, glyph: '•' };
  return (
    <View style={[styles.chip, { backgroundColor: c.bg }]}>
      <Text style={[styles.chipGlyph, { color: c.fg }]}>{c.glyph}</Text>
      <Text style={[styles.chipText, { color: c.fg }]}>{heading.toUpperCase()}</Text>
    </View>
  );
}

export function CardTitle({ children }: PropsWithChildren) {
  return <Text style={type.heading}>{children}</Text>;
}

export function Lede({ children }: PropsWithChildren) {
  return <Text style={styles.lede}>{children}</Text>;
}

export function Action({ children, color }: PropsWithChildren<{ color?: string }>) {
  return (
    <View style={styles.actionRow}>
      <View style={[styles.actionMark, color ? { backgroundColor: color } : null]} />
      <Text style={[styles.actionText, color ? { color } : null]}>{children}</Text>
    </View>
  );
}

export function Meta({ children }: PropsWithChildren) {
  return <Text style={styles.meta}>{children}</Text>;
}

export function Expandable({
  summary,
  children,
  openLabel = 'Read more',
  closeLabel = 'Less',
  color,
}: PropsWithChildren<{ summary?: ReactNode; openLabel?: string; closeLabel?: string; color?: string }>) {
  const [open, setOpen] = useState(false);
  return (
    <View>
      {summary}
      {open ? <View style={styles.expandBody}>{children}</View> : null}
      <Pressable
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setOpen((v) => !v);
        }}
        hitSlop={8}
      >
        <Text style={[styles.expandToggle, color ? { color } : null]}>{open ? closeLabel : `${openLabel} ›`}</Text>
      </Pressable>
    </View>
  );
}

export function Divider() {
  return <View style={styles.divider} />;
}

export function Source({ children }: PropsWithChildren) {
  return <Text style={styles.source}>{children}</Text>;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  screenContent: { padding: spacing.lg, paddingBottom: spacing.xxl },

  pageTitle: { marginBottom: spacing.lg },
  pageSub: { ...type.meta, marginTop: spacing.xs },

  sectionLabel: { ...type.label, marginBottom: spacing.sm, marginTop: spacing.lg },

  hero: { borderRadius: radius.hero, padding: spacing.lg, marginBottom: spacing.md },
  heroEyebrow: { ...type.label, color: colors.onDeepSoft },
  heroTitle: { fontSize: 27, lineHeight: 32, fontWeight: '700', color: colors.onDeep, marginTop: spacing.xs, letterSpacing: -0.4 },
  heroSub: { ...type.meta, color: colors.onDeepSoft, marginTop: 2 },
  heroMetric: { flexDirection: 'row', alignItems: 'baseline', marginTop: spacing.lg },
  heroFigure: { ...type.figure, color: colors.onDeep },
  heroUnit: { ...type.label, color: colors.onDeepSoft, marginLeft: spacing.sm },

  track: { height: 5, borderRadius: 3, backgroundColor: colors.line, marginTop: spacing.md, overflow: 'hidden' },
  trackOnDark: { backgroundColor: 'rgba(255,255,255,0.22)' },
  fill: { height: '100%', borderRadius: 3 },

  scripture: { borderRadius: radius.card, padding: spacing.lg, marginBottom: spacing.md },
  scriptureLabel: { ...type.label, color: colors.onDeepSoft, marginBottom: spacing.sm },
  scriptureRef: { ...type.verseRef, marginTop: spacing.md },

  prayer: {
    borderRadius: radius.card,
    padding: spacing.lg,
    marginBottom: spacing.md,
    backgroundColor: colors.violetSoft,
  },
  prayerLabel: { ...type.label, color: colors.violet, marginBottom: spacing.sm },
  prayerText: { fontFamily: 'Georgia', fontSize: 17, lineHeight: 27, color: colors.ink },

  metricRow: { flexDirection: 'row', gap: spacing.md, marginBottom: spacing.md },
  metric: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: radius.card,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.line,
  },
  metricLabel: { ...type.label, marginTop: 2 },

  card: {
    backgroundColor: colors.card,
    borderRadius: radius.card,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.line,
  },
  cardQuiet: { backgroundColor: colors.bgRaised, borderColor: 'transparent' },
  pressed: { opacity: 0.75 },

  childCard: {
    backgroundColor: colors.card,
    borderRadius: radius.card,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.line,
  },
  childTop: { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.sm },
  // The identity column shrinks and the metric keeps a fixed lane, so a long
  // unit label can never run under the child's name.
  childIdentity: { flex: 1, minWidth: 0, marginRight: spacing.sm },
  avatar: { width: 42, height: 42, borderRadius: 21, alignItems: 'center', justifyContent: 'center', marginRight: spacing.md },
  avatarText: { color: '#FFFFFF', fontSize: 18, fontWeight: '700' },
  childName: { fontSize: 20, fontWeight: '700', color: colors.ink, letterSpacing: -0.3 },
  childStage: { ...type.meta, marginTop: 1 },
  childMetric: { alignItems: 'flex-end', width: 96 },
  childMetricUnit: {
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '700',
    letterSpacing: 0.6,
    color: colors.stone,
    textTransform: 'uppercase',
    textAlign: 'right',
  },
  childAction: { ...type.soft, color: colors.ink, marginTop: spacing.md },

  addCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.card,
    paddingVertical: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: colors.line,
  },
  addPlus: { fontSize: 19, color: colors.stone, marginRight: spacing.sm, fontWeight: '600' },
  addText: { ...type.soft, color: colors.inkSoft, fontWeight: '600' },

  segments: { flexDirection: 'row', backgroundColor: colors.bgRaised, borderRadius: radius.pill, padding: 3, marginBottom: spacing.lg },
  segment: { flex: 1, paddingVertical: 7, borderRadius: radius.pill, alignItems: 'center' },
  segmentOn: { backgroundColor: colors.card },
  segmentText: { fontSize: 13, fontWeight: '700', color: colors.stone },
  segmentTextOn: { color: colors.ink },

  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.sm,
    paddingVertical: 5,
    borderRadius: radius.pill,
    marginBottom: spacing.sm,
  },
  chipGlyph: { fontSize: 13, marginRight: 6 },
  chipText: { fontSize: 11, fontWeight: '800', letterSpacing: 1.2 },

  lede: { ...type.lede, marginTop: spacing.xs },

  actionRow: { flexDirection: 'row', alignItems: 'flex-start', marginTop: spacing.md },
  actionMark: { width: 3, alignSelf: 'stretch', borderRadius: 2, backgroundColor: colors.indigo, marginRight: spacing.sm },
  actionText: { ...type.body, color: colors.indigo, flex: 1, fontWeight: '500' },

  meta: { ...type.meta, marginTop: spacing.sm },

  expandBody: { marginTop: spacing.sm },
  expandToggle: { ...type.meta, color: colors.indigo, marginTop: spacing.sm, fontWeight: '700' },

  divider: { height: 1, backgroundColor: colors.line, marginVertical: spacing.md },

  source: { ...type.meta, fontStyle: 'italic', marginTop: spacing.sm },
});
