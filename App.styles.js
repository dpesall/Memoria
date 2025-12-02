import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#401e0a',
    },
    titlebar: {
        flex: 1,
    },
    mainmenu: {
        flex: 12,
    }
});

export default styles;