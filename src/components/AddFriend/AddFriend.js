import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../context/AuthContext';
import { useSound } from '../../context/SoundContext';
import {
  searchUsers,
  getFriendshipStatus,
  sendFriendRequest,
  acceptFriendRequest,
  cancelFriendRequest,
} from '../../services/userService';
import styles from './AddFriend.styles';
import { colors } from '../../styles/theme/colors';

const AddFriend = ({ setCurrentPage, onViewProfile }) => {
  const { user } = useAuth();
  const { playClickSound } = useSound();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [actionLoading, setActionLoading] = useState({});

  const handleSearch = async () => {
    Keyboard.dismiss();
    if (searchQuery.trim().length < 2) {
      return;
    }

    setLoading(true);
    setHasSearched(true);

    const { data: users } = await searchUsers(searchQuery);

    const filteredUsers = (users || []).filter((u) => u.id !== user?.id);

    const usersWithStatus = await Promise.all(
      filteredUsers.map(async (u) => {
        const { status, friendshipId } = await getFriendshipStatus(user.id, u.id);
        return { ...u, friendshipStatus: status, friendshipId };
      })
    );

    setSearchResults(usersWithStatus);
    setLoading(false);
  };

  const handleSendRequest = async (addresseeId) => {
    setActionLoading((prev) => ({ ...prev, [addresseeId]: true }));

    const { error } = await sendFriendRequest(user.id, addresseeId);

    if (!error) {
      setSearchResults((prev) =>
        prev.map((u) =>
          u.id === addresseeId ? { ...u, friendshipStatus: 'pending_sent' } : u
        )
      );
    }

    setActionLoading((prev) => ({ ...prev, [addresseeId]: false }));
  };

  const handleAcceptRequest = async (friendshipId, userId) => {
    setActionLoading((prev) => ({ ...prev, [userId]: true }));

    const { error } = await acceptFriendRequest(friendshipId);

    if (!error) {
      setSearchResults((prev) =>
        prev.map((u) =>
          u.id === userId ? { ...u, friendshipStatus: 'friends' } : u
        )
      );
    }

    setActionLoading((prev) => ({ ...prev, [userId]: false }));
  };

  const handleCancelRequest = async (friendshipId, userId) => {
    setActionLoading((prev) => ({ ...prev, [userId]: true }));

    const { error } = await cancelFriendRequest(friendshipId);

    if (!error) {
      setSearchResults((prev) =>
        prev.map((u) =>
          u.id === userId
            ? { ...u, friendshipStatus: 'none', friendshipId: null }
            : u
        )
      );
    }

    setActionLoading((prev) => ({ ...prev, [userId]: false }));
  };

  const renderActionButton = (item) => {
    const isLoading = actionLoading[item.id];

    if (isLoading) {
      return (
        <View style={styles.addFriend_actionButton}>
          <ActivityIndicator size="small" color={colors.text_primary} />
        </View>
      );
    }

    switch (item.friendshipStatus) {
      case 'friends':
        return (
          <View style={[styles.addFriend_actionButton, styles.addFriend_actionButtonDisabled]}>
            <Ionicons name="checkmark" size={16} color={colors.text_secondary} />
            <Text style={styles.addFriend_actionButtonTextDisabled}>Friends</Text>
          </View>
        );

      case 'pending_sent':
        return (
          <TouchableOpacity
            style={[styles.addFriend_actionButton, styles.addFriend_actionButtonPending]}
            onPress={() => { playClickSound(); handleCancelRequest(item.friendshipId, item.id); }}
            activeOpacity={0.8}
          >
            <Text style={styles.addFriend_actionButtonTextPending}>Pending</Text>
          </TouchableOpacity>
        );

      case 'pending_received':
        return (
          <TouchableOpacity
            style={[styles.addFriend_actionButton, styles.addFriend_actionButtonAccept]}
            onPress={() => { playClickSound(); handleAcceptRequest(item.friendshipId, item.id); }}
            activeOpacity={0.8}
          >
            <Text style={styles.addFriend_actionButtonText}>Accept</Text>
          </TouchableOpacity>
        );

      default:
        return (
          <TouchableOpacity
            style={styles.addFriend_actionButton}
            onPress={() => { playClickSound(); handleSendRequest(item.id); }}
            activeOpacity={0.8}
          >
            <Ionicons name="person-add" size={16} color={colors.text_primary} />
            <Text style={styles.addFriend_actionButtonText}>Add</Text>
          </TouchableOpacity>
        );
    }
  };

  const renderUserRow = ({ item }) => (
    <TouchableOpacity
      style={styles.addFriend_userRow}
      onPress={() => { playClickSound(); onViewProfile(item.id); }}
      activeOpacity={0.8}
    >
      <View style={styles.addFriend_userInfo}>
        <Text style={styles.addFriend_username}>{item.username}</Text>
        <View style={styles.addFriend_userStats}>
          <Text style={styles.addFriend_userStat}>
            {item.current_streak || 0} day streak
          </Text>
          <Text style={styles.addFriend_userStatDivider}>|</Text>
          <Text style={styles.addFriend_userStat}>
            {item.total_daily_games || 0} games
          </Text>
        </View>
      </View>
      {renderActionButton(item)}
    </TouchableOpacity>
  );

  const renderEmpty = () => {
    if (!hasSearched) {
      return (
        <View style={styles.addFriend_emptyContainer}>
          <Text style={styles.addFriend_emptyText}>
            Search for players by username
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.addFriend_emptyContainer}>
        <Text style={styles.addFriend_emptyText}>No users found</Text>
      </View>
    );
  };

  return (
    <View style={styles.addFriend_container}>
      <View style={styles.addFriend_header}>
        <Text style={styles.addFriend_title}>Add Friend</Text>
      </View>

      <View style={styles.addFriend_searchContainer}>
        <TextInput
          style={styles.addFriend_searchInput}
          placeholder="Search by username..."
          placeholderTextColor={colors.text_secondary}
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity
          style={styles.addFriend_searchButton}
          onPress={() => { playClickSound(); handleSearch(); }}
          activeOpacity={0.8}
        >
          <Ionicons name="search" size={22} color={colors.text_primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.addFriend_content}>
        {loading ? (
          <View style={styles.addFriend_loadingContainer}>
            <ActivityIndicator size="large" color={colors.accent_primary} />
          </View>
        ) : (
          <FlatList
            data={searchResults}
            renderItem={renderUserRow}
            keyExtractor={(item) => item.id}
            contentContainerStyle={[
              styles.addFriend_list,
              searchResults.length === 0 && styles.addFriend_listEmpty,
            ]}
            ListEmptyComponent={renderEmpty}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>

      <View style={styles.addFriend_footer}>
        <TouchableOpacity
          style={styles.addFriend_backButton}
          onPress={() => { playClickSound(); setCurrentPage('back'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.addFriend_backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddFriend;
