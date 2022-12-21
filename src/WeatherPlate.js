import { useState } from 'react';
import { getCurrentWeather } from './weatherAPI';
import { Card } from '@mui/material';
import { width } from '@mui/system';
import { ClassNames } from '@emotion/react';

export default function WeatherPlate({ city, removeHandler }) {
  const [isValid, setIsValid] = useState(false);
  const [currentTemp, setCurrentTemp] = useState('');
  const [currentCondition, setCurrentCondition] = useState('');
  const [feelsLike, setFeelsLike] = useState('');

  getCurrentWeather(city)
    .then((result) => {
      setCurrentTemp(result.current.temp_c);
      setCurrentCondition(result.current.condition.text);
      setFeelsLike(result.current.feelslike_c);

      setIsValid(true);
    })
    .catch((error) => console.log(error));

  return (
    isValid && (
      <Card sx={{ maxWidth: 345 }} className={'test'}>
        <h4>{city}</h4>
        <p>Temp: {currentTemp}</p>
        <p>Condition: {currentCondition}</p>
        <p>Feels like: {feelsLike}</p>
        <button onClick={() => removeHandler(city)}>Remove</button>
      </Card>
    )
  );
}
