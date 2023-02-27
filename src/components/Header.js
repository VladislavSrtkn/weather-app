import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Typography } from '@mui/material';

export default function Header() {
  return (
    <header>
      <Typography
        variant='h5'
        component='h1'
        p={1}
        sx={{
          background: 'linear-gradient(to right, #0d324d, #ffffff00)',
          boxShadow: '#fff 0px 2px 1px 0px',
        }}
      >
        Weather App
        <WbSunnyIcon />
      </Typography>
    </header>
  );
}
