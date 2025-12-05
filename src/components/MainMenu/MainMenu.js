import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useSound } from '../../context/SoundContext';
import Play from '../Play/Play';
import Freeplay from '../Freeplay/Freeplay';
import Daily from '../Daily/Daily';
import Profile from '../Profile/Profile';
import Social from '../Social/Social';
import AddFriend from '../AddFriend/AddFriend';
import FriendsList from '../FriendsList/FriendsList';
import FriendRequests from '../FriendRequests/FriendRequests';
import Settings from '../Settings/Settings';
import Credits from '../Credits/Credits';
import Leaderboard from '../Leaderboard/Leaderboard';
import UserProfile from '../UserProfile/UserProfile';
import { images } from '../../constants/images';
import styles from './MainMenu.styles';

const MainMenu = ({ currentPage, setCurrentPage }) => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const { playClickSound } = useSound();

  const handleViewProfile = (userId) => {
    setSelectedUserId(userId);
    setCurrentPage('userProfile');
  };

  const renderPage = () => {
    switch (currentPage.peek()) {
      case 'play':
        return <Play setCurrentPage={setCurrentPage} />;
      case 'freeplay':
        return <Freeplay setCurrentPage={setCurrentPage} />;
      case 'daily':
        return <Daily setCurrentPage={setCurrentPage} />;
      case 'profile':
        return <Profile setCurrentPage={setCurrentPage} />;
      case 'settings':
        return <Settings setCurrentPage={setCurrentPage} />;
      case 'social':
        return <Social setCurrentPage={setCurrentPage} />;
      case 'addFriend':
        return (
          <AddFriend
            setCurrentPage={setCurrentPage}
            onViewProfile={handleViewProfile}
          />
        );
      case 'friendsList':
        return (
          <FriendsList
            setCurrentPage={setCurrentPage}
            onViewProfile={handleViewProfile}
          />
        );
      case 'friendRequests':
        return (
          <FriendRequests
            setCurrentPage={setCurrentPage}
            onViewProfile={handleViewProfile}
          />
        );
      case 'userProfile':
        return (
          <UserProfile
            userId={selectedUserId}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'credits':
        return <Credits setCurrentPage={setCurrentPage} />;
      case 'leaderboard':
        return <Leaderboard setCurrentPage={setCurrentPage} />;
      case 'home':
      default:
        return renderHome();
    }
  };

  const renderHome = () => (
    <View style={styles.mainMenu_container}>
      <Text style={styles.mainMenu_title}>Memoria</Text>

      <View style={styles.mainMenu_logoContainer}>
        <Image source={images.memoriaLogoLightBrainOnly} style={styles.mainMenu_logo} />
      </View>

      <View style={styles.mainMenu_buttons}>
        <TouchableOpacity
          style={styles.mainMenu_button}
          onPress={() => { playClickSound(); setCurrentPage('play'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.mainMenu_buttonText}>Play</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.mainMenu_buttonSecondary}
          onPress={() => { playClickSound(); setCurrentPage('leaderboard'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.mainMenu_buttonText}>Leaderboard</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.mainMenu_buttonSecondary}
          onPress={() => { playClickSound(); setCurrentPage('profile'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.mainMenu_buttonText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.mainMenu_buttonSecondary}
          onPress={() => { playClickSound(); setCurrentPage('social'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.mainMenu_buttonText}>Social</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.mainMenu_buttonSecondary}
          onPress={() => { playClickSound(); setCurrentPage('settings'); }}
          activeOpacity={0.8}
        >
          <Text style={styles.mainMenu_buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return renderPage();
};

export default MainMenu;
