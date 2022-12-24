function getHourlyForecast(weather, hours) {
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

export default function ForecastPlateHourly({ weather, scale }) {
  const forecast = getHourlyForecast(weather, 6);

  const result = forecast.map((item) => (
    <div key={item.time}>
      <span style={{ display: 'block', textAlign: 'center' }}>{item.time.slice(11, 13)}</span>{' '}
      <br />
      <img style={{ width: '40px' }} src={item.condition.icon}></img>
      <br />
      <span style={{ display: 'block', textAlign: 'center', fontSize: '1rem' }}>
        {Math.round(item[`temp_${scale}`])}°
      </span>
    </div>
  ));

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem' }}>
      {result}
    </div>
  );
}
