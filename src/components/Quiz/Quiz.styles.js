import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';
import { spacing } from '../../styles/theme/spacing';
import { fontFamily, fontSize } from '../../styles/theme/typography';

const styles = StyleSheet.create({
  quiz_container: {
    flex: 1,
    backgroundColor: colors.primary_background,
  },

  quiz_header: {
    padding: spacing.lg,
    backgroundColor: colors.primary_card,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
    alignItems: 'center',
  },

  quiz_headerTitle: {
    color: colors.text_primary,
    fontSize: fontSize.xxl,
    fontFamily: 'Arvo_700Bold',
  },

  quiz_instructionsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
  },

  quiz_instructionsCard: {
    backgroundColor: colors.primary_cardTransparent,
    borderRadius: sizing.borderRadius_card,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    padding: spacing.xl,
    width: sizing.button_width_large,
    alignItems: 'center',
  },

  quiz_instructionsTitle: {
    color: colors.accent_primary,
    fontSize: fontSize.lg,
    fontFamily: fontFamily.bodySemiBold,
    marginBottom: spacing.md,
  },

  quiz_instructionsText: {
    color: colors.text_secondary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.body,
    textAlign: 'center',
    lineHeight: 24,
  },

  quiz_startButton: {
    backgroundColor: colors.accent_primary,
    borderRadius: sizing.borderRadius_button,
    width: sizing.button_width,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.xxl,
    shadowColor: colors.shadow_dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },

  quiz_startButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  quiz_footer: {
    alignItems: 'center',
    paddingBottom: spacing.xxl,
  },

  quiz_backButton: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    width: sizing.button_width,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
  },

  quiz_backButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  quiz_gameHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.primary_card,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
  },

  quiz_questionCount: {
    color: colors.text_primary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.bodyMedium,
  },

  quiz_score: {
    color: colors.accent_primary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.bodySemiBold,
  },

  quiz_progressContainer: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },

  quiz_progressBar: {
    height: sizing.progressBar_height,
    backgroundColor: colors.primary_card,
    borderRadius: sizing.progressBar_height / 2,
    overflow: 'hidden',
  },

  quiz_progressFill: {
    height: '100%',
    backgroundColor: colors.feedback_progress,
    borderRadius: sizing.progressBar_height / 2,
  },

  quiz_content: {
    flex: 1,
    alignItems: 'center',
  },

  quiz_questionContainer: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    alignItems: 'center',
  },

  quiz_questionText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodyMedium,
    textAlign: 'center',
    lineHeight: 32,
  },

  quiz_answersContainer: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: spacing.lg,
  },

  quiz_answerButton: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    width: sizing.button_width_large,
    minHeight: sizing.button_height,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.xs,
  },

  quiz_answerButtonCorrect: {
    backgroundColor: colors.feedback_success,
    borderRadius: sizing.borderRadius_button,
    borderWidth: 0,
    width: sizing.button_width_large,
    minHeight: sizing.button_height,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.xs,
  },

  quiz_answerButtonWrong: {
    backgroundColor: colors.feedback_error,
    borderRadius: sizing.borderRadius_button,
    borderWidth: 0,
    width: sizing.button_width_large,
    minHeight: sizing.button_height,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.xs,
  },

  quiz_answerText: {
    color: colors.text_primary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.body,
    textAlign: 'center',
  },

  quiz_resultContainer: {
    marginTop: spacing.lg,
    alignItems: 'center',
  },

  quiz_pointsEarned: {
    color: colors.accent_primary,
    fontSize: fontSize.xl,
    fontFamily: fontFamily.bodyBold,
  },

  quiz_timeUp: {
    color: colors.feedback_error,
    fontSize: fontSize.lg,
    fontFamily: fontFamily.bodySemiBold,
  },

  quiz_wrongAnswer: {
    color: colors.feedback_error,
    fontSize: fontSize.lg,
    fontFamily: fontFamily.bodySemiBold,
  },

  quiz_actionFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.lg,
    gap: spacing.md,
  },

  quiz_nextButton: {
    backgroundColor: colors.accent_primary,
    borderRadius: sizing.borderRadius_button,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xxxl,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.shadow_dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },

  quiz_nextButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  quiz_quitButton: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xxxl,
    alignItems: 'center',
    justifyContent: 'center',
  },

  quiz_quitButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  quiz_viewResultsButton: {
    backgroundColor: colors.accent_primary,
    borderRadius: sizing.borderRadius_button,
    width: sizing.button_width,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.shadow_dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },

  quiz_viewResultsButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },
});

export default styles;
