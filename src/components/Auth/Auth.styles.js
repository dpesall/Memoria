import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';
import { spacing } from '../../styles/theme/spacing';
import { fontSize } from '../../styles/theme/typography';

const styles = StyleSheet.create({
  auth_container: {
    flex: 1,
    backgroundColor: colors.primary_background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
  },

  auth_title: {
    color: colors.text_primary,
    fontSize: fontSize.display,
    fontFamily: 'Orbitron_700Bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: spacing.sm,
  },

  auth_subtitle: {
    color: colors.text_secondary,
    fontSize: fontSize.lg,
    fontFamily: 'Arvo_700Bold',
    marginBottom: spacing.xxxl,
  },

  auth_form: {
    width: '100%',
    maxWidth: 320,
  },

  auth_input: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: 'Inter_400Regular',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    marginBottom: spacing.md,
  },

  auth_button: {
    backgroundColor: colors.accent_primary,
    borderRadius: sizing.borderRadius_button,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.md,
  },

  auth_buttonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: 'Inter_600SemiBold',
  },

  auth_switchButton: {
    marginTop: spacing.xl,
    alignItems: 'center',
  },

  auth_switchText: {
    color: colors.accent_primary,
    fontSize: fontSize.sm,
    fontFamily: 'Inter_400Regular',
  },

  auth_error: {
    color: colors.feedback_error,
    fontSize: fontSize.sm,
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
    marginBottom: spacing.md,
  },
});

export default styles;
