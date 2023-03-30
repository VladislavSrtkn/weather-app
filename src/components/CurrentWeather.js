import { Box, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';

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
      <Card sx={{ flexGrow: 1 }}>
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
              <Typography sx={{ fontSize: '2.2rem', m: 0 }}>{Math.round(temp)}°</Typography>
              <Typography sx={{ fontSize: '1.1rem' }}>{condition}</Typography>
              <Typography>
                Max: {Math.round(max)}° min: {Math.round(min)}°
              </Typography>
            </Box>
            <Box>
              <img width={64} src={imgSrc} alt={condition}></img>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
