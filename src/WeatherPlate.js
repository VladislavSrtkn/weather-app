import { useEffect, useState } from 'react';

import ForecastPlateDay from './ForecastPlateHourly';

import { Button, Card } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ForecastPlateHourly from './ForecastPlateHourly';
import ForecastPlateDaily from './ForecastPlateDaily';

export default function WeatherPlate({ city, removeHandler, scale }) {
  const [isValid, setIsValid] = useState(false);
  const [weather, setWeather] = useState(null);
  const [forecastVisibility, setForcastVisibility] = useState(false);

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
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '700px',
          margin: '1rem',
          padding: '0.5rem',
          height: 'fit-content',
          position: 'relative',
        }}
      >
        <IconButton
          sx={{ position: 'absolute', right: 0, top: 0 }}
          aria-label='delete'
          onClick={() => removeHandler(city)}
        >
          <HighlightOffIcon fontSize='large' />
        </IconButton>

        <h3>
          {weather.location.name}, {weather.location.country}
        </h3>

        <h2>
          {weather.current[`temp_${scale}`] >= 0
            ? `+${weather.current[`temp_${scale}`]}`
            : weather.current[`temp_${scale}`]}
          °<img src={weather.current.condition.icon}></img>
        </h2>

        <p>
          Min: {weather.forecast.forecastday[0].day[`mintemp_${scale}`]}°, Max:
          {weather.forecast.forecastday[0].day[`maxtemp_${scale}`]}°
        </p>

        <div>
          <span style={{ paddingRight: '2rem', display: 'inline-block', marginBottom: '1rem' }}>
            Feels like {weather.current[`feelslike_${scale}`]}°
          </span>
          <span style={{ paddingRight: '2rem', display: 'inline-block', marginBottom: '1rem' }}>
            {' '}
            {weather.current.condition.text}{' '}
          </span>
          <span
            style={{
              paddingRight: '2rem',
              display: 'inline-block',
              marginBottom: '1rem',
              whiteSpace: 'nowrap',
            }}
          >
            Сhance of rain: {weather.forecast.forecastday[0].day.daily_chance_of_rain}%
          </span>
        </div>

        <ForecastPlateHourly weather={weather} scale={scale} />

        <Button
          variant='text'
          sx={{ marginY: '2rem', width: '100%' }}
          onClick={() => setForcastVisibility(!forecastVisibility)}
        >
          Show daily forecast
          {!forecastVisibility ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        </Button>

        {forecastVisibility && <ForecastPlateDaily weather={weather} scale={scale} />}
      </Card>
    )
  );
}
