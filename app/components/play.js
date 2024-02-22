import React from "react";
import { Link, useRouter } from 'expo-router';
import { Text, SafeAreaView, View, TouchableOpacity, Image } from "react-native";

import { images } from "../../constants/images";
import styles from "../../styles/play.style.js";
import logoStyles from "../../styles/logo.style.js";

const Play = () => {

    const router = useRouter();

    const handleBackButtonPress = () => {
        router.back();
    };

    const handleModePress = (mode) => {
        switch(mode) {
            case 'Standard': {
                router.replace('components/standard')
                break;
            }
            case 'Sandbox': {
                router.replace('components/sandbox')
                break;
            }
            case 'Empty': {
                console.log("Empty");
                break;
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.gamemodeContainer}>
                <Text style={styles.gamemode}>Mode:</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {handleModePress('Standard')}}>
                <Text style={styles.buttonText}>Standard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {handleModePress('Sandbox')}}>
                <Text style={styles.buttonText}>Sandbox</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {handleModePress('Empty')}}>
                <Text style={styles.buttonText}>Empty</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleBackButtonPress}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Play;