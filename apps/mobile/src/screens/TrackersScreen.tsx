import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { pregnancyStatus } from '@cairn/stages';
import { evaluate, type Escalation } from '@cairn/escalation';
import {
  contractionStats,
  EMPTY_CONTRACTION_LOG,
  endContraction,
  escalationContextFor,
  fiveOneOne,
  isTypicalAtWeek,
  kickBaseline,
  movementConcern,
  prevalenceLine,
  recordKick,
  startContraction,
  startKickSession,
  SYMPTOMS,
  type ContractionLog,
  type KickSession,
  type SymptomLogEntry,
} from '@cairn/trackers';
import { Card } from '../components/Card';
import { EscalationBanner } from '../components/EscalationBanner';
import { useFamily } from '../state/family';
import { colors, spacing, type } from '../theme';

/**
 * Kick counter, contraction timer, and symptom log on one surface.
 * Every concerning input routes through the deterministic engine before any
 * copy renders — the banner is driven by rules, not by screen logic.
 */
export function TrackersScreen() {
  const family = useFamily();
  const week = family.dueDate ? pregnancyStatus(family.dueDate, family.today).week : null;

  const [kickSession, setKickSession] = useState<KickSession | null>(null);
  const [kickHistory, setKickHistory] = useState<readonly KickSession[]>([]);
  const [contractions, setContractions] = useState<ContractionLog>(EMPTY_CONTRACTION_LOG);
  const [contracting, setContracting] = useState(false);
  const [symptomEntries, setSymptomEntries] = useState<readonly SymptomLogEntry[]>([]);

  const escalations = useMemo<readonly Escalation[]>(() => {
    const out: Escalation[] = [];
    const now = Date.now();
    if (kickSession && week !== null) {
      const concern = movementConcern(kickSession, kickBaseline(kickHistory), now);
      if (concern) out.push(...evaluate({ flags: [concern.flag], gestationalWeek: week }));
    }
    if (week !== null) {
      for (const entry of symptomEntries) {
        const ctx = escalationContextFor(entry, week);
        if (ctx) out.push(...evaluate(ctx));
      }
    }
    const deduped = new Map(out.map((e) => [e.ruleId, e]));
    return [...deduped.values()];
  }, [kickSession, kickHistory, symptomEntries, week]);

  const stats = contractionStats(contractions, 60 * 60 * 1000, Date.now());
  const inLaborPattern = fiveOneOne(contractions, Date.now());

  return (
    <ScrollView style={styles.screen} contentContainerStyle={{ padding: spacing.md }}>
      <EscalationBanner escalations={escalations} />

      <Card label="KICK COUNTER">
        {kickSession === null ? (
          <Pressable style={styles.primary} onPress={() => setKickSession(startKickSession(String(Date.now()), Date.now()))}>
            <Text style={styles.primaryText}>Start counting</Text>
          </Pressable>
        ) : (
          <View>
            <Text style={type.title}>{kickSession.kicks.length} / {kickSession.targetCount}</Text>
            <Pressable
              style={styles.primary}
              onPress={() => {
                const next = recordKick(kickSession, Date.now());
                setKickSession(next.endedAt === null ? next : null);
                if (next.endedAt !== null) setKickHistory([...kickHistory, next]);
              }}
            >
              <Text style={styles.primaryText}>Felt a movement</Text>
            </Pressable>
          </View>
        )}
        <Text style={type.soft}>Count how long ten movements take, at a time your baby is usually active.</Text>
      </Card>

      <Card label="CONTRACTION TIMER">
        <Pressable
          style={[styles.primary, contracting && styles.active]}
          onPress={() => {
            setContractions(contracting ? endContraction(contractions, Date.now()) : startContraction(contractions, Date.now()));
            setContracting(!contracting);
          }}
        >
          <Text style={styles.primaryText}>{contracting ? 'Contraction ended' : 'Contraction starting'}</Text>
        </Pressable>
        <Text style={type.body}>
          Last hour: {stats.countInWindow} contractions
          {stats.averageIntervalMin ? ` · ~${stats.averageIntervalMin.toFixed(0)} min apart` : ''}
          {stats.averageDurationSec ? ` · ~${stats.averageDurationSec.toFixed(0)}s long` : ''}
        </Text>
        {inLaborPattern ? (
          <Text style={styles.fiveOneOne}>
            5-1-1 pattern reached: contractions about five minutes apart, about a minute long, for an hour.
            This is the point providers ask you to call.
          </Text>
        ) : null}
      </Card>

      <Card label="HOW ARE YOU FEELING?">
        {SYMPTOMS.filter((s) => week === null || isTypicalAtWeek(s, week) || s.escalationText).map((s) => (
          <Pressable
            key={s.id}
            style={styles.symptom}
            onPress={() =>
              week !== null &&
              setSymptomEntries([...symptomEntries, { symptomId: s.id, week, severity: 'moderate', at: Date.now() }])
            }
          >
            <Text style={type.body}>{s.label}</Text>
            <Text style={type.soft}>{prevalenceLine(s)}</Text>
          </Pressable>
        ))}
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  primary: {
    backgroundColor: colors.accent,
    borderRadius: 10,
    paddingVertical: spacing.sm + 4,
    alignItems: 'center',
    marginVertical: spacing.sm,
  },
  active: { backgroundColor: colors.warn },
  primaryText: { color: '#fff', fontWeight: '600', fontSize: 15 },
  symptom: { paddingVertical: spacing.sm, borderBottomWidth: 1, borderBottomColor: colors.line },
  fiveOneOne: { ...type.body, color: colors.warn, marginTop: spacing.sm, fontWeight: '600' },
});
