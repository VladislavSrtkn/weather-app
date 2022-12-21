import { useState } from 'react';
import { getCurrentWeather } from './weatherAPI';

export default function WeatherPlate({ city }) {
  const [currentTemp, setCurrentTemp] = useState('');
  const [currentCondition, setCurrentCondition] = useState('');
  const [feelsLike, setFeelsLike] = useState('');

  getCurrentWeather(city).then((result) => {
    setCurrentTemp(result.current.temp_c);
    setCurrentCondition(result.current.condition.text);
    setFeelsLike(result.current.feelslike_c);
  });

  return (
    <div style={{ border: '1px solid grey' }}>
      <h4>{city}</h4>
      <p>Temp: {currentTemp}</p>
      <p>Condition: {currentCondition}</p>
      <p>Feels like: {feelsLike}</p>
    </div>
  );
}
