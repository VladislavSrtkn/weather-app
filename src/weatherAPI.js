async function getWeather() {
  const response = await fetch(
    'https://api.weatherapi.com/v1/current.json?key=c24794a3208345fb9e382502222112&q=London&aqi=no'
  );
  const json = await response.json();

  console.log(json);
}
