import React from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native';
import styles from './Settings.styles';
import { images } from '../../constants/images';

const Settings = ({ setCurrentPage, volumeSetting, setVolumeSetting }) => {
  const clickedMuteButton = () => {
    if (volumeSetting === 'Mute Sound') {
      setVolumeSetting('Unmute Sound');
    } else {
      setVolumeSetting('Mute Sound');
    }
  };

  return (
    <SafeAreaView style={styles.settings_container}>
      <View style={styles.settings_header}>
        <Text style={styles.settings_title}>Settings</Text>
      </View>
      <View style={styles.settings_logoContainer}>
        <Image source={images.memoriaLogoLight} style={styles.settings_logo} />
      </View>
      <View>
        <TouchableOpacity
          style={styles.settings_button}
          onPress={clickedMuteButton}
          activeOpacity={0.8}
        >
          <Text style={styles.settings_buttonText}>{volumeSetting}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settings_button}
          onPress={() => setCurrentPage('back')}
          activeOpacity={0.8}
        >
          <Text style={styles.settings_buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
