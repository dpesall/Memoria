import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { sizing } from '../theme/sizing';
import { spacing } from '../theme/spacing';

export const gameOver = StyleSheet.create({
  hero_container: {
    alignItems: 'center',
    paddingVertical: spacing.xxxl,
  },

  hero_score: {
    color: colors.accent_primary,
    fontSize: 80,
    fontFamily: 'Righteous_400Regular',
  },

  hero_label: {
    color: colors.text_secondary,
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginTop: 4,
  },

  scoreBox_container: {
    backgroundColor: colors.primary_cardTransparent,
    borderRadius: sizing.borderRadius_card,
    borderWidth: sizing.borderWidth_subtle,
    borderColor: colors.border_card,
    padding: spacing.xl,
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
  },

  table_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border_card,
  },

  table_rowLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },

  table_cellLabel: {
    color: colors.text_secondary,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },

  table_cellValue: {
    color: colors.text_primary,
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
  },

  table_cellValueAccent: {
    color: colors.accent_primary,
    fontSize: 18,
    fontFamily: 'Inter_600SemiBold',
  },
});
