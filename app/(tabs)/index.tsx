import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { AppTheme, FontFamily } from '@/constants/theme';
import { useAuth } from '@/context/AuthContext';

export default function HomeScreen() {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <ScrollView style={[styles.container, { backgroundColor: AppTheme.background }]}>
      <ThemedView style={styles.content}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <ThemedText type="title" style={styles.welcomeText}>
            Welcome, {user?.displayName || 'Explorer'}! 🙏
          </ThemedText>
          <ThemedText style={styles.subtitle}>
            Discover India's rich cultural heritage through AR
          </ThemedText>
        </View>

        {/* Featured Section */}
        <View style={[styles.card, { backgroundColor: AppTheme.card }]}>
          <View style={styles.cardHeader}>
            <ThemedText type="subtitle">✨ Featured Experiences</ThemedText>
          </View>

          <Pressable style={[styles.featureCard, { borderColor: AppTheme.border }]}>
            <ThemedText style={styles.featureIcon}>🏛️</ThemedText>
            <View style={styles.featureContent}>
              <ThemedText style={styles.featureTitle}>Taj Mahal</ThemedText>
              <ThemedText style={styles.featureDescription}>
                Experience the monument of love in AR
              </ThemedText>
            </View>
          </Pressable>

          <Pressable style={[styles.featureCard, { borderColor: AppTheme.border }]}>
            <ThemedText style={styles.featureIcon}>🕉️</ThemedText>
            <View style={styles.featureContent}>
              <ThemedText style={styles.featureTitle}>Ancient Temples</ThemedText>
              <ThemedText style={styles.featureDescription}>
                Explore sacred architecture and history
              </ThemedText>
            </View>
          </Pressable>

          <Pressable style={[styles.featureCard, { borderColor: AppTheme.border }]}>
            <ThemedText style={styles.featureIcon}>🎨</ThemedText>
            <View style={styles.featureContent}>
              <ThemedText style={styles.featureTitle}>Traditional Art</ThemedText>
              <ThemedText style={styles.featureDescription}>
                Discover regional art forms and crafts
              </ThemedText>
            </View>
          </Pressable>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={[styles.statCard, { backgroundColor: AppTheme.card }]}>
            <ThemedText style={styles.statNumber}>150+</ThemedText>
            <ThemedText style={styles.statLabel}>Monuments</ThemedText>
          </View>

          <View style={[styles.statCard, { backgroundColor: AppTheme.card }]}>
            <ThemedText style={styles.statNumber}>50+</ThemedText>
            <ThemedText style={styles.statLabel}>Museums</ThemedText>
          </View>

          <View style={[styles.statCard, { backgroundColor: AppTheme.card }]}>
            <ThemedText style={styles.statNumber}>100+</ThemedText>
            <ThemedText style={styles.statLabel}>Artifacts</ThemedText>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={[styles.card, { backgroundColor: AppTheme.card }]}>
          <ThemedText type="subtitle" style={styles.cardTitle}>
            📚 Continue Learning
          </ThemedText>

          <View style={styles.activityItem}>
            <ThemedText style={styles.activityIcon}>🏰</ThemedText>
            <View style={styles.activityContent}>
              <ThemedText style={styles.activityTitle}>Mughal Architecture</ThemedText>
              <ThemedText style={styles.activityDescription}>2 lessons remaining</ThemedText>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { backgroundColor: AppTheme.tint, width: '60%' }]} />
            </View>
          </View>

          <View style={styles.activityItem}>
            <ThemedText style={styles.activityIcon}>🪔</ThemedText>
            <View style={styles.activityContent}>
              <ThemedText style={styles.activityTitle}>Indian Festivals</ThemedText>
              <ThemedText style={styles.activityDescription}>4 lessons remaining</ThemedText>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { backgroundColor: AppTheme.tint, width: '30%' }]} />
            </View>
          </View>
        </View>

        {/* CTA Button */}
        <Pressable
          style={[styles.ctaButton, { backgroundColor: AppTheme.tint }]}
          onPress={() => router.push('/(tabs)/explore')}>
          <ThemedText style={styles.ctaText}>Start Exploring →</ThemedText>
        </Pressable>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  hero: {
    marginBottom: 32,
  },
  welcomeText: {
    fontSize: 32,
    fontFamily: FontFamily.heading,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: FontFamily.regular,
    opacity: 0.7,
    lineHeight: 24,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: AppTheme.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  cardHeader: {
    marginBottom: 16,
  },
  cardTitle: {
    marginBottom: 16,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(128, 128, 128, 0.2)',
    marginBottom: 12,
  },
  featureIcon: {
    fontSize: 40,
    marginRight: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontFamily: FontFamily.semiBold,
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    fontFamily: FontFamily.regular,
    opacity: 0.7,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    marginHorizontal: 4,
    shadowColor: AppTheme.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  statNumber: {
    fontSize: 28,
    fontFamily: FontFamily.bold,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    opacity: 0.7,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  activityIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontFamily: FontFamily.semiBold,
    marginBottom: 4,
  },
  activityDescription: {
    fontSize: 13,
    opacity: 0.7,
    marginBottom: 8,
  },
  progressBar: {
    height: 4,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    borderRadius: 2,
    overflow: 'hidden',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 44,
    right: 0,
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  ctaButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 40,
    shadowColor: AppTheme.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  ctaText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: FontFamily.semiBold,
  },
});
