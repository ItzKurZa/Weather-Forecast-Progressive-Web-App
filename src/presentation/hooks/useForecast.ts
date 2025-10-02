import { useState, useEffect } from 'react';
import { WeatherForecast } from '../../domain/entities/Weather';
import { WeatherService } from '../../application/services/WeatherService';
import { WeatherRepositoryImpl } from '../../infrastructure/repositories/WeatherRepositoryImpl';
import { LocationServiceImpl } from '../../infrastructure/services/LocationServiceImpl';
import { GetForecastUseCase } from '../../application/usecases/GetForecastUseCase';

export const useForecast = (days: number) => {
  const [forecast, setForecast] = useState<WeatherForecast[]>([]);
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [locationStatus, setLocationStatus] = useState<'requesting' | 'granted' | 'denied' | 'unavailable'>('requesting');

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        setLocationStatus('requesting');
        const weatherRepository = new WeatherRepositoryImpl();
        const locationService = new LocationServiceImpl();
        const weatherService = new WeatherService(weatherRepository, locationService);
        const getForecastUseCase = new GetForecastUseCase(weatherService);
        
        const forecastData = await getForecastUseCase.execute(days);
        const currentLocation = await locationService.getCurrentLocation();
        
        setForecast(forecastData);
        setLocation(currentLocation);
        setLocationStatus(currentLocation.name ? 'granted' : 'denied');
        setError(null);
      } catch (err) {
        setLocationStatus('denied');
        setError(err instanceof Error ? err.message : 'Failed to fetch forecast');
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [days]);

  return { forecast, location, loading, error, locationStatus };
};