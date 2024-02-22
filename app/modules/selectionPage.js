import React, { useEffect, useState } from "react";
import { Link, useRouter } from 'expo-router';
import { Text, SafeAreaView, View, TouchableOpacity, Image } from "react-native";

import { images } from "../../constants/images";
import * as comp from "../../constants/compendium";
import styles from "../../styles/standard.style.js";
import logoStyles from "../../styles/logo.style.js";

const SelectionPage = ({ verseObject, clickedReady, shuffleVerse }) => {
    const router = useRouter();

    return (
        <>
            <View style={styles.bookTextBox}>
                <Text style={styles.bookText}>{verseObject.text}</Text>
            </View>
            <View style={styles.containerBottom}>
                <TouchableOpacity style={styles.button} onPress={clickedReady}>
                    <Text style={styles.buttonText}>Ready</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.shuffle]} onPress={shuffleVerse}>
                    <Image source={images.shuffle} style={styles.shuffleImage} />
                </TouchableOpacity>
            </View>
        </>
    );
};

export default SelectionPage;
