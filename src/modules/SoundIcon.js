import React from 'react';
import { SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { images } from '../constants/images';
import { Audio } from 'expo-av';
import styles from './SoundIcon.styles';

const SoundIcon = ({ volumeSetting, setVolumeSetting }) => {
  const handleOnIconPress = async () => {
    const sound = await Audio.Sound.createAsync(
      require('../../assets/sounds/volume-toggle.mp3')
    );
    await sound.sound.playAsync();

    if (volumeSetting === 'Mute Sound') {
      setVolumeSetting('Unmute Sound');
    } else {
      setVolumeSetting('Mute Sound');
    }
  };

  return (
    <SafeAreaView style={styles.soundIcon_container}>
      <TouchableOpacity
        style={styles.soundIcon_container}
        onPress={handleOnIconPress}
        activeOpacity={0.8}
      >
        <Image
          source={
            volumeSetting === 'Mute Sound'
              ? images.soundIconOn
              : images.soundIconOff
          }
          style={styles.soundIcon_image}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SoundIcon;
