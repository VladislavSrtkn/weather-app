import { Box } from '@mui/system';
import { Grid } from '@mui/material';

import { useEffect, useState } from 'react';

import { getScaleFromStorage, setScaleToStorage } from '../scale';

import FindMeButton from './FindMeButton';
import ErrorBox from './ErrorBox';
import SearchForm from './SearchForm';
import Header from './Header';
import Footer from './Footer';
import ScaleSwitch from './ScaleSwitch';
import SceletonContent from './SceletonContent';
import WeatherContentContainer from './WeatherContentContainer';

export default function App() {
  const [city, setCity] = useState(null);
  const [scale, setScale] = useState(getScaleFromStorage());
  const [isError, setIsError] = useState(false);

  const isScaleSwitchCheked = scale === 'c';

  useEffect(() => setCurrentLocation(), []);
  useEffect(() => setIsError(false), [city]);

  function setCurrentLocation() {
    setCity(null);

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
      <Header />
      <Grid
        container
        maxWidth='lg'
        sx={{
          px: 1,
          justifyContent: { xs: 'center', lg: 'flex-start' },
          flexGrow: '1',
          flexDirection: { lg: 'column' },
        }}
      >
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', my: 2, gap: 1, maxWidth: { lg: 700 } }}>
            <FindMeButton onClick={setCurrentLocation} />
            <SearchForm onChange={setCity} onError={setIsError} />
            <ScaleSwitch label={scale} cheked={isScaleSwitchCheked} onChange={handleSwitchScale} />
          </Box>
          {isError && <ErrorBox />}
          {(city && <WeatherContentContainer onError={setIsError} city={city} scale={scale} />) || (
            <SceletonContent />
          )}
        </Grid>
      </Grid>

      <Footer />
    </Box>
  );
}
