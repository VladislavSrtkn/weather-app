import { useEffect, useState } from 'react';

import ForecastHourly from './ForecastHourly';
import CurrentWeather from './CurrentWeather';
import TodayCondtions from './TodayConditions';
import ErrorBox from './ErrorBox';

import format from 'date-fns/format';
import parse from 'date-fns/parse';

import getHourlyForecast from '../getHourlyForecast';
import SceletonContent from './SceletonContent';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export default function WeatherContentContainer({ city, scale }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=c24794a3208345fb9e382502222112&q=${city}&aqi=no&days=3`
    )
      .then((response) => {
        if (response.status === 200) {
          return response
            .json()
            .then((result) => setWeather({ ...result }))
            .then(() => {
              setIsLoading(false);
              setIsReady(true);
            });
        } else {
          setIsLoading(false);
          setIsError(response.status);
          console.log(
            'API request failed, code: ' +
              response.status +
              '. About type of error: https://www.weatherapi.com/docs/'
          );
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(err.message);
      });
  }, [city]);

  if (isLoading) {
    return <SceletonContent />;
  }

  if (isError) {
    return <ErrorBox errorText={isError} />;
  }

  if (isReady) {
    const city = weather.location.name;
    const country = weather.location.country;
    const parsedTime = parse(weather.location.localtime, 'yyyy-M-dd H:m', new Date());
    const time = format(parsedTime, 'p');
    const temp = weather.current[`temp_${scale}`];
    const condition = weather.current.condition.text;
    const maxTemp = weather.forecast.forecastday[0].day[`maxtemp_${scale}`];
    const minTemp = weather.forecast.forecastday[0].day[`mintemp_${scale}`];
    const imageSource = weather.current.condition.icon;
    const formattedTime =
      weather.location.localtime.length === 16
        ? weather.location.localtime
        : weather.location.localtime.slice(0, 11) + '0' + weather.location.localtime.slice(11);
    const forecast = getHourlyForecast(formattedTime, weather.forecast.forecastday, 15);
    const feelsLike = weather.current[`feelslike_${scale}`];
    const sunrise = weather.forecast.forecastday[0].astro.sunrise;
    const sunset = weather.forecast.forecastday[0].astro.sunset;
    const wind =
      scale === 'c'
        ? `${weather.forecast.forecastday[0].day.maxwind_kph} km/h`
        : `${weather.forecast.forecastday[0].day.maxwind_mph} m/h`;
    const visibility =
      scale === 'c'
        ? `${weather.forecast.forecastday[0].day.avgvis_km} km`
        : `${weather.forecast.forecastday[0].day.avgvis_miles} m`;
    const humidity = weather.forecast.forecastday[0].day.avghumidity + '%';
    const indexUV = Math.round(weather.forecast.forecastday[0].day.uv) + ' of 10';
    const moonPhase = weather.forecast.forecastday[0].astro.moon_phase;

    return (
      <Grid2 container>
        <CurrentWeather
          city={city}
          country={country}
          time={time}
          temp={temp}
          condition={condition}
          max={maxTemp}
          min={minTemp}
          imgSrc={imageSource}
        />
        <ForecastHourly forecastArray={forecast} city={city} country={country} scale={scale} />

        <TodayCondtions
          city={city}
          country={country}
          feelsLike={feelsLike}
          sunrise={sunrise}
          sunset={sunset}
          wind={wind}
          visibility={visibility}
          weather={weather}
          scale={scale}
          humidity={humidity}
          indexUV={indexUV}
          moonPhase={moonPhase}
        />
      </Grid2>
    );
  }
}
