import React, { useState } from 'react';
import { useForecast } from '../hooks/useForecast';
import { WeatherIcon } from '../components/WeatherIcon';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { LocationStatus } from '../components/LocationStatus';
import { format } from 'date-fns';

export const ForecastPage: React.FC = () => {
  const [selectedDays, setSelectedDays] = useState<1 | 3 | 7>(3);
  const { forecast, location, loading, error, locationStatus } = useForecast(selectedDays);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 pb-20">
      <div className="max-w-md mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center text-white mb-6">
          <h1 className="text-2xl font-bold mb-4">Weather Forecast</h1>
          
          {/* Location Info */}
          <div className="mb-4">
            <p className="text-lg opacity-90">
              {location?.name ? `${location.name}${location.country ? `, ${location.country}` : ''}` : 'Loading location...'}
            </p>
            <LocationStatus 
              status={locationStatus} 
              locationName={location?.name ? `${location.name}${location.country ? `, ${location.country}` : ''}` : 'Unknown location'}
              isUserLocation={locationStatus === 'granted'}
            />
          </div>
          
          {/* Day Selector */}
          <div className="flex bg-white/20 backdrop-blur-md rounded-full p-1 border border-white/30">
            {[1, 3, 7].map((days) => (
              <button
                key={days}
                onClick={() => setSelectedDays(days as 1 | 3 | 7)}
                className={`flex-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedDays === days
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {days} Day{days > 1 ? 's' : ''}
              </button>
            ))}
          </div>
        </div>

        {/* Forecast List */}
        <div className="space-y-3">
          {forecast.map((item, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30 transform transition-all duration-200 hover:scale-105"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-white font-medium text-lg">
                    {index === 0 ? 'Today' : format(item.date, 'EEEE')}
                  </p>
                  <p className="text-white/70 text-sm">
                    {format(item.date, 'MMM d')}
                  </p>
                  <p className="text-white/80 text-sm mt-1 capitalize">
                    {item.description}
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <WeatherIcon icon={item.icon} size={48} />
                  <div className="text-right">
                    <p className="text-white font-light text-2xl">
                      {item.temperatureCelsius}°
                    </p>
                    <p className="text-white/70 text-sm">
                      {item.minTempCelsius}° / {item.maxTempCelsius}°
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/20">
                <div className="text-center">
                  <p className="text-white/70 text-xs">Humidity</p>
                  <p className="text-white text-sm font-medium">{item.humidity}%</p>
                </div>
                <div className="text-center">
                  <p className="text-white/70 text-xs">Wind</p>
                  <p className="text-white text-sm font-medium">
                    {Math.round(item.windSpeed * 3.6)} km/h
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {forecast.length === 0 && !loading && (
          <div className="text-center text-white/80 py-8">
            <p>No forecast data available</p>
          </div>
        )}
      </div>
    </div>
  );
};