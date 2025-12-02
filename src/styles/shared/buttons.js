import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { sizing } from '../theme/sizing';
import { layout } from '../theme/spacing';

const buttonBase = {
  backgroundColor: colors.primary_dark,
  paddingVertical: layout.buttonPaddingVertical,
  borderRadius: sizing.borderRadius_button,
  marginVertical: layout.buttonMarginVertical,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: sizing.borderWidth_standard,
  borderColor: colors.neutral_black,
};

export const buttons = StyleSheet.create({
  button_primary: {
    ...buttonBase,
    width: sizing.button_width,
    height: sizing.button_height,
  },

  button_primaryLarge: {
    ...buttonBase,
    width: sizing.button_width,
    height: sizing.button_height * 1.33,
  },

  button_selected: {
    ...buttonBase,
    width: sizing.button_width_large,
    height: sizing.button_height_large,
  },

  button_answer: {
    ...buttonBase,
    backgroundColor: colors.primary_answer,
    width: sizing.button_width_large,
    height: sizing.button_height,
    marginVertical: 10,
  },

  button_answerCorrect: {
    ...buttonBase,
    backgroundColor: colors.feedback_success,
    width: sizing.button_width_large,
    height: sizing.button_height,
    marginVertical: 10,
  },

  button_answerWrong: {
    ...buttonBase,
    backgroundColor: colors.feedback_error,
    width: sizing.button_width_large,
    height: sizing.button_height,
    marginVertical: 10,
  },

  button_back: {
    ...buttonBase,
    width: sizing.button_width,
    height: sizing.button_height,
  },
});
