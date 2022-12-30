export default function CurrentWeather({ city, country, time, temp, condition, max, min, imgSrc }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        margin: '1rem',
        position: 'relative',
        borderRadius: 10,
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
          {city}, {country} {time}
        </h3>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          padding: '0.5rem',
        }}
      >
        <div>
          <h2 style={{ color: '#fff', fontSize: '3rem', margin: 0, padding: '0.5rem' }}>
            {Math.round(temp)}°
          </h2>

          <p style={{ color: '#fff', fontSize: '1.5rem', paddingLeft: '0.8rem' }}>
            {condition} <br />
            <span>Max: {Math.round(max)}°</span>{' '}
            <span style={{ whiteSpace: 'nowrap' }}>min: {Math.round(min)}°</span>
          </p>
        </div>
        <div>
          <img style={{ width: '80px' }} src={imgSrc} alt={condition}></img>
        </div>
      </div>
    </div>
  );
}
