import { StyleSheet } from 'react-native';
import { sizing } from '../theme/sizing';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export const images = StyleSheet.create({
  logoContainer_centered: {
    alignItems: 'center',
    marginTop: spacing.xl,
  },

  logo_large: {
    width: sizing.logo_large,
    height: sizing.logo_large,
    borderRadius: sizing.borderRadius_card,
  },

  logo_medium: {
    width: sizing.logo_medium,
    height: sizing.logo_medium,
    borderRadius: sizing.borderRadius_card,
  },

  logo_small: {
    width: sizing.logo_small,
    height: sizing.logo_small,
    borderRadius: sizing.borderRadius_icon,
  },

  icon_titleBar: {
    width: sizing.icon_size,
    height: sizing.icon_size,
    resizeMode: 'contain',
    borderRadius: sizing.borderRadius_icon,
  },

  icon_touchable: {
    padding: 8,
    borderRadius: sizing.borderRadius_icon,
  },
});
