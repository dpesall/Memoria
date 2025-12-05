import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';
import { spacing } from '../../styles/theme/spacing';
import { fontFamily, fontSize } from '../../styles/theme/typography';

const styles = StyleSheet.create({
  daily_container: {
    flex: 1,
    backgroundColor: colors.primary_background,
  },

  daily_header: {
    padding: spacing.lg,
    backgroundColor: colors.primary_card,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
    alignItems: 'center',
  },

  daily_title: {
    color: colors.text_primary,
    fontSize: fontSize.xxl,
    fontFamily: 'Arvo_700Bold',
  },

  daily_content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: spacing.xxl,
  },

  daily_centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  daily_loadingText: {
    color: colors.text_secondary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.body,
    marginTop: spacing.lg,
  },

  daily_errorText: {
    color: colors.feedback_error,
    fontSize: fontSize.md,
    fontFamily: fontFamily.body,
    marginBottom: spacing.lg,
    textAlign: 'center',
    paddingHorizontal: spacing.xl,
  },

  daily_retryButton: {
    backgroundColor: colors.accent_primary,
    borderRadius: sizing.borderRadius_button,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
  },

  daily_retryButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  daily_infoCard: {
    backgroundColor: colors.primary_cardTransparent,
    borderRadius: sizing.borderRadius_card,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    padding: spacing.xl,
    marginHorizontal: spacing.lg,
    width: sizing.button_width_large,
    alignItems: 'center',
  },

  daily_lockedCard: {
    backgroundColor: colors.primary_cardTransparent,
    borderRadius: sizing.borderRadius_card,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    padding: spacing.xl,
    marginHorizontal: spacing.lg,
    width: sizing.button_width_large,
    alignItems: 'center',
  },

  daily_resultsCard: {
    backgroundColor: colors.primary_cardTransparent,
    borderRadius: sizing.borderRadius_card,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    padding: spacing.xl,
    marginHorizontal: spacing.lg,
    width: sizing.button_width_large,
    alignItems: 'center',
  },

  daily_lockedTitle: {
    color: colors.accent_primary,
    fontSize: fontSize.xl,
    fontFamily: fontFamily.bodySemiBold,
    marginBottom: spacing.sm,
  },

  daily_dateText: {
    color: colors.text_secondary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.bodyMedium,
    marginBottom: spacing.lg,
  },

  daily_rulesList: {
    alignSelf: 'flex-start',
    width: '100%',
  },

  daily_ruleRow: {
    flexDirection: 'row',
    marginVertical: spacing.xs,
  },

  daily_ruleBullet: {
    color: colors.text_primary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.body,
    marginRight: spacing.sm,
  },

  daily_ruleText: {
    color: colors.text_primary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.body,
    flex: 1,
  },

  daily_startButton: {
    backgroundColor: colors.accent_primary,
    borderRadius: sizing.borderRadius_button,
    width: sizing.button_width_large,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xl,
    shadowColor: colors.shadow_dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },

  daily_startButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  daily_footer: {
    alignItems: 'center',
    paddingBottom: spacing.xxl,
  },

  daily_backButton: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    width: sizing.button_width,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
  },

  daily_backButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  daily_leaderboardButton: {
    backgroundColor: colors.accent_primary,
    borderRadius: sizing.borderRadius_button,
    width: sizing.button_width_large,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xl,
    shadowColor: colors.shadow_dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },

  daily_leaderboardButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  daily_resultsSummary: {
    width: '100%',
    marginVertical: spacing.lg,
  },

  daily_resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border_card,
  },

  daily_resultLabel: {
    color: colors.text_secondary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.body,
  },

  daily_resultValue: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  daily_comeBackText: {
    color: colors.text_secondary,
    fontSize: fontSize.xs,
    fontFamily: fontFamily.body,
    textAlign: 'center',
    marginTop: spacing.lg,
    fontStyle: 'italic',
  },

  daily_finalScore: {
    color: colors.accent_primary,
    fontSize: 56,
    fontFamily: fontFamily.bodyBold,
    marginTop: spacing.md,
  },

  daily_finalScoreLabel: {
    color: colors.text_secondary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.bodyMedium,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: spacing.xl,
  },

  daily_statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: spacing.lg,
  },

  daily_statItem: {
    alignItems: 'center',
  },

  daily_statValue: {
    color: colors.text_primary,
    fontSize: fontSize.xl,
    fontFamily: fontFamily.bodySemiBold,
    marginBottom: spacing.xs,
  },

  daily_statLabel: {
    color: colors.text_secondary,
    fontSize: fontSize.xs,
    fontFamily: fontFamily.body,
  },
});

export default styles;
