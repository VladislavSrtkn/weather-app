import { Box, Typography } from '@mui/material';

export default function ForecastHourBox({ time, imgAlt, imgSrc, temp }) {
  const style = {
    fontWeight: 'bold',
    textAlign: 'center',
    py: 1,
    px: 3,
  };

  return (
    <Box textAlign='center'>
      <Typography sx={style}>{time}</Typography>
      <img alt={imgAlt} width={40} src={imgSrc}></img>
      <Typography sx={style}>{temp}°</Typography>
    </Box>
  );
}
