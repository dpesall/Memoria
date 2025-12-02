import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const sizing = {
  // Button dimensions
  button_width: width * 0.6,
  button_width_large: width * 0.84,
  button_height: height * 0.075,
  button_height_large: height * 0.105,

  // Logo dimensions
  logo_large: width * 0.6,
  logo_medium: width * 0.3,
  logo_small: width * 0.1,

  // Icon dimensions
  icon_size: width * 0.12,

  // Border
  borderRadius_button: 24,
  borderRadius_card: 16,
  borderRadius_icon: 8,
  borderWidth_subtle: 2,
  borderWidth_standard: 2,

  // Progress bar
  progressBar_height: 15,

  // Full width
  fullWidth: width,
};
