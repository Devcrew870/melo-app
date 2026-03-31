# Melo App

A modern music streaming application built with [Expo](https://expo.dev) and React Native, featuring cross-platform support for iOS, Android, and web.

## Features

- 🔐 Google Authentication
- 📱 Cross-platform support (iOS, Android, Web)
- ⚡ Built with React Native and Expo Router
- 🎨 Modern UI with custom theming

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

## Project Structure

```
melo-app/
├── app/                    # Expo Router pages and layouts
│   ├── _layout.tsx        # Root layout
│   ├── index.tsx          # Home screen
│   └── (auth)/            # Auth group routes
│       └── login.tsx      # Login screen
├── src/
│   ├── components/        # Reusable React components
│   ├── services/          # API and authentication services
│   │   └── googleAuth.ts  # Google OAuth integration
│   ├── store/             # State management (Zustand)
│   ├── theme/             # Theme and styling
│   │   └── colors.ts      # Color palette
│   └── types/             # TypeScript type definitions
├── assets/                # Images and static assets
└── package.json           # Project dependencies
```

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
- **Axios** - HTTP client

## Authentication

The app uses Google OAuth for authentication via `expo-auth-session`. Configure your Google Client ID in the environment variables for the authentication flow to work properly.

## Development

- Edit files in the `app/` directory to modify screens and navigation
- Edit files in `src/` for business logic, components, and services
- The app uses file-based routing - create files in `app/` and they automatically become routes
- Use TypeScript for type safety

## Troubleshooting

- **Build errors**: Run `npm install` to ensure all dependencies are installed
- **Auth issues**: Verify your `GOOGLE_CLIENT_ID` is correctly set in the environment
- **Port conflicts**: The default port is 8081; use `npx expo start --port 3000` for a different port

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Guide](https://docs.expo.dev/router/introduction/)
- [TypeScript in React Native](https://www.typescriptlang.org/docs/handbook/react.html)

## License

This project is open source and available under the MIT License.
