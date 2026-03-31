import React, { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../src/theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGoogleAuth } from '@/src/services/googleAuth';

const Login = () => {
  const { response, promptAsync } = useGoogleAuth();


  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      console.log(id_token);
    }
  }, [response])

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
        <TouchableOpacity style={styles.button} onPress={() => promptAsync()}>
          <Image
            source={require('../../assets/images/google-icon.png')}
            style={styles.googleIcon}
          />
          <Text style={styles.buttonText}>Continue with Google</Text>
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

const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'space-between',
  },

  topSection: {
    alignItems: 'center',
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
    fontWeight: '600',
    color: COLORS.textPrimary,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: 8,
  },

  illustration: {
    width: '100%',
    height: 260,
    marginTop: 20,
  },

  bottomSection: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

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
    fontWeight: '500',
  },

  terms: {
    marginTop: 12,
    fontSize: 12,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 18,
  },

  link: {
    color: COLORS.primary,
    fontWeight: '600',
  },
};
