import { useAuth } from '../src/contexts/AuthContext';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../src/theme/colors';

export default function Home() {
  const { user, signOut, isAuthenticated } = useAuth();

  // This should not happen due to routing, but just in case
  if (!isAuthenticated) {
    return null; // _layout.tsx should handle routing
  }

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to Melo App!</Text>
        {user && (
          <View style={styles.userInfo}>
            <Text style={styles.userName}>
              Hello, {user.name || user.email}!
            </Text>
            <Text style={styles.userEmail}>{user.email}</Text>
          </View>
        )}

        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 30,
    textAlign: 'center',
  },
  userInfo: {
    alignItems: 'center',
    marginBottom: 40,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 8,
  },
  userEmail: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
  signOutButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  signOutButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
