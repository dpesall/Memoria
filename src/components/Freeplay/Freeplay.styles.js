import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';
import { spacing } from '../../styles/theme/spacing';
import { fontFamily, fontSize } from '../../styles/theme/typography';

const styles = StyleSheet.create({
  freeplay_container: {
    flex: 1,
    backgroundColor: colors.primary_background,
  },

  freeplay_header: {
    padding: spacing.lg,
    backgroundColor: colors.primary_card,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
    alignItems: 'center',
  },

  freeplay_title: {
    color: colors.text_primary,
    fontSize: fontSize.xxl,
    fontFamily: 'Arvo_700Bold',
  },

  freeplay_content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: spacing.xxl,
  },

  freeplay_optionCard: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_card,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    padding: spacing.lg,
    marginVertical: spacing.sm,
    width: sizing.button_width_large,
    alignItems: 'center',
  },

  freeplay_optionLabel: {
    color: colors.text_secondary,
    fontSize: fontSize.xs,
    fontFamily: fontFamily.bodyMedium,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: spacing.xs,
  },

  freeplay_optionValue: {
    color: colors.accent_primary,
    fontSize: fontSize.lg,
    fontFamily: fontFamily.bodySemiBold,
  },

  freeplay_startButton: {
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

  freeplay_startButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  freeplay_footer: {
    alignItems: 'center',
    paddingBottom: spacing.xxl,
  },

  freeplay_backButton: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    width: sizing.button_width,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
  },

  freeplay_backButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  freeplay_selectionContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: spacing.xxl,
    paddingBottom: spacing.lg,
  },

  freeplay_selectionButton: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    width: sizing.button_width_large,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.sm,
  },

  freeplay_selectionButtonActive: {
    borderColor: colors.accent_primary,
    borderWidth: sizing.borderWidth_standard,
  },

  freeplay_selectionButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.bodyMedium,
  },

  freeplay_selectionButtonTextActive: {
    color: colors.accent_primary,
    fontFamily: fontFamily.bodySemiBold,
  },

  freeplay_modeCard: {
    backgroundColor: colors.primary_cardTransparent,
    borderRadius: sizing.borderRadius_card,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    padding: spacing.xl,
    marginVertical: spacing.sm,
    width: sizing.button_width_large,
    alignItems: 'center',
  },

  freeplay_modeCardActive: {
    borderColor: colors.accent_primary,
    borderWidth: sizing.borderWidth_standard,
  },

  freeplay_modeTitle: {
    color: colors.text_primary,
    fontSize: fontSize.lg,
    fontFamily: fontFamily.bodySemiBold,
    marginBottom: spacing.sm,
  },

  freeplay_modeTitleActive: {
    color: colors.accent_primary,
  },

  freeplay_modeDescription: {
    color: colors.text_secondary,
    fontSize: fontSize.xs,
    fontFamily: fontFamily.body,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default styles;
