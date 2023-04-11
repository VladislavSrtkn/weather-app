import { Box, CardContent, CardHeader, Grid, Typography } from '@mui/material';

import CustomCard from './CustomCard';

export default function CurrentWeather({ city, country, time, temp, condition, max, min, imgSrc }) {
  return (
    <Grid
      item
      xs={12}
      lg={3}
      sx={{
        order: 0,
        my: 3,
        display: 'flex',
      }}
    >
      <CustomCard sx={{ flexGrow: 1 }}>
        <CardHeader title={`${city}, ${country} ${time}`} />
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: { xs: 'space-between', sm: 'flex-start' },
            }}
          >
            <Box>
              <Typography variant='h3' component='p' sx={{ m: 0 }}>
                {Math.round(temp)}°
              </Typography>
              <Typography variant='h6' component='p'>
                {condition}
              </Typography>
              <Typography>
                Max: {Math.round(max)}° min: {Math.round(min)}°
              </Typography>
            </Box>
            <Box>
              <img width={64} src={imgSrc} alt={condition}></img>
            </Box>
          </Box>
        </CardContent>
      </CustomCard>
    </Grid>
  );
}
