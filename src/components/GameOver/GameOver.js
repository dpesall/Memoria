import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useSound } from '../../context/SoundContext';
import styles from './GameOver.styles';

const STANDARD_TOTAL_QUESTIONS = 10;

const GameOver = ({
  setPageView,
  mode,
  score,
  correctAnswers,
  questionNumber,
  longestStreak,
  bestAnswer,
}) => {
  const { playClickSound } = useSound();
  const isStandard = mode === 'Standard';
  const avgPoints = correctAnswers > 0 ? Math.round(score / correctAnswers) : 0;

  return (
    <View style={styles.gameOver_container}>
      <ScrollView contentContainerStyle={styles.gameOver_scrollContent}>
        <View style={styles.gameOver_hero}>
          <Text style={styles.gameOver_heroTitle}>
            {isStandard ? 'Quiz Complete!' : 'Game Over'}
          </Text>
          <Text style={styles.gameOver_heroScore}>{score}</Text>
          <Text style={styles.gameOver_heroLabel}>points</Text>
        </View>

        <View style={styles.gameOver_statsCard}>
          {isStandard ? (
            <>
              <View style={styles.gameOver_statRow}>
                <Text style={styles.gameOver_statLabel}>Correct</Text>
                <Text style={styles.gameOver_statValue}>
                  {correctAnswers}/{STANDARD_TOTAL_QUESTIONS}
                </Text>
              </View>
              <View style={styles.gameOver_statRow}>
                <Text style={styles.gameOver_statLabel}>Avg Points</Text>
                <Text style={styles.gameOver_statValue}>{avgPoints}</Text>
              </View>
              <View style={styles.gameOver_statRowLast}>
                <Text style={styles.gameOver_statLabel}>Best Answer</Text>
                <Text style={styles.gameOver_statValueAccent}>{bestAnswer}</Text>
              </View>
            </>
          ) : (
            <>
              <View style={styles.gameOver_statRow}>
                <Text style={styles.gameOver_statLabel}>Questions</Text>
                <Text style={styles.gameOver_statValue}>{questionNumber}</Text>
              </View>
              <View style={styles.gameOver_statRow}>
                <Text style={styles.gameOver_statLabel}>Avg Points</Text>
                <Text style={styles.gameOver_statValue}>{avgPoints}</Text>
              </View>
              <View style={styles.gameOver_statRowLast}>
                <Text style={styles.gameOver_statLabel}>Best Answer</Text>
                <Text style={styles.gameOver_statValueAccent}>{bestAnswer}</Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>

      <View style={styles.gameOver_footer}>
        <TouchableOpacity
          style={styles.gameOver_exitButton}
          onPress={() => { playClickSound(); setPageView('main'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.gameOver_exitButtonText}>Exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameOver;
