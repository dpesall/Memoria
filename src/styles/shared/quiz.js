import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { sizing } from '../theme/sizing';
import { spacing } from '../theme/spacing';

export const quiz = StyleSheet.create({
  progressBar_container: {
    height: sizing.progressBar_height,
    width: '100%',
    backgroundColor: colors.neutral_white,
    marginBottom: spacing.xl,
  },

  progressBar_fill: {
    height: '100%',
    backgroundColor: colors.feedback_progress,
  },

  instructions_container: {
    margin: spacing.xl,
    padding: spacing.xl,
    backgroundColor: colors.primary_dark,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_standard,
    borderColor: colors.neutral_black,
    alignItems: 'center',
  },

  question_container: {
    padding: spacing.lg,
    alignItems: 'center',
  },

  answers_container: {
    alignItems: 'center',
    width: '100%',
  },
});
