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
    logoContainer: {
        alignItems: 'center', 
        marginTop: 20, 
    },
    logo: {
        width: logoSide, 
        height: logoSide,
        borderRadius: logoSide / 3
    },
    logoSmall: {
        width: logoSide / 3, 
        height: logoSide / 3,
        borderRadius: logoSide / 3
    },
    title: {
        color: 'white',
        fontSize: 30
    },
    titleContainer: {
        borderWidth: 3,
        borderColor: 'black',
        padding: '1%',
        alignItems: 'center',
        width: width,
        backgroundColor: '#241106',
        color: 'white',
        fontSize: 30
    }
});

export default styles;