import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import { AppState } from 'react-native';
import { useAuth } from './AuthContext';
import { checkAlreadyPlayed } from '../services/dailyService';
import {
  getReminderEnabled,
  setReminderEnabled,
  scheduleDailyReminder,
  cancelDailyReminder,
  requestNotificationPermissions,
} from '../services/notificationService';

const NotificationContext = createContext({});

const getTodayDateString = () => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
};

export const NotificationProvider = ({ children }) => {
  const { user } = useAuth();
  const [reminderEnabled, setReminderEnabledState] = useState(true);
  const [permissionStatus, setPermissionStatus] = useState('unknown');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  useEffect(() => {
    if (user?.id && isLoaded) {
      checkAndSchedule();
    }
  }, [user?.id, isLoaded]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => subscription?.remove();
  }, [user?.id, reminderEnabled]);

  const loadSettings = async () => {
    const enabled = await getReminderEnabled();
    setReminderEnabledState(enabled);

    const hasPermission = await requestNotificationPermissions();
    setPermissionStatus(hasPermission ? 'granted' : 'denied');

    setIsLoaded(true);
  };

  const handleAppStateChange = async (nextAppState) => {
    if (nextAppState === 'active' && user?.id && reminderEnabled) {
      await checkAndSchedule();
    }
  };

  const checkAndSchedule = async () => {
    if (!user?.id) return;

    const today = getTodayDateString();
    const { played } = await checkAlreadyPlayed(user.id, today);
    await scheduleDailyReminder(played);
  };

  const toggleReminder = useCallback(async () => {
    const newValue = !reminderEnabled;
    setReminderEnabledState(newValue);
    await setReminderEnabled(newValue);

    if (newValue && user?.id) {
      await checkAndSchedule();
    } else {
      await cancelDailyReminder();
    }
  }, [reminderEnabled, user?.id]);

  const onDailyCompleted = useCallback(async () => {
    await cancelDailyReminder();
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        reminderEnabled,
        permissionStatus,
        isLoaded,
        toggleReminder,
        onDailyCompleted,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationContext);
