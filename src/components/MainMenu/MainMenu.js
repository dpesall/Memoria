import React from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native';
import styles from './MainMenu.styles';
import { images } from '../../constants/images';
import Settings from '../Settings/Settings';
import Credits from '../Credits/Credits';
import Play from '../Play/Play';
import Freeplay from '../Freeplay/Freeplay';

const MainMenu = ({ currentPage, setCurrentPage, volumeSetting, setVolumeSetting }) => {
  const menuOptions = () => {
    return (
      <>
        <Text style={styles.mainMenu_title}>Memoria</Text>
        <View style={styles.mainMenu_logoContainer}>
          <Image source={images.memoriaLogoLight} style={styles.mainMenu_logo} />
        </View>
        <TouchableOpacity
          style={styles.mainMenu_button}
          onPress={() => setCurrentPage('play')}
          activeOpacity={0.8}
        >
          <Text style={styles.mainMenu_buttonText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainMenu_button}
          onPress={() => setCurrentPage('settings')}
          activeOpacity={0.8}
        >
          <Text style={styles.mainMenu_buttonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mainMenu_button}
          onPress={() => setCurrentPage('credits')}
          activeOpacity={0.8}
        >
          <Text style={styles.mainMenu_buttonText}>Credits</Text>
        </TouchableOpacity>
      </>
    );
  };

  const renderContent = () => {
    switch (currentPage.peek()) {
      case 'home':
        return <>{menuOptions()}</>;
      case 'play':
        return (
          <Play
            setCurrentPage={setCurrentPage}
            volumeSetting={volumeSetting}
            setVolumeSetting={setVolumeSetting}
          />
        );
      case 'settings':
        return (
          <Settings
            setCurrentPage={setCurrentPage}
            volumeSetting={volumeSetting}
            setVolumeSetting={setVolumeSetting}
          />
        );
      case 'credits':
        return <Credits setCurrentPage={setCurrentPage} />;
      case 'freeplay':
        return (
          <Freeplay
            setCurrentPage={setCurrentPage}
            volumeSetting={volumeSetting}
            setVolumeSetting={setVolumeSetting}
          />
        );
      default:
        return <Text style={styles.mainMenu_errorText}>Uncaught Page</Text>;
    }
  };

  return (
    <SafeAreaView style={styles.mainMenu_container}>
      {renderContent()}
    </SafeAreaView>
  );
};

export default MainMenu;
