import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { sizing } from '../theme/sizing';
import { spacing } from '../theme/spacing';

export const quiz = StyleSheet.create({
  progressBar_container: {
    height: sizing.progressBar_height,
    width: '100%',
    backgroundColor: colors.primary_card,
    borderRadius: sizing.progressBar_height / 2,
    overflow: 'hidden',
    marginBottom: spacing.lg,
  },

  progressBar_fill: {
    height: '100%',
    backgroundColor: colors.feedback_progress,
    borderRadius: sizing.progressBar_height / 2,
  },

  instructions_container: {
    margin: spacing.lg,
    padding: spacing.xl,
    backgroundColor: colors.primary_cardTransparent,
    borderRadius: sizing.borderRadius_card,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    alignItems: 'center',
  },

  question_container: {
    padding: spacing.lg,
    paddingHorizontal: spacing.xl,
    alignItems: 'center',
  },

  answers_container: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: spacing.md,
  },

  quiz_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.primary_card,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
  },

  quiz_footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.lg,
    gap: 16,
  },
});
