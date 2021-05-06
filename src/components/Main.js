import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/LoginActions";
import { resetWeather } from "../redux/actions/WeatherActions";
import CurrentWeather from "./CurrentWeather";
import FivedaysWeather from "./FivedaysWeather";
import About from "./About";
import "../css/main.css";

export default function Main() {
  const history = useHistory();

  const dispatch = useDispatch();

  const loginInfo = useSelector((state) => state.loginInfo);

  if (loginInfo.loggedInStatus === false) {
    history.push("/");
  }

  const weatherInfo = useSelector((state) => state.weatherInfo);

  console.log(weatherInfo.weatherData);

  const Logout = () => {
    dispatch(resetWeather());
    dispatch(logout(false));
    setTimeout(() => {
      history.push("/");
    }, 1000);
  };

  const handleSelect = (e) => {
    dispatch({ type: "FETCH_WEATHER", payload: e.target.value });
  };

  return (
    <div>
      <div className="main_header">
        <div className="main_title">
          <h1>Weather App</h1>
        </div>
        <div className="main_btn">
          <button className="logout_btn" onClick={Logout}>
            Logout
          </button>
        </div>
      </div>
      <div className="main_dropdown">
        <select className="list" name="weather_list" onChange={handleSelect}>
          <option value="" style={{ color: "black" }} disabled selected>
            SELECT YOUR CITY
          </option>
          <option value="NASHIK">NASHIK</option>
          <option value="MUMBAI">MUMBAI</option>
          <option value="PUNE">PUNE</option>
          <option value="DELHI">DELHI</option>
          <option value="NAGPUR">NAGPUR</option>
        </select>
      </div>
      <div className="main_container">
        <div className="main_container_weather">
          <h2>Current Weather Data</h2>
          {weatherInfo.weatherData.length !== 0 && <CurrentWeather />}
        </div>
        <div className="main_container_5dayWeather">
          <h2>5 Days Weather Forcast</h2>
          {weatherInfo.weatherData.length !== 0 && <FivedaysWeather />}
        </div>
      </div>
      <About />
    </div>
  );
}
