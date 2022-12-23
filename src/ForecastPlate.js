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
      <span style={{ display: 'block', marginBottom: '1rem' }}>{item.time.slice(11, 13)}</span>{' '}
      <br></br>
      <span style={{ fontSize: '1.2rem' }}>{item[`temp_${scale}`]}°</span>
    </div>
  ));

  return <div className='forecast-box'>{result}</div>;
}
