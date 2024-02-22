import React from "react";
import { Link, useRouter } from 'expo-router';
import { Text, SafeAreaView, View, TouchableOpacity, Image } from "react-native";

import { images } from "../constants/images";
import styles from "../styles/home.style.js";
import logoStyles from "../styles/logo.style.js";

const Home = () => {
    const router = useRouter();

    const handlePlayPress = () => {
        router.push('/components/play');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={logoStyles.logoContainer}>
                <Image source={images.memoriaLogoDark} style={logoStyles.logo} />
            </View>
            <TouchableOpacity style={styles.button} onPress={handlePlayPress}>
                <Text style={styles.buttonText}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Credits</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Home;