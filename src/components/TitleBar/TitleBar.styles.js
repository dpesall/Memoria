import { StyleSheet, Platform, StatusBar } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';

const styles = StyleSheet.create({
  titleBar_container: {
    flex: 1,
    backgroundColor: colors.primary_background,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
    justifyContent: 'flex-end',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  titleBar_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '4%',
    paddingBottom: 8,
  },
});

export default styles;
