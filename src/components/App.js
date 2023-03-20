import { useEffect, useState } from 'react';
import SearchForm from './SearchForm';
import Header from './Header';
import Footer from './Footer';
import ScaleSwitch from './ScaleSwitch';
import SceletonContent from './SceletonContent';
import { Grid } from '@mui/material';
import WeatherContentContainer from './WeatherContentContainer';
import { Box } from '@mui/system';
import { getScaleFromStorage, setScaleToStorage } from '../scale';
import FindMeButton from './FindMeButton';
import ErrorBox from './ErrorBox';

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
      <Grid container justifyContent='center' flexGrow='1' sx={{ px: 1 }}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Box sx={{ display: 'flex', my: 2, gap: 1 }}>
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
