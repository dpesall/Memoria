import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { sizing } from '../theme/sizing';
import { spacing } from '../theme/spacing';

export const gameOver = StyleSheet.create({
  scoreBox_container: {
    backgroundColor: colors.primary_dark,
    padding: spacing.xl,
    borderRadius: sizing.borderRadius_button,
    borderWidth: sizing.borderWidth_standard,
    borderColor: colors.neutral_black,
    marginTop: spacing.xl,
  },

  table_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
  },

  table_cellLabel: {
    flex: 1,
    paddingRight: spacing.md,
  },

  table_cellValue: {
    flex: 1,
    paddingLeft: spacing.md,
  },
});
