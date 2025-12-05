import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Quiz from '../Quiz/Quiz';
import { useSound } from '../../context/SoundContext';
import styles from './Freeplay.styles';

const TOPICS = ['All', 'People', 'New Testament Stories', 'Old Testament Stories', 'Geography'];
const DIFFICULTIES = [
  { id: 'All', description: 'Questions from all difficulty levels.' },
  { id: 'Easy', description: 'Great for beginners or casual play.' },
  { id: 'Medium', description: 'A balanced challenge for most players.' },
  { id: 'Hard', description: 'Test your knowledge with tough questions.' },
];
const MODES = ['Standard', 'Survival'];

const Freeplay = ({ setCurrentPage }) => {
  const { playClickSound } = useSound();
  const [pageView, setPageView] = useState('main');
  const [topic, setTopic] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [mode, setMode] = useState('Standard');

  const renderMainView = () => (
    <View style={styles.freeplay_container}>
      <View style={styles.freeplay_header}>
        <Text style={styles.freeplay_title}>Freeplay</Text>
      </View>

      <View style={styles.freeplay_content}>
        <TouchableOpacity
          style={styles.freeplay_optionCard}
          onPress={() => { playClickSound(); setPageView('topic'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.freeplay_optionLabel}>Topic</Text>
          <Text style={styles.freeplay_optionValue}>{topic}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.freeplay_optionCard}
          onPress={() => { playClickSound(); setPageView('difficulty'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.freeplay_optionLabel}>Difficulty</Text>
          <Text style={styles.freeplay_optionValue}>{difficulty}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.freeplay_optionCard}
          onPress={() => { playClickSound(); setPageView('mode'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.freeplay_optionLabel}>Mode</Text>
          <Text style={styles.freeplay_optionValue}>{mode}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.freeplay_startButton}
          onPress={() => { playClickSound(); setPageView('quiz'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.freeplay_startButtonText}>Start</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.freeplay_footer}>
        <TouchableOpacity
          style={styles.freeplay_backButton}
          onPress={() => { playClickSound(); setCurrentPage('back'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.freeplay_backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderTopicSelection = () => (
    <View style={styles.freeplay_container}>
      <View style={styles.freeplay_header}>
        <Text style={styles.freeplay_title}>Select Topic</Text>
      </View>

      <ScrollView contentContainerStyle={styles.freeplay_selectionContent}>
        {TOPICS.map((t) => (
          <TouchableOpacity
            key={t}
            style={[
              styles.freeplay_selectionButton,
              topic === t && styles.freeplay_selectionButtonActive,
            ]}
            onPress={() => {
              playClickSound();
              setTopic(t);
              setPageView('main');
            }}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.freeplay_selectionButtonText,
                topic === t && styles.freeplay_selectionButtonTextActive,
              ]}
            >
              {t}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.freeplay_footer}>
        <TouchableOpacity
          style={styles.freeplay_backButton}
          onPress={() => { playClickSound(); setPageView('main'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.freeplay_backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderDifficultySelection = () => (
    <View style={styles.freeplay_container}>
      <View style={styles.freeplay_header}>
        <Text style={styles.freeplay_title}>Select Difficulty</Text>
      </View>

      <ScrollView contentContainerStyle={styles.freeplay_selectionContent}>
        {DIFFICULTIES.map((d) => (
          <TouchableOpacity
            key={d.id}
            style={[
              styles.freeplay_modeCard,
              difficulty === d.id && styles.freeplay_modeCardActive,
            ]}
            onPress={() => {
              playClickSound();
              setDifficulty(d.id);
              setPageView('main');
            }}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.freeplay_modeTitle,
                difficulty === d.id && styles.freeplay_modeTitleActive,
              ]}
            >
              {d.id}
            </Text>
            <Text style={styles.freeplay_modeDescription}>{d.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.freeplay_footer}>
        <TouchableOpacity
          style={styles.freeplay_backButton}
          onPress={() => { playClickSound(); setPageView('main'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.freeplay_backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderModeSelection = () => (
    <View style={styles.freeplay_container}>
      <View style={styles.freeplay_header}>
        <Text style={styles.freeplay_title}>Select Mode</Text>
      </View>

      <ScrollView contentContainerStyle={styles.freeplay_selectionContent}>
        {MODES.map((m) => (
          <TouchableOpacity
            key={m}
            style={[
              styles.freeplay_modeCard,
              mode === m && styles.freeplay_modeCardActive,
            ]}
            onPress={() => {
              playClickSound();
              setMode(m);
              setPageView('main');
            }}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.freeplay_modeTitle,
                mode === m && styles.freeplay_modeTitleActive,
              ]}
            >
              {m}
            </Text>
            <Text style={styles.freeplay_modeDescription}>
              {m === 'Standard'
                ? 'Answer 10 questions and try to score as many points as possible.'
                : 'Endless questions, but one wrong answer or timeout ends the game.'}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.freeplay_footer}>
        <TouchableOpacity
          style={styles.freeplay_backButton}
          onPress={() => { playClickSound(); setPageView('main'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.freeplay_backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderView = () => {
    switch (pageView) {
      case 'topic':
        return renderTopicSelection();
      case 'difficulty':
        return renderDifficultySelection();
      case 'mode':
        return renderModeSelection();
      case 'quiz':
        return (
          <Quiz
            setCurrentPage={setCurrentPage}
            setPageView={setPageView}
            topic={topic}
            difficulty={difficulty}
            mode={mode}
          />
        );
      case 'main':
      default:
        return renderMainView();
    }
  };

  return renderView();
};

export default Freeplay;
