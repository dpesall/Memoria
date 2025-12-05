import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';
import { spacing } from '../../styles/theme/spacing';
import { fontFamily, fontSize } from '../../styles/theme/typography';

const styles = StyleSheet.create({
  profile_container: {
    flex: 1,
    backgroundColor: colors.primary_background,
  },

  profile_header: {
    padding: spacing.lg,
    backgroundColor: colors.primary_card,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
    alignItems: 'center',
  },

  profile_title: {
    color: colors.text_primary,
    fontSize: fontSize.xxl,
    fontFamily: 'Arvo_700Bold',
  },

  profile_content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: spacing.xxl,
  },

  profile_username: {
    color: colors.text_primary,
    fontSize: fontSize.xxxl,
    fontFamily: fontFamily.bodySemiBold,
    marginBottom: spacing.xxl,
  },

  profile_statsCard: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_card,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    padding: spacing.xl,
    width: sizing.button_width_large,
  },

  profile_statRowStacked: {
    paddingVertical: spacing.md,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
  },

  profile_statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
  },

  profile_statRowLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },

  profile_statLabel: {
    color: colors.text_secondary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.body,
  },

  profile_statValue: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  profile_statValueLarge: {
    color: colors.text_primary,
    fontSize: fontSize.lg,
    fontFamily: fontFamily.bodySemiBold,
    marginTop: spacing.xs,
  },

  profile_footer: {
    alignItems: 'center',
    paddingBottom: spacing.xxl,
  },

  profile_backButton: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    width: sizing.button_width,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profile_backButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },
});

export default styles;
