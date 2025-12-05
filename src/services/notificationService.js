import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const REMINDER_ENABLED_KEY = '@memoria_reminder_enabled';
const LAST_SCHEDULED_DATE_KEY = '@memoria_last_scheduled_date';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const requestNotificationPermissions = async () => {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('daily-reminder', {
      name: 'Daily Reminder',
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  return finalStatus === 'granted';
};

export const getReminderEnabled = async () => {
  try {
    const value = await AsyncStorage.getItem(REMINDER_ENABLED_KEY);
    return value === null ? true : value === 'true';
  } catch {
    return true;
  }
};

export const setReminderEnabled = async (enabled) => {
  try {
    await AsyncStorage.setItem(REMINDER_ENABLED_KEY, String(enabled));
  } catch (error) {
    console.log('Error saving reminder setting:', error);
  }
};

const getRandomNotificationTime = () => {
  const now = new Date();
  const notificationDate = new Date();
  const randomHour = 14 + Math.floor(Math.random() * 4);
  const randomMinute = Math.floor(Math.random() * 60);
  notificationDate.setHours(randomHour, randomMinute, 0, 0);

  if (notificationDate <= now) {
    notificationDate.setDate(notificationDate.getDate() + 1);
  }

  return notificationDate;
};

const getTodayDateString = () => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
};

export const scheduleDailyReminder = async (hasPlayedToday = false) => {
  try {
    const reminderEnabled = await getReminderEnabled();
    if (!reminderEnabled) {
      return;
    }

    const hasPermission = await requestNotificationPermissions();
    if (!hasPermission) {
      return;
    }

    const today = getTodayDateString();
    const lastScheduledDate = await AsyncStorage.getItem(LAST_SCHEDULED_DATE_KEY);

    if (lastScheduledDate === today) {
      return;
    }

    if (hasPlayedToday) {
      await AsyncStorage.setItem(LAST_SCHEDULED_DATE_KEY, today);
      return;
    }

    await Notifications.cancelAllScheduledNotificationsAsync();

    const notificationTime = getRandomNotificationTime();

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Daily Challenge Awaits!',
        body: 'Test your Bible knowledge with today\'s daily challenge!',
        data: { type: 'daily_reminder' },
      },
      trigger: {
        date: notificationTime,
        channelId: 'daily-reminder',
      },
    });

    await AsyncStorage.setItem(LAST_SCHEDULED_DATE_KEY, today);
  } catch (error) {
    console.log('Error scheduling notification:', error);
  }
};

export const cancelDailyReminder = async () => {
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
    const today = getTodayDateString();
    await AsyncStorage.setItem(LAST_SCHEDULED_DATE_KEY, today);
  } catch (error) {
    console.log('Error canceling notification:', error);
  }
};
