import { LocationService } from '../../domain/interfaces/LocationService';
import { Location } from '../../shared/types/weather.types';
import { WeatherApi } from '../api/WeatherApi';
import { Geolocation } from '@capacitor/geolocation';
import { Capacitor } from '@capacitor/core';

export class LocationServiceImpl implements LocationService {
  private weatherApi: WeatherApi;

  constructor() {
    this.weatherApi = new WeatherApi();
  }

  async getCurrentLocation(): Promise<Location> {
    try {
      // Check if we're running in a native environment
      if (Capacitor.isNativePlatform()) {
        console.log('Using Capacitor Geolocation for native platform');
        
        // Request permissions first
        const permissions = await Geolocation.requestPermissions();
        
        if (permissions.location === 'granted') {
          const position = await Geolocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000
          });
          
          console.log('Successfully obtained user location via Capacitor');
          const location = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          };
          
          return this.enrichLocationWithName(location);
        } else {
          console.warn('Location permission denied, using fallback location');
          return this.getFallbackLocation();
        }
      } else {
        // Use web geolocation API for web platform
        console.log('Using Web Geolocation API for web platform');
        return this.getWebLocation();
      }
    } catch (error) {
      console.warn('Failed to get location:', error, 'Using fallback location');
      return this.getFallbackLocation();
    }
  }

  private getWebLocation(): Promise<Location> {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        console.warn('Geolocation is not supported by this browser, using fallback location');
        resolve(this.getFallbackLocation());
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('Successfully obtained user location via Web API');
          const location = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          };
          
          this.enrichLocationWithName(location).then(resolve);
        },
        (error) => {
          console.warn('Failed to get user location:', error.message, 'Using fallback location');
          resolve(this.getFallbackLocation());
        },
        { 
          enableHighAccuracy: true, 
          timeout: 15000, 
          maximumAge: 600000 // 10 minutes cache
        }
      );
    });
  }

  private async enrichLocationWithName(location: Location): Promise<Location> {
    try {
      const geocodingResults = await this.weatherApi.reverseGeocode(location);
      if (geocodingResults && geocodingResults.length > 0) {
        const result = geocodingResults[0];
        return {
          ...location,
          name: result.name,
          country: result.country
        };
      }
    } catch (error) {
      console.warn('Failed to get location name:', error);
    }
    
    return location;
  }

  private getFallbackLocation(): Location {
    // Fallback to Hanoi, Vietnam coordinates
    return { 
      lat: 21.0285, 
      lon: 105.8542,
      name: 'Hanoi',
      country: 'VN'
    };
  }
}