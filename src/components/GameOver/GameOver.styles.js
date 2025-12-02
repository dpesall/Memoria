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
    scoreBox: {
        backgroundColor: '#241106',
        width: width * 0.8,
        borderRadius: 2,
        marginVertical: 15,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black',
    },
    tableRow: {
        flexDirection: 'row',
        width: '100%',
    },
    tableCell: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'black',
        padding: 10,
    },
    statHeader: {
        paddingTop: '2%',
        color: 'white',
        fontSize: 36,
        textAlign: 'center',
    },
    statLabel: {
        color: 'white',
        fontSize: 24,
        textAlign: 'right',
    },
    statValue: {
        color: 'white',
        fontSize: 24,
        textAlign: 'right',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
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
