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
import { getTodayDateString } from '../../utils/seededRandom';
import {
  getDailyLeaderboard,
  getStreakLeaderboard,
  getFriendsDailyLeaderboard,
  getFriendsStreakLeaderboard,
} from '../../services/dailyService';
import styles from './Leaderboard.styles';
import { colors } from '../../styles/theme/colors';

const Leaderboard = ({ setCurrentPage }) => {
  const { user, profile } = useAuth();
  const { playClickSound } = useSound();
  const [activeType, setActiveType] = useState('today');
  const [activeScope, setActiveScope] = useState('global');
  const [loading, setLoading] = useState(true);
  const [dailyData, setDailyData] = useState([]);
  const [streakData, setStreakData] = useState([]);
  const [friendsDailyData, setFriendsDailyData] = useState([]);
  const [friendsStreakData, setFriendsStreakData] = useState([]);

  useEffect(() => {
    fetchLeaderboards();
  }, []);

  const fetchLeaderboards = async () => {
    setLoading(true);
    try {
      const today = getTodayDateString();

      const [dailyResult, streakResult, friendsDailyResult, friendsStreakResult] = await Promise.all([
        getDailyLeaderboard(today, 20),
        getStreakLeaderboard(20),
        user?.id ? getFriendsDailyLeaderboard(user.id, today) : { data: [] },
        user?.id ? getFriendsStreakLeaderboard(user.id) : { data: [] },
      ]);

      if (dailyResult.data) {
        setDailyData(dailyResult.data);
      }
      if (streakResult.data) {
        setStreakData(streakResult.data);
      }
      if (friendsDailyResult.data) {
        setFriendsDailyData(friendsDailyResult.data);
      }
      if (friendsStreakResult.data) {
        setFriendsStreakData(friendsStreakResult.data);
      }
    } catch (err) {
      console.error('Error fetching leaderboards:', err);
    } finally {
      setLoading(false);
    }
  };

  const getRankStyle = (rank) => {
    if (rank === 1) return styles.leaderboard_rankGold;
    if (rank === 2) return styles.leaderboard_rankSilver;
    if (rank === 3) return styles.leaderboard_rankBronze;
    return styles.leaderboard_rank;
  };

  const isCurrentUser = (item) => {
    if (activeType === 'today') {
      return item.user_id === user?.id;
    }
    return item.id === user?.id;
  };

  const renderTypeToggle = () => (
    <View style={styles.leaderboard_toggleContainer}>
      <TouchableOpacity
        style={[
          styles.leaderboard_toggleButton,
          activeType === 'today' && styles.leaderboard_toggleButtonActive,
        ]}
        onPress={() => { playClickSound(); setActiveType('today'); }}
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.leaderboard_toggleText,
            activeType === 'today' && styles.leaderboard_toggleTextActive,
          ]}
        >
          Today
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.leaderboard_toggleButton,
          activeType === 'streak' && styles.leaderboard_toggleButtonActive,
        ]}
        onPress={() => { playClickSound(); setActiveType('streak'); }}
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.leaderboard_toggleText,
            activeType === 'streak' && styles.leaderboard_toggleTextActive,
          ]}
        >
          Streak
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderScopeToggle = () => (
    <View style={styles.leaderboard_toggleContainer}>
      <TouchableOpacity
        style={[
          styles.leaderboard_toggleButton,
          activeScope === 'global' && styles.leaderboard_toggleButtonActive,
        ]}
        onPress={() => { playClickSound(); setActiveScope('global'); }}
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.leaderboard_toggleText,
            activeScope === 'global' && styles.leaderboard_toggleTextActive,
          ]}
        >
          Global
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.leaderboard_toggleButton,
          activeScope === 'friends' && styles.leaderboard_toggleButtonActive,
        ]}
        onPress={() => { playClickSound(); setActiveScope('friends'); }}
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.leaderboard_toggleText,
            activeScope === 'friends' && styles.leaderboard_toggleTextActive,
          ]}
        >
          Friends
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderDailyRow = ({ item, index }) => {
    const rank = index + 1;
    const avgScore = Math.round(item.score / 10);
    const isUser = isCurrentUser(item);

    return (
      <View style={[styles.leaderboard_row, isUser && styles.leaderboard_rowHighlight]}>
        <Text style={getRankStyle(rank)}>{rank}</Text>
        <View style={styles.leaderboard_rowContent}>
          <View style={styles.leaderboard_rowTop}>
            <Text style={styles.leaderboard_username} numberOfLines={1}>
              {item.profiles?.username || 'Unknown'}
            </Text>
            <Text style={styles.leaderboard_primaryStat}>
              {item.score.toLocaleString()}
            </Text>
          </View>
          <View style={styles.leaderboard_rowBottom}>
            <Text style={styles.leaderboard_secondaryStat}>
              {item.correct_answers}/10
            </Text>
            <Text style={styles.leaderboard_statDivider}>|</Text>
            <Text style={styles.leaderboard_secondaryStat}>Avg: {avgScore}</Text>
            <Text style={styles.leaderboard_statDivider}>|</Text>
            <Text style={styles.leaderboard_secondaryStat}>Best: {item.best_answer}</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderStreakRow = ({ item, index }) => {
    const rank = index + 1;
    const isUser = isCurrentUser(item);

    return (
      <View style={[styles.leaderboard_row, isUser && styles.leaderboard_rowHighlight]}>
        <Text style={getRankStyle(rank)}>{rank}</Text>
        <View style={styles.leaderboard_rowContent}>
          <View style={styles.leaderboard_rowTop}>
            <Text style={styles.leaderboard_username} numberOfLines={1}>
              {item.username || 'Unknown'}
            </Text>
            <Text style={styles.leaderboard_primaryStat}>
              {item.current_streak} {item.current_streak === 1 ? 'day' : 'days'}
            </Text>
          </View>
          <View style={styles.leaderboard_rowBottom}>
            <Text style={styles.leaderboard_secondaryStat}>
              {item.total_daily_games} {item.total_daily_games === 1 ? 'game' : 'games'}
            </Text>
            <Text style={styles.leaderboard_statDivider}>|</Text>
            <Text style={styles.leaderboard_secondaryStat}>
              Highest: {item.highest_daily_score?.toLocaleString() || 0}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderEmpty = () => (
    <View style={styles.leaderboard_emptyContainer}>
      <Text style={styles.leaderboard_emptyText}>
        {activeType === 'today'
          ? 'No one has played today yet.\nBe the first!'
          : 'No streak data available yet.'}
      </Text>
    </View>
  );

  const renderFriendsEmpty = () => (
    <View style={styles.leaderboard_emptyContainer}>
      <Text style={styles.leaderboard_emptyText}>
        {activeType === 'today'
          ? 'No friends have played today yet.'
          : 'No friends with streak data yet.'}
      </Text>
    </View>
  );

  const renderFriendsContent = () => {
    const data = activeType === 'today' ? friendsDailyData : friendsStreakData;
    const renderItem = activeType === 'today' ? renderDailyRow : renderStreakRow;

    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `friends-${activeType}-${index}`}
        contentContainerStyle={[
          styles.leaderboard_list,
          data.length === 0 && styles.leaderboard_listEmpty,
        ]}
        ListEmptyComponent={renderFriendsEmpty}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.leaderboard_loadingContainer}>
          <ActivityIndicator size="large" color={colors.accent_primary} />
        </View>
      );
    }

    if (activeScope === 'friends') {
      return renderFriendsContent();
    }

    const data = activeType === 'today' ? dailyData : streakData;
    const renderItem = activeType === 'today' ? renderDailyRow : renderStreakRow;

    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${activeType}-${index}`}
        contentContainerStyle={[
          styles.leaderboard_list,
          data.length === 0 && styles.leaderboard_listEmpty,
        ]}
        ListEmptyComponent={renderEmpty}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  return (
    <View style={styles.leaderboard_container}>
      <View style={styles.leaderboard_header}>
        <Text style={styles.leaderboard_title}>Leaderboard</Text>
      </View>

      <View style={styles.leaderboard_toggles}>
        {renderTypeToggle()}
        {renderScopeToggle()}
      </View>

      <View style={styles.leaderboard_content}>{renderContent()}</View>

      <View style={styles.leaderboard_footer}>
        <TouchableOpacity
          style={styles.leaderboard_backButton}
          onPress={() => { playClickSound(); setCurrentPage('home'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.leaderboard_backButtonText}>Main Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Leaderboard;
