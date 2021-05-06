import {
  all,
  put,
  call,
  take,
  fork,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";
import getWeatherData from "../../services/weatherapp.service";
import {
  loadWeatherSuccess,
  loadWeatherError,
} from "../actions/WeatherActions";

function* fetchWeatherData(city) {
  try {
    const weatherData = yield call(getWeatherData, city);
    console.log(weatherData);
    yield put(loadWeatherSuccess(weatherData));
  } catch (error) {
    yield put(loadWeatherError(error));
  }
}

function* watcherSaga() {
  while (true) {
    const { payload } = yield take("FETCH_WEATHER");
    yield takeLatest("LOAD_WEATHER_LOADING", fetchWeatherData);
    yield fork(fetchWeatherData, payload);
  }
}

export default function* rootSaga() {
  yield all([watcherSaga()]);
}
