import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';
import { fetchWeather, fetchForecast } from './store/weatherSlice';
import { WeatherCard } from './components/WeatherCard';
import { ForecastCard } from './components/ForecastCard';
import { SearchBar } from './components/SearchBar';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { currentWeather, forecast, loading, error } = useSelector(
    (state: RootState) => state.weather
  );
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  useEffect(() => {
    // Apply dark mode class to html element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSearch = (city: string) => {
    dispatch(fetchWeather(city));
    dispatch(fetchForecast(city));
  };

  useEffect(() => {
    handleSearch('London'); // Default city
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <ThemeToggle />
      
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Weather Forecast
        </h1>
        
        <SearchBar onSearch={handleSearch} />
        
        {loading && (
          <div className="text-center text-gray-600 dark:text-gray-300">
            Loading...
          </div>
        )}
        
        {error && (
          <div className="text-center text-red-500 mb-4">
            {error}
          </div>
        )}
        
        {currentWeather && <WeatherCard weather={currentWeather} />}
        {forecast && <ForecastCard forecast={forecast} />}
      </div>
    </div>
  );
}

export default App;