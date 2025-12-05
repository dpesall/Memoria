import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Modal,
} from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useSound } from '../../context/SoundContext';
import {
  getIncomingRequests,
  getOutgoingRequests,
  acceptFriendRequest,
  declineFriendRequest,
  cancelFriendRequest,
  getUserProfile,
} from '../../services/userService';
import styles from './FriendRequests.styles';
import { colors } from '../../styles/theme/colors';

const FriendRequests = ({ setCurrentPage, onViewProfile }) => {
  const { user } = useAuth();
  const { playClickSound } = useSound();
  const [activeTab, setActiveTab] = useState('incoming');
  const [loading, setLoading] = useState(true);
  const [incoming, setIncoming] = useState([]);
  const [outgoing, setOutgoing] = useState([]);
  const [actionLoading, setActionLoading] = useState({});
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    if (!user?.id) {
      setLoading(false);
      return;
    }

    const [incomingResult, outgoingResult] = await Promise.all([
      getIncomingRequests(user.id),
      getOutgoingRequests(user.id),
    ]);

    setIncoming(incomingResult.data || []);
    setOutgoing(outgoingResult.data || []);
    setLoading(false);
  };

  const handleCancel = async (friendshipId) => {
    setActionLoading((prev) => ({ ...prev, [friendshipId]: true }));

    const { error } = await cancelFriendRequest(friendshipId);

    if (!error) {
      setOutgoing((prev) => prev.filter((r) => r.friendshipId !== friendshipId));
    }

    setActionLoading((prev) => ({ ...prev, [friendshipId]: false }));
  };

  const openRequestModal = async (request) => {
    setSelectedRequest(request);
    setModalVisible(true);
    setProfileLoading(true);
    setProfileData(null);

    const { data } = await getUserProfile(request.id);
    setProfileData(data);
    setProfileLoading(false);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedRequest(null);
    setProfileData(null);
  };

  const handleModalAccept = async () => {
    if (!selectedRequest) return;

    setActionLoading((prev) => ({ ...prev, [selectedRequest.friendshipId]: true }));
    const { error } = await acceptFriendRequest(selectedRequest.friendshipId);

    if (!error) {
      setIncoming((prev) => prev.filter((r) => r.friendshipId !== selectedRequest.friendshipId));
      closeModal();
    }

    setActionLoading((prev) => ({ ...prev, [selectedRequest.friendshipId]: false }));
  };

  const handleModalDecline = async () => {
    if (!selectedRequest) return;

    setActionLoading((prev) => ({ ...prev, [selectedRequest.friendshipId]: true }));
    const { error } = await declineFriendRequest(selectedRequest.friendshipId);

    if (!error) {
      setIncoming((prev) => prev.filter((r) => r.friendshipId !== selectedRequest.friendshipId));
      closeModal();
    }

    setActionLoading((prev) => ({ ...prev, [selectedRequest.friendshipId]: false }));
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

  const renderIncomingRow = ({ item }) => (
    <TouchableOpacity
      style={styles.friendRequests_row}
      onPress={() => { playClickSound(); openRequestModal(item); }}
      activeOpacity={0.8}
    >
      <View style={styles.friendRequests_info}>
        <Text style={styles.friendRequests_username}>{item.username}</Text>
        <View style={styles.friendRequests_stats}>
          <Text style={styles.friendRequests_stat}>
            {item.current_streak || 0} day streak
          </Text>
          <Text style={styles.friendRequests_statDivider}>|</Text>
          <Text style={styles.friendRequests_stat}>
            {item.total_daily_games || 0} games
          </Text>
        </View>
      </View>
      <Text style={styles.friendRequests_chevron}>›</Text>
    </TouchableOpacity>
  );

  const renderOutgoingRow = ({ item }) => {
    const isLoading = actionLoading[item.friendshipId];

    return (
      <TouchableOpacity
        style={styles.friendRequests_row}
        onPress={() => { playClickSound(); onViewProfile(item.id); }}
        activeOpacity={0.8}
      >
        <View style={styles.friendRequests_info}>
          <Text style={styles.friendRequests_username}>{item.username}</Text>
          <View style={styles.friendRequests_stats}>
            <Text style={styles.friendRequests_stat}>
              {item.current_streak || 0} day streak
            </Text>
            <Text style={styles.friendRequests_statDivider}>|</Text>
            <Text style={styles.friendRequests_stat}>
              {item.total_daily_games || 0} games
            </Text>
          </View>
        </View>
        {isLoading ? (
          <ActivityIndicator size="small" color={colors.text_secondary} />
        ) : (
          <TouchableOpacity
            style={styles.friendRequests_cancelButton}
            onPress={() => { playClickSound(); handleCancel(item.friendshipId); }}
            activeOpacity={0.8}
          >
            <Text style={styles.friendRequests_cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };

  const renderEmptyIncoming = () => (
    <View style={styles.friendRequests_emptyContainer}>
      <Text style={styles.friendRequests_emptyText}>
        No incoming friend requests
      </Text>
    </View>
  );

  const renderEmptyOutgoing = () => (
    <View style={styles.friendRequests_emptyContainer}>
      <Text style={styles.friendRequests_emptyText}>
        No pending friend requests
      </Text>
    </View>
  );

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.friendRequests_loadingContainer}>
          <ActivityIndicator size="large" color={colors.accent_primary} />
        </View>
      );
    }

    const data = activeTab === 'incoming' ? incoming : outgoing;
    const renderItem = activeTab === 'incoming' ? renderIncomingRow : renderOutgoingRow;
    const renderEmpty = activeTab === 'incoming' ? renderEmptyIncoming : renderEmptyOutgoing;

    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.friendshipId}
        contentContainerStyle={[
          styles.friendRequests_list,
          data.length === 0 && styles.friendRequests_listEmpty,
        ]}
        ListEmptyComponent={renderEmpty}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  return (
    <View style={styles.friendRequests_container}>
      <View style={styles.friendRequests_header}>
        <Text style={styles.friendRequests_title}>Requests</Text>
      </View>

      <View style={styles.friendRequests_tabContainer}>
        <TouchableOpacity
          style={[
            styles.friendRequests_tab,
            activeTab === 'incoming' && styles.friendRequests_tabActive,
          ]}
          onPress={() => { playClickSound(); setActiveTab('incoming'); }}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.friendRequests_tabText,
              activeTab === 'incoming' && styles.friendRequests_tabTextActive,
            ]}
          >
            Incoming
          </Text>
          {incoming.length > 0 && (
            <View style={styles.friendRequests_tabBadge}>
              <Text style={styles.friendRequests_tabBadgeText}>{incoming.length}</Text>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.friendRequests_tab,
            activeTab === 'outgoing' && styles.friendRequests_tabActive,
          ]}
          onPress={() => { playClickSound(); setActiveTab('outgoing'); }}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.friendRequests_tabText,
              activeTab === 'outgoing' && styles.friendRequests_tabTextActive,
            ]}
          >
            Outgoing
          </Text>
          {outgoing.length > 0 && (
            <View style={styles.friendRequests_tabBadgeOutgoing}>
              <Text style={styles.friendRequests_tabBadgeText}>{outgoing.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.friendRequests_content}>{renderContent()}</View>

      <View style={styles.friendRequests_footer}>
        <TouchableOpacity
          style={styles.friendRequests_backButton}
          onPress={() => { playClickSound(); setCurrentPage('back'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.friendRequests_backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={closeModal}
      >
        <TouchableOpacity
          style={styles.friendRequests_modalOverlay}
          activeOpacity={1}
          onPress={closeModal}
        >
          <View
            style={styles.friendRequests_modalContent}
            onStartShouldSetResponder={() => true}
          >
            {profileLoading ? (
              <View style={styles.friendRequests_modalLoading}>
                <ActivityIndicator size="large" color={colors.accent_primary} />
              </View>
            ) : profileData ? (
              <>
                <Text style={styles.friendRequests_modalUsername}>
                  {profileData.username}
                </Text>

                <View style={styles.friendRequests_modalStats}>
                  <View style={styles.friendRequests_modalStatRowStacked}>
                    <Text style={styles.friendRequests_modalStatLabel}>Member Since</Text>
                    <Text style={styles.friendRequests_modalStatValueLarge}>
                      {formatDate(profileData.created_at)}
                    </Text>
                  </View>
                  <View style={styles.friendRequests_modalStatRow}>
                    <Text style={styles.friendRequests_modalStatLabel}>Current Streak</Text>
                    <Text style={styles.friendRequests_modalStatValue}>
                      {profileData.current_streak || 0} {profileData.current_streak === 1 ? 'day' : 'days'}
                    </Text>
                  </View>
                  <View style={styles.friendRequests_modalStatRowLast}>
                    <Text style={styles.friendRequests_modalStatLabel}>Daily Games</Text>
                    <Text style={styles.friendRequests_modalStatValue}>
                      {profileData.total_daily_games || 0}
                    </Text>
                  </View>
                </View>

                <View style={styles.friendRequests_modalActions}>
                  {actionLoading[selectedRequest?.friendshipId] ? (
                    <ActivityIndicator size="small" color={colors.accent_primary} />
                  ) : (
                    <>
                      <TouchableOpacity
                        style={styles.friendRequests_modalAcceptButton}
                        onPress={() => { playClickSound(); handleModalAccept(); }}
                        activeOpacity={0.8}
                      >
                        <Text style={styles.friendRequests_modalAcceptButtonText}>Accept</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.friendRequests_modalDeclineButton}
                        onPress={() => { playClickSound(); handleModalDecline(); }}
                        activeOpacity={0.8}
                      >
                        <Text style={styles.friendRequests_modalDeclineButtonText}>Decline</Text>
                      </TouchableOpacity>
                    </>
                  )}
                </View>
              </>
            ) : (
              <Text style={styles.friendRequests_modalError}>Failed to load profile</Text>
            )}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default FriendRequests;
