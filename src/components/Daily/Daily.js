import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useSound } from '../../context/SoundContext';
import { useNotifications } from '../../context/NotificationContext';
import { getTodayDateString } from '../../utils/seededRandom';
import { getDailyQuestions } from '../../utils/DailyQuestionGenerator';
import { checkAlreadyPlayed, saveDailyResult } from '../../services/dailyService';
import DailyQuiz from '../DailyQuiz/DailyQuiz';
import styles from './Daily.styles';
import { colors } from '../../styles/theme/colors';

const Daily = ({ setCurrentPage }) => {
  const { user } = useAuth();
  const { playClickSound } = useSound();
  const { onDailyCompleted } = useNotifications();
  const [pageView, setPageView] = useState('loading');
  const [todayDate, setTodayDate] = useState('');
  const [dailyQuestions, setDailyQuestions] = useState([]);
  const [gameResults, setGameResults] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    initializeDaily();
  }, []);

  const initializeDaily = async () => {
    try {
      const today = getTodayDateString();
      setTodayDate(today);

      const { played, result, error: checkError } = await checkAlreadyPlayed(
        user.id,
        today
      );

      if (checkError) {
        setError('Failed to check daily status');
        setPageView('error');
        return;
      }

      if (played) {
        setGameResults({
          score: result.score,
          correctAnswers: result.correct_answers,
          wrongAnswers: result.wrong_answers,
          longestStreak: result.longest_streak,
          bestAnswer: result.best_answer,
        });
        setPageView('results');
      } else {
        const questions = getDailyQuestions(today);
        setDailyQuestions(questions);
        setPageView('ready');
      }
    } catch (err) {
      console.error('Error initializing daily:', err);
      setError('Something went wrong');
      setPageView('error');
    }
  };

  const handleQuizComplete = async (results) => {
    setGameResults(results);

    const { error: saveError } = await saveDailyResult(user.id, todayDate, results);

    if (saveError) {
      console.error('Error saving results:', saveError);
    }

    await onDailyCompleted();
    setPageView('results');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const renderLoading = () => (
    <View style={styles.daily_container}>
      <View style={styles.daily_centerContent}>
        <ActivityIndicator size="large" color={colors.accent_primary} />
        <Text style={styles.daily_loadingText}>Loading Daily Challenge...</Text>
      </View>
    </View>
  );

  const renderError = () => (
    <View style={styles.daily_container}>
      <View style={styles.daily_header}>
        <Text style={styles.daily_title}>Daily Challenge</Text>
      </View>

      <View style={styles.daily_centerContent}>
        <Text style={styles.daily_errorText}>{error}</Text>
        <TouchableOpacity
          style={styles.daily_retryButton}
          onPress={() => { playClickSound(); initializeDaily(); }}
          activeOpacity={0.8}
        >
          <Text style={styles.daily_retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.daily_footer}>
        <TouchableOpacity
          style={styles.daily_backButton}
          onPress={() => { playClickSound(); setCurrentPage('back'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.daily_backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderReady = () => (
    <View style={styles.daily_container}>
      <View style={styles.daily_header}>
        <Text style={styles.daily_title}>Daily Challenge</Text>
      </View>

      <View style={styles.daily_content}>
        <View style={styles.daily_infoCard}>
          <Text style={styles.daily_dateText}>{formatDate(todayDate)}</Text>
          <View style={styles.daily_rulesList}>
            <View style={styles.daily_ruleRow}>
              <Text style={styles.daily_ruleBullet}>•</Text>
              <Text style={styles.daily_ruleText}>10 questions</Text>
            </View>
            <View style={styles.daily_ruleRow}>
              <Text style={styles.daily_ruleBullet}>•</Text>
              <Text style={styles.daily_ruleText}>15 seconds per question</Text>
            </View>
            <View style={styles.daily_ruleRow}>
              <Text style={styles.daily_ruleBullet}>•</Text>
              <Text style={styles.daily_ruleText}>Faster answers earn more points</Text>
            </View>
            <View style={styles.daily_ruleRow}>
              <Text style={styles.daily_ruleBullet}>•</Text>
              <Text style={styles.daily_ruleText}>One attempt only</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.daily_footer}>
        <TouchableOpacity
          style={styles.daily_startButton}
          onPress={() => { playClickSound(); setPageView('quiz'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.daily_startButtonText}>Start Challenge</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.daily_backButton}
          onPress={() => { playClickSound(); setCurrentPage('back'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.daily_backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderResults = () => (
    <View style={styles.daily_container}>
      <View style={styles.daily_header}>
        <Text style={styles.daily_title}>Summary</Text>
      </View>

      <View style={styles.daily_content}>
        <View style={styles.daily_resultsCard}>
          <Text style={styles.daily_dateText}>{formatDate(todayDate)}</Text>

          <Text style={styles.daily_finalScore}>{gameResults?.score || 0}</Text>
          <Text style={styles.daily_finalScoreLabel}>Points</Text>

          <View style={styles.daily_statsGrid}>
            <View style={styles.daily_statItem}>
              <Text style={styles.daily_statValue}>
                {gameResults?.correctAnswers || 0}/10
              </Text>
              <Text style={styles.daily_statLabel}>Correct</Text>
            </View>
            <View style={styles.daily_statItem}>
              <Text style={styles.daily_statValue}>{gameResults?.longestStreak || 0}</Text>
              <Text style={styles.daily_statLabel}>Best Streak</Text>
            </View>
            <View style={styles.daily_statItem}>
              <Text style={styles.daily_statValue}>{gameResults?.bestAnswer || 0}</Text>
              <Text style={styles.daily_statLabel}>Best Answer</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.daily_footer}>
        <TouchableOpacity
          style={styles.daily_leaderboardButton}
          onPress={() => { playClickSound(); setCurrentPage('leaderboard'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.daily_leaderboardButtonText}>Leaderboard</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.daily_backButton}
          onPress={() => { playClickSound(); setCurrentPage('back'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.daily_backButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderView = () => {
    switch (pageView) {
      case 'loading':
        return renderLoading();
      case 'error':
        return renderError();
      case 'ready':
        return renderReady();
      case 'quiz':
        return (
          <DailyQuiz
            setCurrentPage={setCurrentPage}
            questions={dailyQuestions}
            onComplete={handleQuizComplete}
            onQuit={() => setPageView('ready')}
          />
        );
      case 'results':
        return renderResults();
      default:
        return renderLoading();
    }
  };

  return renderView();
};

export default Daily;
