import React, { useEffect, useState } from "react";
import { Link, useRouter } from 'expo-router';
import { Text, Keyboard, SafeAreaView, View, TouchableOpacity, Image, TextInput } from "react-native";

import { images } from "../../constants/images";
import * as comp from "../../constants/compendium";
import styles from "../../styles/standard.style.js";
import logoStyles from "../../styles/logo.style.js";

const StandardQuiz = ({ 
        verseObject, 
        clickedReady, 
        shuffleVerse, 
        score, 
        setScore,
        scoredOnThisVerse,
        setScoredOnThisVerse
    }) => {
    const router = useRouter();

    const verseArray = verseObject.text.split(' ');

    const clickedSubmit = () => {
        const inputTextEscaped = inputText.replace(/\n/g, '');
        let inputArray = inputTextEscaped.split(' ');
        let correctString = '';

        let updatedWordsCorrect = 0;

        for(let i = 0; i < inputArray.length && i < verseArray.length; i++) {
            if(removeSymbolsFromString(inputArray[i]) === removeSymbolsFromString(verseArray[i])) {
                if(i > 0) {
                    correctString += ' ';
                }
                correctString += verseArray[i];
                updatedWordsCorrect++;
            } else {
                break;
            }
        }
        setValidationText(correctString);
        setWordsCorrect(updatedWordsCorrect);

        if(updatedWordsCorrect === verseArray.length && !scoredOnThisVerse) {
            let newScore = score + 1;
            setScore(newScore);
            setScoredOnThisVerse(true);
        }
    }

    const removeSymbolsFromString = (inputString) => {
        inputString = inputString.toLowerCase();
        
        const regex = /[^a-zA-Z0-9\s]/g;
        return inputString.replace(regex, '');
    }

    const handleTextChange = (text) => {
        if (text[text.length - 1] === '\n') {
            Keyboard.dismiss();
            setInputText(text.replace(/\n/g, ''));
        } else {
            setInputText(text);
        }
    };

    const [inputText, setInputText] = useState("");
    const [validationText, setValidationText] = useState("");

    const [wordsCorrect, setWordsCorrect] = useState(0);
    const [wordsTotal, setWordsTotal] = useState(verseArray.length);

    return (
        <>  
            <View style={styles.renderVerseBox}>
                <TextInput
                    style={styles.textBox}
                    value={inputText}
                    onChangeText={(text) => handleTextChange(text)}
                    placeholder="Enter text here"
                    placeholderTextColor="#d9d9d9"
                    multiline={true}
                    numberOfLines={9}
                />
            </View>
            <View style={styles.writeVerseBox}>
                <Text
                    style={styles.textBox}
                    multiline={true}
                    numberOfLines={9}
                >
                    {validationText}
                </Text>
                <Text
                    style={styles.textBottomRight}
                    multiline={true}
                    numberOfLines={9}
                >
                    {`${wordsCorrect}/${wordsTotal}`}
                </Text>
            </View>
            <View style={styles.containerBottom}>
                <TouchableOpacity style={[styles.button, styles.confirm]} onPress={clickedSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containerBottom}>
                <TouchableOpacity style={[styles.button, {marginVertical: 5}]} onPress={clickedReady}>
                    <Text style={[styles.buttonText]}>Back</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default StandardQuiz;
