import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const buttonWidth = width * 0.6;
const buttonHeight = height * 0.1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#401e0a',
        paddingTop: '5%',
        alignItems: 'center',
    },
    gamemodeContainer: {
        backgroundColor: '#401e0a',
        alignItems: 'center',
    },
    gamemode: {
        color: 'white',
        fontSize: 48,
    },
    button: {
        backgroundColor: '#241106',
        width: buttonWidth,
        height: buttonHeight,
        paddingVertical: 10,
        borderRadius: 10,
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black',
    },
    buttonText: {
        color: 'white',
        fontSize: 30,
    },
});

export default styles;