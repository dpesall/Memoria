import React, { useEffect, useState } from "react";
import { Text, Button, SafeAreaView, View, TouchableOpacity, Image } from "react-native";
import styles from "./Settings.styles";
import { images } from "../../constants/images";

const Settings = ( {currentPage, setCurrentPage, volumeSetting, setVolumeSetting} ) => {

    const clickedMuteButton = () => {
        if(volumeSetting === 'Mute Sound') {
            setVolumeSetting('Unmute Sound');
        } else {
            setVolumeSetting('Mute Sound');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Settings</Text>
            </View>
            <View style={styles.logoContainer}>
                <Image source={images.memoriaLogoLight} style={styles.logo} />
            </View>

            <View>
                <TouchableOpacity style={styles.button} onPress={ () => console.log('Does nothing') }>
                    <Text style={styles.buttonText}>Blank</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={clickedMuteButton}>
                    <Text style={styles.buttonText}>{volumeSetting}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={ () => setCurrentPage('back') }>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Settings;