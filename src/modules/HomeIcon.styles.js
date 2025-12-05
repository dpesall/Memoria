import { StyleSheet } from 'react-native';
import { sizing } from '../styles/theme/sizing';

const styles = StyleSheet.create({
  homeIcon_touchable: {
    padding: 8,
    borderRadius: sizing.borderRadius_icon,
  },

  homeIcon_image: {
    width: sizing.icon_size,
    height: sizing.icon_size,
    resizeMode: 'contain',
  },
});

export default styles;
