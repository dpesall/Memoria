import React from "react";
import { View, SafeAreaView } from "react-native";
import HomeIcon from "../../modules/HomeIcon";
import SoundIcon from "../../modules/SoundIcon";
import styles from "./TitleBar.styles";

const TitleBar = ({ currentPage, setCurrentPage, volumeSetting, setVolumeSetting }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleBarContent}>
                <HomeIcon
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <SoundIcon
                    volumeSetting={volumeSetting}
                    setVolumeSetting={setVolumeSetting}
                />
            </View>
        </SafeAreaView>
    );
}

export default TitleBar;