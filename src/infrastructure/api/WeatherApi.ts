import { CurrentWeather, ForecastResponse, Location, GeocodingResponse } from '../../shared/types/weather.types';

const API_KEY = '85e04ce3529da7a42886b10254dfee24';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const GEO_BASE_URL = 'https://api.openweathermap.org/geo/1.0';

export class WeatherApi {
  async getCurrentWeather(location: Location): Promise<CurrentWeather> {
    const response = await fetch(
      `${BASE_URL}/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch current weather');
    }
    
    return response.json();
  }

  async getForecast(location: Location): Promise<ForecastResponse> {
    const response = await fetch(
      `${BASE_URL}/forecast?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch weather forecast');
    }
    
    return response.json();
  }

  async reverseGeocode(location: Location): Promise<GeocodingResponse[]> {
    const response = await fetch(
      `${GEO_BASE_URL}/reverse?lat=${location.lat}&lon=${location.lon}&limit=1&appid=${API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch location name');
    }
    
    return response.json();
  }
}