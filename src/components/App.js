import { useEffect, useState } from 'react';
import SearchForm from './SearchForm';
import Header from './Header';
import Footer from './Footer';
import ScaleSwitch from './ScaleSwitch';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import SceletonContent from './SceletonContent';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, IconButton } from '@mui/material';
import WeatherContentContainer from './WeatherContentContainer';

export default function App() {
  const [city, setCity] = useState(null);
  const [scale, setScale] = useState('c');

  useEffect(() => setCurrentLocation(), []);

  function setCurrentLocation() {
    setCity(null);

    navigator.geolocation.getCurrentPosition(
      (position) => setCity(position.coords.latitude + ' ' + position.coords.longitude),
      () => setCity('auto:ip')
    );
  }

  function handleSetCity(cityCoordinates) {
    setCity(cityCoordinates);
  }

  return (
    <Box display='flex' flexDirection='column' minHeight='100vh'>
      <Header />
      <Grid2
        container
        xs={12}
        sm={8}
        md={6}
        lg={4}
        marginX='auto'
        marginTop={2}
        paddingX={2}
        flexDirection='column'
        flexWrap='nowrap'
        flex={1}
      >
        <Grid2 item sx={{ display: 'flex', paddingY: 1, alignItems: 'flex-start' }}>
          <IconButton
            aria-label='Switch to current location'
            onClick={setCurrentLocation}
            sx={{ color: '#3c75c7' }}
          >
            <LocationOnIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
          <SearchForm changeHandler={handleSetCity} />
          <ScaleSwitch scale={scale} handlerChange={() => setScale(scale === 'c' ? 'f' : 'c')} />
        </Grid2>

        {(city && <WeatherContentContainer city={city} scale={scale} />) || <SceletonContent />}
      </Grid2>
      <Footer />
    </Box>
  );
}
