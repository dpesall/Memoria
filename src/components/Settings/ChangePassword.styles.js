import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';
import { spacing } from '../../styles/theme/spacing';
import { fontSize } from '../../styles/theme/typography';

const styles = StyleSheet.create({
  changePassword_container: {
    flex: 1,
    backgroundColor: colors.primary_background,
  },

  changePassword_header: {
    padding: spacing.lg,
    backgroundColor: colors.primary_card,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.border_card,
    alignItems: 'center',
  },

  changePassword_title: {
    color: colors.text_primary,
    fontSize: fontSize.xxl,
    fontFamily: 'Arvo_700Bold',
  },

  changePassword_content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: spacing.xxl,
  },

  changePassword_input: {
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
    width: sizing.button_width_large,
  },

  changePassword_updateButton: {
    backgroundColor: colors.accent_primary,
    borderRadius: sizing.borderRadius_button,
    width: sizing.button_width_large,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.md,
  },

  changePassword_updateButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: 'Inter_600SemiBold',
  },

  changePassword_message: {
    fontSize: fontSize.sm,
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
    marginTop: spacing.md,
    width: sizing.button_width_large,
  },

  changePassword_errorMessage: {
    color: colors.feedback_error,
  },

  changePassword_successMessage: {
    color: colors.feedback_success,
  },

  changePassword_footer: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },

  changePassword_backButton: {
    backgroundColor: colors.primary_card,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    width: sizing.button_width,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
  },

  changePassword_backButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: 'Inter_600SemiBold',
  },
});

export default styles;
