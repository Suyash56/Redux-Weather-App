const getWeatherData = (City) => {
  const API_KEY = "787f825601a05885bcca9b7a29ca8b63";
  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${City}&appid=${API_KEY}`;

  return fetch(URL)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((error) => error);
};

export default getWeatherData;
