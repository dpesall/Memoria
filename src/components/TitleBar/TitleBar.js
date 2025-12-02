import React from 'react';
import { View, SafeAreaView } from 'react-native';
import HomeIcon from '../../modules/HomeIcon';
import SoundIcon from '../../modules/SoundIcon';
import styles from './TitleBar.styles';

const TitleBar = ({ setCurrentPage, volumeSetting, setVolumeSetting }) => {
  return (
    <SafeAreaView style={styles.titleBar_container}>
      <View style={styles.titleBar_content}>
        <HomeIcon setCurrentPage={setCurrentPage} />
        <SoundIcon
          volumeSetting={volumeSetting}
          setVolumeSetting={setVolumeSetting}
        />
      </View>
    </SafeAreaView>
  );
};

export default TitleBar;
