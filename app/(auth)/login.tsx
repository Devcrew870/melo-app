import React, { useEffect, useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from 'react-native';
import { COLORS } from '../../src/theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signInWithGoogle } from '../../src/services/googleAuth';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      console.log('🔄 Starting Google Sign-In...');

      const userInfo = await signInWithGoogle();

      console.log('✅ Sign-In successful!');
      console.log('User:', userInfo.user.email);
      console.log('ID Token:', userInfo.idToken);

      // TODO: Store token in secure storage
      // TODO: Save user info to app state (Zustand store)
      // TODO: Navigate to home screen
      Alert.alert(
        'Success',
        `Welcome ${userInfo.user.name || userInfo.user.email}!`,
      );
    } catch (error) {
      console.error('❌ Sign-In failed:', error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'An error occurred during sign in';
      Alert.alert('Sign-In Failed', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* TOP CONTENT */}
      <View style={styles.topSection}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>Trusted services, near you</Text>

        <Text style={styles.subtitle}>
          Browse services and contact vendors instantly
        </Text>

        <Image
          source={require('../../assets/images/illustrationLogin-removebg.png')}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      {/* BOTTOM SECTION */}
      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleGoogleSignIn}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color={COLORS.primary} size="small" />
          ) : (
            <>
              <Image
                source={require('../../assets/images/google-icon.png')}
                style={styles.googleIcon}
              />
              <Text style={styles.buttonText}>Continue with Google</Text>
            </>
          )}
        </TouchableOpacity>

        <Text style={styles.terms}>
          By continuing, you agree to our{'\n'}
          <Text style={styles.link}>Terms of Service</Text> and{' '}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'space-between' as const,
  },

  topSection: {
    alignItems: 'center' as const,
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  logo: {
    width: 140,
    height: 120,
    marginBottom: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: '600' as const,
    color: COLORS.textPrimary,
    textAlign: 'center' as const,
  },

  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center' as const,
    marginTop: 8,
  },

  illustration: {
    width: '100%' as any,
    height: 260,
    marginTop: 20,
  },

  bottomSection: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },

  button: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,

    backgroundColor: COLORS.white,
    borderColor: COLORS.border,
    borderWidth: 1,

    paddingVertical: 14,
    borderRadius: 12,
  },

  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  buttonText: {
    fontSize: 16,
    color: COLORS.textPrimary,
    fontWeight: '500' as const,
  },

  terms: {
    marginTop: 12,
    fontSize: 12,
    color: COLORS.textSecondary,
    textAlign: 'center' as const,
    lineHeight: 18,
  },

  link: {
    color: COLORS.primary,
    fontWeight: '600' as const,
  },
});
