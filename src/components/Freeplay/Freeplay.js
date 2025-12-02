import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import Quiz from "../Quiz/Quiz";
import styles from "./Freeplay.styles";

const Freeplay = ({ currentPage, setCurrentPage, volumeSetting, setVolumeSetting }) => {

    const [pageView, setPageView] = useState('main');
    const [topic, setTopic] = useState('Any');
    const [mode, setMode] = useState('Standard');

    const topics = [
        'Any',
        'People',
        'New Testament Stories',
        'Old Testament Stories',
        'Geography',
    ];

    const modes = [
        'Standard',
        'Survival',
    ];

    const renderContent = () => {
        switch (pageView) {
            case 'quiz':
                return (
                    <>
                        <Quiz
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            volumeSetting={volumeSetting}
                            setVolumeSetting={setVolumeSetting}
                            setPageView={setPageView}
                            topic={topic}
                            mode={mode}
                        />
                    </>
                );
                break;
            case 'main':
                return (
                    <>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Freeplay</Text>
                        </View>

                        <View style={styles.clickableContainer}>
                            <View style={styles.clickableHeader}>
                                <Text style={styles.title}>Topic:</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.buttonSelected} onPress={() => setPageView('topic')}>
                                    <Text style={styles.buttonSelectedText}>{topic}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.clickableContainer}>
                            <View style={styles.clickableHeader}>
                                <Text style={styles.title}>Mode:</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.buttonSelected} onPress={() => setPageView('mode')}>
                                    <Text style={styles.buttonSelectedText}>{mode}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.backButton} onPress={() => setPageView('quiz')}>
                                <Text style={styles.backButtonText}>Start</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.backButtonContainer}>
                            <TouchableOpacity style={styles.backButton} onPress={() => setCurrentPage('back')}>
                                <Text style={styles.backButtonText}>Back</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                );
            case 'topic':
                return (
                    <>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Topic</Text>
                        </View>
                        {topics.map((topicItem, index) => (
                            <TouchableOpacity key={index} style={styles.buttonTopic} onPress={() => { setTopic(topicItem); setPageView('main') }}>
                                <Text style={styles.buttonTopicText}>{topicItem}</Text>
                            </TouchableOpacity>
                        ))}
                        <View style={styles.backButtonContainer}>
                            <TouchableOpacity style={styles.backButton} onPress={() => setPageView('main')}>
                                <Text style={styles.backButtonText}>Back</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                );
            case 'mode':
                return (
                    <>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Mode</Text>
                        </View>
                        {modes.map((modeItem, index) => (
                            <TouchableOpacity key={index} style={styles.buttonTopic} onPress={() => { setMode(modeItem); setPageView('main') }}>
                                <Text style={styles.buttonTopicText}>{modeItem}</Text>
                            </TouchableOpacity>
                        ))}
                        <View style={styles.backButtonContainer}>
                            <TouchableOpacity style={styles.backButton} onPress={() => setPageView('main')}>
                                <Text style={styles.backButtonText}>Back</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                );
            default:
                return (
                    <>
                        <Text>Page not found</Text>
                    </>
                );;
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderContent()}
        </SafeAreaView>
    );
}

export default Freeplay;
