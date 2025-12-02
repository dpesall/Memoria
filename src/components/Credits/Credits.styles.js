import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';
import { fontSize } from '../../styles/theme/typography';
import { spacing } from '../../styles/theme/spacing';

const styles = StyleSheet.create({
  credits_container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary_background,
  },

  credits_header: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: sizing.fullWidth,
    backgroundColor: colors.primary_dark,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.overlay_light,
  },

  credits_title: {
    color: colors.neutral_white,
    fontSize: fontSize.xl,
    fontWeight: '600',
    letterSpacing: 1,
  },

  credits_logoContainer: {
    alignItems: 'center',
    marginTop: spacing.xxl,
    marginBottom: spacing.xl,
  },

  credits_logo: {
    width: sizing.logo_medium,
    height: sizing.logo_medium,
    borderRadius: sizing.logo_medium / 3,
  },

  credits_button: {
    backgroundColor: colors.primary_dark,
    width: sizing.button_width,
    paddingVertical: 16,
    borderRadius: sizing.borderRadius_button,
    marginVertical: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_subtle,
  },

  credits_buttonText: {
    color: colors.neutral_white,
    fontSize: fontSize.md,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

export default styles;
