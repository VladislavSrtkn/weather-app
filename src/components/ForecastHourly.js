import { CardContent, CardHeader, Grid } from '@mui/material';

import { format, parse } from 'date-fns';

import CustomCard from './CustomCard';
import ForecastHourBox from './ForecastHourBox';

export default function ForecastHourly({ forecast, city, country, scale }) {
  const result = forecast.map((item) => {
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
    <Grid item xs={12} sx={{ my: 3, order: 1 }}>
      <CustomCard>
        <CardHeader title={`${city}, ${country} forecast`} />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            overflowY: 'hidden',
            pb: 2,
          }}
        >
          {result}
        </CardContent>
      </CustomCard>
    </Grid>
  );
}
