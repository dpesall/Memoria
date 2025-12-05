import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useSound } from '../../context/SoundContext';
import { getFriendCounts } from '../../services/userService';
import styles from './Social.styles';
import { colors } from '../../styles/theme/colors';

const Social = ({ setCurrentPage }) => {
  const { user } = useAuth();
  const { playClickSound } = useSound();
  const [loading, setLoading] = useState(true);
  const [counts, setCounts] = useState({
    friendsCount: 0,
    incomingCount: 0,
    outgoingCount: 0,
  });

  useEffect(() => {
    fetchCounts();
  }, []);

  const fetchCounts = async () => {
    if (!user?.id) {
      setLoading(false);
      return;
    }

    const { data } = await getFriendCounts(user.id);
    setCounts(data);
    setLoading(false);
  };

  const totalRequestsCount = counts.incomingCount + counts.outgoingCount;

  if (loading) {
    return (
      <View style={styles.social_container}>
        <View style={styles.social_header}>
          <Text style={styles.social_title}>Social</Text>
        </View>
        <View style={styles.social_loadingContainer}>
          <ActivityIndicator size="large" color={colors.accent_primary} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.social_container}>
      <View style={styles.social_header}>
        <Text style={styles.social_title}>Social</Text>
      </View>

      <View style={styles.social_content}>
        <View style={styles.social_buttonList}>
          <TouchableOpacity
            style={styles.social_menuButton}
            onPress={() => { playClickSound(); setCurrentPage('addFriend'); }}
            activeOpacity={0.8}
          >
            <Text style={styles.social_menuButtonText}>Add Friend</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.social_menuButton}
            onPress={() => { playClickSound(); setCurrentPage('friendsList'); }}
            activeOpacity={0.8}
          >
            <View style={styles.social_menuButtonContent}>
              <Text style={styles.social_menuButtonText}>Friends</Text>
              {counts.friendsCount > 0 && (
                <Text style={styles.social_badge}>{counts.friendsCount}</Text>
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.social_menuButton}
            onPress={() => { playClickSound(); setCurrentPage('friendRequests'); }}
            activeOpacity={0.8}
          >
            <View style={styles.social_menuButtonContent}>
              <View style={styles.social_menuButtonLeft}>
                <Text style={styles.social_menuButtonText}>Requests</Text>
                {counts.incomingCount > 0 && (
                  <View style={styles.social_pendingDot} />
                )}
              </View>
              {totalRequestsCount > 0 && (
                <Text style={styles.social_badge}>{totalRequestsCount}</Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.social_footer}>
        <TouchableOpacity
          style={styles.social_backButton}
          onPress={() => { playClickSound(); setCurrentPage('back'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.social_backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Social;
