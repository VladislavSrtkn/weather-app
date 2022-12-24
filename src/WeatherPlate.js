import { useEffect, useState } from 'react';

import ForecastPlateDaily from './ForecastPlateDaily';
import ForecastPlateHourly from './ForecastPlateHourly';

import { Button, Card } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import CloudIcon from '@mui/icons-material/Cloud';

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
          sx={{ position: 'absolute', right: 0, top: 0, color: '#ff29294a' }}
          aria-label='delete'
          onClick={() => removeHandler(city)}
        >
          <DeleteForeverIcon fontSize='large' />
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

        <span>{weather.current.condition.text}</span>

        <p>
          Max: {weather.forecast.forecastday[0].day[`maxtemp_${scale}`]}° min:
          {weather.forecast.forecastday[0].day[`mintemp_${scale}`]}°
        </p>

        <div>
          <ThermostatIcon
            sx={{ marginBottom: '-0.3rem', marginRight: '0.5rem', color: '#2d7be5' }}
          />
          <span style={{ paddingRight: '2rem', display: 'inline-block', marginBottom: '1rem' }}>
            Feels like {weather.current[`feelslike_${scale}`]}°
          </span>

          <span
            style={{
              paddingRight: '2rem',
              display: 'inline-block',
              marginBottom: '1rem',
              whiteSpace: 'nowrap',
            }}
          >
            <CloudIcon sx={{ marginBottom: '-0.3rem', marginRight: '0.5rem', color: '#2d7be5' }} />
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
