import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { WeatherData, ForecastData } from '../types/weather';

const API_KEY = 'bb2e6c085cf0469d9af161419250101';
const BASE_URL = 'https://api.weatherapi.com/v1';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city: string) => {
    const response = await axios.get<WeatherData>(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${city}&aqi=no`
    );
    return response.data;
  }
);

export const fetchForecast = createAsyncThunk(
  'weather/fetchForecast',
  async (city: string) => {
    const response = await axios.get<ForecastData>(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no`
    );
    return response.data;
  }
);

interface WeatherState {
  currentWeather: WeatherData | null;
  forecast: ForecastData | null;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  currentWeather: null,
  forecast: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.currentWeather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch weather data';
      })
      .addCase(fetchForecast.fulfilled, (state, action) => {
        state.forecast = action.payload;
      });
  },
});

export default weatherSlice.reducer;