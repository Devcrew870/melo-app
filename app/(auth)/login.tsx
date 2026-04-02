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
import { useGoogleAuth } from '@/src/services/googleAuth';

const Login = () => {
  const { response, promptAsync, request } = useGoogleAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      console.log('✅ Login successful with token:', id_token);
      // TODO: Navigate to home screen or save token to store
    } else if (response?.type === 'error') {
      console.error('❌ Login error:', response.params);
      Alert.alert(
        'Login Failed',
        'Failed to sign in with Google. Please try again.',
      );
      setLoading(false);
    } else if (response?.type === 'dismiss') {
      console.log('⚠️ Login cancelled by user');
      setLoading(false);
    }
  }, [response]);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      if (!request) {
        Alert.alert('Error', 'Auth request not initialized. Please try again.');
        setLoading(false);
        return;
      }
      await promptAsync();
    } catch (error) {
      console.error('Google sign-in error:', error);
      Alert.alert(
        'Error',
        'An error occurred during sign-in. Please try again.',
      );
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
