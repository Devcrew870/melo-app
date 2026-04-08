import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { authApi } from './authApi';

// const EXPO_CLIENT_ID =
//   '171898382206-t6ta0os72rqpdr0okfdivfrqog4bbc1c.apps.googleusercontent.com'; // Web Application
// const ANDROID_CLIENT_ID =
//   '171898382206-rqn9jp8hjkrp3jp6lpvqq7p3m7lpjq2j.apps.googleusercontent.com'; // Android
// const IOS_CLIENT_ID =
//   '171898382206-gn3pn5ivlsdjhgdbqmkhra192da4m88n.apps.googleusercontent.com'; // iOS
const WEB_CLIENT_ID =
  '171898382206-t6ta0os72rqpdr0okfdivfrqog4bbc1c.apps.googleusercontent.com'; // Web

GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID,
  offlineAccess: false,
  scopes: ['profile', 'email'],
});

export interface UserInfo {
  user: {
    id: string;
    email: string;
    name: string | null;
    photo: string | null;
  };
  idToken: string | null;
  serverAuthCode?: string | null;
}

export const signInWithGoogle = async (): Promise<UserInfo> => {
  try {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    if (isSuccessResponse(response)) {
      await authApi.verifyGoogleToken(response?.data?.idToken || '');
      console.log('✅ Google Sign-In successful:', response.data.user.email);
      return {
        user: {
          id: response.data.user.id,
          email: response.data.user.email,
          name: response.data.user.name || null,
          photo: response.data.user.photo || null,
        },
        idToken: response.data.idToken,
        serverAuthCode: response.data.serverAuthCode || undefined,
      };
    } else {
      throw new Error('Sign in was cancelled by user');
    }
  } catch (error) {
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          console.error('Sign in already in progress');
          throw new Error('Sign in already in progress. Please wait.');
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.error('Play services not available');
          throw new Error(
            'Google Play Services not available. Please install or update it.',
          );
        case statusCodes.SIGN_IN_CANCELLED:
          console.log('Sign in cancelled');
          throw new Error('Sign in cancelled');
        default:
          console.error('Google Sign-In error:', error);
          throw new Error(error.message || 'An error occurred during sign in');
      }
    } else {
      console.error('Unknown error during sign in:', error);
      throw new Error('An unexpected error occurred during sign in');
    }
  }
};

export const signOutFromGoogle = async (): Promise<void> => {
  try {
    await GoogleSignin.signOut();
    console.log('✅ Google Sign-Out successful');
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const userInfo = await GoogleSignin.getCurrentUser();
    if (userInfo) {
      console.log('✅ Current user:', userInfo.user.email);
      return {
        user: {
          id: userInfo.user.id,
          email: userInfo.user.email,
          name: userInfo.user.name || null,
          photo: userInfo.user.photo || null,
        },
        idToken: userInfo.idToken,
        serverAuthCode: userInfo.serverAuthCode || undefined,
      };
    }
    return null;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};
