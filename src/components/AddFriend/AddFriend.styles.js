import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';
import { spacing } from '../../styles/theme/spacing';
import { fontFamily, fontSize } from '../../styles/theme/typography';

const styles = StyleSheet.create({
  addFriend_container: {
    flex: 1,
    backgroundColor: colors.primary_background,
  },

  addFriend_header: {
    padding: spacing.lg,
    backgroundColor: colors.primary_card,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
    alignItems: 'center',
  },

  addFriend_title: {
    color: colors.text_primary,
    fontSize: fontSize.xxl,
    fontFamily: 'Arvo_700Bold',
  },

  addFriend_searchContainer: {
    flexDirection: 'row',
    padding: spacing.lg,
    gap: spacing.sm,
  },

  addFriend_searchInput: {
    flex: 1,
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.body,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },

  addFriend_searchButton: {
    backgroundColor: colors.accent_primary,
    borderRadius: sizing.borderRadius_button,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addFriend_content: {
    flex: 1,
  },

  addFriend_loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addFriend_list: {
    padding: spacing.lg,
    paddingTop: 0,
  },

  addFriend_listEmpty: {
    flexGrow: 1,
  },

  addFriend_userRow: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_card,
    padding: spacing.md,
    marginBottom: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  addFriend_userInfo: {
    flex: 1,
    marginRight: spacing.md,
  },

  addFriend_username: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
    marginBottom: spacing.xs,
  },

  addFriend_userStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  addFriend_userStat: {
    color: colors.text_secondary,
    fontSize: fontSize.xs,
    fontFamily: fontFamily.body,
  },

  addFriend_userStatDivider: {
    color: colors.text_muted,
    fontSize: fontSize.xs,
    marginHorizontal: spacing.sm,
  },

  addFriend_actionButton: {
    backgroundColor: colors.accent_primary,
    borderRadius: sizing.borderRadius_button,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },

  addFriend_actionButtonDisabled: {
    backgroundColor: colors.primary_card,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
  },

  addFriend_actionButtonPending: {
    backgroundColor: colors.primary_card,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
  },

  addFriend_actionButtonAccept: {
    backgroundColor: colors.accent_primary,
  },

  addFriend_actionButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.bodySemiBold,
  },

  addFriend_actionButtonTextDisabled: {
    color: colors.text_secondary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.body,
  },

  addFriend_actionButtonTextPending: {
    color: colors.text_secondary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.body,
  },

  addFriend_emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },

  addFriend_emptyText: {
    color: colors.text_secondary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.body,
    textAlign: 'center',
  },

  addFriend_footer: {
    alignItems: 'center',
    paddingBottom: spacing.xxl,
  },

  addFriend_backButton: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    width: sizing.button_width,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addFriend_backButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },
});

export default styles;
