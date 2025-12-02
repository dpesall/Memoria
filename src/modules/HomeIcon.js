import React from "react";
import { Text, StyleSheet, SafeAreaView, View, TouchableOpacity, Image, Dimensions } from "react-native";
import { images } from "../constants/images"

const HomeIcon = ( {currentPage, setCurrentPage} ) => {

    const handleOnHomePress = () => {
        setCurrentPage('home')
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.container} onPress={handleOnHomePress}>
                <Image
                    source={images.homeDark}
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

export default HomeIcon;