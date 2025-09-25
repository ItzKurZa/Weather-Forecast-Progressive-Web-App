import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 flex items-center space-x-3 max-w-md">
        <AlertCircle className="text-red-500" size={24} />
        <p className="text-red-700">{message}</p>
      </div>
    </div>
  );
};