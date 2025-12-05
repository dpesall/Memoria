import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSound } from '../../context/SoundContext';
import styles from './Play.styles';

const Play = ({ setCurrentPage }) => {
  const { playClickSound } = useSound();
  return (
    <View style={styles.play_container}>
      <View style={styles.play_header}>
        <Text style={styles.play_title}>Play</Text>
      </View>

      <View style={styles.play_content}>
        <TouchableOpacity
          style={styles.play_modeButton}
          onPress={() => { playClickSound(); setCurrentPage('daily'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.play_modeTitle}>Daily Challenge</Text>
          <Text style={styles.play_modeDescription}>
            Answer 10 questions as fast as you can and see how you stack up against your friends and the world.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.play_modeButton}
          onPress={() => { playClickSound(); setCurrentPage('freeplay'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.play_modeTitle}>Freeplay</Text>
          <Text style={styles.play_modeDescription}>
            Practice with customizable topics and modes
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.play_footer}>
        <TouchableOpacity
          style={styles.play_backButton}
          onPress={() => { playClickSound(); setCurrentPage('back'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.play_backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Play;
