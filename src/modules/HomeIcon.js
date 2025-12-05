import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/theme/colors';
import styles from './HomeIcon.styles';

const HomeIcon = ({ setCurrentPage }) => {
  return (
    <TouchableOpacity
      style={styles.homeIcon_touchable}
      onPress={() => setCurrentPage('home')}
      activeOpacity={0.7}
    >
      <Ionicons name="home" size={28} color={colors.text_primary} />
    </TouchableOpacity>
  );
};

export default HomeIcon;
