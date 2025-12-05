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
    backgroundColor: colors.primary_background,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
  },

  titleBar_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '4%',
    paddingVertical: '2%',
  },

  header_primary: {
    width: sizing.fullWidth,
    padding: layout.headerPadding,
    backgroundColor: colors.primary_card,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
  },

  header_page: {
    padding: '3%',
    alignItems: 'center',
    width: sizing.fullWidth,
    backgroundColor: colors.primary_card,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
  },

  card_container: {
    backgroundColor: colors.primary_cardTransparent,
    borderRadius: sizing.borderRadius_card,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: colors.shadow_dark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },

  section_clickable: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_card,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    alignItems: 'center',
  },

  footer_buttons: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 24,
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
    width: '100%',
  },
});
