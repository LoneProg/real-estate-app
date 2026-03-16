# Real Estate App

A modern cross-platform mobile application for browsing and discovering real estate properties. Built with React Native and Expo, this app provides a seamless experience for users to explore properties, search listings, view details, and manage their profile.

## Overview

The Real Estate App is designed to help users discover, explore, and connect with real estate properties. The application runs on iOS, Android, and the web, offering consistent functionality across all platforms. Users can browse featured properties, search for listings, and view detailed information about properties they're interested in.

## Features

- **Browse Properties**: Explore a curated list of real estate properties with beautiful card-based layouts
- **Search Functionality**: Find properties quickly using search filters
- **Property Details**: View comprehensive information about individual properties
- **User Authentication**: Secure login using Google OAuth via Appwrite
- **User Profile**: Manage your profile and preferences
- **Responsive Design**: Optimized interface for phones, tablets, and web browsers
- **Smooth Animations**: Parallax scrolling and haptic feedback for enhanced user experience
- **Dark Mode Support**: Automatic light and dark theme support

## Technology Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Styling**: Tailwind CSS with NativeWind
- **Navigation**: React Navigation (bottom tab navigation)
- **Backend**: Appwrite
- **Authentication**: Google OAuth
- **State Management**: Custom hooks with React Context

## Installation

1. Clone the repository and navigate to the project directory

2. Install dependencies

   ```bash
   npm install
   ```

3. Create an environment file with your Appwrite configuration
   ```bash
   # .env.local
   EXPO_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
   EXPO_PUBLIC_APPWRITE_PROJECT_NAME=your_project_name
   ```

## Getting Started

Start the development server:

```bash
npm start
```

This will open the Expo CLI with options to launch the app:

- **iOS Simulator**: Press `i` (requires Xcode)
- **Android Emulator**: Press `a` (requires Android Studio)
- **Web Browser**: Press `w`
- **Expo Go**: Scan the QR code with the Expo Go app on your phone

## Project Structure

```
app/
├── _layout.tsx              # Root layout and navigation setup
├── sign-in.tsx              # Authentication screen
└── (root)/
    ├── (tabs)/              # Tab-based navigation
    │   ├── explore.tsx      # Browse and explore properties
    │   ├── index.tsx        # Home screen
    │   └── profile.tsx      # User profile screen
    └── properties/
        └── [id].tsx         # Individual property detail page

components/
├── Cards.tsx                # Featured and regular property cards
├── Search.tsx               # Search bar component
├── parallax-scroll-view.tsx # Parallax effect wrapper
└── ui/                      # Reusable UI components

lib/
├── appwrite.ts              # Appwrite client configuration
├── useAppwrite.ts          # Custom hook for Appwrite integration
└── globalProvider.tsx       # Global context provider

constants/
├── icons.ts                 # Icon definitions
├── images.ts                # Image assets
└── theme.ts                 # Theme configuration

hooks/
├── use-color-scheme.ts      # Color scheme detection hook
└── use-theme-color.ts       # Theme color hook
```

## Available Scripts

- `npm start` - Start the development server
- `npm run android` - Launch on Android emulator
- `npm run ios` - Launch on iOS simulator
- `npm run web` - Launch in web browser
- `npm run lint` - Run linter to check code quality
- `npm run reset-project` - Reset to a blank project structure

## Development

The app uses file-based routing with Expo Router. Create screens by adding files to the `app` directory with automatic route generation.

### Styling

The project uses NativeWind for Tailwind CSS support in React Native. Use standard Tailwind utility classes in your components.

### Authentication

Google OAuth authentication is configured through Appwrite. Users can sign in securely and their session is managed automatically.

## Building for Production

### iOS

```bash
npm run ios
# Then create a production build through Expo's build service
```

### Android

```bash
npm run android
# Then create a production build through Expo's build service
```

### Web

```bash
npm run web
# Build static files for deployment
```

## Browser Support

- iOS 13+
- Android 6+
- Modern web browsers (Chrome, Firefox, Safari, Edge)

## Dependencies

Key dependencies include:

- `expo` - Framework and tools
- `react-native` - Cross-platform mobile framework
- `expo-router` - File-based routing
- `react-navigation` - Navigation library
- `react-native-appwrite` - Appwrite SDK
- `nativewind` - Tailwind CSS for React Native
- `expo-haptics` - Haptic feedback
- `react-native-reanimated` - Animation library

## Contributing

When contributing to the project:

1. Follow the existing code structure and naming conventions
2. Use TypeScript for all new code
3. Keep components small and focused
4. Use Tailwind utility classes for styling
5. Write clear commit messages

## Troubleshooting

If you encounter issues:

- Clear cache: `npx expo start -c`
- Reinstall dependencies: `rm -rf node_modules package-lock.json && npm install`
- Check Appwrite configuration in environment variables
- Ensure all required Expo modules are installed: `expo prebuild`

## License

This project is proprietary and all rights are reserved.
