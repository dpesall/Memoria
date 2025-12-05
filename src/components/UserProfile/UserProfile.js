import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Modal } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useSound } from '../../context/SoundContext';
import {
  getUserProfile,
  getFriendshipStatus,
  sendFriendRequest,
  acceptFriendRequest,
  cancelFriendRequest,
  removeFriend,
} from '../../services/userService';
import styles from './UserProfile.styles';
import { colors } from '../../styles/theme/colors';

const UserProfile = ({ userId, setCurrentPage }) => {
  const { user } = useAuth();
  const { playClickSound } = useSound();
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [friendshipStatus, setFriendshipStatus] = useState('none');
  const [friendshipId, setFriendshipId] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [removeModalVisible, setRemoveModalVisible] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, [userId]);

  const fetchProfile = async () => {
    setLoading(true);
    const { data } = await getUserProfile(userId);
    if (data) {
      setProfileData(data);
    }

    if (user?.id && userId) {
      const { status, friendshipId: fId } = await getFriendshipStatus(user.id, userId);
      setFriendshipStatus(status);
      setFriendshipId(fId);
    }

    setLoading(false);
  };

  const handleAddFriend = async () => {
    setActionLoading(true);
    const { data, error } = await sendFriendRequest(user.id, userId);
    if (!error && data) {
      setFriendshipStatus('pending_sent');
      setFriendshipId(data.id);
    }
    setActionLoading(false);
  };

  const handleAcceptRequest = async () => {
    setActionLoading(true);
    const { error } = await acceptFriendRequest(friendshipId);
    if (!error) {
      setFriendshipStatus('friends');
    }
    setActionLoading(false);
  };

  const handleCancelRequest = async () => {
    setActionLoading(true);
    const { error } = await cancelFriendRequest(friendshipId);
    if (!error) {
      setFriendshipStatus('none');
      setFriendshipId(null);
    }
    setActionLoading(false);
  };

  const handleRemoveFriend = () => {
    setRemoveModalVisible(true);
  };

  const confirmRemoveFriend = async () => {
    setActionLoading(true);
    const { error } = await removeFriend(friendshipId);
    if (!error) {
      setFriendshipStatus('none');
      setFriendshipId(null);
      setRemoveModalVisible(false);
    }
    setActionLoading(false);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const renderFriendButton = () => {
    if (actionLoading) {
      return (
        <View style={styles.userProfile_friendButton}>
          <ActivityIndicator size="small" color={colors.text_primary} />
        </View>
      );
    }

    switch (friendshipStatus) {
      case 'friends':
        return (
          <TouchableOpacity
            style={styles.userProfile_friendButtonRemove}
            onPress={() => { playClickSound(); handleRemoveFriend(); }}
            activeOpacity={0.8}
          >
            <Text style={styles.userProfile_friendButtonTextSecondary}>Remove Friend</Text>
          </TouchableOpacity>
        );

      case 'pending_sent':
        return (
          <TouchableOpacity
            style={styles.userProfile_friendButtonPending}
            onPress={() => { playClickSound(); handleCancelRequest(); }}
            activeOpacity={0.8}
          >
            <Text style={styles.userProfile_friendButtonTextSecondary}>Request Pending</Text>
          </TouchableOpacity>
        );

      case 'pending_received':
        return (
          <TouchableOpacity
            style={styles.userProfile_friendButton}
            onPress={() => { playClickSound(); handleAcceptRequest(); }}
            activeOpacity={0.8}
          >
            <Text style={styles.userProfile_friendButtonText}>Accept Request</Text>
          </TouchableOpacity>
        );

      default:
        return (
          <TouchableOpacity
            style={styles.userProfile_friendButton}
            onPress={() => { playClickSound(); handleAddFriend(); }}
            activeOpacity={0.8}
          >
            <Text style={styles.userProfile_friendButtonText}>Add Friend</Text>
          </TouchableOpacity>
        );
    }
  };

  if (loading) {
    return (
      <View style={styles.userProfile_container}>
        <View style={styles.userProfile_header}>
          <Text style={styles.userProfile_title}>Profile</Text>
        </View>
        <View style={styles.userProfile_loadingContainer}>
          <ActivityIndicator size="large" color={colors.accent_primary} />
        </View>
        <View style={styles.userProfile_footer}>
          <TouchableOpacity
            style={styles.userProfile_backButton}
            onPress={() => { playClickSound(); setCurrentPage('back'); }}
            activeOpacity={0.8}
          >
            <Text style={styles.userProfile_backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  if (!profileData) {
    return (
      <View style={styles.userProfile_container}>
        <View style={styles.userProfile_header}>
          <Text style={styles.userProfile_title}>Profile</Text>
        </View>
        <View style={styles.userProfile_content}>
          <Text style={styles.userProfile_errorText}>User not found</Text>
        </View>
        <View style={styles.userProfile_footer}>
          <TouchableOpacity
            style={styles.userProfile_backButton}
            onPress={() => { playClickSound(); setCurrentPage('back'); }}
            activeOpacity={0.8}
          >
            <Text style={styles.userProfile_backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.userProfile_container}>
      <View style={styles.userProfile_header}>
        <Text style={styles.userProfile_title}>Profile</Text>
      </View>

      <View style={styles.userProfile_content}>
        <Text style={styles.userProfile_username}>{profileData.username}</Text>

        {renderFriendButton()}

        <View style={styles.userProfile_statsCard}>
          <View style={styles.userProfile_statRowStacked}>
            <Text style={styles.userProfile_statLabel}>Member Since</Text>
            <Text style={styles.userProfile_statValueLarge}>
              {formatDate(profileData.created_at)}
            </Text>
          </View>

          <View style={styles.userProfile_statRow}>
            <Text style={styles.userProfile_statLabel}>Current Streak</Text>
            <Text style={styles.userProfile_statValue}>
              {profileData.current_streak || 0}{' '}
              {profileData.current_streak === 1 ? 'day' : 'days'}
            </Text>
          </View>

          <View style={styles.userProfile_statRow}>
            <Text style={styles.userProfile_statLabel}>Best Streak</Text>
            <Text style={styles.userProfile_statValue}>
              {profileData.max_streak || 0}{' '}
              {profileData.max_streak === 1 ? 'day' : 'days'}
            </Text>
          </View>

          <View style={styles.userProfile_statRowLast}>
            <Text style={styles.userProfile_statLabel}>Daily Games Played</Text>
            <Text style={styles.userProfile_statValue}>
              {profileData.total_daily_games || 0}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.userProfile_footer}>
        <TouchableOpacity
          style={styles.userProfile_backButton}
          onPress={() => { playClickSound(); setCurrentPage('back'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.userProfile_backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={removeModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setRemoveModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.userProfile_modalOverlay}
          activeOpacity={1}
          onPress={() => setRemoveModalVisible(false)}
        >
          <View
            style={styles.userProfile_modalContent}
            onStartShouldSetResponder={() => true}
          >
            <Text style={styles.userProfile_modalUsername}>
              {profileData?.username}
            </Text>

            <View style={styles.userProfile_modalStats}>
              <View style={styles.userProfile_modalStatRowStacked}>
                <Text style={styles.userProfile_modalStatLabel}>Member Since</Text>
                <Text style={styles.userProfile_modalStatValueLarge}>
                  {formatDate(profileData?.created_at)}
                </Text>
              </View>
              <View style={styles.userProfile_modalStatRow}>
                <Text style={styles.userProfile_modalStatLabel}>Current Streak</Text>
                <Text style={styles.userProfile_modalStatValue}>
                  {profileData?.current_streak || 0} {profileData?.current_streak === 1 ? 'day' : 'days'}
                </Text>
              </View>
              <View style={styles.userProfile_modalStatRowLast}>
                <Text style={styles.userProfile_modalStatLabel}>Daily Games</Text>
                <Text style={styles.userProfile_modalStatValue}>
                  {profileData?.total_daily_games || 0}
                </Text>
              </View>
            </View>

            <View style={styles.userProfile_modalActions}>
              {actionLoading ? (
                <ActivityIndicator size="small" color={colors.accent_primary} />
              ) : (
                <>
                  <TouchableOpacity
                    style={styles.userProfile_modalRemoveButton}
                    onPress={() => { playClickSound(); confirmRemoveFriend(); }}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.userProfile_modalRemoveButtonText}>Remove</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.userProfile_modalCancelButton}
                    onPress={() => { playClickSound(); setRemoveModalVisible(false); }}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.userProfile_modalCancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default UserProfile;
