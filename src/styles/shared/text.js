import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { fontSize, fontFamily } from '../theme/typography';

export const text = StyleSheet.create({
  text_button: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  text_buttonLarge: {
    color: colors.text_primary,
    fontSize: fontSize.xxl,
    fontFamily: fontFamily.bodySemiBold,
  },

  text_buttonTopic: {
    color: colors.text_primary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.body,
  },

  text_buttonSelected: {
    color: colors.text_primary,
    fontSize: fontSize.lg,
    fontFamily: fontFamily.bodySemiBold,
  },

  text_title: {
    color: colors.text_primary,
    fontSize: fontSize.xl,
    fontFamily: fontFamily.bodyBold,
  },

  text_appTitle: {
    paddingTop: '5%',
    color: colors.text_primary,
    fontSize: fontSize.display,
    fontFamily: fontFamily.display,
  },

  text_sectionHeader: {
    color: colors.text_primary,
    fontSize: fontSize.xxl,
    fontFamily: fontFamily.bodyBold,
  },

  text_sectionLabel: {
    color: colors.text_secondary,
    fontSize: fontSize.xs,
    fontFamily: fontFamily.bodyMedium,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  text_sectionValue: {
    color: colors.accent_primary,
    fontSize: fontSize.lg,
    fontFamily: fontFamily.bodySemiBold,
    marginTop: 4,
  },

  text_instructions: {
    color: colors.text_secondary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.body,
    textAlign: 'center',
    lineHeight: 28,
  },

  text_body: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.body,
    textAlign: 'center',
  },

  text_score: {
    color: colors.accent_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  text_question: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodyMedium,
    textAlign: 'center',
    lineHeight: 32,
  },

  text_answer: {
    color: colors.text_primary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.body,
    textAlign: 'center',
  },

  text_points: {
    color: colors.accent_primary,
    fontSize: fontSize.lg,
    fontFamily: fontFamily.bodyBold,
  },

  text_statHeader: {
    color: colors.text_primary,
    fontSize: fontSize.display,
    fontFamily: fontFamily.display,
    textAlign: 'center',
  },

  text_statLabel: {
    color: colors.text_secondary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.body,
  },

  text_statValue: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  text_error: {
    color: colors.feedback_error,
    fontSize: fontSize.md,
    fontFamily: fontFamily.body,
  },
});
