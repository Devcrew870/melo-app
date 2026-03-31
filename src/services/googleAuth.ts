import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession();
import * as AuthSession from 'expo-auth-session';

const redirectUri = AuthSession.makeRedirectUri({
  useProxy: true,
});

console.log('REDIRECT URI:', redirectUri);

const CLIENT_ID =
  '171898382206-t6ta0os72rqpdr0okfdivfrqog4bbc1c.apps.googleusercontent.com';

export const useGoogleAuth = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: CLIENT_ID,
  });

  return { request, response, promptAsync };
};