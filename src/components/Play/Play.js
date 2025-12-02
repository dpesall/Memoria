import React, { useEffect, useState } from "react";
import { Text, Button, SafeAreaView, View, TouchableOpacity, Image } from "react-native";
import styles from "./Play.styles";
import { images } from "../../constants/images";

const Play = ( {currentPage, setCurrentPage, volumeSetting, setVolumeSetting} ) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Play</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={ () => setCurrentPage('freeplay') }>
                    <Text style={styles.buttonText}>Freeplay</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={ () => setCurrentPage('back') }>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Play;