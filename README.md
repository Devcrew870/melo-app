

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (installed globally or via npx)

## Getting Started

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Configure environment variables:
   Create a `.env` file in the root directory and add your configuration:
   ```
   GOOGLE_CLIENT_ID=your_google_client_id_here
   ```

### Running the App

1. Start the development server:

   ```bash
   npm start
   ```

2. Choose your platform:
   - **iOS Simulator**: Press `i`
   - **Android Emulator**: Press `a`
   - **Web**: Press `w`
   - **Expo Go**: Scan the QR code with the Expo Go app


Android running 

-- required android studio download an android emulator

Install expo-dev-client
npx expo install expo-dev-client

Expo account

Sign up for an Expo account, if you haven't already.

EAS CLI

The EAS CLI installed and logged in.

npm install -g eas-cli 

eas login

eas build --platform android --profile development

then run expo start

if confused about comments refer (https://docs.expo.dev/develop/development-builds/create-a-build/?redirected)

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run on web platform
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Prettier
- `npm run reset-project` - Reset to a clean state

## Technologies Used

- **React Native** - Cross-platform mobile framework
- **Expo** - React Native development platform
- **Expo Router** - File-based routing for React Native
- **TypeScript** - Static type checking
- **Zustand** - State management
- **Expo Auth Session** - OAuth2 authentication