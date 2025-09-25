# Weather Forecast Progressive Web App

A modern, responsive Progressive Web App (PWA) built with React and TypeScript that provides current weather information and forecasts using the OpenWeatherMap API. The application follows clean architecture principles with proper separation of concerns across four distinct layers.

## 🌟 Features

### Core Functionality
- **Current Weather Display**: Real-time weather information with detailed metrics
- **Weather Forecast**: 1, 3, and 7-day forecast options with comprehensive data
- **Geolocation Support**: Automatic location detection with fallback to London
- **Progressive Web App**: Offline capabilities with service worker integration
- **Responsive Design**: Mobile-first approach with touch-friendly navigation

### User Experience
- **Dynamic Backgrounds**: Temperature-based gradient backgrounds
- **Weather Icons**: Contextual weather icons using Lucide React
- **Smooth Animations**: Hover effects and transitions for enhanced UX
- **Loading States**: Professional loading spinners and error handling
- **Clean Navigation**: Bottom navigation bar for easy page switching

## 🏗️ Architecture

The application follows **Clean Architecture** principles with four distinct layers:

### 1. Domain Layer (`src/domain/`)
- **Entities**: Core business objects (`Weather`, `WeatherForecast`)
- **Interfaces**: Abstract contracts for repositories and services
- **Business Logic**: Pure business rules without external dependencies

### 2. Application Layer (`src/application/`)
- **Use Cases**: Application-specific business rules
  - `GetCurrentWeatherUseCase`
  - `GetForecastUseCase`
- **Services**: Orchestration of domain objects and repositories

### 3. Infrastructure Layer (`src/infrastructure/`)
- **API Integration**: OpenWeatherMap API client
- **External Services**: Geolocation service implementation
- **Data Repositories**: Concrete implementations of domain interfaces

### 4. Presentation Layer (`src/presentation/`)
- **React Components**: UI components and pages
- **Custom Hooks**: State management and data fetching
- **Pages**: Main application views (Current Weather, Forecast)

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **PWA Features**: Service Worker with Workbox
- **API**: OpenWeatherMap API
- **Architecture**: Clean Architecture pattern

## 📱 Progressive Web App Features

- **Offline Support**: Service worker caches essential resources
- **App Manifest**: Installable on mobile devices and desktop
- **Responsive Design**: Works seamlessly across all device sizes
- **Fast Loading**: Optimized bundle with code splitting
- **Native-like Experience**: Standalone display mode

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd weather-forecast-pwa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📂 Project Structure

```
src/
├── domain/                 # Domain Layer
│   ├── entities/          # Business entities
│   └── interfaces/        # Abstract interfaces
├── application/           # Application Layer
│   ├── services/         # Application services
│   └── usecases/         # Use case implementations
├── infrastructure/        # Infrastructure Layer
│   ├── api/              # External API clients
│   ├── repositories/     # Data repository implementations
│   └── services/         # External service implementations
├── presentation/          # Presentation Layer
│   ├── components/       # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   └── pages/           # Application pages
├── shared/               # Shared utilities and types
│   └── types/           # TypeScript type definitions
└── main.tsx             # Application entry point
```

## 🎨 Design System

### Color Palette
- **Temperature-based gradients**: Dynamic backgrounds based on weather conditions
- **Glass morphism**: Semi-transparent cards with backdrop blur
- **Consistent spacing**: 8px grid system throughout the application

### Typography
- **Primary font**: System font stack for optimal performance
- **Font weights**: Light (300), Medium (500), Bold (700)
- **Responsive sizing**: Scales appropriately across devices

### Components
- **Weather Cards**: Glass morphism design with subtle shadows
- **Navigation**: Fixed bottom navigation with active states
- **Icons**: Contextual weather icons with proper sizing
- **Loading States**: Smooth loading animations

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

## 📊 Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Optimized images and fonts
- **Caching Strategy**: Service worker implements cache-first strategy
- **Bundle Analysis**: Optimized bundle size

## 🔒 Privacy & Security

- **Location Permission**: Requests user permission for geolocation
- **Fallback Location**: Uses London coordinates if location access denied
- **HTTPS Ready**: Designed for secure deployment
- **No Data Storage**: No personal data stored locally

## 🚀 Deployment

The application is ready for deployment to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your repository for automatic deployments
- **GitHub Pages**: Use the built files from the `dist` directory
- **Firebase Hosting**: Deploy using Firebase CLI

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **OpenWeatherMap** for providing the weather API
- **Lucide** for the beautiful icon set
- **Tailwind CSS** for the utility-first CSS framework
- **React Team** for the excellent framework

---

Built using React, TypeScript, and Clean Architecture principles.