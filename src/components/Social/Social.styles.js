import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';
import { spacing } from '../../styles/theme/spacing';
import { fontFamily, fontSize } from '../../styles/theme/typography';

const styles = StyleSheet.create({
  social_container: {
    flex: 1,
    backgroundColor: colors.primary_background,
  },

  social_header: {
    padding: spacing.lg,
    backgroundColor: colors.primary_card,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
    alignItems: 'center',
  },

  social_title: {
    color: colors.text_primary,
    fontSize: fontSize.xxl,
    fontFamily: 'Arvo_700Bold',
  },

  social_content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },

  social_loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  social_buttonList: {
    width: '100%',
    maxWidth: sizing.button_width_large,
    gap: spacing.md,
  },

  social_menuButton: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },

  social_menuButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  social_menuButtonLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  social_menuButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.lg,
    fontFamily: fontFamily.bodySemiBold,
  },

  social_badge: {
    color: colors.text_secondary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.body,
    marginLeft: spacing.sm,
  },

  social_pendingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.accent_primary,
    marginLeft: spacing.xs,
  },

  social_footer: {
    alignItems: 'center',
    paddingBottom: spacing.xxl,
  },

  social_backButton: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    width: sizing.button_width,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
  },

  social_backButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },
});

export default styles;
