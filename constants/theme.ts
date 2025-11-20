/**
 * ARth Sanskriti - Earthy Color Palette
 * Inspired by Indian heritage and natural materials
 */

import { Platform } from 'react-native';

// Color Palette
export const AppColors = {
  oldLace: '#F7F1E1',      // Light background
  bone: '#E3D8C1',         // Secondary background
  darkGoldenrod: '#B4833D', // Primary accent
  kobicha: '#66371B',      // Dark brown text
  coyote: '#81754B',       // Muted accent
  earthGreen: '#3F3F2C',   // Dark text/elements
};

export const Colors = {
  light: {
    text: AppColors.kobicha,
    textSecondary: AppColors.coyote,
    background: AppColors.oldLace,
    backgroundSecondary: AppColors.bone,
    tint: AppColors.darkGoldenrod,
    icon: AppColors.coyote,
    tabIconDefault: AppColors.coyote,
    tabIconSelected: AppColors.darkGoldenrod,
    border: AppColors.bone,
    card: '#FFFFFF',
    shadow: AppColors.kobicha,
  },
  dark: {
    text: AppColors.kobicha,
    textSecondary: AppColors.coyote,
    background: AppColors.oldLace,
    backgroundSecondary: AppColors.bone,
    tint: AppColors.darkGoldenrod,
    icon: AppColors.coyote,
    tabIconDefault: AppColors.coyote,
    tabIconSelected: AppColors.darkGoldenrod,
    border: AppColors.bone,
    card: '#FFFFFF',
    shadow: AppColors.kobicha,
  },
};

// Single theme - always use light mode colors
export const AppTheme = Colors.light;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

// App Font Families
export const FontFamily = {
  // Body text - Modern and clean
  regular: 'Poppins_400Regular',
  light: 'Poppins_300Light',
  medium: 'Poppins_500Medium',
  semiBold: 'Poppins_600SemiBold',
  bold: 'Poppins_700Bold',
  
  // Headings - Elegant and cultural
  heading: 'Merriweather_700Bold',
  headingBlack: 'Merriweather_900Black',
  headingRegular: 'Merriweather_400Regular',
};
