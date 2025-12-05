import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useSound } from '../../context/SoundContext';
import { getFriendsList } from '../../services/userService';
import styles from './FriendsList.styles';
import { colors } from '../../styles/theme/colors';

const FriendsList = ({ setCurrentPage, onViewProfile }) => {
  const { user } = useAuth();
  const { playClickSound } = useSound();
  const [loading, setLoading] = useState(true);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    if (!user?.id) {
      setLoading(false);
      return;
    }

    const { data } = await getFriendsList(user.id);
    setFriends(data || []);
    setLoading(false);
  };

  const renderFriendRow = ({ item }) => (
    <TouchableOpacity
      style={styles.friendsList_row}
      onPress={() => { playClickSound(); onViewProfile(item.id); }}
      activeOpacity={0.8}
    >
      <View style={styles.friendsList_info}>
        <Text style={styles.friendsList_username}>{item.username}</Text>
        <View style={styles.friendsList_stats}>
          <Text style={styles.friendsList_stat}>
            {item.current_streak || 0} day streak
          </Text>
          <Text style={styles.friendsList_statDivider}>|</Text>
          <Text style={styles.friendsList_stat}>
            {item.total_daily_games || 0} games
          </Text>
        </View>
      </View>
      <Text style={styles.friendsList_chevron}>›</Text>
    </TouchableOpacity>
  );

  const renderEmpty = () => (
    <View style={styles.friendsList_emptyContainer}>
      <Text style={styles.friendsList_emptyText}>
        You haven't added any friends yet.{'\n'}Search for players to add them!
      </Text>
    </View>
  );

  return (
    <View style={styles.friendsList_container}>
      <View style={styles.friendsList_header}>
        <Text style={styles.friendsList_title}>Friends</Text>
      </View>

      <View style={styles.friendsList_content}>
        {loading ? (
          <View style={styles.friendsList_loadingContainer}>
            <ActivityIndicator size="large" color={colors.accent_primary} />
          </View>
        ) : (
          <FlatList
            data={friends}
            renderItem={renderFriendRow}
            keyExtractor={(item) => item.friendshipId}
            contentContainerStyle={[
              styles.friendsList_list,
              friends.length === 0 && styles.friendsList_listEmpty,
            ]}
            ListEmptyComponent={renderEmpty}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>

      <View style={styles.friendsList_footer}>
        <TouchableOpacity
          style={styles.friendsList_backButton}
          onPress={() => { playClickSound(); setCurrentPage('back'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.friendsList_backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FriendsList;
