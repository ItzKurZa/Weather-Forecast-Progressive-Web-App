import { Location } from '../../shared/types/weather.types';

export interface LocationService {
  getCurrentLocation(): Promise<Location>;
}