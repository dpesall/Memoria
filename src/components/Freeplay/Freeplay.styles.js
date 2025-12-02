import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';
import { fontSize } from '../../styles/theme/typography';
import { layout, spacing } from '../../styles/theme/spacing';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  freeplay_container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary_background,
  },

  freeplay_header: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: sizing.fullWidth,
    backgroundColor: colors.primary_dark,
    borderBottomWidth: sizing.borderWidth_subtle,
    borderBottomColor: colors.overlay_light,
  },

  freeplay_title: {
    color: colors.neutral_white,
    fontSize: fontSize.xl,
    fontWeight: '600',
    letterSpacing: 1,
  },

  freeplay_section: {
    paddingVertical: 12,
    marginTop: spacing.md,
    alignItems: 'center',
  },

  freeplay_sectionHeader: {
    marginBottom: spacing.sm,
  },

  freeplay_sectionLabel: {
    color: colors.neutral_white,
    fontSize: fontSize.md,
    fontWeight: '600',
    letterSpacing: 1,
  },

  freeplay_buttonSelected: {
    backgroundColor: colors.primary_medium,
    width: width * 0.75,
    paddingVertical: 14,
    borderRadius: sizing.borderRadius_button,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_subtle,
  },

  freeplay_buttonSelectedText: {
    color: colors.neutral_white,
    fontSize: fontSize.lg,
    fontWeight: '600',
  },

  freeplay_buttonTopic: {
    backgroundColor: colors.primary_dark,
    width: sizing.button_width,
    paddingVertical: 16,
    borderRadius: sizing.borderRadius_button,
    marginVertical: spacing.xs,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_subtle,
  },

  freeplay_buttonTopicText: {
    color: colors.neutral_white,
    fontSize: fontSize.md,
    fontWeight: '500',
  },

  freeplay_button: {
    backgroundColor: colors.primary_dark,
    width: sizing.button_width,
    paddingVertical: 16,
    borderRadius: sizing.borderRadius_button,
    marginVertical: spacing.xs,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_subtle,
  },

  freeplay_buttonText: {
    color: colors.neutral_white,
    fontSize: fontSize.md,
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  freeplay_startButton: {
    backgroundColor: colors.primary_dark,
    width: sizing.button_width,
    paddingVertical: 18,
    borderRadius: sizing.borderRadius_button,
    marginBottom: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_subtle,
  },

  freeplay_startButtonText: {
    color: colors.neutral_white,
    fontSize: fontSize.lg,
    fontWeight: '600',
    letterSpacing: 1,
  },

  freeplay_footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: spacing.xl,
  },
});

export default styles;
