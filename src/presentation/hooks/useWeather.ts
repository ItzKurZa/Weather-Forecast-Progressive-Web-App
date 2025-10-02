import { useState, useEffect } from 'react';
import { Weather } from '../../domain/entities/Weather';
import { WeatherService } from '../../application/services/WeatherService';
import { WeatherRepositoryImpl } from '../../infrastructure/repositories/WeatherRepositoryImpl';
import { LocationServiceImpl } from '../../infrastructure/services/LocationServiceImpl';
import { GetCurrentWeatherUseCase } from '../../application/usecases/GetCurrentWeatherUseCase';

export const useWeather = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [locationStatus, setLocationStatus] = useState<'requesting' | 'granted' | 'denied' | 'unavailable'>('requesting');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLocationStatus('requesting');
        const weatherRepository = new WeatherRepositoryImpl();
        const locationService = new LocationServiceImpl();
        const weatherService = new WeatherService(weatherRepository, locationService);
        const getCurrentWeatherUseCase = new GetCurrentWeatherUseCase(weatherService);
        
        const currentWeather = await getCurrentWeatherUseCase.execute();
        setWeather(currentWeather);
        setLocationStatus('granted');
        setError(null);
      } catch (err) {
        setLocationStatus('denied');
        setError(err instanceof Error ? err.message : 'Failed to fetch weather');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return { weather, loading, error, locationStatus };
};