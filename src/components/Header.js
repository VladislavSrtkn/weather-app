import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Box, Typography } from '@mui/material';

export default function Header() {
  return (
    <Box component='header'>
      <Typography
        variant='h5'
        component='h1'
        sx={{ bgcolor: '#4b9aef', boxShadow: '#fff 0px 2px 1px 0px', p: 1.5, color: '#fff' }}
      >
        Weather App
        <WbSunnyIcon />
      </Typography>
    </Box>
  );
}
