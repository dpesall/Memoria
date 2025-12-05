import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';
import { spacing } from '../../styles/theme/spacing';
import { fontFamily, fontSize } from '../../styles/theme/typography';

const styles = StyleSheet.create({
  mainMenu_container: {
    flex: 1,
    backgroundColor: colors.primary_background,
    alignItems: 'center',
  },

  mainMenu_title: {
    color: colors.text_primary,
    fontSize: fontSize.display,
    fontFamily: 'Orbitron_700Bold',
    marginTop: spacing.sm,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },

  mainMenu_logoContainer: {
    marginTop: spacing.lg,
    marginBottom: spacing.xxxl,
  },

  mainMenu_logo: {
    width: sizing.logo_large,
    height: sizing.logo_large,
    borderRadius: sizing.borderRadius_card,
  },

  mainMenu_buttons: {
    alignItems: 'center',
  },

  mainMenu_button: {
    backgroundColor: colors.accent_primary,
    borderRadius: sizing.borderRadius_button,
    width: sizing.button_width,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.sm,
    shadowColor: colors.shadow_dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },

  mainMenu_buttonSecondary: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    width: sizing.button_width,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.sm,
  },

  mainMenu_buttonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },
});

export default styles;
