import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

// Get the redirect URI for the current platform
const redirectUri = AuthSession.makeRedirectUri();

// Google OAuth credentials - REPLACE WITH YOUR ACTUAL CLIENT IDS
// Get these from: https://console.cloud.google.com/
// 1. Create OAuth 2.0 credentials (Web application, iOS, Android)
// 2. Register the redirect URIs below in Google Cloud Console
// 3. Replace the placeholder IDs with your actual credentials

// For development with Expo Go/emulator:
// - Expo Client ID is used (Web Application type)
// - Redirect URI will be: exp://[YOUR_IP]:19000/redirect or https://auth.expo.io/@username/app-slug
//
// For production builds:
// - Use androidClientId and iosClientId (native app types)
// - Android: com.akshaivinu.meloapp://oauth2redirect/google
// - iOS: meloapp://redirect

const EXPO_CLIENT_ID =
  '171898382206-t6ta0os72rqpdr0okfdivfrqog4bbc1c.apps.googleusercontent.com'; // Web Application
const ANDROID_CLIENT_ID =
  '171898382206-rqn9jp8hjkrp3jp6lpvqq7p3m7lpjq2j.apps.googleusercontent.com'; // Android
const IOS_CLIENT_ID =
  '171898382206-a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6.apps.googleusercontent.com'; // iOS
const WEB_CLIENT_ID =
  '171898382206-t6ta0os72rqpdr0okfdivfrqog4bbc1c.apps.googleusercontent.com'; // Web

console.log('[Google Auth] Redirect URI:', redirectUri);

export const useGoogleAuth = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: EXPO_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    webClientId: WEB_CLIENT_ID,
  });

  return { request, response, promptAsync };
};
