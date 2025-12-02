import React, { useEffect, useState, useRef } from 'react';
import { Audio } from 'expo-av';
import { Text, SafeAreaView, View, TouchableOpacity, Animated, Dimensions } from 'react-native';
import getRandomQuestion from '../../utils/QuestionGenerator';
import styles from './Quiz.styles';
import GameOver from '../GameOver/GameOver';

const { width } = Dimensions.get('window');
const STANDARD_TOTAL_QUESTIONS = 10;

const Quiz = ({ setCurrentPage, volumeSetting, setPageView, topic, mode }) => {
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
  const [question, setQuestion] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [timeUp, setTimeUp] = useState(false);
  const [pointsEarned, setPointsEarned] = useState(0);
  const progressAnim = useRef(new Animated.Value(width)).current;
  const animationRef = useRef(null);

  useEffect(() => {
    if (!showInstructions && !showQuestionResults) {
      startProgressBar();
    }
  }, [question]);

  const playSound = async (soundType) => {
    try {
      if (volumeSetting === 'Unmute Sound') {
        return;
      }
      let sound;
      switch (soundType) {
        case 'correct':
          sound = await Audio.Sound.createAsync(
            require('../../../assets/sounds/correct-chime.wav')
          );
          break;
        case 'incorrect':
          sound = await Audio.Sound.createAsync(
            require('../../../assets/sounds/incorrect-chime.wav')
          );
          break;
        case 'gameOver':
          sound = await Audio.Sound.createAsync(
            require('../../../assets/sounds/game-over.wav')
          );
          break;
        default:
          console.warn('Invalid sound type');
          return;
      }
      await sound.sound.playAsync();
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  const startProgressBar = () => {
    progressAnim.setValue(width);
    animationRef.current = Animated.timing(progressAnim, {
      toValue: 0,
      duration: 10000,
      useNativeDriver: false,
    });

    animationRef.current.start(({ finished }) => {
      if (finished && !selectedAnswer) {}
    });

    const listenerId = progressAnim.addListener(({ value }) => {
      const progress = value / width;
      if (progress <= 0.01) {
        progressAnim.removeListener(listenerId);
        setTimeUp(true);
        handleAnswer(null, true);
        progressAnim.setValue(0);
      }
    });
  };

  const buildQuestion = () => {
    return (
      <View style={styles.quiz_questionContainer}>
        <Text style={styles.quiz_questionText}>{question.question}</Text>
        {question.answers[1].map((answer, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.quiz_answerButton,
              selectedAnswer === answer &&
                (isCorrect
                  ? styles.quiz_answerButtonCorrect
                  : styles.quiz_answerButtonWrong),
              correctAnswer === answer && styles.quiz_answerButtonCorrect,
              timeUp &&
                selectedAnswer !== answer &&
                correctAnswer !== answer &&
                styles.quiz_answerButtonWrong,
            ]}
            onPress={() => handleAnswer(answer)}
            disabled={selectedAnswer !== null}
            activeOpacity={0.8}
          >
            <Text style={styles.quiz_answerText}>{answer}</Text>
          </TouchableOpacity>
        ))}
        {selectedAnswer !== null && (
          <Text style={styles.quiz_pointsText}>+{pointsEarned} points</Text>
        )}
      </View>
    );
  };

  const handleAnswer = async (answer, fromTimeout = false) => {
    if (animationRef.current) {
      animationRef.current.stop();
    }

    const newQuestionNumber = questionNumber + 1;
    setQuestionNumber(newQuestionNumber);

    progressAnim.stopAnimation((value) => {
      value = fromTimeout ? 0 : value;
      const points = fromTimeout ? 0 : Math.ceil(500 * (value / width) + 500);
      setPointsEarned(points);

      if (fromTimeout) {
        setCorrectAnswer(question.answers[0]);
        setWrongAnswers(prev => prev + 1);
        setCurrentStreak(0);

        if (mode === 'Survival') {
          setGameOver(true);
          playSound('gameOver');
        } else {
          playSound('incorrect');
          if (newQuestionNumber >= STANDARD_TOTAL_QUESTIONS) {
            setGameOver(true);
          }
        }
      } else {
        setSelectedAnswer(answer);
        const correct = answer === question.answers[0];
        setIsCorrect(correct);

        if (correct) {
          const newScore = score + points;
          setScore(newScore);
          setCorrectAnswers(prev => prev + 1);
          const newStreak = currentStreak + 1;
          setCurrentStreak(newStreak);
          if (newStreak > longestStreak) {
            setLongestStreak(newStreak);
          }
          playSound('correct');

          if (mode === 'Standard' && newQuestionNumber >= STANDARD_TOTAL_QUESTIONS) {
            setGameOver(true);
          }
        } else {
          setWrongAnswers(prev => prev + 1);
          setCurrentStreak(0);
          setCorrectAnswer(question.answers[0]);

          if (mode === 'Survival') {
            setGameOver(true);
            playSound('gameOver');
          } else {
            playSound('incorrect');
            if (newQuestionNumber >= STANDARD_TOTAL_QUESTIONS) {
              setGameOver(true);
            }
          }
        }
      }
      setShowQuestionResults(true);
    });
  };

  const buildInstructions = () => {
    switch (mode) {
      case 'Standard':
        return (
          <View style={styles.quiz_instructionsContainer}>
            <Text style={styles.quiz_instructionsTitle}>Standard</Text>
            <Text style={styles.quiz_instructionsText}>
              Answer 10 questions as fast as you can to score the most points.
              Wrong answers don't end the game but affect your accuracy!
            </Text>
          </View>
        );
      case 'Survival':
        return (
          <View style={styles.quiz_instructionsContainer}>
            <Text style={styles.quiz_instructionsTitle}>Survival</Text>
            <Text style={styles.quiz_instructionsText}>
              Answer questions as fast as you can. One wrong answer or timeout
              ends your run!
            </Text>
          </View>
        );
      default:
        return (
          <Text style={styles.quiz_instructionsText}>
            Invalid mode for instructions.
          </Text>
        );
    }
  };

  const retrieveNewQuestion = () => {
    const newQuestion = getRandomQuestion(topic);
    setQuestion(newQuestion);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setCorrectAnswer(null);
    setTimeUp(false);
    setPointsEarned(0);
  };

  const pressedStart = () => {
    setShowInstructions(false);
    setShowQuestionResults(false);
    retrieveNewQuestion();
  };

  const getHeaderText = () => {
    if (showInstructions) {
      return `Score: ${score}`;
    }
    if (mode === 'Standard') {
      return `Question ${questionNumber + 1}/${STANDARD_TOTAL_QUESTIONS}  |  Score: ${score}`;
    }
    return `Question ${questionNumber + 1}  |  Score: ${score}`;
  };

  const isLastQuestion = mode === 'Standard' && questionNumber >= STANDARD_TOTAL_QUESTIONS;

  return (
    <SafeAreaView style={styles.quiz_container}>
      {viewGameOverScreen && (
        <GameOver
          setPageView={setPageView}
          mode={mode}
          score={score}
          correctAnswers={correctAnswers}
          wrongAnswers={wrongAnswers}
          questionNumber={questionNumber}
          totalQuestions={mode === 'Standard' ? STANDARD_TOTAL_QUESTIONS : null}
          longestStreak={longestStreak}
        />
      )}
      {!viewGameOverScreen && (
        <>
          <View style={styles.quiz_header}>
            <Text style={styles.quiz_scoreText}>{getHeaderText()}</Text>
          </View>
          <Animated.View
            style={[
              !timeUp ? styles.quiz_progressBar : styles.quiz_progressBarEmpty,
              { width: progressAnim },
            ]}
          />
          <View style={styles.quiz_container}>
            {showInstructions && buildInstructions()}
            {!showInstructions && buildQuestion()}
          </View>
          <View style={styles.quiz_footer}>
            {showInstructions && (
              <>
                <TouchableOpacity
                  style={styles.quiz_button}
                  onPress={pressedStart}
                  activeOpacity={0.8}
                >
                  <Text style={styles.quiz_buttonText}>Start</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.quiz_button}
                  onPress={() => setPageView('main')}
                  activeOpacity={0.8}
                >
                  <Text style={styles.quiz_buttonText}>Back</Text>
                </TouchableOpacity>
              </>
            )}
            {showQuestionResults && !gameOver && (
              <>
                <TouchableOpacity
                  style={styles.quiz_button}
                  onPress={() => pressedStart()}
                  activeOpacity={0.8}
                >
                  <Text style={styles.quiz_buttonText}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.quiz_button}
                  onPress={() => setPageView('main')}
                  activeOpacity={0.8}
                >
                  <Text style={styles.quiz_buttonText}>Quit</Text>
                </TouchableOpacity>
              </>
            )}
            {showQuestionResults && gameOver && (
              <TouchableOpacity
                style={styles.quiz_button}
                onPress={() => setViewGameOverScreen(true)}
                activeOpacity={0.8}
              >
                <Text style={styles.quiz_buttonText}>View Results</Text>
              </TouchableOpacity>
            )}
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Quiz;
