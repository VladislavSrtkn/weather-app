import { Box, Card, CardContent, CardHeader, Grid } from '@mui/material';

import { format, parse } from 'date-fns';

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
    <Grid item xs={12} sx={{ my: 3, order: 1 }}>
      <Card>
        <CardHeader title={`${city}, ${country} forecast`} />
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              overflowX: { xs: 'scroll', lg: 'auto' },
              overflowY: 'hidden',
              pb: 2,
            }}
          >
            {result}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
