import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Box, Typography } from '@mui/material';

export default function Header() {
  return (
    <Box component='header'>
      <Typography
        variant='h5'
        component='h1'
        sx={{
          background: 'linear-gradient(to right, #0d324d, #ffffff00)',
          boxShadow: '#fff 0px 2px 1px 0px',
          p: 1.5,
        }}
      >
        Weather App
        <WbSunnyIcon />
      </Typography>
    </Box>
  );
}
