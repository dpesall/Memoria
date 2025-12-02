import React, { useState } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import Quiz from '../Quiz/Quiz';
import styles from './Freeplay.styles';

const Freeplay = ({ setCurrentPage, volumeSetting, setVolumeSetting }) => {
  const [pageView, setPageView] = useState('main');
  const [topic, setTopic] = useState('Any');
  const [mode, setMode] = useState('Standard');

  const topics = [
    'Any',
    'People',
    'New Testament Stories',
    'Old Testament Stories',
    'Geography',
  ];

  const modes = ['Standard', 'Survival'];

  const renderContent = () => {
    switch (pageView) {
      case 'quiz':
        return (
          <Quiz
            setCurrentPage={setCurrentPage}
            volumeSetting={volumeSetting}
            setVolumeSetting={setVolumeSetting}
            setPageView={setPageView}
            topic={topic}
            mode={mode}
          />
        );
      case 'main':
        return (
          <>
            <View style={styles.freeplay_header}>
              <Text style={styles.freeplay_title}>Freeplay</Text>
            </View>

            <View style={styles.freeplay_section}>
              <View style={styles.freeplay_sectionHeader}>
                <Text style={styles.freeplay_sectionLabel}>Topic</Text>
              </View>
              <TouchableOpacity
                style={styles.freeplay_buttonSelected}
                onPress={() => setPageView('topic')}
                activeOpacity={0.8}
              >
                <Text style={styles.freeplay_buttonSelectedText}>{topic}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.freeplay_section}>
              <View style={styles.freeplay_sectionHeader}>
                <Text style={styles.freeplay_sectionLabel}>Mode</Text>
              </View>
              <TouchableOpacity
                style={styles.freeplay_buttonSelected}
                onPress={() => setPageView('mode')}
                activeOpacity={0.8}
              >
                <Text style={styles.freeplay_buttonSelectedText}>{mode}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.freeplay_footer}>
              <TouchableOpacity
                style={styles.freeplay_startButton}
                onPress={() => setPageView('quiz')}
                activeOpacity={0.8}
              >
                <Text style={styles.freeplay_startButtonText}>Start</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.freeplay_button}
                onPress={() => setCurrentPage('back')}
                activeOpacity={0.8}
              >
                <Text style={styles.freeplay_buttonText}>Back</Text>
              </TouchableOpacity>
            </View>
          </>
        );
      case 'topic':
        return (
          <>
            <View style={styles.freeplay_header}>
              <Text style={styles.freeplay_title}>Select Topic</Text>
            </View>
            {topics.map((topicItem, index) => (
              <TouchableOpacity
                key={index}
                style={styles.freeplay_buttonTopic}
                onPress={() => {
                  setTopic(topicItem);
                  setPageView('main');
                }}
                activeOpacity={0.8}
              >
                <Text style={styles.freeplay_buttonTopicText}>{topicItem}</Text>
              </TouchableOpacity>
            ))}
            <View style={styles.freeplay_footer}>
              <TouchableOpacity
                style={styles.freeplay_button}
                onPress={() => setPageView('main')}
                activeOpacity={0.8}
              >
                <Text style={styles.freeplay_buttonText}>Back</Text>
              </TouchableOpacity>
            </View>
          </>
        );
      case 'mode':
        return (
          <>
            <View style={styles.freeplay_header}>
              <Text style={styles.freeplay_title}>Select Mode</Text>
            </View>
            {modes.map((modeItem, index) => (
              <TouchableOpacity
                key={index}
                style={styles.freeplay_buttonTopic}
                onPress={() => {
                  setMode(modeItem);
                  setPageView('main');
                }}
                activeOpacity={0.8}
              >
                <Text style={styles.freeplay_buttonTopicText}>{modeItem}</Text>
              </TouchableOpacity>
            ))}
            <View style={styles.freeplay_footer}>
              <TouchableOpacity
                style={styles.freeplay_button}
                onPress={() => setPageView('main')}
                activeOpacity={0.8}
              >
                <Text style={styles.freeplay_buttonText}>Back</Text>
              </TouchableOpacity>
            </View>
          </>
        );
      default:
        return <Text>Page not found</Text>;
    }
  };

  return (
    <SafeAreaView style={styles.freeplay_container}>
      {renderContent()}
    </SafeAreaView>
  );
};

export default Freeplay;
