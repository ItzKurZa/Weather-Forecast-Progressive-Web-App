import React from 'react';
import { MapPin, AlertCircle, CheckCircle } from 'lucide-react';
import { Capacitor } from '@capacitor/core';

interface LocationStatusProps {
  status: 'requesting' | 'granted' | 'denied' | 'unavailable';
  locationName?: string;
  isUserLocation?: boolean;
}

export const LocationStatus: React.FC<LocationStatusProps> = ({ 
  status, 
  locationName, 
  isUserLocation = false 
}) => {
  const getStatusInfo = () => {
    switch (status) {
      case 'requesting':
        return {
          icon: <MapPin className="animate-pulse" size={16} />,
          text: 'Getting your location...',
          color: 'text-blue-400'
        };
      case 'granted':
        return {
          icon: <CheckCircle size={16} />,
          text: isUserLocation 
            ? `${Capacitor.isNativePlatform() ? 'Device' : 'Current'} location: ${locationName}`
            : `Location: ${locationName}`,
          color: 'text-green-400'
        };
      case 'denied':
        return {
          icon: <AlertCircle size={16} />,
          text: `Using default location: ${locationName}`,
          color: 'text-yellow-400'
        };
      case 'unavailable':
        return {
          icon: <AlertCircle size={16} />,
          text: `Location unavailable, using: ${locationName}`,
          color: 'text-red-400'
        };
      default:
        return {
          icon: <MapPin size={16} />,
          text: locationName || 'Unknown location',
          color: 'text-gray-400'
        };
    }
  };

  const { icon, text, color } = getStatusInfo();

  return (
    <div className={`flex items-center space-x-2 ${color} text-sm`}>
      {icon}
      <span>{text}</span>
    </div>
  );
};