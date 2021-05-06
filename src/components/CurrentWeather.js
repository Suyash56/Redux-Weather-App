import React from "react";
import { useSelector } from "react-redux";

export default function CurrentWeather() {
  const { weatherData } = useSelector((state) => state.weatherInfo);
  if (weatherData && weatherData.list !== undefined) {
    console.log(weatherData);
    const currentWeather = weatherData.list[0];

    var { temp, pressure, humidity } = currentWeather.main;

    var { description } = currentWeather.weather[0];
  }

  return (
    <>
      {weatherData && weatherData.list !== undefined && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3>Temp: {Math.ceil(temp - 273)} &#8451;</h3>
          <h3>Pressure: {pressure} &#13169;</h3>
          <h3>Humidity: {humidity}</h3>
          <h3>Weather: {description}</h3>
        </div>
      )}
    </>
  );
}
