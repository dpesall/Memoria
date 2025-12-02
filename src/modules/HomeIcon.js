import React from 'react';
import { SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { images } from '../constants/images';
import styles from './HomeIcon.styles';

const HomeIcon = ({ setCurrentPage }) => {
  const handleOnHomePress = () => {
    setCurrentPage('home');
  };

  return (
    <SafeAreaView style={styles.homeIcon_container}>
      <TouchableOpacity
        style={styles.homeIcon_container}
        onPress={handleOnHomePress}
        activeOpacity={0.8}
      >
        <Image source={images.homeDark} style={styles.homeIcon_image} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeIcon;
