import React, { useEffect, useState } from "react";
import { Link, useRouter } from 'expo-router';
import { Text, Keyboard, SafeAreaView, View , TouchableOpacity, Image, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { images } from "../../constants/images";
import * as comp from "../../constants/compendium";
import styles from "../../styles/standard.style.js";
import logoStyles from "../../styles/logo.style.js";
import SelectionPage from "../modules/selectionPage";
import StandardQuiz from "../modules/standardQuiz";

const Sandbox = () => {
    const router = useRouter();

    const books = [
        'James',
        'Proverbs',
    ];

    const [versePreferences, setVersePreferences] = useState({
        testament: selectedTestament,
        book: [selectedBook],
        chapter: currentChapter,
        verse: selectedVerse,
    });

    const [score, setScore] = useState(0);
    const [scoredOnThisVerse, setScoredOnThisVerse] = useState(false);

    const test = () => {
        
    }

    const setVersePreference = (value, preferenceType) => {
        switch(preferenceType) {
            case 'Testament':
                setSelectedTestament(value);

                setVersePreferences({
                    testament: value,
                    book: [selectedBook],
                    chapter: currentChapter,
                    verse: selectedVerse,
                });
                break;

            case 'Book':
                setSelectedBook(value);
                setSelectedChapter(null)
                setCurrentChapter(null)

                const chaptersArray = [
                    {label: 'All', value: 'All'}
                ];
                for(let i = 1; i <= comp.getChapterCount(selectedBook); i++) {
                    chaptersArray.push({label: `${i}`, value: `${i - 1}`})
                }

                setChaptersItems(chaptersArray);

                setVersePreferences({
                    testament: selectedTestament,
                    book: [value],
                    chapter: currentChapter,
                    verse: selectedVerse,
                });
                break;

            case 'Chapter':
                setSelectedChapter(value);
                setCurrentChapter(value === 'All' ? 0 : value);

                setVersePreferences({
                    testament: selectedTestament,
                    book: [selectedBook],
                    chapter: value === 'All' ? 0 : value,
                    verse: selectedVerse,
                });
                break;

            case 'Verse':
                setSelectedVerse(value);
                break;
        }
    }

    const removeSymbolsFromString = (inputString) => {
        inputString = inputString.toLowerCase();
        
        const regex = /[^a-zA-Z0-9\s]/g;
        return inputString.replace(regex, '');
    }

    const clickedReady = () => {
        setIsSelectionVisible(!isSelectionVisible);
        setInputText('');
        setValidationText('');

        setWordsCorrect(0);

        setShowSubmit(true);

        const newVerseObject = verseObject.text.split(' ');
        setVerseArray(newVerseObject);
        setWordsTotal(newVerseObject.length);

        let stringedVerse = "";
        newVerseObject.forEach((verse, index) => {
            if (index < newVerseObject.length - 1) {
              stringedVerse += verse + " ";
            } else {
              stringedVerse += verse;
            }
        });
        setVerseArrayStringified(stringedVerse)
    }

    const clickedStart = (bool) => { 
        if(!hasSelectedSettings()) {
            return;
        }
        setScore(0);
        if(selectedMode === 'Linear' && !bool) {
            setCurrentVerse(1);
            setVersePreferences({
                testament: selectedTestament,
                book: [selectedBook],
                chapter: currentChapter,
                verse: 1,
            });
            findVerse(1);
        } else {
            shuffleVerse();
        }
        setViewSandboxSettings(bool);
    }

    const findVerse = (verse) => {
        setVerse(comp.generateVerseObject(versePreferences.testament, versePreferences.book, versePreferences.chapter, verse));
        setScoredOnThisVerse(false);
    }

    const shuffleVerse = () => {
        let newVerseObject = comp.generateVerseObject(versePreferences.testament, versePreferences.book, versePreferences.chapter, versePreferences.verse);
        
        // If we've reached the end of the chapter, start back at verse 1. If 'All' chapters, then increment the chapter
        if(newVerseObject.text !== undefined) {
            setVerse(newVerseObject);
        } else {
            let newVersePreferences = {
                testament: versePreferences.testament,
                book: versePreferences.book,
                chapter: versePreferences.chapter + (selectedChapter === 'All' ? 1 : 0),
                verse: 1,
            }

            let newChapter = currentChapter + 1;
            setCurrentChapter(newChapter);
            setCurrentVerse(1);
            setVersePreferences(newVersePreferences);
            setVerse(comp.generateVerseObject(newVersePreferences.testament, newVersePreferences.book, newVersePreferences.chapter, 1));
        }
        
        setScoredOnThisVerse(false);
    }

    const hasSelectedSettings = () => {
        return !(selectedBook === null || selectedChapter === null || selectedMode === null);
    }

    const [wordsCorrect, setWordsCorrect] = useState(0);
    const [wordsTotal, setWordsTotal] = useState(0);
    const [currentVerse, setCurrentVerse] = useState(1);

    const [verseArray, setVerseArray] = useState([]);
    const [verseArrayStringified, setVerseArrayStringified] = useState([]);

    const [inputText, setInputText] = useState("");
    const [validationText, setValidationText] = useState("");

    const [viewSandboxSettings, setViewSandboxSettings] = useState(true);
    const [isSelectionVisible, setIsSelectionVisible] = useState(true);

    const [open, setOpen] = useState(false);
    const [openChapter, setOpenChapter] = useState(false);
    const [openMode, setOpenMode] = useState(false);
    const [showSubmit, setShowSubmit] = useState(false);

    const [verseObject, setVerse] = useState(comp.generateVerseObject(versePreferences.testament, versePreferences.book, versePreferences.chapter, versePreferences.verse));
    
    const [selectedTestament, setSelectedTestament] = useState(null);
    const [selectedBook, setSelectedBook] = useState(null);
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [selectedVerse, setSelectedVerse] = useState(null);

    const [currentChapter, setCurrentChapter] = useState(null);

    const [selectedMode, setSelectedMode] = useState(null);

    const [items, setItems] = useState([
      {label: 'James', value: 'James'},
      {label: 'Proverbs', value: 'Proverbs'}
    ]);

    const [chapterItems, setChaptersItems] = useState([
        {label: 'All', value: 'All'}
    ]);

    const [modeItems, setModeItems] = useState([
        {label: 'Linear', value: 'Linear'},
        {label: 'Random', value: 'Random'}
    ]);

    const handleSetOpen = (isOpen) => {
        setOpen(isOpen);
        if (isOpen) {
          setOpenChapter(false);
          setOpenMode(false);
        }
      };
      
      const handleSetOpenChapter = (isOpen) => {
        setOpenChapter(isOpen);
        if (isOpen) {
          setOpen(false);
          setOpenMode(false);
        }
      };
      
      const handleSetOpenMode = (isOpen) => {
        setOpenMode(isOpen);
        if (isOpen) {
          setOpen(false);
          setOpenChapter(false);
        }
      };

    const handleTextChange = (text) => {
        // Developer cheat
        if(text[text.length -1 ] === '*') {
            Keyboard.dismiss();
            setInputText(verseArrayStringified)
            clickedSubmit(true);
            return;
        }

        if (text.includes('\n')) {
            Keyboard.dismiss();
            setInputText(text.replace(/\n/g, ''));
        } else {
            setInputText(text);
        }
    };

    const setLinearMode = (value) => {
        let verse = null;
        if(value === 'Linear') {
            verse = 1;
        } else {
            verse = null;
        }
        setSelectedVerse(verse);
        setCurrentVerse(verse);
        setVersePreferences({
            testament: selectedTestament,
            book: [selectedBook],
            chapter: currentChapter,
            verse: verse,
        });
    }

    const clickedBack = () => {
        shuffleVerse();
    }

    const clickedSubmit = (developerSkip = false) => {
        const inputTextEscaped = developerSkip ? verseArrayStringified : inputText.replace(/\n/g, '');
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
            setShowSubmit(false);

            setVersePreferences({
                testament: selectedTestament,
                book: [selectedBook],
                chapter: currentChapter,
                verse: currentVerse + 1,
            });
            let nextVerse = currentVerse + 1;
            setCurrentVerse(nextVerse);
        }
    }

    return (
        <SafeAreaView style={[styles.container, {paddingTop: '0'}]}>
            {viewSandboxSettings && (
                    <View style={styles.container}>
                        <View style={[styles.container]}>
                            <DropDownPicker
                                textStyle={styles.dropdownText}
                                labelStyle={styles.dropdownLabel}
                                style={[styles.dropdown, { marginBottom: '15%' }]}
                                containerStyle={styles.dropdownLabel}
                                listItemContainerStyle={styles.dropdownContainer}
                                open={open}
                                value={selectedBook}
                                items={items}
                                onChangeValue={(value) => setVersePreference(value, 'Book')}
                                placeholder='Select Book'
                                setOpen={handleSetOpen}
                                setValue={setSelectedBook}
                                setItems={setItems}
                            />

                            <DropDownPicker
                                textStyle={styles.dropdownText}
                                labelStyle={styles.dropdownLabel}
                                style={[styles.dropdown, {display: selectedBook === null ? 'none' : 'block'}, { marginBottom: '15%' }]}
                                containerStyle={styles.dropdownLabel}
                                listItemContainerStyle={styles.dropdownContainer}
                                open={openChapter}
                                value={selectedChapter}
                                items={chapterItems}
                                onChangeValue={(value) => setVersePreference(value, 'Chapter')}
                                placeholder='Select Chapter'
                                setOpen={handleSetOpenChapter}
                                setValue={setSelectedChapter}
                                setItems={setChaptersItems}
                            />

                            <DropDownPicker
                                textStyle={styles.dropdownText}
                                labelStyle={styles.dropdownLabel}
                                style={[styles.dropdown, {display: selectedBook === null ? 'none' : 'block'}]}
                                containerStyle={styles.dropdownLabel}
                                listItemContainerStyle={styles.dropdownContainer}
                                open={openMode}
                                value={selectedMode}
                                items={modeItems}
                                onChangeValue={(value) => setLinearMode(value)}
                                placeholder='Select Mode'
                                setOpen={handleSetOpenMode}
                                setValue={setSelectedMode}
                                setItems={setModeItems}
                            />
                        </View>

                        <View style={[styles.containerBottom, { display: hasSelectedSettings() ? 'block' : 'none'}]}>
                            <TouchableOpacity style={styles.button} onPress={() => {clickedStart(false);}}>
                                <Text style={styles.buttonText}>Start</Text>
                            </TouchableOpacity>
                        </View>
                </View>
                )
            }

            {!viewSandboxSettings && isSelectionVisible && (
                <View style={[styles.container, {paddingTop: '0'}]}>
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

                    <View style={styles.bookTextBox}>
                        <Text style={styles.bookText}>{verseObject.text}</Text>
                    </View>
                    <View style={styles.containerBottom}>
                        <TouchableOpacity style={styles.button} onPress={() => clickedReady(true)}>
                            <Text style={styles.buttonText}>Ready</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.shuffle]} onPress={shuffleVerse}>
                            <Image source={images.shuffle} style={styles.shuffleImage} />
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.containerBottom}>
                        <TouchableOpacity style={styles.button} onPress={() => clickedStart(true)}>
                            <Text style={styles.buttonText}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                )
            }

            { !isSelectionVisible && (
                <View style={[styles.container, {paddingTop: '0'}]}>
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
                        <TouchableOpacity style={[styles.button, styles.confirm, {display: showSubmit ? 'block' : 'none'}]} onPress={() => clickedSubmit()}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerBottom}>
                        <TouchableOpacity style={styles.button} onPress={() => { clickedReady(true); clickedBack(); }}>
                            <Text style={styles.buttonText}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )

            }
        </SafeAreaView>
    );
}

export default Sandbox;