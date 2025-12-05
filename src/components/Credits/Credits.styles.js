import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';
import { spacing } from '../../styles/theme/spacing';
import { fontFamily, fontSize } from '../../styles/theme/typography';

const styles = StyleSheet.create({
  credits_container: {
    flex: 1,
    backgroundColor: colors.primary_background,
  },

  credits_header: {
    padding: spacing.lg,
    backgroundColor: colors.primary_card,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
    alignItems: 'center',
  },

  credits_title: {
    color: colors.text_primary,
    fontSize: fontSize.xxl,
    fontFamily: 'Arvo_700Bold',
  },

  credits_scrollContent: {
    flexGrow: 1,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },

  credits_heroSection: {
    alignItems: 'center',
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
  },

  credits_logoContainer: {
    marginBottom: spacing.md,
  },

  credits_logo: {
    width: sizing.logo_medium,
    height: sizing.logo_medium,
    borderRadius: sizing.borderRadius_card,
  },

  credits_appName: {
    color: colors.text_primary,
    fontSize: fontSize.xxxl,
    fontFamily: 'Arvo_700Bold',
    marginBottom: spacing.xs,
  },

  credits_tagline: {
    color: colors.accent_primary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.bodyMedium,
    letterSpacing: 1,
  },

  credits_section: {
    marginTop: spacing.xl,
  },

  credits_sectionLabel: {
    color: colors.text_secondary,
    fontSize: fontSize.xs,
    fontFamily: fontFamily.bodyMedium,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },

  credits_developerCard: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_card,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_accent,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    alignItems: 'center',
  },

  credits_developerName: {
    color: colors.text_primary,
    fontSize: fontSize.xl,
    fontFamily: 'Arvo_700Bold',
  },

  credits_techStack: {
    gap: spacing.sm,
  },

  credits_techItem: {
    backgroundColor: colors.primary_cardTransparent,
    borderRadius: sizing.borderRadius_card,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  credits_techName: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  credits_techDescription: {
    color: colors.text_muted,
    fontSize: fontSize.xs,
    fontFamily: fontFamily.body,
    flex: 1,
    textAlign: 'right',
    marginLeft: spacing.md,
  },

  credits_versionSection: {
    marginTop: spacing.xxl,
    alignItems: 'center',
    paddingTop: spacing.lg,
    borderTopWidth: sizing.borderWidth_subtle,
    borderTopColor: colors.border_card,
  },

  credits_versionText: {
    color: colors.text_muted,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.body,
    marginBottom: spacing.xs,
  },

  credits_copyrightText: {
    color: colors.text_secondary,
    fontSize: fontSize.xs,
    fontFamily: fontFamily.body,
  },

  credits_footer: {
    alignItems: 'center',
    paddingVertical: spacing.lg,
    borderTopWidth: sizing.borderWidth_subtle,
    borderTopColor: colors.border_card,
  },

  credits_backButton: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    width: sizing.button_width,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
  },

  credits_backButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },
});

export default styles;
