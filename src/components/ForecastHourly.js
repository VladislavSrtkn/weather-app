import BoxHeader from './BoxHeader';
import BoxBody from './BoxBody';
import ForecastHourBox from './ForecastHourBox';

export default function ForecastHourly({ forecastArray, city, country, scale }) {
  const result = forecastArray.map((item) => (
    <ForecastHourBox
      key={item.time}
      time={item.time.slice(11, 13)}
      imgAlt={item.condition.text}
      imgSrc={item.condition.icon}
      temp={Math.round(item[`temp_${scale}`])}
    />
  ));

  return (
    <BoxBody>
      <BoxHeader text={`${city}, ${country} forecast`} />

      <div
        className='hourly-forecast'
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: '1rem',
          overflowX: 'scroll',
          overflowY: 'hidden',
        }}
      >
        {result}
      </div>
    </BoxBody>
  );
}
