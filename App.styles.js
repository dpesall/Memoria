import { StyleSheet } from 'react-native';
import { colors } from './src/styles/theme/colors';

const styles = StyleSheet.create({
  app_container: {
    flex: 1,
    backgroundColor: colors.primary_background,
  },

  app_titleBar: {
    flex: 1,
  },

  app_content: {
    flex: 12,
  },
});

export default styles;
