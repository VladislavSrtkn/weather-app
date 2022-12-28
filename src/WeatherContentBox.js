import { useEffect, useState } from 'react';

import ForecastHourly from './ForecastHourly';
import CurrentWeatherBox from './CurrentWeatherBox';
import TodayCondtionsPlate from './TodayConditionsPlate';

export default function WeatherContentBox({ city, scale }) {
  const [isValid, setIsValid] = useState(false);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=c24794a3208345fb9e382502222112&q=${city}&aqi=no&days=8`
    )
      .then((response) => response.json())
      .then((result) => setWeather({ ...result }))
      .then(() => setIsValid(true))
      .catch((err) => {
        setIsValid(false);
        console.log(err);
      });
  }, []);

  return (
    isValid && (
      <>
        <CurrentWeatherBox
          city={weather.location.name}
          country={weather.location.country}
          time={weather.location.localtime}
          temp={weather.current[`temp_${scale}`]}
          condition={weather.current.condition.text}
          max={weather.forecast.forecastday[0].day[`maxtemp_${scale}`]}
          min={weather.forecast.forecastday[0].day[`mintemp_${scale}`]}
          imgSrc={weather.current.condition.icon}
        />
        <ForecastHourly
          time={weather.location.localtime}
          forecastArray={weather.forecast.forecastday}
          city={weather.location.name}
          country={weather.location.country}
          scale={scale}
        />

        <TodayCondtionsPlate weather={weather} scale={scale} />
      </>
    )
  );
}