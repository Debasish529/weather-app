import React from 'react';
import { Cloud, Droplets, Wind } from 'lucide-react';
import type { WeatherData } from '../types/weather';

interface WeatherCardProps {
  weather: WeatherData;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {weather.location.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {weather.location.country}
          </p>
        </div>
        <img
          src={`https:${weather.current.condition.icon}`}
          alt={weather.current.condition.text}
          className="w-16 h-16"
        />
      </div>
      
      <div className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {Math.round(weather.current.temp_c)}°C
      </div>
      
      <div className="text-gray-600 dark:text-gray-300 mb-4">
        {weather.current.condition.text}
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center">
          <Droplets className="w-5 h-5 mr-2 text-blue-500" />
          <span className="text-gray-700 dark:text-gray-300">
            {weather.current.humidity}%
          </span>
        </div>
        <div className="flex items-center">
          <Wind className="w-5 h-5 mr-2 text-blue-500" />
          <span className="text-gray-700 dark:text-gray-300">
            {Math.round(weather.current.wind_kph)} km/h
          </span>
        </div>
        <div className="flex items-center">
          <Cloud className="w-5 h-5 mr-2 text-blue-500" />
          <span className="text-gray-700 dark:text-gray-300">
            {weather.current.pressure_mb} hPa
          </span>
        </div>
      </div>
    </div>
  );
};