import React, { useState, useEffect } from 'react';
import { SafeAreaView, ActivityIndicator } from 'react-native';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { Righteous_400Regular } from '@expo-google-fonts/righteous';
import { Orbitron_400Regular, Orbitron_700Bold } from '@expo-google-fonts/orbitron';
import { Arvo_400Regular, Arvo_700Bold } from '@expo-google-fonts/arvo';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import { SoundProvider } from './src/context/SoundContext';
import { NotificationProvider } from './src/context/NotificationContext';
import MainMenu from './src/components/MainMenu/MainMenu';
import Auth from './src/components/Auth/Auth';
import styles from './App.styles';
import Stack from './src/utils/Stack';
import { colors } from './src/styles/theme/colors';

function AppContent() {
  const { user, loading } = useAuth();

  const createHomeStack = () => {
    const stack = new Stack();
    stack.push('home');
    return stack;
  };

  const [pageStack, setPageStack] = useState(createHomeStack);

  // Reset to home page when user logs in
  useEffect(() => {
    if (user) {
      setPageStack(createHomeStack());
    }
  }, [user]);

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

  if (loading) {
    return (
      <SafeAreaView style={[styles.app_container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={colors.accent_primary} />
      </SafeAreaView>
    );
  }

  if (!user) {
    return <Auth />;
  }

  return (
    <SafeAreaView style={styles.app_container}>
      <MainMenu
        currentPage={pageStack}
        setCurrentPage={changePage}
      />
    </SafeAreaView>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Righteous_400Regular,
    Orbitron_400Regular,
    Orbitron_700Bold,
    Arvo_400Regular,
    Arvo_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={[styles.app_container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={colors.accent_primary} />
      </SafeAreaView>
    );
  }

  return (
    <AuthProvider>
      <NotificationProvider>
        <SoundProvider>
          <AppContent />
        </SoundProvider>
      </NotificationProvider>
    </AuthProvider>
  );
}
