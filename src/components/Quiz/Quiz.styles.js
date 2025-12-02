import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const buttonWidth = width * 0.6;
const buttonHeight = height * 0.075;
const logoSide = width * 0.3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#401e0a',
    },
    header: {
        width: width,
        padding: 10,
        backgroundColor: '#241106',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 2,
        borderTopColor: 'black',
        borderBottomWidth: 2,
        borderBottomColor: 'black',
    },
    scoreText: {
        color: 'white',
        fontSize: 24,
    },
    progressBar: {
        height: 15,
        backgroundColor: '#00FF00',
        alignSelf: 'flex',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
    },
    progressBarNoBorder: {
        height: 15,
        backgroundColor: '#00FF00',
        alignSelf: 'flex',
    },
    instructionsContainer: {
        margin: 20,
        alignItems: 'center',
    },
    instructionsTitle: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    instructionsText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
    },
    questionContainer: {
        alignItems: 'center',
        padding: 20,
    },
    questionText: {
        color: 'white',
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    answerButton: {
        backgroundColor: '#563718',
        width: buttonWidth * 1.4,
        height: buttonHeight,
        paddingVertical: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black',
    },
    correctAnswerButton: {
        backgroundColor: '#006600',
    },
    wrongAnswerButton: {
        backgroundColor: '#800000',
    },
    answerText: {
        color: 'white',
        fontSize: 20,
    },
    pointsText: {
        color: 'white',
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
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
        fontSize: 24,
    },
    buttonSelected: {
        backgroundColor: '#241106',
        width: buttonWidth * 1.4,
        height: buttonHeight * 1.4,
        paddingVertical: 10,
        borderRadius: 10,
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black',
    },
    buttonSelectedText: {
        color: 'white',
        fontSize: 28,
    },
    buttonTopic: {
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
    buttonTopicText: {
        color: 'white',
        fontSize: 20,
    },
    clickableContainer: {
        borderWidth: 3,
        borderTopWidth: 0,
        borderColor: 'black',
        padding: '1%',
        alignItems: 'center',
        width: width,
        backgroundColor: '#57290f',
        color: 'white',
        fontSize: 30,
    },
    clickableHeader: {
        marginTop: '3%',
    },
    logoContainer: {
        alignItems: 'center', 
        marginTop: 20, 
    },
    logo: {
        width: logoSide, 
        height: logoSide,
        borderRadius: logoSide / 3,
    },
    logoSmall: {
        width: logoSide / 3, 
        height: logoSide / 3,
        borderRadius: logoSide / 3,
    },
    title: {
        color: 'white',
        fontSize: 30,
    },
    titleContainer: {
        borderWidth: 3,
        borderColor: 'black',
        padding: '1%',
        alignItems: 'center',
        width: width,
        backgroundColor: '#241106',
        color: 'white',
        fontSize: 30,
    },
    backButtonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    backButton: {
        backgroundColor: '#241106',
        width: buttonWidth,
        height: buttonHeight,
        paddingVertical: 0,
        borderRadius: 10,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black',
    },
    backButtonText: {
        color: 'white',
        fontSize: 24,
    }
});

export default styles;
