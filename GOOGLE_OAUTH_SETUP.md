# Google OAuth Setup Guide

This guide explains how to properly configure Google OAuth for the Melo App on iOS and Android.

## Prerequisites

- Google Cloud Console account
- Expo CLI installed
- EAS CLI installed (`npm install -g eas-cli`)

## Step 1: Create OAuth Credentials in Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" and create OAuth 2.0 Client IDs for:
   - **Web Application** - for Expo web/development
   - **iOS** - for iOS native builds
   - **Android** - for Android native builds

## Step 2: Get Your Android Signing Fingerprint

For Android OAuth to work, you need your app's SHA-1 fingerprint:

```bash
# If building with EAS
eas build-fingerprint --platform android

# Or if you have a keystore
keytool -list -v -keystore your-keystore.jks
```

Add this SHA-1 fingerprint to your Android OAuth credentials in Google Cloud Console.

## Step 3: Update Credentials in Code

Edit [src/services/googleAuth.ts](src/services/googleAuth.ts) and replace the placeholder IDs:

```typescript
const EXPO_CLIENT_ID = 'your-expo-client-id.apps.googleusercontent.com';
const ANDROID_CLIENT_ID = 'your-android-client-id.apps.googleusercontent.com';
const IOS_CLIENT_ID = 'your-ios-client-id.apps.googleusercontent.com';
const WEB_CLIENT_ID = 'your-web-client-id.apps.googleusercontent.com';
```

## Step 4: iOS Configuration

The app.json is already configured with the required URL schemes:

```json
"infoPlist": {
  "CFBundleURLTypes": [
    {
      "CFBundleURLSchemes": ["meloapp"]
    }
  ]
}
```

## Step 5: Android Configuration

The app.json includes intent filters for OAuth redirects:

```json
"intentFilters": [
  {
    "action": "VIEW",
    "autoVerify": true,
    "data": {
      "scheme": "https",
      "host": "meloapp.exp.direct"
    },
    "category": ["BROWSABLE", "DEFAULT"]
  }
]
```

## Step 6: Build and Test

### For Development

```bash
# iOS
npm run ios

# Android
npm run android
```

### For Production Builds

```bash
# iOS
eas build -p ios

# Android
eas build -p android
```

## Troubleshooting

### OAuth Won't Redirect After Login

- **iOS**: Verify the bundle identifier matches Google Cloud Console settings
- **Android**: Check that the SHA-1 fingerprint is correct in Google Cloud Console

### "Invalid Client ID" Error

- Ensure the correct client ID is set for the platform you're building
- Check that the credentials are enabled in Google Cloud Console

### Android OAuth Not Working

- Verify the Android signing certificate SHA-1 is registered in Google Cloud Console
- Make sure the app package name matches: `com.akshaivinu.meloapp`

### iOS OAuth Not Working

- Verify the bundle identifier in app.json matches Google Cloud Console
- Check that URL schemes are properly configured in app.json

## Alternative: Use Expo Google Sign-In (Recommended)

For better compatibility, consider using `expo-google-app-auth`:

```bash
npx expo install expo-google-app-auth
```

This abstracts away much of the platform-specific configuration.

## References

- [Expo Auth Session Documentation](https://docs.expo.dev/versions/latest/sdk/auth-session/)
- [Google OAuth for Mobile Apps](https://developers.google.com/identity/protocols/oauth2/mobile)
- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)


# Fix: redirect_uri_mismatch Error

## Error Details
```
Error 400: redirect_uri_mismatch
redirect_uri=http://localhost:8081
You can't sign in to this app because it doesn't comply with Google's OAuth 2.0 policy.
```

This error occurs because the redirect URI in your request doesn't match what's registered in Google Cloud Console.

---

## Solution: Complete Setup Steps

### Step 1: Get Your Development Redirect URI

Run this command to see the exact redirect URI your app uses:

```bash
npx expo-auth-session
```

Or check the console logs when you run the app - look for:
```
[Google Auth] Redirect URI: [YOUR_REDIRECT_URI]
```

The redirect URI will be one of:
- For Expo Go: `exp://YOUR_IP:19000/redirect`
- For development build: `https://auth.expo.io/@your-username/melo-app`
- For web: `http://localhost:19006/redirect`

### Step 2: Create OAuth Credentials in Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the **Google+ API**

#### Create Web OAuth Credentials (for development/Expo)
1. Go to **Credentials** → **+ Create Credentials** → **OAuth 2.0 Client ID**
2. Choose **Web Application**
3. Add Authorized redirect URIs:
   ```
   exp://your.ip:19000/redirect
   https://auth.expo.io/@your-username/melo-app
   http://localhost:19000/redirect
   http://localhost:19006/redirect
   http://localhost:8081
   ```
4. Copy the **Client ID** (ends with `.apps.googleusercontent.com`)

#### Create Android OAuth Credentials
1. **Credentials** → **+ Create Credentials** → **OAuth 2.0 Client ID**
2. Choose **Android**
3. Package name: `com.akshaivinu.meloapp`
4. SHA-1 fingerprint: Get with:
   ```bash
   eas build-fingerprint --platform android
   ```
5. Add authorized redirect URIs:
   ```
   com.akshaivinu.meloapp://oauth2redirect/google
   ```
6. Copy the **Client ID**

#### Create iOS OAuth Credentials
1. **Credentials** → **+ Create Credentials** → **OAuth 2.0 Client ID**
2. Choose **iOS**
3. Bundle ID: `com.akshaivinu.meloapp`
4. Add authorized redirect URIs:
   ```
   meloapp://redirect
   ```
5. Copy the **Client ID**

---

### Step 3: Update Your Credentials in Code

Edit `src/services/googleAuth.ts` and replace the placeholder IDs:

```typescript
const EXPO_CLIENT_ID = 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com';
const ANDROID_CLIENT_ID = 'YOUR_ANDROID_CLIENT_ID.apps.googleusercontent.com';
const IOS_CLIENT_ID = 'YOUR_IOS_CLIENT_ID.apps.googleusercontent.com';
const WEB_CLIENT_ID = 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com';
```

---

### Step 4: Test Development Builds

After updating credentials, test on each platform:

#### Test on Expo Go
```bash
npm start
# Scan QR code with Expo Go app
# Click "Continue with Google"
```

#### Test on iOS
```bash
npm run ios
# Click "Continue with Google"
```

#### Test on Android
```bash
npm run android
# Click "Continue with Google"
```

---

## Troubleshooting

### Still Getting redirect_uri_mismatch?

1. **Print the actual redirect URI**:
   - Check console logs when app starts
   - Look for `[Google Auth] Redirect URI: ...`

2. **Add it to Google Cloud Console**:
   - Copy the exact redirect URI from logs
   - Go to your OAuth credential
   - Add it to "Authorized redirect URIs"
   - Save

3. **Wait a few minutes** - Google OAuth can take time to propagate

### How to Find Your Redirect URI

Check the console output when running:

```bash
npm run ios
# or
npm run android
# or
npm start
```

Look for logs containing `redirect_uri` or `Redirect URI`.

### For Production EAS Build

When building with EAS, redirect URIs are automatically configured if using Expo's managed OAuth. However, for custom credentials:

```bash
# Get EAS build fingerprint
eas build-fingerprint --platform android

# Add this SHA-1 to Android OAuth credentials in Google Cloud Console
```

---

## Redirect URI Reference

| Platform | URI Format | Example |
|----------|-----------|---------|
| **Expo Go (dev)** | `exp://IP:19000/redirect` | `exp://192.168.1.100:19000/redirect` |
| **Expo Web (dev)** | `http://localhost:19006/redirect` | - |
| **Expo (managed)** | `https://auth.expo.io/@username/slug` | `https://auth.expo.io/@akshai/melo-app` |
| **Android native** | `com.PACKAGE_NAME://oauth2redirect/google` | `com.akshaivinu.meloapp://oauth2redirect/google` |
| **iOS native** | `SCHEME://redirect` | `meloapp://redirect` |

---

## Quick Fix Checklist

- [ ] Get your redirect URI from console logs
- [ ] Create OAuth credentials in Google Cloud Console
- [ ] Register all redirect URIs in Google Cloud Console
- [ ] Copy the correct client IDs
- [ ] Update `src/services/googleAuth.ts` with your IDs
- [ ] Test login flow
- [ ] Verify console shows successful login

If issues persist, check:
1. Redirect URI spelling (case-sensitive)
2. Client ID is for the correct platform (Web/Android/iOS)
3. Google has propagated the changes (wait 5 minutes)
4. Bundle ID matches `com.akshaivinu.meloapp`
5. iOS scheme matches `meloapp`
