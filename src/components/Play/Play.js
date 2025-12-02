import React from 'react';
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import styles from './Play.styles';

const Play = ({ setCurrentPage }) => {
  return (
    <SafeAreaView style={styles.play_container}>
      <View style={styles.play_header}>
        <Text style={styles.play_title}>Play</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.play_button}
          onPress={() => setCurrentPage('freeplay')}
          activeOpacity={0.8}
        >
          <Text style={styles.play_buttonText}>Freeplay</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.play_button}
          onPress={() => setCurrentPage('back')}
          activeOpacity={0.8}
        >
          <Text style={styles.play_buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Play;
