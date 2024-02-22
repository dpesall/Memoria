import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const buttonWidth = width * 0.55;
const buttonHeight = height * 0.075;

const bookWidth = width * 0.8;
const bookHeight = height * 0.1;

const textWidth = width * 0.95;
const textHeight = height * 0.4;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#401e0a',
        paddingTop: '5%',
        alignItems: 'center',
    },
    containerBottom: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdown: {
        backgroundColor: '#241106',
        zIndex: 1
    },
    dropdownText: {
        color: 'white',
        fontSize: 24,
    },
    dropdownLabel: {
        width: '70%',
    },
    dropdownContainer: {
        backgroundColor: '#241106',
    },
    textBox: {
        fontSize: 24,
        color: 'white',
        textAlignVertical: 'top',
    },
    textBottomRight: {
        color: 'white',
        position: 'absolute',
        bottom: 3,
        right: 5,
        fontSize: 24,
    },
    bookBox: {
        backgroundColor: '#241106',
        width: bookWidth,
        height: bookHeight,
        paddingVertical: 10,
        borderRadius: 3,
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black',
    },
    scoreBox: {
        backgroundColor: '#242424',
        width: width,
        height: bookHeight / 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'white',
    },
    bookLabel: {
        color: 'white',
        fontSize: 30,
    },
    setBookLabel: {
        alignItems: 'center',
        color: 'white',
        fontSize: 30,
    },
    scoreLabel: {
        color: 'white',
        fontSize: 22,
    },
    bookTextBox: {
        backgroundColor: '#241106',
        width: textWidth,
        height: textHeight,
        paddingVertical: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 3,
        marginVertical: 15,
        borderWidth: 2,
        borderColor: 'black',
    },
    bookText: {
        color: 'white',
        fontSize: 24,
    },
    buffer: {
        paddingTop: '20px'
    },
    writeVerseBox: {
        backgroundColor: '#241106',
        width: textWidth,
        height: textHeight / 1.75,
        paddingVertical: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 3,
        marginVertical: 15,
        borderWidth: 2,
        borderColor: 'black',
    },
    renderVerseBox: {
        backgroundColor: '#241106',
        width: textWidth,
        height: textHeight / 1.75,
        paddingVertical: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 3,
        marginVertical: 15,
        borderWidth: 2,
        borderColor: 'black',
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
    confirm: {
        width: buttonWidth,
        height: buttonHeight,
    },
    shuffle: {
        marginLeft: 10,
        width: buttonWidth / 2.2,
        height: buttonHeight,
    },
    shuffleImage: {
        width: buttonWidth / 3,
        height: buttonHeight,
    },
    buttonText: {
        color: 'white',
        fontSize: 28,
    },
});

export default styles;