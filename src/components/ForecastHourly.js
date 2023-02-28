import BoxHeader from './BoxHeader';
import BoxBody from './BoxBody';
import ForecastHourBox from './ForecastHourBox';
import { Box } from '@mui/material';

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

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          overflowX: 'scroll',
          overflowY: 'hidden',
          p: 2,
        }}
      >
        {result}
      </Box>
    </BoxBody>
  );
}
