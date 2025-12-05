import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';
import { spacing } from '../../styles/theme/spacing';
import { fontFamily, fontSize } from '../../styles/theme/typography';

const styles = StyleSheet.create({
  userProfile_container: {
    flex: 1,
    backgroundColor: colors.primary_background,
  },

  userProfile_header: {
    padding: spacing.lg,
    backgroundColor: colors.primary_card,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
    alignItems: 'center',
  },

  userProfile_title: {
    color: colors.text_primary,
    fontSize: fontSize.xxl,
    fontFamily: 'Arvo_700Bold',
  },

  userProfile_loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  userProfile_content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: spacing.xxl,
  },

  userProfile_username: {
    color: colors.text_primary,
    fontSize: fontSize.xxxl,
    fontFamily: fontFamily.bodySemiBold,
    marginBottom: spacing.md,
  },

  userProfile_friendButton: {
    backgroundColor: colors.accent_primary,
    borderRadius: sizing.borderRadius_button,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.xl,
    minWidth: 140,
    alignItems: 'center',
  },

  userProfile_friendButtonPending: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.xl,
    minWidth: 140,
    alignItems: 'center',
  },

  userProfile_friendButtonRemove: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.xl,
    minWidth: 140,
    alignItems: 'center',
  },

  userProfile_friendButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  userProfile_friendButtonTextSecondary: {
    color: colors.text_secondary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.body,
  },

  userProfile_statsCard: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_card,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    padding: spacing.xl,
    width: sizing.button_width_large,
  },

  userProfile_statRowStacked: {
    paddingVertical: spacing.md,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
  },

  userProfile_statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
  },

  userProfile_statRowLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },

  userProfile_statLabel: {
    color: colors.text_secondary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.body,
  },

  userProfile_statValue: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  userProfile_statValueLarge: {
    color: colors.text_primary,
    fontSize: fontSize.lg,
    fontFamily: fontFamily.bodySemiBold,
    marginTop: spacing.xs,
  },

  userProfile_errorText: {
    color: colors.text_secondary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.body,
  },

  userProfile_footer: {
    alignItems: 'center',
    paddingBottom: spacing.xxl,
  },

  userProfile_backButton: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    width: sizing.button_width,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
  },

  userProfile_backButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  userProfile_modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },

  userProfile_modalContent: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_card,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    padding: spacing.xl,
    width: '85%',
    maxWidth: 360,
  },

  userProfile_modalUsername: {
    color: colors.text_primary,
    fontSize: fontSize.xl,
    fontFamily: fontFamily.bodySemiBold,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },

  userProfile_modalStats: {
    backgroundColor: colors.primary_background,
    borderRadius: sizing.borderRadius_button,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },

  userProfile_modalStatRowStacked: {
    paddingVertical: spacing.sm,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
  },

  userProfile_modalStatValueLarge: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
    marginTop: spacing.xs,
  },

  userProfile_modalStatRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
  },

  userProfile_modalStatRowLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },

  userProfile_modalStatLabel: {
    color: colors.text_secondary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.body,
  },

  userProfile_modalStatValue: {
    color: colors.text_primary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.bodySemiBold,
  },

  userProfile_modalActions: {
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
    minHeight: 44,
    alignItems: 'center',
  },

  userProfile_modalRemoveButton: {
    flex: 1,
    backgroundColor: '#8B3A3A',
    borderRadius: sizing.borderRadius_button,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },

  userProfile_modalRemoveButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  userProfile_modalCancelButton: {
    flex: 1,
    backgroundColor: colors.primary_background,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },

  userProfile_modalCancelButtonText: {
    color: colors.text_secondary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.body,
  },
});

export default styles;
