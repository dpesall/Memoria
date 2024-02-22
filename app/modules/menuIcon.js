import React from 'react';
import { useRouter } from 'expo-router';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { images } from "../../constants/images";

const MenuIcon = () => {
    const router = useRouter();

    const handleOnHomePress = () => {
        router.push('/')
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handleOnHomePress}>
            <Image
                source={images.homeDark}
                style={styles.logo}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 6
  },
});

export default MenuIcon;
