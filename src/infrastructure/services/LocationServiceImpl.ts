import { LocationService } from '../../domain/interfaces/LocationService';
import { Location } from '../../shared/types/weather.types';
import { Geolocation } from '@capacitor/geolocation';
import { Capacitor } from '@capacitor/core';

export class LocationServiceImpl implements LocationService {
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
          return {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          };
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
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
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

  private getFallbackLocation(): Location {
    // Fallback to Hanoi, Vietnam coordinates
    return { lat: 21.0285, lon: 105.8542 };
  }
}