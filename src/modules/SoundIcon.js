import React from "react";
import { Text, StyleSheet, SafeAreaView, View, TouchableOpacity, Image, Dimensions } from "react-native";
import { images } from "../constants/images"
import { Audio } from 'expo-av';

const SoundIcon = ( {volumeSetting, setVolumeSetting} ) => {

    const SOUND_VOLUME_TOGGLE = '../../assets/sounds/volume-toggle.mp3';

    const handleOnIconPress = async () => {
        const sound = await Audio.Sound.createAsync(
            require(SOUND_VOLUME_TOGGLE)
        );
        await sound.sound.playAsync();

        if(volumeSetting === 'Mute Sound') {
            setVolumeSetting('Unmute Sound');
        } else {
            setVolumeSetting('Mute Sound');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.container} onPress={handleOnIconPress}>
                <Image
                    source={volumeSetting === 'Mute Sound' ? images.soundIconOn : images.soundIconOff}
                    style={styles.logo}
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'left',
    },
    logo: {
        width: width * 0.12,
        height: width * 0.12,
        resizeMode: 'contain',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: 'white',
    },
  });

export default SoundIcon;