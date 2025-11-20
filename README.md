# ARthSanskriti

A cross-platform mobile application exploring the intersection of art and Sanskrit culture, built with React Native and Expo.

## Overview

ARthSanskriti provides a curated experience for discovering and engaging with classical Indian art and Sanskrit traditions. The app features user authentication, personalized exploration, and profile management across iOS, Android, and web platforms.

## Technology Stack

- **Framework**: [Expo](https://expo.dev) + React Native
- **Routing**: Expo Router (file-based)
- **Authentication**: Firebase
- **Language**: TypeScript
- **Styling**: Theme-based with light/dark mode support
- **Storage**: AsyncStorage

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npx expo start
```

From the Expo CLI, you can open the app in:
- Android Emulator / Device
- iOS Simulator / Device
- Web Browser
- [Expo Go](https://expo.dev/go)

## Project Structure

```
app/              # Main application routes
├── (tabs)/       # Tabbed interface (Explore, Profile)
├── login.tsx     # Authentication screens
├── signup.tsx
└── welcome.tsx
components/       # Reusable UI components
context/          # Authentication context
hooks/            # Custom React hooks
libs/             # Firebase configuration
assets/           # Images and static assets
constants/        # Theme and app constants
```

## Development

- **Lint**: `npm run lint`
- **Reset**: `npm run reset-project`

The app uses [file-based routing](https://docs.expo.dev/router/introduction) for intuitive navigation structure.
