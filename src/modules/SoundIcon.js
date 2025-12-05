import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { colors } from '../styles/theme/colors';
import styles from './SoundIcon.styles';

const SoundIcon = ({ volumeSetting, setVolumeSetting }) => {
  const isSoundOn = volumeSetting === 'Mute Sound';

  const toggleSound = async () => {
    if (isSoundOn) {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require('../../assets/sounds/volume-toggle.mp3')
        );
        await sound.playAsync();
        sound.setOnPlaybackStatusUpdate((status) => {
          if (status.didJustFinish) {
            sound.unloadAsync();
          }
        });
      } catch (error) {
        console.log('Error playing toggle sound:', error);
      }
    }

    setVolumeSetting(isSoundOn ? 'Unmute Sound' : 'Mute Sound');
  };

  return (
    <TouchableOpacity
      style={styles.soundIcon_touchable}
      onPress={toggleSound}
      activeOpacity={0.7}
    >
      <Ionicons
        name={isSoundOn ? 'volume-high' : 'volume-mute'}
        size={28}
        color={colors.text_primary}
      />
    </TouchableOpacity>
  );
};

export default SoundIcon;
