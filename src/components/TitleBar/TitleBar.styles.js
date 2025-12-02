import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';

const styles = StyleSheet.create({
  titleBar_container: {
    backgroundColor: colors.primary_darkest,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.overlay_light,
  },

  titleBar_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default styles;
