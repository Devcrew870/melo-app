import { Stack, useRouter, useSegments, usePathname } from 'expo-router';
import { AuthProvider, useAuth } from '../src/contexts/AuthContext';
import { ActivityIndicator, View } from 'react-native';
import { useEffect } from 'react';

function RootLayoutNav() {
  const { isAuthenticated, isLoading } = useAuth();
  const segments = useSegments();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    console.log('Auth state:', { isAuthenticated, pathname, segments });

    // Simple routing: if not authenticated and not on login page, go to login
    if (!isAuthenticated && pathname !== '/(auth)/login') {
      console.log('🔄 Redirecting unauthenticated user to login');
      router.replace('/(auth)/login');
    }
  }, [isAuthenticated, isLoading, pathname, router]);

  console.log('Auth state:', { isAuthenticated, isLoading, pathname });

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
