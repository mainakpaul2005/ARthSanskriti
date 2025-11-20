import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { AppTheme, FontFamily } from '@/constants/theme';

export default function ExploreScreen() {

  const categories = [
    { icon: '🏛️', title: 'Monuments', count: '150+', color: '#FF6B6B' },
    { icon: '🎨', title: 'Art & Crafts', count: '200+', color: '#4ECDC4' },
    { icon: '🕉️', title: 'Temples', count: '80+', color: '#FFD93D' },
    { icon: '🏰', title: 'Forts', count: '60+', color: '#95E1D3' },
    { icon: '🎭', title: 'Performing Arts', count: '50+', color: '#F38181' },
    { icon: '📚', title: 'Museums', count: '50+', color: '#AA96DA' },
  ];

  const featuredPlaces = [
    {
      title: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh',
      description: 'An ivory-white marble mausoleum on the right bank of the river Yamuna',
      icon: '🏛️',
      rating: '4.8',
    },
    {
      title: 'Ajanta Caves',
      location: 'Maharashtra',
      description: 'Buddhist cave monuments dating from the 2nd century BCE',
      icon: '🗿',
      rating: '4.7',
    },
    {
      title: 'Red Fort',
      location: 'Delhi',
      description: 'Historic fortified palace of the Mughal emperors',
      icon: '🏰',
      rating: '4.6',
    },
    {
      title: 'Konark Sun Temple',
      location: 'Odisha',
      description: 'A 13th-century CE sun temple in the shape of a giant chariot',
      icon: '🕉️',
      rating: '4.9',
    },
  ];

  const culturalEvents = [
    { title: 'Diwali Festival', date: 'Nov 1, 2025', icon: '🪔' },
    { title: 'Classical Dance Workshop', date: 'Nov 25, 2025', icon: '💃' },
    { title: 'Heritage Walk', date: 'Dec 5, 2025', icon: '🚶' },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: AppTheme.background }]}>
      <ThemedView style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <ThemedText type="title" style={styles.title}>
            Explore India
          </ThemedText>
          <ThemedText style={styles.headerSubtitle}>
            Discover the beauty and diversity of Indian culture
          </ThemedText>
        </View>

        {/* Categories Grid */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Categories
          </ThemedText>
          <View style={styles.categoriesGrid}>
            {categories.map((category, index) => (
              <Pressable
                key={index}
                style={[styles.categoryCard, { backgroundColor: AppTheme.card }]}>
                <ThemedText style={styles.categoryIcon}>{category.icon}</ThemedText>
                <ThemedText style={styles.categoryTitle}>{category.title}</ThemedText>
                <ThemedText style={styles.categoryCount}>{category.count}</ThemedText>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Featured Places */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            🌟 Featured Places
          </ThemedText>
          {featuredPlaces.map((place, index) => (
            <Pressable
              key={index}
              style={[styles.placeCard, { backgroundColor: AppTheme.card }]}>
              <View style={styles.placeIconContainer}>
                <ThemedText style={styles.placeIcon}>{place.icon}</ThemedText>
              </View>
              <View style={styles.placeContent}>
                <ThemedText style={styles.placeTitle}>{place.title}</ThemedText>
                <ThemedText style={styles.placeLocation}>📍 {place.location}</ThemedText>
                <ThemedText style={styles.placeDescription} numberOfLines={2}>
                  {place.description}
                </ThemedText>
                <View style={styles.placeFooter}>
                  <View style={styles.ratingContainer}>
                    <ThemedText style={styles.ratingText}>⭐ {place.rating}</ThemedText>
                  </View>
                  <Pressable style={[styles.arButton, { backgroundColor: AppTheme.tint }]}>
                    <ThemedText style={styles.arButtonText}>View in AR</ThemedText>
                  </Pressable>
                </View>
              </View>
            </Pressable>
          ))}
        </View>

        {/* Upcoming Events */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            📅 Upcoming Events
          </ThemedText>
          <View style={[styles.card, { backgroundColor: AppTheme.card }]}>
            {culturalEvents.map((event, index) => (
              <View key={index}>
                <Pressable style={styles.eventItem}>
                  <View style={styles.eventIconContainer}>
                    <ThemedText style={styles.eventIcon}>{event.icon}</ThemedText>
                  </View>
                  <View style={styles.eventContent}>
                    <ThemedText style={styles.eventTitle}>{event.title}</ThemedText>
                    <ThemedText style={styles.eventDate}>{event.date}</ThemedText>
                  </View>
                  <ThemedText style={styles.eventArrow}>›</ThemedText>
                </Pressable>
                {index < culturalEvents.length - 1 && <View style={styles.divider} />}
              </View>
            ))}
          </View>
        </View>

        {/* Indian States */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            🗺️ Explore by State
          </ThemedText>
          <View style={styles.statesContainer}>
            {['Rajasthan', 'Kerala', 'Tamil Nadu', 'Maharashtra', 'Uttar Pradesh', 'Karnataka'].map(
              (state, index) => (
                <Pressable
                  key={index}
                  style={[styles.stateChip, { backgroundColor: AppTheme.card, borderColor: AppTheme.tint }]}>
                  <ThemedText style={styles.stateText}>{state}</ThemedText>
                </Pressable>
              )
            )}
          </View>
        </View>

        {/* Fun Fact */}
        <View style={[styles.funFactCard, { backgroundColor: AppTheme.tint }]}>
          <ThemedText style={styles.funFactTitle}>💡 Did You Know?</ThemedText>
          <ThemedText style={styles.funFactText}>
            India is home to 38 UNESCO World Heritage Sites, including the Taj Mahal, Qutub Minar,
            and the Ajanta Caves!
          </ThemedText>
        </View>
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
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 36,
    fontFamily: FontFamily.headingBlack,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    opacity: 0.7,
    lineHeight: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: FontFamily.semiBold,
    marginBottom: 16,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryCard: {
    width: '31%',
    aspectRatio: 1,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: AppTheme.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  categoryIcon: {
    fontSize: 36,
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 12,
    fontFamily: FontFamily.semiBold,
    textAlign: 'center',
    marginBottom: 4,
  },
  categoryCount: {
    fontSize: 11,
    opacity: 0.6,
  },
  placeCard: {
    flexDirection: 'row',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: AppTheme.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  placeIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: 'rgba(128, 128, 128, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  placeIcon: {
    fontSize: 32,
  },
  placeContent: {
    flex: 1,
  },
  placeTitle: {
    fontSize: 18,
    fontFamily: FontFamily.semiBold,
    marginBottom: 4,
  },
  placeLocation: {
    fontSize: 13,
    opacity: 0.7,
    marginBottom: 8,
  },
  placeDescription: {
    fontSize: 14,
    opacity: 0.8,
    lineHeight: 20,
    marginBottom: 12,
  },
  placeFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    fontFamily: FontFamily.semiBold,
  },
  arButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  arButtonText: {
    color: '#fff',
    fontSize: 13,
    fontFamily: FontFamily.semiBold,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    shadowColor: AppTheme.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  eventIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: 'rgba(128, 128, 128, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  eventIcon: {
    fontSize: 24,
  },
  eventContent: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontFamily: FontFamily.semiBold,
    marginBottom: 4,
  },
  eventDate: {
    fontSize: 13,
    opacity: 0.7,
  },
  eventArrow: {
    fontSize: 24,
    opacity: 0.5,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
  },
  statesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  stateChip: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
  },
  stateText: {
    fontSize: 14,
    fontFamily: FontFamily.medium,
  },
  funFactCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 40,
    shadowColor: AppTheme.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  funFactTitle: {
    fontSize: 18,
    fontFamily: FontFamily.bold,
    color: '#fff',
    marginBottom: 8,
  },
  funFactText: {
    fontSize: 15,
    color: '#fff',
    lineHeight: 22,
    opacity: 0.95,
  },
});
