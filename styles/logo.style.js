import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
const logoSide = width * 0.4;

export default StyleSheet.create({
    logoContainer: {
        alignItems: "center", 
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
    }
});
