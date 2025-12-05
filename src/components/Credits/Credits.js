import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { images } from '../../constants/images';
import { useSound } from '../../context/SoundContext';
import styles from './Credits.styles';

const TECH_STACK = [
  { name: 'React Native', description: 'Cross-platform mobile framework' },
  { name: 'Expo', description: 'Development and build platform' },
  { name: 'Supabase', description: 'Backend and authentication' },
];

const Credits = ({ setCurrentPage }) => {
  const { playClickSound } = useSound();
  const currentYear = new Date().getFullYear();

  return (
    <View style={styles.credits_container}>
      <View style={styles.credits_header}>
        <Text style={styles.credits_title}>Credits</Text>
      </View>

      <ScrollView contentContainerStyle={styles.credits_scrollContent}>
        <View style={styles.credits_heroSection}>
          <View style={styles.credits_logoContainer}>
            <Image source={images.memoriaLogo} style={styles.credits_logo} />
          </View>
          <Text style={styles.credits_appName}>Memoria</Text>
          <Text style={styles.credits_tagline}>Bible Trivia Challenge</Text>
        </View>

        <View style={styles.credits_section}>
          <Text style={styles.credits_sectionLabel}>Developed by</Text>
          <View style={styles.credits_developerCard}>
            <Text style={styles.credits_developerName}>Valendris LLC</Text>
          </View>
        </View>

        <View style={styles.credits_section}>
          <Text style={styles.credits_sectionLabel}>Built with</Text>
          <View style={styles.credits_techStack}>
            {TECH_STACK.map((tech, index) => (
              <View key={tech.name} style={styles.credits_techItem}>
                <Text style={styles.credits_techName}>{tech.name}</Text>
                <Text style={styles.credits_techDescription}>{tech.description}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.credits_versionSection}>
          <Text style={styles.credits_versionText}>Version 1.0.0</Text>
          <Text style={styles.credits_copyrightText}>
            © {currentYear} Valendris LLC
          </Text>
        </View>
      </ScrollView>

      <View style={styles.credits_footer}>
        <TouchableOpacity
          style={styles.credits_backButton}
          onPress={() => { playClickSound(); setCurrentPage('back'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.credits_backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Credits;
