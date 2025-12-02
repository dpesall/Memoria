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
        paddingVertical: 10,
        borderRadius: 10,
        marginVertical: 15,
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
