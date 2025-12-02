import { StyleSheet } from 'react-native';
import { sizing } from '../styles/theme/sizing';
import { colors } from '../styles/theme/colors';

const styles = StyleSheet.create({
  soundIcon_container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  soundIcon_image: {
    width: sizing.icon_size,
    height: sizing.icon_size,
    resizeMode: 'contain',
    borderRadius: sizing.borderRadius_icon,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_subtle,
  },
});

export default styles;
