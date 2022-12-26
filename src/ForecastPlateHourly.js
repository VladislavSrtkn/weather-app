function getHourlyForecast(weather, hours) {
  const currentHours = new Date(weather.location.localtime).getHours();
  const currentDay = weather.forecast.forecastday[0].hour;
  const nextDay = weather.forecast.forecastday[1].hour;

  let result;

  result = currentDay.slice(currentHours, currentHours + hours);
  if (result.length < hours) {
    const difference = hours - result.length;
    result = [...result, ...nextDay.slice(0, difference)];
  }
  return result;
}

export default function ForecastPlateHourly({ weather, scale }) {
  const forecast = getHourlyForecast(weather, 5);

  const result = forecast.map((item, index) => (
    <div key={item.time}>
      <span style={{ display: 'block', textAlign: 'center', fontWeight: 'bold' }}>
        {index === 0 ? 'now ' : item.time.slice(11, 13)}
      </span>
      <br />
      <img alt={item.condition.text} style={{ width: '40px' }} src={item.condition.icon}></img>
      <br />
      <span style={{ display: 'block', textAlign: 'center', fontSize: '1rem', fontWeight: 'bold' }}>
        {Math.round(item[`temp_${scale}`])}°
      </span>
    </div>
  ));

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        margin: '1rem',
        borderRadius: 10,
        color: '#fff',
        backgroundImage: 'linear-gradient(to right, rgb(49, 155, 178), rgb(30 136 172))',
      }}
    >
      <div
        style={{
          borderRadius: '10px 10px 0px 0px',
          backgroundColor: 'rgb(55 68 86 / 39%)',
          paddingLeft: '0.5rem',
        }}
      >
        <h3>
          {weather.location.name}, {weather.location.country} forecst
        </h3>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: '1rem',
        }}
      >
        {result}
      </div>
    </div>
  );
}
