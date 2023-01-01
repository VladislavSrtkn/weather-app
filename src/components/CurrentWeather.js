import BoxHeader from './BoxHeader';
import BoxBody from './BoxBody';

export default function CurrentWeather({ city, country, time, temp, condition, max, min, imgSrc }) {
  return (
    <BoxBody>
      <BoxHeader text={`${city}, ${country} ${time}`} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '0.5rem',
        }}
      >
        <div>
          <h2 style={{ fontSize: '3rem', margin: 0, padding: '0.5rem' }}>{Math.round(temp)}°</h2>

          <p style={{ fontSize: '1.1rem', paddingLeft: '0.8rem' }}>
            {condition} <br />
            <span>Max: {Math.round(max)}°</span>{' '}
            <span style={{ whiteSpace: 'nowrap' }}>min: {Math.round(min)}°</span>
          </p>
        </div>
        <div>
          <img style={{ width: '64px' }} src={imgSrc} alt={condition}></img>
        </div>
      </div>
    </BoxBody>
  );
}
