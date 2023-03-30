import { Box } from '@mui/material';

import { format, parse } from 'date-fns';

import BoxHeader from './BoxHeader';
import BoxBody from './BoxBody';
import ForecastHourBox from './ForecastHourBox';

export default function ForecastHourly({ forecastArray, city, country, scale }) {
  const result = forecastArray.map((item) => {
    const parsedTime = parse(item.time, 'yyyy-M-dd H:m', new Date());
    const time = format(parsedTime, 'h a');

    return (
      <ForecastHourBox
        key={item.time}
        time={time}
        imgAlt={item.condition.text}
        imgSrc={item.condition.icon}
        temp={Math.round(item[`temp_${scale}`])}
      />
    );
  });

  return (
    <BoxBody order={1}>
      <BoxHeader text={`${city}, ${country} forecast`} />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          overflowX: { xs: 'scroll', lg: 'auto' },
          overflowY: 'hidden',
          p: 2,
        }}
      >
        {result}
      </Box>
    </BoxBody>
  );
}
