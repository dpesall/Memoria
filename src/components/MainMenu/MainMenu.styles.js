import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';
import { fontSize } from '../../styles/theme/typography';
import { layout, spacing } from '../../styles/theme/spacing';

const styles = StyleSheet.create({
  mainMenu_container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary_background,
    paddingTop: spacing.xl,
  },

  mainMenu_title: {
    color: colors.neutral_white,
    fontSize: fontSize.display,
    letterSpacing: 4,
    fontWeight: '300',
  },

  mainMenu_logoContainer: {
    alignItems: 'center',
    marginTop: spacing.xl,
    marginBottom: spacing.xxl,
  },

  mainMenu_logo: {
    width: sizing.logo_large,
    height: sizing.logo_large,
    borderRadius: sizing.logo_large / 3,
  },

  mainMenu_button: {
    backgroundColor: colors.primary_dark,
    width: sizing.button_width,
    paddingVertical: 18,
    borderRadius: sizing.borderRadius_button,
    marginVertical: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_subtle,
  },

  mainMenu_buttonText: {
    color: colors.neutral_white,
    fontSize: fontSize.xl,
    fontWeight: '600',
    letterSpacing: 1,
  },

  mainMenu_errorText: {
    color: colors.neutral_white,
    fontSize: fontSize.xxxl,
  },
});

export default styles;
