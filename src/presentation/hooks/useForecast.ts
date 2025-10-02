import { useState, useEffect } from 'react';
import { WeatherForecast } from '../../domain/entities/Weather';
import { WeatherService } from '../../application/services/WeatherService';
import { WeatherRepositoryImpl } from '../../infrastructure/repositories/WeatherRepositoryImpl';
import { LocationServiceImpl } from '../../infrastructure/services/LocationServiceImpl';
import { GetForecastUseCase } from '../../application/usecases/GetForecastUseCase';

export const useForecast = (days: number) => {
  const [forecast, setForecast] = useState<WeatherForecast[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const weatherRepository = new WeatherRepositoryImpl();
        const locationService = new LocationServiceImpl();
        const weatherService = new WeatherService(weatherRepository, locationService);
        const getForecastUseCase = new GetForecastUseCase(weatherService);
        
        const forecastData = await getForecastUseCase.execute(days);
        setForecast(forecastData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch forecast');
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [days]);

  return { forecast, loading, error };
};