import { LocationService } from '../../domain/interfaces/LocationService';
import { Location } from '../../shared/types/weather.types';

export class LocationServiceImpl implements LocationService {
  getCurrentLocation(): Promise<Location> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by this browser'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (error) => {
          // Fallback to London coordinates
          resolve({ lat: 51.5074, lon: -0.1278 });
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
      );
    });
  }
}