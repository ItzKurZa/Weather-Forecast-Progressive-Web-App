import React from 'react';
import { Home, Calendar } from 'lucide-react';

interface NavigationProps {
  currentPage: 'current' | 'forecast';
  onNavigate: (page: 'current' | 'forecast') => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="flex max-w-md mx-auto">
        <button
          onClick={() => onNavigate('current')}
          className={`flex-1 flex flex-col items-center py-3 px-4 transition-colors duration-200 ${
            currentPage === 'current'
              ? 'text-blue-600 bg-blue-50'
              : 'text-gray-600 hover:text-blue-600'
          }`}
        >
          <Home size={24} />
          <span className="text-xs mt-1 font-medium">Current</span>
        </button>
        <button
          onClick={() => onNavigate('forecast')}
          className={`flex-1 flex flex-col items-center py-3 px-4 transition-colors duration-200 ${
            currentPage === 'forecast'
              ? 'text-blue-600 bg-blue-50'
              : 'text-gray-600 hover:text-blue-600'
          }`}
        >
          <Calendar size={24} />
          <span className="text-xs mt-1 font-medium">Forecast</span>
        </button>
      </div>
    </div>
  );
};