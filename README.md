# WeatherCast - Cross-Platform Weather App with Capacitor

A modern weather application built with **Capacitor** that runs natively on iOS, Android, and the web from a single codebase. This project demonstrates how Capacitor enables seamless cross-platform development while providing access to native device features like geolocation.

## 🚀 Capacitor: The Cross-Platform Engine

**Capacitor** is the core technology that powers this application's cross-platform capabilities. It allows us to:

- **Write Once, Run Everywhere**: Single React/TypeScript codebase runs on iOS, Android, and web
- **Native Performance**: Apps run with native performance on mobile devices
- **Native API Access**: Direct access to device features like GPS, camera, and sensors
- **Progressive Web App**: Automatic PWA capabilities with service workers
- **Native UI**: Uses native navigation and UI components on each platform

### Why Capacitor?

Unlike traditional hybrid frameworks, Capacitor:
- Uses modern web APIs and standards
- Provides a native shell that hosts your web app
- Offers seamless integration with native iOS and Android projects
- Supports live reload during development
- Enables easy deployment to app stores

## 📱 Platform Support

### Web Browser (PWA)
- Runs in any modern web browser
- Installable as a Progressive Web App
- Uses Web Geolocation API for location services
- Service worker for offline capabilities

### iOS Native App
- Native iOS application built with Xcode
- Uses Core Location for precise GPS positioning
- Follows iOS design guidelines and navigation patterns
- Deployable to the App Store

### Android Native App
- Native Android application built with Android Studio
- Integrates with Android location services
- Material Design components and animations
- Deployable to Google Play Store

## 🛠️ Capacitor Configuration

The app is configured through `capacitor.config.ts`:

```typescript
const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'WeatherCast',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Geolocation: {
      permissions: ['location']
    }
  }
};
```

### Key Capacitor Plugins Used

- **@capacitor/geolocation**: Native GPS and location services
- **@capacitor/core**: Core Capacitor functionality and platform detection

## 🌟 Features Enabled by Capacitor

### Cross-Platform Geolocation
- **Web**: Uses browser's Geolocation API with permission prompts
- **iOS**: Integrates with Core Location for precise positioning
- **Android**: Uses Android location services with proper permissions
- **Fallback**: Graceful degradation to default location when permission denied

### Native App Features
- **Splash Screens**: Custom splash screens for iOS and Android
- **App Icons**: Platform-specific app icons and launcher icons
- **Status Bar**: Native status bar styling and behavior
- **Navigation**: Platform-appropriate navigation patterns

### Progressive Web App
- **Service Worker**: Automatic caching and offline functionality
- **Web Manifest**: Installable PWA with proper metadata
- **Push Notifications**: Ready for web push notifications
- **Background Sync**: Capability for background data synchronization

## 🚀 Getting Started with Capacitor

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- **For iOS**: Xcode (macOS only)
- **For Android**: Android Studio

### Development Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start web development**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

### Mobile Development

#### Android Development

1. **Add Android platform**
   ```bash
   npm run cap:add android
   ```

2. **Build and sync**
   ```bash
   npm run android
   ```
   This command builds the web app and opens Android Studio

3. **Development workflow**
   ```bash
   # After making changes to web code
   npm run build
   npm run cap:sync
   ```

#### iOS Development (macOS only)

1. **Add iOS platform**
   ```bash
   npm run cap:add ios
   ```

2. **Build and sync**
   ```bash
   npm run ios
   ```
   This command builds the web app and opens Xcode

3. **Development workflow**
   ```bash
   # After making changes to web code
   npm run build
   npm run cap:sync
   ```

## 📂 Capacitor Project Structure

```
├── src/                    # Web application source
├── dist/                   # Built web application
├── capacitor.config.ts     # Capacitor configuration
├── android/                # Native Android project
│   ├── app/
│   └── build.gradle
├── ios/                    # Native iOS project
│   ├── App/
│   └── App.xcodeproj
└── public/
    ├── manifest.json       # PWA manifest
    └── sw.js              # Service worker
```

## 🔧 Capacitor Commands

### Essential Commands
- `npm run cap:add [platform]` - Add iOS or Android platform
- `npm run cap:sync` - Sync web code to native projects
- `npm run cap:copy` - Copy web assets to native projects
- `npm run cap:open [platform]` - Open native IDE
- `npm run cap:run [platform]` - Build and run on device/emulator

### Development Workflow
1. Develop and test in the browser (`npm run dev`)
2. Build the web app (`npm run build`)
3. Sync changes to native projects (`npm run cap:sync`)
4. Test on native platforms using IDEs

## 📱 Native Platform Features

### iOS Integration
- **Info.plist**: Configured with location permissions
- **Splash Screen**: Custom launch screen with app branding
- **App Icons**: iOS-specific icon sizes and formats
- **Core Location**: Native GPS integration with permission handling

### Android Integration
- **AndroidManifest.xml**: Location permissions and app configuration
- **Splash Screen**: Android-specific splash screen implementation
- **Material Design**: Native Android UI components
- **Location Services**: Android location provider integration

## 🌐 Web Platform Features

### Progressive Web App
- **Installable**: Can be installed on desktop and mobile browsers
- **Offline Support**: Service worker caches essential resources
- **Responsive**: Mobile-first design that works on all screen sizes
- **Fast Loading**: Optimized bundle with lazy loading

### Browser Compatibility
- Chrome/Chromium (recommended)
- Firefox
- Safari (iOS and macOS)
- Edge
- Mobile browsers (iOS Safari, Android Chrome)

## 🔒 Permissions and Security

### Location Permissions
- **Web**: Browser geolocation permission prompt
- **iOS**: NSLocationWhenInUseUsageDescription in Info.plist
- **Android**: ACCESS_FINE_LOCATION and ACCESS_COARSE_LOCATION

### Security Features
- **HTTPS**: Required for geolocation and PWA features
- **Content Security Policy**: Configured for secure web app
- **Native Security**: Leverages platform security features

## 📦 Deployment

### Web Deployment
Deploy the `dist` folder to any static hosting service:
- Netlify, Vercel, GitHub Pages
- Firebase Hosting, AWS S3
- Any web server with HTTPS support

### Mobile App Deployment

#### Android (Google Play Store)
1. Build release APK/AAB in Android Studio
2. Sign with release keystore
3. Upload to Google Play Console

#### iOS (App Store)
1. Archive app in Xcode
2. Upload to App Store Connect
3. Submit for review

## 🤝 Contributing

This project demonstrates best practices for Capacitor development:
- Clean separation between web and native code
- Proper permission handling across platforms
- Responsive design that works everywhere
- Native performance with web technologies

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Capacitor Team** for creating an excellent cross-platform solution
- **Ionic Team** for maintaining the Capacitor ecosystem
- **OpenWeatherMap** for providing the weather API
- **React Team** for the excellent web framework

---

**Built with Capacitor** - Write once, run everywhere with native performance.