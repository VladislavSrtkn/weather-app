import { Box } from '@mui/system';
import { Grid } from '@mui/material';

import { useEffect, useState } from 'react';

import { getScaleFromStorage, setScaleToStorage } from '../scale';

import ErrorBox from './ErrorBox';
import Header from './Header';
import Footer from './Footer';
import SceletonContent from './SceletonContent';
import WeatherContentContainer from './WeatherContentContainer';
import ControlPanel from './ControlPanel';

export default function App() {
  const [city, setCity] = useState(null);
  const [scale, setScale] = useState(getScaleFromStorage());
  const [isError, setIsError] = useState(false);

  useEffect(() => setCurrentLocation(), []);
  useEffect(() => setIsError(false), [city]);

  function setCurrentLocation() {
    setCity(null);

    //If user agrees to provide geo data we get the user's location, if not we use auto-ip (approximate location)
    navigator.geolocation.getCurrentPosition(
      (position) => setCity(position.coords.latitude + ' ' + position.coords.longitude),
      () => setCity('auto:ip')
    );
  }

  function handleSwitchScale() {
    const newScale = scale === 'c' ? 'f' : 'c';
    setScaleToStorage(newScale);
    setScale(getScaleFromStorage());
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header scale={scale} onScaleChange={handleSwitchScale} />

      <Grid
        container
        maxWidth='lg'
        sx={{
          px: 1,
          justifyContent: { xs: 'center', lg: 'flex-start' },
          flexGrow: '1',
          flexDirection: { lg: 'column' },
          mx: { lg: 'auto' },
        }}
      >
        <Grid item xs={12}>
          <ControlPanel
            onSetCurrentLocation={setCurrentLocation}
            onSetCity={setCity}
            onError={setIsError}
          />

          {isError && <ErrorBox />}

          {(city && (
            <WeatherContentContainer
              onSetCity={setCity}
              onError={setIsError}
              city={city}
              scale={scale}
            />
          )) || <SceletonContent />}
        </Grid>
      </Grid>

      <Footer />
    </Box>
  );
}
