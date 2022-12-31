import BoxHeader from './BoxHeader';
import BoxBody from './BoxBody';
import ForecastHourBox from './ForecastHourBox';

export default function ForecastHourly({ forecastArray, city, country, scale }) {
  const result = forecastArray.map((item, index) => (
    <ForecastHourBox
      key={item.time}
      time={index === 0 ? 'now ' : item.time.slice(11, 13)}
      imgAlt={item.condition.text}
      imgSrc={item.condition.icon}
      temp={Math.round(item[`temp_${scale}`])}
    />
  ));

  return (
    <BoxBody>
      <BoxHeader text={`${city}, ${country} forecast`} />

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
    </BoxBody>
  );
}
