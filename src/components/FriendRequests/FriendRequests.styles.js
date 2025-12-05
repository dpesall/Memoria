import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';
import { spacing } from '../../styles/theme/spacing';
import { fontFamily, fontSize } from '../../styles/theme/typography';

const styles = StyleSheet.create({
  friendRequests_container: {
    flex: 1,
    backgroundColor: colors.primary_background,
  },

  friendRequests_header: {
    padding: spacing.lg,
    backgroundColor: colors.primary_card,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
    alignItems: 'center',
  },

  friendRequests_title: {
    color: colors.text_primary,
    fontSize: fontSize.xxl,
    fontFamily: 'Arvo_700Bold',
  },

  friendRequests_tabContainer: {
    flexDirection: 'row',
    padding: spacing.lg,
    gap: spacing.sm,
  },

  friendRequests_tab: {
    flex: 1,
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    paddingVertical: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: spacing.xs,
  },

  friendRequests_tabActive: {
    backgroundColor: colors.accent_primary,
    borderColor: colors.accent_primary,
  },

  friendRequests_tabText: {
    color: colors.text_secondary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.body,
  },

  friendRequests_tabTextActive: {
    color: colors.text_primary,
    fontFamily: fontFamily.bodySemiBold,
  },

  friendRequests_tabBadge: {
    backgroundColor: colors.accent_primary,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xs,
  },

  friendRequests_tabBadgeOutgoing: {
    backgroundColor: colors.text_muted,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xs,
  },

  friendRequests_tabBadgeText: {
    color: colors.text_primary,
    fontSize: fontSize.xs,
    fontFamily: fontFamily.bodySemiBold,
  },

  friendRequests_content: {
    flex: 1,
  },

  friendRequests_loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  friendRequests_list: {
    padding: spacing.lg,
    paddingTop: 0,
  },

  friendRequests_listEmpty: {
    flexGrow: 1,
  },

  friendRequests_row: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_card,
    padding: spacing.md,
    marginBottom: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  friendRequests_info: {
    flex: 1,
    marginRight: spacing.md,
  },

  friendRequests_username: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
    marginBottom: spacing.xs,
  },

  friendRequests_stats: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  friendRequests_stat: {
    color: colors.text_secondary,
    fontSize: fontSize.xs,
    fontFamily: fontFamily.body,
  },

  friendRequests_statDivider: {
    color: colors.text_muted,
    fontSize: fontSize.xs,
    marginHorizontal: spacing.sm,
  },

  friendRequests_actions: {
    flexDirection: 'row',
    gap: spacing.xs,
  },

  friendRequests_acceptButton: {
    backgroundColor: colors.accent_primary,
    borderRadius: sizing.borderRadius_button,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },

  friendRequests_acceptButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.bodySemiBold,
  },

  friendRequests_declineButton: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },

  friendRequests_declineButtonText: {
    color: colors.text_secondary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.body,
  },

  friendRequests_cancelButton: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },

  friendRequests_cancelButtonText: {
    color: colors.text_secondary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.body,
  },

  friendRequests_emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },

  friendRequests_emptyText: {
    color: colors.text_secondary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.body,
    textAlign: 'center',
  },

  friendRequests_footer: {
    alignItems: 'center',
    paddingBottom: spacing.xxl,
  },

  friendRequests_backButton: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    width: sizing.button_width,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
  },

  friendRequests_backButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  friendRequests_chevron: {
    color: colors.text_secondary,
    fontSize: fontSize.xxl,
    fontFamily: fontFamily.body,
  },

  friendRequests_modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },

  friendRequests_modalContent: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_card,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    padding: spacing.xl,
    width: '85%',
    maxWidth: 360,
  },

  friendRequests_modalLoading: {
    paddingVertical: spacing.xxl,
    alignItems: 'center',
  },

  friendRequests_modalUsername: {
    color: colors.text_primary,
    fontSize: fontSize.xl,
    fontFamily: fontFamily.bodySemiBold,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },

  friendRequests_modalStats: {
    backgroundColor: colors.primary_background,
    borderRadius: sizing.borderRadius_button,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },

  friendRequests_modalStatRowStacked: {
    paddingVertical: spacing.sm,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
  },

  friendRequests_modalStatValueLarge: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
    marginTop: spacing.xs,
  },

  friendRequests_modalStatRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
  },

  friendRequests_modalStatRowLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },

  friendRequests_modalStatLabel: {
    color: colors.text_secondary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.body,
  },

  friendRequests_modalStatValue: {
    color: colors.text_primary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.bodySemiBold,
  },

  friendRequests_modalActions: {
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
    minHeight: 44,
    alignItems: 'center',
  },

  friendRequests_modalAcceptButton: {
    flex: 1,
    backgroundColor: colors.accent_primary,
    borderRadius: sizing.borderRadius_button,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },

  friendRequests_modalAcceptButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  friendRequests_modalDeclineButton: {
    flex: 1,
    backgroundColor: colors.primary_background,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },

  friendRequests_modalDeclineButtonText: {
    color: colors.text_secondary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.body,
  },

  friendRequests_modalError: {
    color: colors.text_secondary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.body,
    textAlign: 'center',
    paddingVertical: spacing.lg,
  },
});

export default styles;
