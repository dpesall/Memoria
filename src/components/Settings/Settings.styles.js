import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';
import { spacing } from '../../styles/theme/spacing';
import { fontFamily, fontSize } from '../../styles/theme/typography';

const styles = StyleSheet.create({
  settings_container: {
    flex: 1,
    backgroundColor: colors.primary_background,
  },

  settings_header: {
    padding: spacing.lg,
    backgroundColor: colors.primary_card,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
    alignItems: 'center',
  },

  settings_title: {
    color: colors.text_primary,
    fontSize: fontSize.xxl,
    fontFamily: 'Arvo_700Bold',
  },

  settings_scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
  },

  settings_optionButton: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_card,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    padding: spacing.lg,
    width: sizing.button_width_large,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },

  settings_optionLabel: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodyMedium,
  },

  settings_optionValue: {
    color: colors.accent_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  settings_sectionTitle: {
    width: sizing.button_width_large,
    marginTop: spacing.xxl,
    marginBottom: spacing.md,
  },

  settings_sectionTitleText: {
    color: colors.text_secondary,
    fontSize: fontSize.xs,
    fontFamily: fontFamily.bodyMedium,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  settings_infoCard: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_card,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    padding: spacing.md,
    width: sizing.button_width_large,
    marginBottom: spacing.sm,
  },

  settings_infoLabel: {
    color: colors.text_secondary,
    fontSize: fontSize.xs,
    fontFamily: fontFamily.bodyMedium,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: spacing.xs,
  },

  settings_infoValue: {
    color: colors.text_primary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.bodySemiBold,
  },

  settings_actionButton: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    width: sizing.button_width_large,
    height: sizing.button_height_small,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },

  settings_actionButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.bodySemiBold,
  },

  settings_signOutButton: {
    backgroundColor: colors.feedback_error,
    borderRadius: sizing.borderRadius_button,
    width: sizing.button_width_large,
    height: sizing.button_height_small,
    alignItems: 'center',
    justifyContent: 'center',
  },

  settings_signOutButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.bodySemiBold,
  },

  settings_linkButton: {
    marginTop: spacing.xl,
  },

  settings_linkText: {
    color: colors.text_secondary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.body,
    textDecorationLine: 'underline',
  },

  settings_footer: {
    alignItems: 'center',
    paddingBottom: spacing.xxl,
  },

  settings_backButton: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    width: sizing.button_width,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
  },

  settings_backButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },
});

export default styles;
