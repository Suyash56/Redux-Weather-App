export const fetchWeather = (City) => ({
  type: "FETCH_WEATHER",
  payload: City,
});

export const loadWeatherLoading = () => ({
  type: "LOAD_WEATHER_LOADING",
});

export const loadWeatherSuccess = (weatherData) => ({
  type: "LOAD_WEATHER_SUCCESS",
  payload: weatherData,
});

export const loadWeatherError = (error) => ({
  type: "LOAD_WEATHER_ERROR",
  payload: error,
});

export const resetWeather = () => ({
  type: "RESET_WEATHER",
});
