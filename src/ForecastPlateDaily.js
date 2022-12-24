import format from 'date-fns/format';
import CloudIcon from '@mui/icons-material/Cloud';

export default function ForecastPlateDaily({ weather, scale }) {
  const forecast = weather.forecast.forecastday.slice(1);
  console.log(forecast);

  const result = forecast.map((item) => (
    <div key={item.date} style={{ flex: 1 }}>
      <p>{format(new Date(item.date), 'eee')}</p>
      <img src={item.day.condition.icon} />
      <p>
        <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
          {' '}
          {item.day[`maxtemp_${scale}`]}°{' '}
        </span>
        {item.day[`mintemp_${scale}`]}°
      </p>
      <p>
        <CloudIcon sx={{ marginBottom: '-0.3rem', marginRight: '0.5rem', color: '#2d7be5' }} />{' '}
        {item.day.daily_chance_of_rain}%
      </p>
    </div>
  ));

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem' }}>
      {result}
    </div>
  );
}
