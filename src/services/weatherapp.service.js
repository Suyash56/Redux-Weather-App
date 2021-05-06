const GetWeatherData = (City) => {
  const API_KEY = "fcadfe19817622dac55008b2801bb05a";
  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${City}&appid=${API_KEY}`;

  console.log("hi");

  return fetch(URL)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((error) => error);
};

export default GetWeatherData;
