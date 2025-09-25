import { Weather, WeatherForecast } from '../../domain/entities/Weather';
import { WeatherRepository } from '../../domain/interfaces/WeatherRepository';
import { LocationService } from '../../domain/interfaces/LocationService';

export class WeatherService {
  constructor(
    private weatherRepository: WeatherRepository,
    private locationService: LocationService
  ) {}

  async getCurrentWeather(): Promise<Weather> {
    const location = await this.locationService.getCurrentLocation();
    return this.weatherRepository.getCurrentWeather(location);
  }

  async getForecast(days: number): Promise<WeatherForecast[]> {
    const location = await this.locationService.getCurrentLocation();
    return this.weatherRepository.getForecast(location, days);
  }
}