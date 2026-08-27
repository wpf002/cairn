import * as Notifications from 'expo-notifications';
import type { ClosingWindow } from '@cairn/framework';

/**
 * Closing-window notifications (section 21: opportunity drives the nudge).
 *
 * The one push a parent thanks the app for: an opportunity window that is
 * about to close. Nothing here is a content drip — no daily "here's an
 * article" pings, ever.
 */
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export async function requestNotificationPermission(): Promise<boolean> {
  const settings = await Notifications.getPermissionsAsync();
  if (settings.granted) return true;
  const asked = await Notifications.requestPermissionsAsync();
  return asked.granted;
}

/** Schedule one nudge per closing window, replacing any previously scheduled set. */
export async function scheduleClosingWindowNudges(
  childName: string,
  windows: readonly ClosingWindow[],
): Promise<void> {
  await Notifications.cancelAllScheduledNotificationsAsync();
  for (const [i, w] of windows.slice(0, 4).entries()) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `A window is closing for ${childName}`,
        body:
          w.yearsRemaining <= 0
            ? `This is the last year for: ${w.item.label}.`
            : `About ${w.yearsRemaining} year(s) left for: ${w.item.label}.`,
      },
      // Staggered weekly, one per week, so four windows never land as four
      // same-morning pings.
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: 60 * 60 * 24 * 7 * (i + 1),
      },
    });
  }
}
