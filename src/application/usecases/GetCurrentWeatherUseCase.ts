import { Weather } from '../../domain/entities/Weather';
import { WeatherService } from '../services/WeatherService';

export class GetCurrentWeatherUseCase {
  constructor(private weatherService: WeatherService) {}

  async execute(): Promise<Weather> {
    return this.weatherService.getCurrentWeather();
  }
}