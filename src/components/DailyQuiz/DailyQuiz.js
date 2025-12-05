import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import { useSound } from '../../context/SoundContext';
import styles from './DailyQuiz.styles';

const TIMER_DURATION = 15000;
const GRACE_PERIOD_THRESHOLD = (14 / 15) * 100;
const TOTAL_QUESTIONS = 10;

const DailyQuiz = ({ questions, onComplete, onQuit }) => {
  const { playClickSound, playGameSound } = useSound();
  const [showQuestionResults, setShowQuestionResults] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [timeUp, setTimeUp] = useState(false);
  const [pointsEarned, setPointsEarned] = useState(0);
  const [bestAnswer, setBestAnswer] = useState(0);

  const progressAnim = useRef(new Animated.Value(100)).current;
  const timerListenerId = useRef(null);
  const currentProgressRef = useRef(100);

  const currentQuestion = questions[questionNumber];

  const startTimer = () => {
    progressAnim.setValue(100);
    currentProgressRef.current = 100;

    if (timerListenerId.current) {
      progressAnim.removeListener(timerListenerId.current);
    }

    timerListenerId.current = progressAnim.addListener(({ value }) => {
      currentProgressRef.current = value;
      if (value <= 1 && !showQuestionResults) {
        handleTimeout();
      }
    });

    Animated.timing(progressAnim, {
      toValue: 0,
      duration: TIMER_DURATION,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();
  };

  const stopTimer = () => {
    progressAnim.stopAnimation();
    if (timerListenerId.current) {
      progressAnim.removeListener(timerListenerId.current);
      timerListenerId.current = null;
    }
  };

  const handleTimeout = () => {
    if (showQuestionResults) return;

    stopTimer();
    setTimeUp(true);
    setShowQuestionResults(true);
    setCorrectAnswer(currentQuestion.answers[0]);
    setWrongAnswers((prev) => prev + 1);
    setCurrentStreak(0);
    playGameSound('incorrect');

    if (questionNumber + 1 >= TOTAL_QUESTIONS) {
      setGameOver(true);
    }
  };

  const handleAnswerSelect = (answer) => {
    if (showQuestionResults || selectedAnswer) return;

    stopTimer();
    setSelectedAnswer(answer);
    const correct = answer === currentQuestion.answers[0];
    setIsCorrect(correct);
    setShowQuestionResults(true);

    if (correct) {
      let points;
      if (currentProgressRef.current >= GRACE_PERIOD_THRESHOLD) {
        points = 1000;
      } else {
        points = Math.round(
          500 + (500 * currentProgressRef.current) / GRACE_PERIOD_THRESHOLD
        );
      }
      setPointsEarned(points);
      if (points > bestAnswer) setBestAnswer(points);
      setScore((prev) => prev + points);
      setCorrectAnswers((prev) => prev + 1);
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      if (newStreak > longestStreak) {
        setLongestStreak(newStreak);
      }
      playGameSound('correct');
    } else {
      setPointsEarned(0);
      setWrongAnswers((prev) => prev + 1);
      setCorrectAnswer(currentQuestion.answers[0]);
      setCurrentStreak(0);
      playGameSound('incorrect');
    }

    if (questionNumber + 1 >= TOTAL_QUESTIONS) {
      setGameOver(true);
    }
  };

  const handleNext = () => {
    const nextQuestionNum = questionNumber + 1;
    setQuestionNumber(nextQuestionNum);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setCorrectAnswer(null);
    setTimeUp(false);
    setPointsEarned(0);
    setShowQuestionResults(false);
    startTimer();
  };

  const handleViewResults = () => {
    onComplete({
      score,
      correctAnswers,
      wrongAnswers,
      longestStreak,
      bestAnswer,
    });
  };

  const getAnswerStyle = (answer) => {
    if (!showQuestionResults) {
      return styles.quiz_answerButton;
    }

    const isSelected = answer === selectedAnswer;
    const isCorrectAnswer = answer === currentQuestion.answers[0];

    if (isCorrectAnswer) {
      return styles.quiz_answerButtonCorrect;
    }

    if (isSelected && !isCorrect) {
      return styles.quiz_answerButtonWrong;
    }

    return styles.quiz_answerButton;
  };

  useEffect(() => {
    startTimer();
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <View style={styles.quiz_container}>
      <View style={styles.quiz_gameHeader}>
        <Text style={styles.quiz_questionCount}>
          Question {questionNumber + 1}/{TOTAL_QUESTIONS}
        </Text>
        <Text style={styles.quiz_score}>{score} pts</Text>
      </View>

      <View style={styles.quiz_progressContainer}>
        <View style={styles.quiz_progressBar}>
          <Animated.View
            style={[
              styles.quiz_progressFill,
              {
                width: progressAnim.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'],
                }),
              },
            ]}
          />
        </View>
      </View>

      {currentQuestion && (
        <View style={styles.quiz_content}>
          <View style={styles.quiz_questionContainer}>
            <Text style={styles.quiz_questionText}>
              {currentQuestion.question}
            </Text>
          </View>

          <View style={styles.quiz_answersContainer}>
            {currentQuestion.answers[1].map((answer, index) => (
              <TouchableOpacity
                key={index}
                style={getAnswerStyle(answer)}
                onPress={() => handleAnswerSelect(answer)}
                activeOpacity={0.8}
                disabled={showQuestionResults}
              >
                <Text style={styles.quiz_answerText}>{answer}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {showQuestionResults && (
            <View style={styles.quiz_resultContainer}>
              {isCorrect ? (
                <Text style={styles.quiz_pointsEarned}>+{pointsEarned} pts</Text>
              ) : timeUp ? (
                <Text style={styles.quiz_timeUp}>Time's Up!</Text>
              ) : (
                <Text style={styles.quiz_wrongAnswer}>Wrong!</Text>
              )}
            </View>
          )}
        </View>
      )}

      {showQuestionResults && (
        <View style={styles.quiz_actionFooter}>
          {gameOver ? (
            <TouchableOpacity
              style={styles.quiz_viewResultsButton}
              onPress={() => { playClickSound(); handleViewResults(); }}
              activeOpacity={0.8}
            >
              <Text style={styles.quiz_viewResultsButtonText}>View Results</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.quiz_nextButton}
              onPress={() => { playClickSound(); handleNext(); }}
              activeOpacity={0.8}
            >
              <Text style={styles.quiz_nextButtonText}>Next</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default DailyQuiz;
