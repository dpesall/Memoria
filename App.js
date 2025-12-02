import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, View, TouchableOpacity, Image } from "react-native";
import MainMenu from './src/components/MainMenu/MainMenu';
import TitleBar from './src/components/TitleBar/TitleBar';
import styles from './App.styles';
import Stack from './src/utils/Stack';

// npx expo start

export default function App() {
    const initialStack = new Stack();
    initialStack.push('home');
    const [pageStack, setPageStack] = useState(initialStack);
    const [currentPage, setCurrentPage] = useState('home');
    const [volumeSetting, setVolumeSetting] = useState('Mute Sound');

    const changePage = (newPage) => {
      const updatedStack = new Stack();

      if(newPage === 'home') {
        updatedStack.push('home');
        setPageStack(updatedStack);
        setCurrentPage(updatedStack.peek());
        return;
      }

      updatedStack.items = [...pageStack.items];
      
      if(newPage === 'back') {
          updatedStack.pop();
      } else {
          updatedStack.push(newPage);
      }
      
      setPageStack(updatedStack);
      setCurrentPage(updatedStack.peek());
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titlebar}>
                <TitleBar
                    currentPage={pageStack}
                    setCurrentPage={changePage}
                    volumeSetting={volumeSetting}
                    setVolumeSetting={setVolumeSetting}
                />
            </View>
            
            <View style={styles.mainmenu}>
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
