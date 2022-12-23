function getForecast(weather, hours) {
  const currentHours = new Date(weather.location.localtime).getHours();
  const currentDay = weather.forecast.forecastday[0].hour;
  const nextDay = weather.forecast.forecastday[1].hour;

  let result;

  result = currentDay.slice(currentHours + 1, currentHours + 1 + hours);
  if (result.length < hours) {
    const difference = hours - result.length;
    result = [...result, ...nextDay.slice(0, difference)];
  }
  return result;
}

export default function ForecastPlate({ weather, scale }) {
  const forecast = getForecast(weather, 6);

  const result = forecast.map((item) => (
    <div key={item.time}>
      {item.time.slice(11, 13)} <br></br>
      {item[`temp_${scale}`]}°
    </div>
  ));

  return <div className='forecast-box'>{result}</div>;
}
