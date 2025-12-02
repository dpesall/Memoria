import React from "react";
import { Text, Button, SafeAreaView, View, TouchableOpacity, Image } from "react-native";
import styles from "./MainMenu.styles";
import { images } from "../../constants/images";
import Settings from "../Settings/Settings";
import Credits from "../Credits/Credits";
import Play from "../Play/Play";
import Freeplay from "../Freeplay/Freeplay";

const MainMenu = ( {currentPage, setCurrentPage, volumeSetting, setVolumeSetting} ) => {

    const menuOptions = () => {
        return (
            <>
                <Text style={styles.title}>Memoria</Text>
                <View style={styles.logoContainer}>
                    <Image source={images.memoriaLogoLight} style={styles.logo} />
                </View>
                <TouchableOpacity style={styles.button} onPress={ () => setCurrentPage('play') }>
                    <Text style={styles.buttonText}>Play</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={ () => setCurrentPage('settings') }>
                    <Text style={styles.buttonText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={ () => setCurrentPage('credits') }>
                    <Text style={styles.buttonText}>Credits</Text>
                </TouchableOpacity>
            </>
            
        )
    }

    const renderContent = () => {

        switch(currentPage.peek()) {
            case 'home': 
                return (
                    <>
                        {menuOptions()}
                    </>
                )
                break;
                case 'play': 
                return (
                    <>
                        <Play
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            volumeSetting={volumeSetting}
                            setVolumeSetting={setVolumeSetting}
                        />
                    </>
                )
                break;
                case 'settings':
                    return (
                        <>
                            <Settings
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                volumeSetting={volumeSetting}
                                setVolumeSetting={setVolumeSetting}
                            />
                        </>
                    )
                    break;
                case 'credits':
                    return (
                        <>
                           <Credits
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        </>
                    )
                    break;
                case 'freeplay': 
                    return (
                        <>
                            <Freeplay
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                volumeSetting={volumeSetting}
                                setVolumeSetting={setVolumeSetting}
                            />
                        </>
                )
                break;
        }
        
        return (
            <>
                <Text style={styles.uncaughtPage}>Uncaught Page</Text>
            </>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderContent()}
        </SafeAreaView>
    );
}

export default MainMenu;