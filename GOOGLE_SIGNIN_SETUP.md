# Google Sign-In Setup

Quick setup guide for Google Sign-In using `@react-native-google-signin/google-signin`.

## 1. Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable **Google+ API** (Search → Enable)

## 2. Get Your Credentials

### iOS

1. In Google Cloud Console → **Credentials** → **+ Create Credentials** → **OAuth 2.0 Client ID**
2. Select **iOS**
3. Bundle ID: `com.akshaivinu.meloapp`
4. Team ID: Get from Xcode → Preferences → Accounts
5. Copy the **Client ID**

### Android

1. In Google Cloud Console → **Credentials** → **+ Create Credentials** → **OAuth 2.0 Client ID**
2. Select **Android**
3. Package name: `com.akshaivinu.meloapp`
4. SHA-1: Run `eas build-fingerprint --platform android`
5. Copy the **Client ID**

## 3. Update Your Code

Edit `src/services/googleAuth.ts` and replace:

```typescript
const IOS_CLIENT_ID = 'YOUR_IOS_CLIENT_ID.apps.googleusercontent.com';
const ANDROID_CLIENT_ID = 'YOUR_ANDROID_CLIENT_ID.apps.googleusercontent.com';
```

## 4. Test

```bash
# iOS
npm run ios

# Android
npm run android

# Or with Expo Go
npm start
```

Click "Continue with Google" and sign in.

## Troubleshooting

| Error                      | Solution                                                                  |
| -------------------------- | ------------------------------------------------------------------------- |
| "Invalid client ID"        | Verify client IDs are copied correctly                                    |
| "SHA-1 mismatch" (Android) | Update Android credential with correct SHA-1 from `eas build-fingerprint` |
| "Bundle ID mismatch" (iOS) | Verify bundle ID matches `app.json`                                       |

## Security

- For production: Use environment variables for client IDs
- Implement secure token storage with `expo-secure-store`
- Validate tokens on your backend
