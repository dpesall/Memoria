import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import getRandomQuestion from '../../utils/QuestionGenerator';
import { useSound } from '../../context/SoundContext';
import GameOver from '../GameOver/GameOver';
import styles from './Quiz.styles';

const TIMER_DURATION = 15000;
const GRACE_PERIOD_THRESHOLD = (14 / 15) * 100; // ~93.33% - full points for first second
const STANDARD_TOTAL_QUESTIONS = 10;

const Quiz = ({ setCurrentPage, setPageView, topic, difficulty, mode }) => {
  const { playClickSound, playGameSound } = useSound();
  const [showInstructions, setShowInstructions] = useState(true);
  const [showQuestionResults, setShowQuestionResults] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [viewGameOverScreen, setViewGameOverScreen] = useState(false);
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [timeUp, setTimeUp] = useState(false);
  const [pointsEarned, setPointsEarned] = useState(0);
  const [bestAnswer, setBestAnswer] = useState(0);

  const progressAnim = useRef(new Animated.Value(100)).current;
  const timerListenerId = useRef(null);
  const currentProgressRef = useRef(100);

  const getDifficultyRange = () => {
    switch (difficulty) {
      case 'Easy':
        return { min: 1, max: 3 };
      case 'Medium':
        return { min: 4, max: 7 };
      case 'Hard':
        return { min: 8, max: 10 };
      default:
        return { min: 1, max: 10 };
    }
  };

  const loadQuestion = () => {
    const { min, max } = getDifficultyRange();
    const newQuestion = getRandomQuestion(topic, min, max);
    setQuestion(newQuestion);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setCorrectAnswer(null);
    setTimeUp(false);
    setPointsEarned(0);
    setShowQuestionResults(false);
  };

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
    setCorrectAnswer(question.answers[0]);
    setWrongAnswers((prev) => prev + 1);
    setCurrentStreak(0);
    playGameSound('incorrect');

    if (mode === 'Survival') {
      setGameOver(true);
    } else if (questionNumber + 1 >= STANDARD_TOTAL_QUESTIONS) {
      setGameOver(true);
    }
  };

  const handleAnswerSelect = (answer) => {
    if (showQuestionResults || selectedAnswer) return;

    stopTimer();
    setSelectedAnswer(answer);
    const correct = answer === question.answers[0];
    setIsCorrect(correct);
    setShowQuestionResults(true);

    if (correct) {
      let points;
      if (currentProgressRef.current >= GRACE_PERIOD_THRESHOLD) {
        points = 1000;
      } else {
        points = Math.round(500 + (500 * currentProgressRef.current / GRACE_PERIOD_THRESHOLD));
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
      setCorrectAnswer(question.answers[0]);
      setCurrentStreak(0);
      playGameSound('incorrect');

      if (mode === 'Survival') {
        setGameOver(true);
      }
    }

    if (mode === 'Standard' && questionNumber + 1 >= STANDARD_TOTAL_QUESTIONS) {
      setGameOver(true);
    }
  };

  const handleNext = () => {
    setQuestionNumber((prev) => prev + 1);
    loadQuestion();
    startTimer();
  };

  const handleStartQuiz = () => {
    setShowInstructions(false);
    loadQuestion();
    startTimer();
  };

  const getAnswerStyle = (answer) => {
    if (!showQuestionResults) {
      return styles.quiz_answerButton;
    }

    const isSelected = answer === selectedAnswer;
    const isCorrectAnswer = answer === question.answers[0];

    if (isCorrectAnswer) {
      return styles.quiz_answerButtonCorrect;
    }

    if (isSelected && !isCorrect) {
      return styles.quiz_answerButtonWrong;
    }

    return styles.quiz_answerButton;
  };

  useEffect(() => {
    return () => {
      stopTimer();
    };
  }, []);

  if (viewGameOverScreen) {
    return (
      <GameOver
        setPageView={setPageView}
        mode={mode}
        score={score}
        correctAnswers={correctAnswers}
        wrongAnswers={wrongAnswers}
        questionNumber={questionNumber + 1}
        longestStreak={longestStreak}
        bestAnswer={bestAnswer}
      />
    );
  }

  if (showInstructions) {
    return (
      <View style={styles.quiz_container}>
        <View style={styles.quiz_header}>
          <Text style={styles.quiz_headerTitle}>{mode} Mode</Text>
        </View>

        <View style={styles.quiz_instructionsContainer}>
          <View style={styles.quiz_instructionsCard}>
            <Text style={styles.quiz_instructionsTitle}>{mode}</Text>
            <Text style={styles.quiz_instructionsText}>
              {mode === 'Standard'
                ? 'Answer 10 questions about the Bible. Wrong answers won\'t end the game, but you\'ll miss out on points!'
                : 'Answer as many questions as you can. One wrong answer or timeout ends the game. How far can you go?'}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.quiz_startButton}
            onPress={() => { playClickSound(); handleStartQuiz(); }}
            activeOpacity={0.8}
          >
            <Text style={styles.quiz_startButtonText}>Start</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.quiz_footer}>
          <TouchableOpacity
            style={styles.quiz_backButton}
            onPress={() => { playClickSound(); setPageView('main'); }}
            activeOpacity={0.8}
          >
            <Text style={styles.quiz_backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.quiz_container}>
      <View style={styles.quiz_gameHeader}>
        <Text style={styles.quiz_questionCount}>
          Question {questionNumber + 1}
          {mode === 'Standard' ? `/${STANDARD_TOTAL_QUESTIONS}` : ''}
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

      {question && (
        <View style={styles.quiz_content}>
          <View style={styles.quiz_questionContainer}>
            <Text style={styles.quiz_questionText}>{question.question}</Text>
          </View>

          <View style={styles.quiz_answersContainer}>
            {question.answers[1].map((answer, index) => (
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
              onPress={() => { playClickSound(); setViewGameOverScreen(true); }}
              activeOpacity={0.8}
            >
              <Text style={styles.quiz_viewResultsButtonText}>View Results</Text>
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity
                style={styles.quiz_nextButton}
                onPress={() => { playClickSound(); handleNext(); }}
                activeOpacity={0.8}
              >
                <Text style={styles.quiz_nextButtonText}>Next</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.quiz_quitButton}
                onPress={() => { playClickSound(); setPageView('main'); }}
                activeOpacity={0.8}
              >
                <Text style={styles.quiz_quitButtonText}>Quit</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      )}
    </View>
  );
};

export default Quiz;
