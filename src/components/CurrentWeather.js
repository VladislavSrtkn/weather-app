import { Box, Typography } from '@mui/material';

import BoxHeader from './BoxHeader';
import BoxBody from './BoxBody';

export default function CurrentWeather({ city, country, time, temp, condition, max, min, imgSrc }) {
  return (
    <BoxBody order={0} cols={3}>
      <BoxHeader text={`${city}, ${country} ${time}`} />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: { xs: 'space-between', sm: 'flex-start' },
          p: 3,
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
    </BoxBody>
  );
}
