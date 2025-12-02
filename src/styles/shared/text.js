import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { fontSize } from '../theme/typography';

export const text = StyleSheet.create({
  text_button: {
    color: colors.neutral_white,
    fontSize: fontSize.md,
  },

  text_buttonLarge: {
    color: colors.neutral_white,
    fontSize: fontSize.xxl,
  },

  text_buttonTopic: {
    color: colors.neutral_white,
    fontSize: fontSize.sm,
  },

  text_buttonSelected: {
    color: colors.neutral_white,
    fontSize: fontSize.lg,
  },

  text_title: {
    color: colors.neutral_white,
    fontSize: fontSize.xl,
  },

  text_appTitle: {
    paddingTop: '5%',
    color: colors.neutral_white,
    fontSize: fontSize.display,
  },

  text_sectionHeader: {
    color: colors.neutral_white,
    fontSize: fontSize.xxl,
    fontWeight: 'bold',
  },

  text_instructions: {
    color: colors.neutral_white,
    fontSize: fontSize.md,
    textAlign: 'center',
  },

  text_body: {
    color: colors.neutral_white,
    fontSize: fontSize.md,
    textAlign: 'center',
  },

  text_score: {
    color: colors.neutral_white,
    fontSize: fontSize.md,
  },

  text_question: {
    color: colors.neutral_white,
    fontSize: fontSize.md,
    textAlign: 'center',
  },

  text_answer: {
    color: colors.neutral_white,
    fontSize: fontSize.sm,
    textAlign: 'center',
  },

  text_points: {
    color: colors.neutral_white,
    fontSize: fontSize.sm,
  },

  text_statHeader: {
    color: colors.neutral_white,
    fontSize: fontSize.xxl,
    textAlign: 'right',
  },

  text_statLabel: {
    color: colors.neutral_white,
    fontSize: fontSize.md,
    textAlign: 'right',
  },

  text_statValue: {
    color: colors.neutral_white,
    fontSize: fontSize.md,
    textAlign: 'left',
  },

  text_error: {
    color: colors.neutral_white,
    fontSize: fontSize.xxxl,
  },
});
