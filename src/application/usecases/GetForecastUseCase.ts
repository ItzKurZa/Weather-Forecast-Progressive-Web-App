import { WeatherForecast } from '../../domain/entities/Weather';
import { WeatherService } from '../services/WeatherService';

export class GetForecastUseCase {
  constructor(private weatherService: WeatherService) {}

  async execute(days: number): Promise<WeatherForecast[]> {
    return this.weatherService.getForecast(days);
  }
}