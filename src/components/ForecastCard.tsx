import React from 'react';
import type { ForecastData } from '../types/weather';

interface ForecastCardProps {
  forecast: ForecastData;
}

export const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mt-6">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">5-Day Forecast</h2>
      <div className="grid grid-cols-5 gap-4">
        {forecast.forecast.forecastday.map((day) => (
          <div key={day.date} className="text-center">
            <div className="text-gray-600 dark:text-gray-300 text-sm">
              {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
            </div>
            <img
              src={`https:${day.day.condition.icon}`}
              alt={day.day.condition.text}
              className="w-10 h-10 mx-auto"
            />
            <div className="text-gray-800 dark:text-white font-semibold">
              {Math.round(day.day.avgtemp_c)}°C
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};