import { Weather, WeatherForecast } from '../entities/Weather';
import { Location } from '../../shared/types/weather.types';

export interface WeatherRepository {
  getCurrentWeather(location: Location): Promise<Weather>;
  getForecast(location: Location, days: number): Promise<WeatherForecast[]>;
}