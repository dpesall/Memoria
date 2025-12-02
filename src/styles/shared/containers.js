import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { sizing } from '../theme/sizing';
import { layout } from '../theme/spacing';

export const containers = StyleSheet.create({
  screen_base: {
    flex: 1,
    backgroundColor: colors.primary_background,
  },

  screen_centered: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary_background,
  },

  titleBar_container: {
    backgroundColor: colors.primary_darkest,
  },

  titleBar_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '3%',
  },

  header_primary: {
    width: sizing.fullWidth,
    padding: layout.headerPadding,
    backgroundColor: colors.primary_dark,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: sizing.borderWidth_standard,
    borderTopColor: colors.neutral_black,
    borderBottomWidth: sizing.borderWidth_standard,
    borderBottomColor: colors.neutral_black,
  },

  header_page: {
    borderWidth: sizing.borderWidth_heavy,
    borderColor: colors.neutral_black,
    padding: '1%',
    alignItems: 'center',
    width: sizing.fullWidth,
    backgroundColor: colors.primary_dark,
  },

  section_clickable: {
    borderWidth: sizing.borderWidth_heavy,
    borderTopWidth: 0,
    borderColor: colors.neutral_black,
    padding: '1%',
    alignItems: 'center',
    width: sizing.fullWidth,
    backgroundColor: colors.primary_medium,
  },

  footer_buttons: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },

  row_centered: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  row_spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
