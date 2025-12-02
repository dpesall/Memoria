import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';
import { fontSize } from '../../styles/theme/typography';
import { layout, spacing } from '../../styles/theme/spacing';

const styles = StyleSheet.create({
  quiz_container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary_background,
  },

  quiz_header: {
    width: sizing.fullWidth,
    padding: layout.headerPadding,
    backgroundColor: colors.primary_dark,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.overlay_light,
  },

  quiz_scoreText: {
    color: colors.text_secondary,
    fontSize: fontSize.md,
    letterSpacing: 0.5,
  },

  quiz_progressBar: {
    height: 8,
    backgroundColor: colors.feedback_progress,
    alignSelf: 'flex-start',
    borderRadius: 4,
  },

  quiz_progressBarEmpty: {
    height: 8,
    backgroundColor: colors.feedback_progress,
    alignSelf: 'flex-start',
  },

  quiz_instructionsContainer: {
    margin: spacing.xl,
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
  },

  quiz_instructionsTitle: {
    color: colors.neutral_white,
    fontSize: fontSize.xxl,
    fontWeight: '600',
    marginBottom: spacing.md,
    letterSpacing: 1,
  },

  quiz_instructionsText: {
    color: colors.text_secondary,
    fontSize: fontSize.md,
    textAlign: 'center',
    lineHeight: 24,
  },

  quiz_questionContainer: {
    alignItems: 'center',
    padding: spacing.xl,
  },

  quiz_questionText: {
    color: colors.neutral_white,
    fontSize: fontSize.lg,
    marginBottom: spacing.xl,
    textAlign: 'center',
    lineHeight: 28,
  },

  quiz_answerButton: {
    backgroundColor: colors.primary_dark,
    width: sizing.button_width_large,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: sizing.borderRadius_card,
    marginVertical: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_subtle,
  },

  quiz_answerButtonCorrect: {
    backgroundColor: colors.feedback_success,
    borderColor: colors.feedback_success,
  },

  quiz_answerButtonWrong: {
    backgroundColor: colors.feedback_error,
    borderColor: colors.feedback_error,
  },

  quiz_answerText: {
    color: colors.neutral_white,
    fontSize: fontSize.md,
    textAlign: 'center',
  },

  quiz_pointsText: {
    color: colors.feedback_progress,
    fontSize: fontSize.lg,
    fontWeight: '600',
    marginTop: spacing.xl,
    textAlign: 'center',
  },

  quiz_footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: spacing.xl,
  },

  quiz_button: {
    backgroundColor: colors.primary_dark,
    width: sizing.button_width,
    paddingVertical: 16,
    borderRadius: sizing.borderRadius_button,
    marginVertical: spacing.xs,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_subtle,
  },

  quiz_buttonText: {
    color: colors.neutral_white,
    fontSize: fontSize.md,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

export default styles;
