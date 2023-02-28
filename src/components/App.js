import { useEffect, useState } from 'react';
import SearchForm from './SearchForm';
import Header from './Header';
import Footer from './Footer';
import ScaleSwitch from './ScaleSwitch';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import SceletonContent from './SceletonContent';
import ErrorBox from './ErrorBox';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, IconButton } from '@mui/material';
import WeatherContentContainer from './WeatherContentContainer';

export default function App() {
  const [city, setCity] = useState(null);
  const [scale, setScale] = useState('c');
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearchError] = useState(false);

  useEffect(() => setCurrentLocation(), []);

  function setCurrentLocation() {
    setCity(null);
    setSearchValue('');
    setSearchResults([]);
    navigator.geolocation.getCurrentPosition(
      (position) => setCity(position.coords.latitude + ' ' + position.coords.longitude),
      () => setCity('auto:ip')
    );
  }

  function handleSetCityBySubmit(e) {
    e.preventDefault();
    if (searchValue === '') {
      return;
    }
    const cityCoordinates = searchResults[0].lat + ' ' + searchResults[0].lon;
    handleSetCity(cityCoordinates);
  }

  function handleSetCity(cityCoordinates) {
    setCity(cityCoordinates);
    setSearchValue('');
    setSearchResults([]);
  }

  function searchHandler(e) {
    setSearchValue(e.target.value);
    if (e.target.value === '') {
      return;
    }

    fetch(
      `https://api.weatherapi.com/v1/search.json?key=c24794a3208345fb9e382502222112&q=${e.target.value}`
    )
      .then((response) => {
        if (response.status === 200) {
          setSearchError(false);
          return response.json().then((result) => setSearchResults([...result]));
        } else {
          setSearchError('Search failed with error ' + response.status);
        }
      })
      .catch((err) => {
        setSearchError('Search failed with error ' + err.message);
      });
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
        <Grid2 item display='flex' paddingY={1} alignItems='flex-start'>
          <IconButton
            aria-label='Switch to current location'
            onClick={setCurrentLocation}
            sx={{ marginTop: '1.2rem' }}
          >
            <LocationOnIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
          <SearchForm
            value={searchValue}
            searchResults={searchResults}
            changeHandler={searchHandler}
            submitHandler={handleSetCityBySubmit}
            clickHandler={handleSetCity}
          />
          <ScaleSwitch scale={scale} handlerChange={() => setScale(scale === 'c' ? 'f' : 'c')} />
        </Grid2>

        {searchError && <ErrorBox errorText={searchError} />}

        {(city && <WeatherContentContainer city={city} scale={scale} />) || <SceletonContent />}
      </Grid2>
      <Footer />
    </Box>
  );
}
