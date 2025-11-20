import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { signOut } from 'firebase/auth';
import { Alert, Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { AppTheme, FontFamily } from '@/constants/theme';
import { useAuth } from '@/context/AuthContext';
import { auth } from '@/libs/firebase';

export default function ProfileScreen() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          try {
            await signOut(auth);
            router.replace('/welcome');
          } catch (error) {
            Alert.alert('Error', 'Failed to logout. Please try again.');
          }
        },
      },
    ]);
  };

  const formatDate = (timestamp: string | undefined) => {
    if (!timestamp) return 'N/A';
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: AppTheme.background }]}>
      <ThemedView style={styles.content}>
        {/* Profile Header */}
        <View style={styles.header}>
          <View style={[styles.avatarContainer, { borderColor: AppTheme.tint }]}>
            {user?.photoURL ? (
              <Image source={{ uri: user.photoURL }} style={styles.avatar} />
            ) : (
              <ThemedText style={styles.avatarText}>
                {user?.displayName?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase() || 'U'}
              </ThemedText>
            )}
          </View>

          <ThemedText type="title" style={styles.name}>
            {user?.displayName || 'User'}
          </ThemedText>

          <ThemedText style={styles.email}>{user?.email}</ThemedText>
        </View>

        {/* Account Information Card */}
        <View style={[styles.card, { backgroundColor: AppTheme.card }]}>
          <ThemedText type="subtitle" style={styles.cardTitle}>
            Account Information
          </ThemedText>

          <View style={styles.infoRow}>
            <ThemedText style={styles.infoLabel}>User ID</ThemedText>
            <ThemedText style={styles.infoValue} numberOfLines={1}>
              {user?.uid}
            </ThemedText>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <ThemedText style={styles.infoLabel}>Email</ThemedText>
            <ThemedText style={styles.infoValue}>{user?.email}</ThemedText>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <ThemedText style={styles.infoLabel}>Email Verified</ThemedText>
            <View
              style={[
                styles.badge,
                { backgroundColor: user?.emailVerified ? '#4CAF50' : '#FF9800' },
              ]}>
              <ThemedText style={styles.badgeText}>
                {user?.emailVerified ? 'Verified' : 'Not Verified'}
              </ThemedText>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <ThemedText style={styles.infoLabel}>Account Created</ThemedText>
            <ThemedText style={styles.infoValue}>
              {formatDate(user?.metadata?.creationTime)}
            </ThemedText>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <ThemedText style={styles.infoLabel}>Last Sign In</ThemedText>
            <ThemedText style={styles.infoValue}>
              {formatDate(user?.metadata?.lastSignInTime)}
            </ThemedText>
          </View>
        </View>

        {/* Settings Options */}
        <View style={[styles.card, { backgroundColor: AppTheme.card }]}>
          <ThemedText type="subtitle" style={styles.cardTitle}>
            Settings
          </ThemedText>

          <Pressable style={styles.settingItem}>
            <ThemedText style={styles.settingText}>🔔 Notifications</ThemedText>
            <ThemedText style={styles.settingArrow}>›</ThemedText>
          </Pressable>

          <View style={styles.divider} />

          <Pressable style={styles.settingItem}>
            <ThemedText style={styles.settingText}>🌍 Language & Region</ThemedText>
            <ThemedText style={styles.settingArrow}>›</ThemedText>
          </Pressable>

          <View style={styles.divider} />

          <Pressable style={styles.settingItem}>
            <ThemedText style={styles.settingText}>🔒 Privacy & Security</ThemedText>
            <ThemedText style={styles.settingArrow}>›</ThemedText>
          </Pressable>

          <View style={styles.divider} />

          <Pressable style={styles.settingItem}>
            <ThemedText style={styles.settingText}>ℹ️ About</ThemedText>
            <ThemedText style={styles.settingArrow}>›</ThemedText>
          </Pressable>
        </View>

        {/* Logout Button */}
        <Pressable
          style={[styles.logoutButton, { backgroundColor: '#FF5252' }]}
          onPress={handleLogout}>
          <ThemedText style={styles.logoutText}>Logout</ThemedText>
        </Pressable>

        {/* Footer */}
        <ThemedText style={styles.footer}>ARth Sanskriti v1.0.0</ThemedText>
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
    alignItems: 'center',
    marginBottom: 32,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: AppTheme.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  avatarText: {
    fontSize: 48,
    fontFamily: FontFamily.bold,
  },
  name: {
    fontSize: 28,
    fontFamily: FontFamily.heading,
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    opacity: 0.7,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: AppTheme.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: FontFamily.semiBold,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  infoLabel: {
    fontSize: 15,
    fontFamily: FontFamily.medium,
    flex: 1,
  },
  infoValue: {
    fontSize: 14,
    opacity: 0.7,
    flex: 1.5,
    textAlign: 'right',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: FontFamily.semiBold,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },
  settingText: {
    fontSize: 16,
  },
  settingArrow: {
    fontSize: 24,
    opacity: 0.5,
  },
  logoutButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 24,
    shadowColor: '#FF5252',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: FontFamily.semiBold,
  },
  footer: {
    textAlign: 'center',
    opacity: 0.5,
    fontSize: 12,
    marginBottom: 40,
  },
});
