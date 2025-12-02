import React from "react";
import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import styles from "./GameOver.styles";

const GameOver = ({ setPageView, score, correctAnswers }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.statHeader}>Statistics</Text>
            <View style={styles.scoreBox}>
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}>
                        <Text style={styles.statLabel}>Score:</Text>
                    </View>
                    <View style={styles.tableCell}>
                        <Text style={styles.statValue}>{score}</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}>
                        <Text style={styles.statLabel}>Answers:</Text>
                    </View>
                    <View style={styles.tableCell}>
                        <Text style={styles.statValue}>{correctAnswers}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => setPageView('main')}>
                    <Text style={styles.buttonText}>Exit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default GameOver;
