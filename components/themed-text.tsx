import { StyleSheet, Text, type TextProps } from 'react-native';

import { AppTheme, FontFamily } from '@/constants/theme';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = lightColor || darkColor || AppTheme.text;

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: FontFamily.regular,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: FontFamily.semiBold,
  },
  title: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: FontFamily.heading,
  },
  subtitle: {
    fontSize: 20,
    lineHeight: 28,
    fontFamily: FontFamily.semiBold,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    fontFamily: FontFamily.medium,
    color: '#0a7ea4',
  },
});
