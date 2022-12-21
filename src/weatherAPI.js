async function getCurrentWeather(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=c24794a3208345fb9e382502222112&q=${city}&aqi=no`
  );

  const weather = await response.json();
  return weather;
}

export { getCurrentWeather };
