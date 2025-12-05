import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';
import { spacing } from '../../styles/theme/spacing';
import { fontFamily, fontSize } from '../../styles/theme/typography';

const styles = StyleSheet.create({
  play_container: {
    flex: 1,
    backgroundColor: colors.primary_background,
  },

  play_header: {
    padding: spacing.lg,
    backgroundColor: colors.primary_card,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
    alignItems: 'center',
  },

  play_title: {
    color: colors.text_primary,
    fontSize: fontSize.xxl,
    fontFamily: 'Arvo_700Bold',
  },

  play_content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: spacing.xxl,
  },

  play_modeButton: {
    backgroundColor: colors.primary_cardTransparent,
    borderRadius: sizing.borderRadius_card,
    borderWidth: sizing.borderWidth_standard,
    borderColor: colors.accent_primary,
    padding: spacing.xl,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
    width: sizing.button_width_large,
    alignItems: 'center',
  },

  play_modeTitle: {
    color: colors.accent_primary,
    fontSize: fontSize.lg,
    fontFamily: fontFamily.bodySemiBold,
    marginBottom: spacing.sm,
  },

  play_modeDescription: {
    color: colors.text_secondary,
    fontSize: fontSize.xs,
    fontFamily: fontFamily.body,
    textAlign: 'center',
  },

  play_footer: {
    alignItems: 'center',
    paddingBottom: spacing.xxl,
  },

  play_backButton: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    width: sizing.button_width,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
  },

  play_backButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },
});

export default styles;
