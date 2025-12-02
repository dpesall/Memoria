import React from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native';
import styles from './Credits.styles';
import { images } from '../../constants/images';

const Credits = ({ setCurrentPage }) => {
  return (
    <SafeAreaView style={styles.credits_container}>
      <View style={styles.credits_header}>
        <Text style={styles.credits_title}>Credits</Text>
      </View>
      <View style={styles.credits_logoContainer}>
        <Image source={images.memoriaLogoLight} style={styles.credits_logo} />
      </View>
      <View>
        <TouchableOpacity
          style={styles.credits_button}
          onPress={() => setCurrentPage('back')}
          activeOpacity={0.8}
        >
          <Text style={styles.credits_buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Credits;
