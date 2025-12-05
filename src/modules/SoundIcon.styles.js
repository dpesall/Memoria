import { StyleSheet } from 'react-native';
import { sizing } from '../styles/theme/sizing';

const styles = StyleSheet.create({
  soundIcon_touchable: {
    padding: 8,
    borderRadius: sizing.borderRadius_icon,
  },

  soundIcon_image: {
    width: sizing.icon_size,
    height: sizing.icon_size,
    resizeMode: 'contain',
  },
});

export default styles;
