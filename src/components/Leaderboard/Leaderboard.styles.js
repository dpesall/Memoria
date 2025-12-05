import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';
import { spacing } from '../../styles/theme/spacing';
import { fontFamily, fontSize } from '../../styles/theme/typography';

const styles = StyleSheet.create({
  leaderboard_container: {
    flex: 1,
    backgroundColor: colors.primary_background,
  },

  leaderboard_header: {
    padding: spacing.lg,
    backgroundColor: colors.primary_card,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
    alignItems: 'center',
  },

  leaderboard_title: {
    color: colors.text_primary,
    fontSize: fontSize.xxl,
    fontFamily: 'Arvo_700Bold',
  },

  leaderboard_toggles: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    gap: spacing.sm,
  },

  leaderboard_toggleContainer: {
    flexDirection: 'row',
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    padding: spacing.xs,
  },

  leaderboard_toggleButton: {
    flex: 1,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    borderRadius: sizing.borderRadius_button - 2,
  },

  leaderboard_toggleButtonActive: {
    backgroundColor: colors.accent_primary,
  },

  leaderboard_toggleText: {
    color: colors.text_secondary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.bodySemiBold,
  },

  leaderboard_toggleTextActive: {
    color: colors.text_primary,
  },

  leaderboard_content: {
    flex: 1,
  },

  leaderboard_list: {
    padding: spacing.lg,
    paddingTop: spacing.md,
  },

  leaderboard_listEmpty: {
    flexGrow: 1,
  },

  leaderboard_loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  leaderboard_row: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_card,
    padding: spacing.md,
    marginBottom: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },

  leaderboard_rowHighlight: {
    borderWidth: 2,
    borderColor: colors.accent_primary,
  },

  leaderboard_rowContent: {
    flex: 1,
  },

  leaderboard_rowTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },

  leaderboard_rowBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  leaderboard_rank: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
    width: 36,
    marginRight: spacing.sm,
  },

  leaderboard_rankGold: {
    color: colors.medal_gold,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodyBold,
    width: 36,
    marginRight: spacing.sm,
  },

  leaderboard_rankSilver: {
    color: colors.medal_silver,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodyBold,
    width: 36,
    marginRight: spacing.sm,
  },

  leaderboard_rankBronze: {
    color: colors.medal_bronze,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodyBold,
    width: 36,
    marginRight: spacing.sm,
  },

  leaderboard_username: {
    flex: 1,
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.body,
    marginRight: spacing.sm,
  },

  leaderboard_primaryStat: {
    color: colors.accent_primary,
    fontSize: fontSize.lg,
    fontFamily: fontFamily.bodySemiBold,
  },

  leaderboard_secondaryStat: {
    color: colors.text_secondary,
    fontSize: fontSize.xs,
    fontFamily: fontFamily.body,
  },

  leaderboard_statDivider: {
    color: colors.text_muted,
    fontSize: fontSize.xs,
    marginHorizontal: spacing.sm,
  },

  leaderboard_emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },

  leaderboard_emptyText: {
    color: colors.text_secondary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.body,
    textAlign: 'center',
  },

  leaderboard_comingSoonText: {
    color: colors.accent_primary,
    fontSize: fontSize.xl,
    fontFamily: fontFamily.bodySemiBold,
    marginBottom: spacing.md,
  },

  leaderboard_friendsHint: {
    color: colors.text_muted,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.body,
    textAlign: 'center',
    marginTop: spacing.lg,
    fontStyle: 'italic',
  },

  leaderboard_footer: {
    alignItems: 'center',
    paddingBottom: spacing.xxl,
  },

  leaderboard_backButton: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    width: sizing.button_width,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
  },

  leaderboard_backButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },
});

export default styles;
