import React, { useEffect, useState } from "react";
import { Text, Button, SafeAreaView, View, TouchableOpacity, Image } from "react-native";
import styles from "./Credits.styles";
import { images } from "../../constants/images";

const Credits = ( {currentPage, setCurrentPage} ) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Credits</Text>
            </View>
            <View style={styles.logoContainer}>
                <Image source={images.memoriaLogoLight} style={styles.logo} />
            </View>

            <View>
                <TouchableOpacity style={styles.button} onPress={ () => setCurrentPage('back') }>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Credits;