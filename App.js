import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import MainMenu from './src/components/MainMenu/MainMenu';
import TitleBar from './src/components/TitleBar/TitleBar';
import styles from './App.styles';
import Stack from './src/utils/Stack';

export default function App() {
  const initialStack = new Stack();
  initialStack.push('home');
  const [pageStack, setPageStack] = useState(initialStack);
  const [volumeSetting, setVolumeSetting] = useState('Mute Sound');

  const changePage = (newPage) => {
    const updatedStack = new Stack();

    if (newPage === 'home') {
      updatedStack.push('home');
      setPageStack(updatedStack);
      return;
    }

    updatedStack.items = [...pageStack.items];

    if (newPage === 'back') {
      updatedStack.pop();
    } else {
      updatedStack.push(newPage);
    }

    setPageStack(updatedStack);
  };

  return (
    <SafeAreaView style={styles.app_container}>
      <View style={styles.app_titleBar}>
        <TitleBar
          setCurrentPage={changePage}
          volumeSetting={volumeSetting}
          setVolumeSetting={setVolumeSetting}
        />
      </View>

      <View style={styles.app_content}>
        <MainMenu
          currentPage={pageStack}
          setCurrentPage={changePage}
          volumeSetting={volumeSetting}
          setVolumeSetting={setVolumeSetting}
        />
      </View>
    </SafeAreaView>
  );
}
