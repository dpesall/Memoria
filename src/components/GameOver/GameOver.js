import React from 'react';
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import styles from './GameOver.styles';

const GameOver = ({
  setPageView,
  mode,
  score,
  correctAnswers,
  wrongAnswers,
  questionNumber,
  totalQuestions,
  longestStreak,
}) => {
  const isStandardMode = mode === 'Standard';
  const accuracy = totalQuestions ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
  const avgPoints = correctAnswers > 0 ? Math.round(score / correctAnswers) : 0;

  const formatScore = (num) => {
    return num.toLocaleString();
  };

  const StatRow = ({ label, value, isLast }) => (
    <>
      <View style={styles.gameOver_statRow}>
        <Text style={styles.gameOver_statLabel}>{label}</Text>
        <Text style={styles.gameOver_statValue}>{value}</Text>
      </View>
      {!isLast && <View style={styles.gameOver_divider} />}
    </>
  );

  return (
    <SafeAreaView style={styles.gameOver_container}>
      <View style={styles.gameOver_heroSection}>
        <Text style={styles.gameOver_subtitle}>
          {isStandardMode ? 'Quiz Complete!' : 'Game Over'}
        </Text>
        <Text style={styles.gameOver_heroScore}>{formatScore(score)}</Text>
        <Text style={styles.gameOver_heroLabel}>points</Text>
      </View>

      <View style={styles.gameOver_statsCard}>
        {isStandardMode ? (
          <>
            <StatRow label="Correct" value={`${correctAnswers}/${totalQuestions}`} />
            <StatRow label="Wrong" value={`${wrongAnswers}/${totalQuestions}`} />
            <StatRow label="Accuracy" value={`${accuracy}%`} />
            <StatRow label="Avg Points" value={avgPoints} isLast />
          </>
        ) : (
          <>
            <StatRow label="Questions" value={questionNumber} />
            <StatRow label="Best Streak" value={longestStreak} isLast />
          </>
        )}
      </View>

      <View style={styles.gameOver_buttonContainer}>
        <TouchableOpacity
          style={styles.gameOver_button}
          onPress={() => setPageView('main')}
          activeOpacity={0.8}
        >
          <Text style={styles.gameOver_buttonText}>Exit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GameOver;
