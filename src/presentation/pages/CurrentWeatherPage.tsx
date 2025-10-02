import React from 'react';
import { useWeather } from '../hooks/useWeather';
import { WeatherIcon } from '../components/WeatherIcon';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { LocationStatus } from '../components/LocationStatus';
import { Thermometer, Droplets, Eye, Wind } from 'lucide-react';

export const CurrentWeatherPage: React.FC = () => {
  const { weather, location, loading, error, locationStatus } = useWeather();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!weather) return <ErrorMessage message="No weather data available" />;

  const getBackgroundGradient = () => {
    const temp = weather.temperatureCelsius;
    if (temp >= 25) return 'from-orange-400 via-red-400 to-pink-400';
    if (temp >= 15) return 'from-yellow-400 via-orange-400 to-red-400';
    if (temp >= 5) return 'from-blue-400 via-purple-400 to-pink-400';
    return 'from-blue-600 via-blue-700 to-blue-800';
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getBackgroundGradient()} pb-20`}>
      <div className="max-w-md mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center text-white mb-8">
          <h1 className="text-2xl font-bold mb-2">Current Weather</h1>
          <div className="space-y-2">
            <p className="text-lg opacity-90">
              {location?.name ? `${location.name}${location.country ? `, ${location.country}` : ''}` : weather.location}
            </p>
            <LocationStatus 
              status={locationStatus} 
              locationName={location?.name ? `${location.name}${location.country ? `, ${location.country}` : ''}` : weather.location}
              isUserLocation={locationStatus === 'granted'}
            />
          </div>
        </div>

        {/* Main Weather Card */}
        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 mb-6 border border-white/30">
          <div className="text-center text-white">
            <WeatherIcon icon={weather.icon} size={96} />
            <div className="mt-4">
              <h2 className="text-5xl font-light mb-2">{weather.temperatureCelsius}°</h2>
              <p className="text-xl mb-2">{weather.formattedDescription}</p>
              <p className="text-lg opacity-80">Feels like {weather.feelsLikeCelsius}°</p>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
            <div className="flex items-center text-white mb-2">
              <Thermometer size={20} className="mr-2" />
              <span className="text-sm font-medium">Pressure</span>
            </div>
            <p className="text-2xl font-light text-white">{weather.pressure}</p>
            <p className="text-xs text-white/70">hPa</p>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
            <div className="flex items-center text-white mb-2">
              <Droplets size={20} className="mr-2" />
              <span className="text-sm font-medium">Humidity</span>
            </div>
            <p className="text-2xl font-light text-white">{weather.humidity}</p>
            <p className="text-xs text-white/70">%</p>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
            <div className="flex items-center text-white mb-2">
              <Wind size={20} className="mr-2" />
              <span className="text-sm font-medium">Wind Speed</span>
            </div>
            <p className="text-2xl font-light text-white">{Math.round(weather.windSpeed * 3.6)}</p>
            <p className="text-xs text-white/70">km/h</p>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30">
            <div className="flex items-center text-white mb-2">
              <Eye size={20} className="mr-2" />
              <span className="text-sm font-medium">Visibility</span>
            </div>
            <p className="text-2xl font-light text-white">Good</p>
            <p className="text-xs text-white/70">Clear</p>
          </div>
        </div>
      </div>
    </div>
  );
};