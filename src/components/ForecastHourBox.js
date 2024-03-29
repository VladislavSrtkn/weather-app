import { Box, Typography } from '@mui/material';

export default function ForecastHourBox({ time, imgAlt, imgSrc, temp }) {
  const style = {
    fontWeight: 'bold',
    textAlign: 'center',
    py: 1,
    px: 3,
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant='body2' sx={{ ...style, flexGrow: 1 }}>
        {time}
      </Typography>
      <img alt={imgAlt} width={40} src={imgSrc}></img>
      <Typography variant='body1' sx={style}>
        {temp}°
      </Typography>
    </Box>
  );
}
