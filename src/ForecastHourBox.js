export default function ForecastHourBox({ time, imgAlt, imgSrc, temp }) {
  return (
    <div>
      <span style={{ display: 'block', textAlign: 'center', fontWeight: 'bold' }}>{time}</span>
      <br />
      <img alt={imgAlt} style={{ width: '40px' }} src={imgSrc}></img>
      <br />
      <span style={{ display: 'block', textAlign: 'center', fontSize: '1rem', fontWeight: 'bold' }}>
        {temp}°
      </span>
    </div>
  );
}
