import { AppBar, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Box } from '@mui/system';

import ScaleSwitch from './ScaleSwitch';

export default function Header({ scale, cheked, onChange }) {
  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 30,
  });

  const style = trigger
    ? {
        opacity: 0.8,
      }
    : null;

  return (
    <AppBar position='sticky' sx={style}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' }}>
          <Typography variant='h5' component='h1' onClick={scrollToTop}>
            <WbSunnyIcon />
            MyWeather
          </Typography>
        </Box>
        <ScaleSwitch label={scale} cheked={cheked} onChange={onChange} />
      </Toolbar>
    </AppBar>
  );
}
