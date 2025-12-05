import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';
import { spacing } from '../../styles/theme/spacing';
import { fontFamily, fontSize } from '../../styles/theme/typography';

const styles = StyleSheet.create({
  friendsList_container: {
    flex: 1,
    backgroundColor: colors.primary_background,
  },

  friendsList_header: {
    padding: spacing.lg,
    backgroundColor: colors.primary_card,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
    alignItems: 'center',
  },

  friendsList_title: {
    color: colors.text_primary,
    fontSize: fontSize.xxl,
    fontFamily: 'Arvo_700Bold',
  },

  friendsList_content: {
    flex: 1,
  },

  friendsList_loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  friendsList_list: {
    padding: spacing.lg,
  },

  friendsList_listEmpty: {
    flexGrow: 1,
  },

  friendsList_row: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_card,
    padding: spacing.md,
    marginBottom: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  friendsList_info: {
    flex: 1,
    marginRight: spacing.md,
  },

  friendsList_username: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
    marginBottom: spacing.xs,
  },

  friendsList_stats: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  friendsList_stat: {
    color: colors.text_secondary,
    fontSize: fontSize.xs,
    fontFamily: fontFamily.body,
  },

  friendsList_statDivider: {
    color: colors.text_muted,
    fontSize: fontSize.xs,
    marginHorizontal: spacing.sm,
  },

  friendsList_chevron: {
    color: colors.text_secondary,
    fontSize: fontSize.xxl,
    fontFamily: fontFamily.body,
  },

  friendsList_emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },

  friendsList_emptyText: {
    color: colors.text_secondary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.body,
    textAlign: 'center',
  },

  friendsList_footer: {
    alignItems: 'center',
    paddingBottom: spacing.xxl,
  },

  friendsList_backButton: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    width: sizing.button_width,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
  },

  friendsList_backButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },
});

export default styles;
