import { WeatherRepository } from '../../domain/interfaces/WeatherRepository';
import { Weather, WeatherForecast } from '../../domain/entities/Weather';
import { Location } from '../../shared/types/weather.types';
import { WeatherApi } from '../api/WeatherApi';

export class WeatherRepositoryImpl implements WeatherRepository {
  private api: WeatherApi;

  constructor() {
    this.api = new WeatherApi();
  }

  async getCurrentWeather(location: Location): Promise<Weather> {
    const data = await this.api.getCurrentWeather(location);
    
    return new Weather(
      data.id,
      data.name,
      data.main.temp,
      data.main.feels_like,
      data.weather[0].description,
      data.weather[0].icon,
      data.main.humidity,
      data.main.pressure,
      data.wind.speed,
      data.dt
    );
  }

  async getForecast(location: Location, days: number): Promise<WeatherForecast[]> {
    const data = await this.api.getForecast(location);
    const forecasts: WeatherForecast[] = [];
    
    // Group by day and take one forecast per day
    const dailyForecasts = new Map<string, any>();
    
    data.list.forEach(item => {
      const date = new Date(item.dt * 1000);
      const dateKey = date.toDateString();
      
      if (!dailyForecasts.has(dateKey) && forecasts.length < days) {
        dailyForecasts.set(dateKey, item);
        
        forecasts.push(new WeatherForecast(
          date,
          item.main.temp,
          item.main.temp_min,
          item.main.temp_max,
          item.weather[0].description,
          item.weather[0].icon,
          item.main.humidity,
          item.wind.speed
        ));
      }
    });
    
    return forecasts.slice(0, days);
  }
}