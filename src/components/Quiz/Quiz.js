import React, { useEffect, useState, useRef } from "react";
import { Audio } from 'expo-av';
import { Text, SafeAreaView, View, TouchableOpacity, Animated, Dimensions } from "react-native";
import getRandomQuestion from '../../utils/QuestionGenerator';
import styles from "./Quiz.styles";
import GameOver from "../GameOver/GameOver";

const { width } = Dimensions.get('window');

const Quiz = ({ currentPage, setCurrentPage, volumeSetting, setVolumeSetting, setPageView, topic, mode }) => {
    const [showInstructions, setShowInstructions] = useState(true);
    const [showQuestionResults, setShowQuestionResults] = useState(false);

    const [score, setScore] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [viewGameOverScreen, setViewGameOverScreen] = useState(false);
    const [question, setQuestion] = useState({});
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [timeUp, setTimeUp] = useState(false);
    const [progressValue, setProgressValue] = useState(width);
    const [pointsEarned, setPointsEarned] = useState(0);
    const progressAnim = useRef(new Animated.Value(width)).current;
    const animationRef = useRef(null);

    const SOUND_CORRECT = '../../../assets/sounds/correct-chime.wav';
    const SOUND_INCORRECT = '../../../assets/sounds/incorrect-chime.wav';
    const SOUND_GAMEOVER = '../../../assets/sounds/game-over.wav';

    useEffect(() => {
        if (!showInstructions && !showQuestionResults) {
            startProgressBar();
        }
    }, [question]);

    const playSound = async (soundType) => {
        try {
            if(volumeSetting === 'Unmute Sound') {
                return;
            }
            let sound;
            switch(soundType) {
                case 'correct':
                    sound = await Audio.Sound.createAsync(
                        require(SOUND_CORRECT)
                    );
                    break;
                case 'incorrect':
                    sound = await Audio.Sound.createAsync(
                        require(SOUND_INCORRECT)
                    );
                    break;
                case 'gameOver':
                    sound = await Audio.Sound.createAsync(
                        require(SOUND_GAMEOVER)
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
    }

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
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>{question.question}</Text>
                {question.answers[1].map((answer, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={[
                            styles.answerButton, 
                            selectedAnswer === answer && (isCorrect ? styles.correctAnswerButton : styles.wrongAnswerButton),
                            correctAnswer === answer && styles.correctAnswerButton,
                            timeUp && selectedAnswer !== answer && correctAnswer !== answer && styles.wrongAnswerButton
                        ]} 
                        onPress={() => handleAnswer(answer)}
                        disabled={selectedAnswer !== null}
                    >
                        <Text style={styles.answerText}>{answer}</Text>
                    </TouchableOpacity>
                ))}
                {selectedAnswer !== null && (
                    <Text style={styles.pointsText}>+{pointsEarned} points</Text>
                )}
            </View>
        );
    };

    const checkIsGameOver = async () => {
        switch(mode) {
            case 'Standard':
                await playSound('incorrect');
                break;
            case 'Survival':
                setGameOver(true);
                playSound('gameOver');
                break;
        }
    }

    const handleAnswer = async (answer, fromTimeout = false) => {
        if (animationRef.current) {
            animationRef.current.stop();
        }

        progressAnim.stopAnimation(value => {
            value = fromTimeout ? 0 : value;
            const points = fromTimeout ? 0 : Math.ceil((500 * (value / width)) + 500);
            setProgressValue(value);
            setPointsEarned(points);

            if (fromTimeout) {
                setCorrectAnswer(question.answers[0]);
                checkIsGameOver();
            } else {
                setSelectedAnswer(answer);
                const correct = answer === question.answers[0];
                setIsCorrect(correct);
                if (correct) {
                    const newScore = score + points;
                    setScore(newScore);
                    setCorrectAnswers(correctAnswers + 1);
                    playSound('correct');
                } else {
                    checkIsGameOver(true);
                    setCorrectAnswer(question.answers[0]);
                }
            }
            setShowQuestionResults(true);
        });
    };

    const buildInstructions = () => {
        switch (mode) {
            case 'Standard':
                return (
                    <View style={styles.instructionsContainer}>
                        <Text style={styles.instructionsTitle}>Standard</Text>
                        <Text style={styles.instructionsText}>
                            Answer questions as fast as you can to score the most points
                        </Text>
                    </View>
                );
            case 'Survival':
                return (
                    <View style={styles.instructionsContainer}>
                        <Text style={styles.instructionsTitle}>Survival</Text>
                        <Text style={styles.instructionsText}>
                            Answer questions as fast as you can to score the most points. If you fail to answer quickly enough or get a question wrong -- you lose!
                        </Text>
                    </View>
                );
            default:
                return (
                    <Text style={styles.instructionsText}>
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

    return (
        <SafeAreaView style={styles.container}>
            {
                viewGameOverScreen && (
                    <>
                        <GameOver
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            volumeSetting={volumeSetting}
                            setVolumeSetting={setVolumeSetting}
                            setPageView={setPageView}
                            topic={topic}
                            mode={mode}
                            score={score}
                            correctAnswers={correctAnswers}
                        />
                    </>
                )
            }
            {
                !viewGameOverScreen && (
                    <>
                        <View style={styles.header}>
                        <Text style={styles.scoreText}>Score: {score}</Text>
                    </View>
                    <Animated.View style={[!timeUp ? styles.progressBar : styles.progressBarNoBorder, { width: progressAnim }]} />
                    <View style={styles.container}>
                        {showInstructions && buildInstructions()}
                        {!showInstructions && buildQuestion()}
                    </View>
                    <View style={styles.backButtonContainer}>
                        {showInstructions && (
                            <>
                                <TouchableOpacity style={styles.backButton} onPress={pressedStart}>
                                    <Text style={styles.backButtonText}>Start</Text>
                                </TouchableOpacity>
                            </>
                        )}
                        {(showInstructions) && (
                            <>
                                <TouchableOpacity style={styles.backButton} onPress={() => setPageView('main')}>
                                    <Text style={styles.backButtonText}>Back</Text>
                                </TouchableOpacity>
                            </>
                        )}
                        {
                            (showQuestionResults && !gameOver) && (
                            <>
                                <TouchableOpacity style={styles.backButton} onPress={() => pressedStart()}>
                                    <Text style={styles.backButtonText}>Next</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.backButton} onPress={() => setPageView('main')}>
                                    <Text style={styles.backButtonText}>Quit</Text>
                                </TouchableOpacity>
                            </>
                            )
                        }
                        {
                            (showQuestionResults && gameOver) && (
                                <>
                                    <TouchableOpacity style={styles.backButton} onPress={() => setViewGameOverScreen(true)}>
                                        <Text style={styles.backButtonText}>View Stats</Text>
                                    </TouchableOpacity>
                                </>
                            )
                        }
                    </View>
                    </>
                )
            }
        </SafeAreaView>
    );
}

export default Quiz;
