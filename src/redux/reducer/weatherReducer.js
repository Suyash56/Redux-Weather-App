const initialState = {
  weatherData: {},
  city: "",
  loading: false,
  error: "",
};

function weatherReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "FETCH_WEATHER":
      return { ...state, city: payload };

    case "LOAD_WEATHER_LOADING":
      return {
        ...state,
        loading: true,
        error: "",
      };

    case "LOAD_WEATHER_SUCCESS":
      return {
        ...state,
        weatherData: payload,
        loading: false,
      };

    case "LOAD_WEATHER_ERROR":
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case "RESET_WEATHER":
      return initialState;

    default:
      return state;
  }
}

export default weatherReducer;
