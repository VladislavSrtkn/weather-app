import { useEffect, useState } from 'react';
import { Card } from '@mui/material';
import ForecastPlate from './ForecastPlate';

export default function WeatherPlate({ city, removeHandler, scale }) {
  const [isValid, setIsValid] = useState(false);
  const [weather, setWeather] = useState(null);
  const [forecastVisibility, setForcastVisibility] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=c24794a3208345fb9e382502222112&q=${city}&aqi=no&days=2`
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
      <Card
        sx={{
          maxWidth: 345,
          minWidth: 280,
          margin: '1rem',
          padding: '0.5rem',
          height: 'fit-content',
        }}
        className={'test'}
      >
        <h4>
          {weather.location.name}, {weather.location.country}
        </h4>
        <p>Temp: {weather.current[`temp_${scale}`]}°</p>
        <p>Condition: {weather.current.condition.text} </p>
        <p>
          Min: {weather.forecast.forecastday[0].day[`mintemp_${scale}`]}°, Max:
          {weather.forecast.forecastday[0].day[`maxtemp_${scale}`]}°
        </p>
        <p>Feels like: {weather.current[`feelslike_${scale}`]}°</p>
        <button onClick={() => removeHandler(city)}>Remove</button>
        <button onClick={() => setForcastVisibility(!forecastVisibility)}>Forecast</button>
        {forecastVisibility && <ForecastPlate weather={weather} scale={scale} />}
      </Card>
    )
  );
}
