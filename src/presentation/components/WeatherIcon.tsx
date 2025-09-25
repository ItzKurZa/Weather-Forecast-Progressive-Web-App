import React from 'react';
import { 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudSnow, 
  CloudLightning, 
  Cloudy,
  Moon,
  CloudDrizzle 
} from 'lucide-react';

interface WeatherIconProps {
  icon: string;
  size?: number;
  className?: string;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ 
  icon, 
  size = 64, 
  className = '' 
}) => {
  const getIcon = () => {
    switch (icon) {
      case '01d':
        return <Sun size={size} className={`text-yellow-400 ${className}`} />;
      case '01n':
        return <Moon size={size} className={`text-gray-300 ${className}`} />;
      case '02d':
      case '02n':
        return <Cloudy size={size} className={`text-gray-400 ${className}`} />;
      case '03d':
      case '03n':
      case '04d':
      case '04n':
        return <Cloud size={size} className={`text-gray-500 ${className}`} />;
      case '09d':
      case '09n':
        return <CloudDrizzle size={size} className={`text-blue-400 ${className}`} />;
      case '10d':
      case '10n':
        return <CloudRain size={size} className={`text-blue-500 ${className}`} />;
      case '11d':
      case '11n':
        return <CloudLightning size={size} className={`text-purple-500 ${className}`} />;
      case '13d':
      case '13n':
        return <CloudSnow size={size} className={`text-blue-200 ${className}`} />;
      default:
        return <Sun size={size} className={`text-yellow-400 ${className}`} />;
    }
  };

  return (
    <div className="flex items-center justify-center">
      {getIcon()}
    </div>
  );
};