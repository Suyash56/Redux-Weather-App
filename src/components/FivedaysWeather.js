import React from "react";
import { useSelector } from "react-redux";
import "../css/fivedayweather.css";

export default function FivedaysWeather() {
  const { weatherData, loading } = useSelector((state) => state.weatherInfo);
  const fivedaysData = [];
  if (weatherData && weatherData.list !== undefined) {
    const data_time = weatherData.list[0].dt_txt;
    const time = data_time.split(" ")[1];
    const hour = time.split(":")[0];
    let next_day = (24 - hour) / 3;
    let i = 0;
    while (i < 5) {
      let tempreature = Math.ceil(weatherData.list[next_day].main.temp - 273);
      let humidity = weatherData.list[next_day].main.humidity;
      let obj = { temp: tempreature, hum: humidity };
      fivedaysData.push(obj);
      next_day = next_day + 8;
      i++;
    }
  }
  return (
    <>
      {weatherData && weatherData.list !== undefined && (
        <div className="fivedayweather">
          <table className="table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Humidity (%)</th>
                <th>Temperature (C)</th>
              </tr>
            </thead>
            <tbody>
              {fivedaysData.map((ele, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{ele.hum}%</td>
                    <td>{ele.temp} &#8451;</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
