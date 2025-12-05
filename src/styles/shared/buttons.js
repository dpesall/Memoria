import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { sizing } from '../theme/sizing';
import { layout } from '../theme/spacing';

const buttonBase = {
  paddingVertical: layout.buttonPaddingVertical,
  marginVertical: layout.buttonMarginVertical,
  alignItems: 'center',
  justifyContent: 'center',
};

export const buttons = StyleSheet.create({
  button_primary: {
    ...buttonBase,
    backgroundColor: colors.accent_primary,
    borderRadius: sizing.borderRadius_button,
    width: sizing.button_width,
    height: sizing.button_height,
    shadowColor: colors.shadow_dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },

  button_primaryLarge: {
    ...buttonBase,
    backgroundColor: colors.accent_primary,
    borderRadius: sizing.borderRadius_button,
    width: sizing.button_width,
    height: sizing.button_height * 1.33,
    shadowColor: colors.shadow_dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },

  button_secondary: {
    ...buttonBase,
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    width: sizing.button_width,
    height: sizing.button_height,
  },

  button_selected: {
    ...buttonBase,
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_standard,
    borderColor: colors.accent_primary,
    width: sizing.button_width_large,
    height: sizing.button_height_large,
  },

  button_answer: {
    ...buttonBase,
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    width: sizing.button_width_large,
    height: sizing.button_height,
    marginVertical: 8,
  },

  button_answerCorrect: {
    ...buttonBase,
    backgroundColor: colors.feedback_success,
    borderRadius: sizing.borderRadius_button,
    width: sizing.button_width_large,
    height: sizing.button_height,
    marginVertical: 8,
  },

  button_answerWrong: {
    ...buttonBase,
    backgroundColor: colors.feedback_error,
    borderRadius: sizing.borderRadius_button,
    width: sizing.button_width_large,
    height: sizing.button_height,
    marginVertical: 8,
  },

  button_back: {
    ...buttonBase,
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    width: sizing.button_width,
    height: sizing.button_height,
  },
});
