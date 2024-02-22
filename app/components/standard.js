import React, { useEffect, useState } from "react";
import { Link, useRouter } from 'expo-router';
import { Text, SafeAreaView, View, TouchableOpacity, Image } from "react-native";

import { images } from "../../constants/images";
import * as comp from "../../constants/compendium";
import styles from "../../styles/standard.style.js";
import logoStyles from "../../styles/logo.style.js";
import SelectionPage from "../modules/selectionPage";
import StandardQuiz from "../modules/standardQuiz";

const Standard = () => {
    const router = useRouter();

    const versePreferences = {
        testament: null,
        book: ['Proverbs', 'James'],
        chapter: null,
        verse: null,
    }

    const [score, setScore] = useState(0);
    const [scoredOnThisVerse, setScoredOnThisVerse] = useState(false);

    const test = () => {
        
    }
    const clickedReady = () => {
        setIsSelectionVisible(!isSelectionVisible);
    }

    const shuffleVerse = () => {
        setVerse(comp.generateVerseObject(versePreferences.testament, versePreferences.book, versePreferences.chapter, versePreferences.verse));
        setScoredOnThisVerse(false);
    }

    const [isSelectionVisible, setIsSelectionVisible] = useState(true);
    const [verseObject, setVerse] = useState(comp.generateVerseObject(versePreferences.testament, versePreferences.book, versePreferences.chapter, versePreferences.verse));

    return (
        <SafeAreaView style={[styles.container, {paddingTop: '0'}]}>
            <View style={styles.scoreBox} visible={false}>
                <Text style={styles.scoreLabel}>
                    {`Score: ${score}`}
                </Text>
            </View>
            <View style={styles.bookBox} visible={false}>
                <Text style={styles.bookLabel}>
                    {verseObject.book} {verseObject.chapter + 1}:{verseObject.verse + 1}
                </Text>
            </View>
            {isSelectionVisible && (
                    <SelectionPage
                        verseObject={verseObject}
                        clickedReady={clickedReady}
                        shuffleVerse={shuffleVerse}
                    />
                )
            }
            {!isSelectionVisible && (
                    <StandardQuiz
                        verseObject={verseObject}
                        clickedReady={clickedReady}
                        shuffleVerse={shuffleVerse}
                        score={score}
                        setScore={setScore}
                        scoredOnThisVerse={scoredOnThisVerse}
                        setScoredOnThisVerse={setScoredOnThisVerse}
                    />
                )
            }
        </SafeAreaView>
    );
}

export default Standard;