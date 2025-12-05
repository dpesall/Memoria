import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import { Audio } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SoundContext = createContext({});

const SOUND_MUTED_KEY = '@memoria_sound_muted';

export const SoundProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load muted state from storage on mount
  useEffect(() => {
    loadMutedState();
  }, []);

  const loadMutedState = async () => {
    try {
      const value = await AsyncStorage.getItem(SOUND_MUTED_KEY);
      if (value !== null) {
        setIsMuted(value === 'true');
      }
    } catch (error) {
      console.log('Error loading sound setting:', error);
    }
    setIsLoaded(true);
  };

  const toggleSound = useCallback(async () => {
    const newValue = !isMuted;
    setIsMuted(newValue);
    try {
      await AsyncStorage.setItem(SOUND_MUTED_KEY, String(newValue));
    } catch (error) {
      console.log('Error saving sound setting:', error);
    }
  }, [isMuted]);

  const playClickSound = useCallback(async () => {
    if (isMuted) return;

    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/sounds/click.mp3')
      );
      await sound.playAsync();
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          sound.unloadAsync();
        }
      });
    } catch (error) {
      console.log('Error playing click sound:', error);
    }
  }, [isMuted]);

  const playGameSound = useCallback(async (soundType) => {
    if (isMuted) return;

    const soundMap = {
      correct: require('../../assets/sounds/correct-chime.wav'),
      incorrect: require('../../assets/sounds/incorrect-chime.wav'),
      gameOver: require('../../assets/sounds/game-over.wav'),
    };

    if (!soundMap[soundType]) {
      console.log('Unknown sound type:', soundType);
      return;
    }

    try {
      const { sound } = await Audio.Sound.createAsync(soundMap[soundType]);
      await sound.playAsync();
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          sound.unloadAsync();
        }
      });
    } catch (error) {
      console.log('Error playing game sound:', error);
    }
  }, [isMuted]);

  return (
    <SoundContext.Provider value={{
      isMuted,
      isLoaded,
      toggleSound,
      playClickSound,
      playGameSound,
    }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
