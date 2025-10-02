import { LocationService } from '../../domain/interfaces/LocationService';
import { Location } from '../../shared/types/weather.types';

export class LocationServiceImpl implements LocationService {
  getCurrentLocation(): Promise<Location> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        console.warn('Geolocation is not supported by this browser, using fallback location');
        // Fallback to Hanoi, Vietnam coordinates
        resolve({ lat: 21.0285, lon: 105.8542 });
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('Successfully obtained user location');
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (error) => {
          console.warn('Failed to get user location:', error.message, 'Using fallback location');
          // Fallback to Hanoi, Vietnam coordinates
          resolve({ lat: 21.0285, lon: 105.8542 });
        },
        { 
          enableHighAccuracy: true, 
          timeout: 15000, 
          maximumAge: 600000 // 10 minutes cache
        }
      );
    });
  }
}