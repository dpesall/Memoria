import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme/colors';
import { sizing } from '../../styles/theme/sizing';
import { spacing } from '../../styles/theme/spacing';
import { fontFamily, fontSize } from '../../styles/theme/typography';

const styles = StyleSheet.create({
  gameOver_container: {
    flex: 1,
    backgroundColor: colors.primary_background,
  },

  gameOver_scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: spacing.xxl,
  },

  gameOver_hero: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },

  gameOver_heroTitle: {
    color: colors.text_primary,
    fontSize: fontSize.xxl,
    fontFamily: 'Arvo_700Bold',
    marginBottom: spacing.lg,
  },

  gameOver_heroScore: {
    color: colors.accent_primary,
    fontSize: 80,
    fontFamily: 'Arvo_400Regular',
  },

  gameOver_heroLabel: {
    color: colors.text_secondary,
    fontSize: fontSize.xs,
    fontFamily: fontFamily.bodyMedium,
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginTop: spacing.xs,
  },

  gameOver_statsCard: {
    backgroundColor: colors.primary_cardTransparent,
    borderRadius: sizing.borderRadius_card,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    padding: spacing.xl,
    marginHorizontal: spacing.lg,
    width: sizing.button_width_large,
  },

  gameOver_statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border_card,
  },

  gameOver_statRowLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },

  gameOver_statLabel: {
    color: colors.text_secondary,
    fontSize: fontSize.sm,
    fontFamily: fontFamily.body,
  },

  gameOver_statValue: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  gameOver_statValueAccent: {
    color: colors.accent_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },

  gameOver_footer: {
    alignItems: 'center',
    paddingVertical: spacing.xxl,
  },

  gameOver_exitButton: {
    backgroundColor: colors.accent_primary,
    borderRadius: sizing.borderRadius_button,
    width: sizing.button_width,
    height: sizing.button_height,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.shadow_dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },

  gameOver_exitButtonText: {
    color: colors.text_primary,
    fontSize: fontSize.md,
    fontFamily: fontFamily.bodySemiBold,
  },
});

export default styles;
