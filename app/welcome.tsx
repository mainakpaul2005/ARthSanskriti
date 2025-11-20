import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { AppTheme, FontFamily } from '@/constants/theme';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: AppTheme.background }]}>
      <View style={styles.content}>
        {/* App Logo/Icon */}
        <View style={styles.logoContainer}>
          <ThemedText style={styles.logo}>🎨</ThemedText>
        </View>

        {/* App Title */}
        <ThemedText type="title" style={styles.title}>
          ARth Sanskriti
        </ThemedText>

        {/* Subtitle */}
        <ThemedText style={styles.subtitle}>
          Explore Indian Art & Culture through Augmented Reality
        </ThemedText>

        {/* Description */}
        <ThemedText style={styles.description}>
          Discover museums, heritage sites, and cultural artifacts in an immersive AR experience.
        </ThemedText>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, { backgroundColor: AppTheme.tint }]}
          onPress={() => router.push('/signup' as any)}>
          <ThemedText style={[styles.buttonText, { color: '#fff' }]}>Get Started</ThemedText>
        </Pressable>

        <Pressable
          style={[styles.button, styles.buttonOutline, { borderColor: AppTheme.tint }]}
          onPress={() => router.push('/login' as any)}>
          <ThemedText style={[styles.buttonText, { color: AppTheme.tint }]}>
            I already have an account
          </ThemedText>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 24,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  logo: {
    fontSize: 64,
  },
  title: {
    fontSize: 36,
    fontFamily: FontFamily.headingBlack,
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: FontFamily.semiBold,
    textAlign: 'center',
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 15,
    fontFamily: FontFamily.regular,
    textAlign: 'center',
    opacity: 0.7,
    paddingHorizontal: 32,
    lineHeight: 22,
  },
  buttonContainer: {
    gap: 16,
    paddingBottom: 20,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: FontFamily.semiBold,
  },
});
