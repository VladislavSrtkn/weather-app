import format from 'date-fns/format';

export default function MainWeatherPlate({
  city,
  country,
  time,
  temp,
  condition,
  max,
  min,
  imgSrc,
}) {
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
        backgroundImage: 'linear-gradient(to right, #00b4db, #0083b0)',
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
          {city}, {country} {format(new Date(time), 'k:mm')}
        </h3>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '0.5rem',
        }}
      >
        <div>
          <h2 style={{ color: '#fff', fontSize: '4rem', margin: 0, padding: '0.5rem' }}>
            {Math.round(temp)}°
          </h2>

          <p
            style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.5rem', paddingLeft: '0.8rem' }}
          >
            {condition} <br />
            <span>Max: {Math.round(max)}°</span>{' '}
            <span style={{ whiteSpace: 'nowrap' }}>min: {Math.round(min)}°</span>
          </p>
        </div>
        <div>
          <img style={{ width: '130px' }} src={imgSrc} alt={condition}></img>
        </div>
      </div>
    </div>
  );
}
