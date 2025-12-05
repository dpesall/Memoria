import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useSound } from '../../context/SoundContext';
import { useNotifications } from '../../context/NotificationContext';
import ChangePassword from './ChangePassword';
import styles from './Settings.styles';

const Settings = ({ setCurrentPage }) => {
  const { user, signOut } = useAuth();
  const { isMuted, toggleSound, playClickSound } = useSound();
  const { reminderEnabled, permissionStatus, toggleReminder } = useNotifications();
  const [pageView, setPageView] = useState('main');

  const handleSignOut = async () => {
    await signOut();
  };

  if (pageView === 'changePassword') {
    return <ChangePassword setPageView={setPageView} />;
  }

  return (
    <View style={styles.settings_container}>
      <View style={styles.settings_header}>
        <Text style={styles.settings_title}>Settings</Text>
      </View>

      <ScrollView contentContainerStyle={styles.settings_scrollContent}>
        <TouchableOpacity
          style={styles.settings_optionButton}
          onPress={() => { playClickSound(); toggleSound(); }}
          activeOpacity={0.8}
        >
          <Text style={styles.settings_optionLabel}>Sound</Text>
          <Text style={styles.settings_optionValue}>
            {isMuted ? 'Off' : 'On'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.settings_optionButton}
          onPress={() => { playClickSound(); toggleReminder(); }}
          activeOpacity={0.8}
          disabled={permissionStatus === 'denied'}
        >
          <Text style={styles.settings_optionLabel}>Daily Reminder</Text>
          <Text style={styles.settings_optionValue}>
            {permissionStatus === 'denied' ? 'Denied' : reminderEnabled ? 'On' : 'Off'}
          </Text>
        </TouchableOpacity>

        <View style={styles.settings_sectionTitle}>
          <Text style={styles.settings_sectionTitleText}>Account</Text>
        </View>

        <View style={styles.settings_infoCard}>
          <Text style={styles.settings_infoLabel}>Email</Text>
          <Text style={styles.settings_infoValue}>{user?.email || 'Not set'}</Text>
        </View>

        <TouchableOpacity
          style={styles.settings_actionButton}
          onPress={() => { playClickSound(); setPageView('changePassword'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.settings_actionButtonText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.settings_signOutButton}
          onPress={() => { playClickSound(); handleSignOut(); }}
          activeOpacity={0.8}
        >
          <Text style={styles.settings_signOutButtonText}>Sign Out</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.settings_linkButton}
          onPress={() => { playClickSound(); setCurrentPage('credits'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.settings_linkText}>Credits</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.settings_footer}>
        <TouchableOpacity
          style={styles.settings_backButton}
          onPress={() => { playClickSound(); setCurrentPage('back'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.settings_backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
