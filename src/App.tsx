import React, { useState, useEffect } from 'react';
import { CurrentWeatherPage } from './presentation/pages/CurrentWeatherPage';
import { ForecastPage } from './presentation/pages/ForecastPage';
import { Navigation } from './presentation/components/Navigation';

function App() {
  const [currentPage, setCurrentPage] = useState<'current' | 'forecast'>('current');

  useEffect(() => {
    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'current':
        return <CurrentWeatherPage />;
      case 'forecast':
        return <ForecastPage />;
      default:
        return <CurrentWeatherPage />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;