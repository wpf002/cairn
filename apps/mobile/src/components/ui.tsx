import { useState, type PropsWithChildren, type ReactNode } from 'react';
import { LayoutAnimation, Platform, Pressable, ScrollView, StyleSheet, Text, UIManager, View } from 'react-native';
import { colors, radius, spacing, type } from '../theme';

/**
 * The shared UI vocabulary.
 *
 * Every screen previously assembled its own <View>/<Text> stacks with inline
 * styles, which is how the app ended up rendering an 82-word body as a flat
 * wall of text on the surface a parent sees first. These components make the
 * hierarchy the default: a card shows a headline, one sentence, and one thing
 * to do, and the depth opens on a tap.
 *
 * All visual values come from theme.ts. Nothing here hardcodes a colour or a
 * size, so retuning the palette is a one-file change.
 */

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

/** Screen scaffold. Consistent horizontal rhythm and bottom breathing room. */
export function Screen({ children }: PropsWithChildren) {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.screenContent}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}

/** A quiet section label. Uppercase, tracked, never competing with a headline. */
export function SectionLabel({ children }: PropsWithChildren) {
  return <Text style={styles.sectionLabel}>{children}</Text>;
}

/**
 * The page's one big line. Used once per screen, at the top.
 * Section 20: a parent should know whose day this is before they read anything.
 */
export function PageTitle({ children, sub }: PropsWithChildren<{ sub?: string }>) {
  return (
    <View style={styles.pageTitle}>
      <Text style={type.display}>{children}</Text>
      {sub ? <Text style={styles.pageSub}>{sub}</Text> : null}
    </View>
  );
}

export function Card({
  children,
  onPress,
  tone = 'default',
}: PropsWithChildren<{ onPress?: () => void; tone?: 'default' | 'quiet' | 'accent' }>) {
  const body = <View style={[styles.card, tone === 'quiet' && styles.cardQuiet, tone === 'accent' && styles.cardAccent]}>{children}</View>;
  if (!onPress) return body;
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      {body}
    </Pressable>
  );
}

/** A headline sized for a card, not for a page. */
export function CardTitle({ children }: PropsWithChildren) {
  return <Text style={type.heading}>{children}</Text>;
}

/** The one sentence that carries a card. */
export function Lede({ children }: PropsWithChildren) {
  return <Text style={styles.lede}>{children}</Text>;
}

/**
 * The single thing to do today.
 *
 * Section 2's test: the app must translate knowledge into parental action, and
 * a card with three actions is a card with none. Surfaces show one.
 */
export function Action({ children }: PropsWithChildren) {
  return (
    <View style={styles.actionRow}>
      <View style={styles.actionMark} />
      <Text style={styles.actionText}>{children}</Text>
    </View>
  );
}

/** Small, dimmed, bottom-of-card metadata. The counter lives here. */
export function Meta({ children }: PropsWithChildren) {
  return <Text style={styles.meta}>{children}</Text>;
}

/**
 * Depth behind a tap.
 *
 * The body a unit carries is worth reading and is not worth showing by
 * default. Collapsed, a card stays scannable; expanded, the reader chose it.
 */
export function Expandable({
  summary,
  children,
  openLabel = 'Read more',
  closeLabel = 'Less',
}: PropsWithChildren<{ summary?: ReactNode; openLabel?: string; closeLabel?: string }>) {
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
        <Text style={styles.expandToggle}>{open ? closeLabel : openLabel}</Text>
      </Pressable>
    </View>
  );
}

/**
 * The counter, rendered as a figure rather than a sentence.
 *
 * Parent Cue's whole brand is "936 weeks" as a number a parent sees. Cairn's
 * is larger and runs to twenty-one; showing it as body text buried it.
 */
export function Counter({ value, unit, caption }: { value: string; unit: string; caption?: string }) {
  return (
    <View style={styles.counter}>
      <View style={styles.counterFigure}>
        <Text style={type.figure}>{value}</Text>
        <Text style={styles.counterUnit}>{unit}</Text>
      </View>
      {caption ? <Text style={styles.meta}>{caption}</Text> : null}
    </View>
  );
}

/** A hairline between stacked items inside one card. */
export function Divider() {
  return <View style={styles.divider} />;
}

/** Attribution for a descriptive claim. Section 19's provenance, made visible. */
export function Source({ children }: PropsWithChildren) {
  return <Text style={styles.source}>{children}</Text>;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  screenContent: { padding: spacing.lg, paddingBottom: spacing.xxl },

  pageTitle: { marginBottom: spacing.lg },
  pageSub: { ...type.soft, marginTop: spacing.xs },

  sectionLabel: { ...type.label, marginBottom: spacing.sm, marginTop: spacing.md },

  card: {
    backgroundColor: colors.card,
    borderRadius: radius.card,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.line,
  },
  cardQuiet: { backgroundColor: colors.bgRaised, borderColor: 'transparent' },
  cardAccent: { backgroundColor: colors.accentSoft, borderColor: 'transparent' },
  pressed: { opacity: 0.7 },

  lede: { ...type.lede, marginTop: spacing.xs },

  actionRow: { flexDirection: 'row', alignItems: 'flex-start', marginTop: spacing.md },
  actionMark: {
    width: 3,
    alignSelf: 'stretch',
    borderRadius: 2,
    backgroundColor: colors.accent,
    marginRight: spacing.sm,
  },
  actionText: { ...type.body, color: colors.accentInk, flex: 1 },

  meta: { ...type.meta, marginTop: spacing.sm },

  expandBody: { marginTop: spacing.sm },
  expandToggle: { ...type.meta, color: colors.accent, marginTop: spacing.sm, fontWeight: '600' },

  counter: { marginTop: spacing.md },
  counterFigure: { flexDirection: 'row', alignItems: 'baseline' },
  counterUnit: { ...type.meta, marginLeft: spacing.xs, textTransform: 'uppercase', letterSpacing: 1 },

  divider: { height: 1, backgroundColor: colors.line, marginVertical: spacing.md },

  source: { ...type.meta, fontStyle: 'italic', marginTop: spacing.sm },
});
