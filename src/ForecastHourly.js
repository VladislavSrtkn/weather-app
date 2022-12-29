export default function ForecastHourly({ forecastArray, city, country, scale }) {
  const result = forecastArray.map((item, index) => (
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
        backgroundImage: 'linear-gradient(to right, rgb(19, 79, 151), rgb(82, 148, 195))',
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
          {city}, {country} forecast
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
