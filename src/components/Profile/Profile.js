import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useSound } from '../../context/SoundContext';
import styles from './Profile.styles';

const Profile = ({ setCurrentPage }) => {
  const { profile } = useAuth();
  const { playClickSound } = useSound();

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <View style={styles.profile_container}>
      <View style={styles.profile_header}>
        <Text style={styles.profile_title}>Profile</Text>
      </View>

      <View style={styles.profile_content}>
        <Text style={styles.profile_username}>{profile?.username || 'Unknown'}</Text>

        <View style={styles.profile_statsCard}>
          <View style={styles.profile_statRowStacked}>
            <Text style={styles.profile_statLabel}>Member Since</Text>
            <Text style={styles.profile_statValueLarge}>
              {formatDate(profile?.created_at)}
            </Text>
          </View>

          <View style={styles.profile_statRow}>
            <Text style={styles.profile_statLabel}>Current Streak</Text>
            <Text style={styles.profile_statValue}>
              {profile?.current_streak || 0}{' '}
              {profile?.current_streak === 1 ? 'day' : 'days'}
            </Text>
          </View>

          <View style={styles.profile_statRow}>
            <Text style={styles.profile_statLabel}>Best Streak</Text>
            <Text style={styles.profile_statValue}>
              {profile?.max_streak || 0}{' '}
              {profile?.max_streak === 1 ? 'day' : 'days'}
            </Text>
          </View>

          <View style={styles.profile_statRowLast}>
            <Text style={styles.profile_statLabel}>Daily Games Played</Text>
            <Text style={styles.profile_statValue}>
              {profile?.total_daily_games || 0}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.profile_footer}>
        <TouchableOpacity
          style={styles.profile_backButton}
          onPress={() => { playClickSound(); setCurrentPage('back'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.profile_backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
