import { View, type ViewProps } from 'react-native';

import { AppTheme } from '@/constants/theme';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = lightColor || darkColor || AppTheme.background;

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
