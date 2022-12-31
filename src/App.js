import { useEffect, useState } from 'react';
import SearchForm from './SearchForm';
import Header from './Header';
import Footer from './Footer';
import WeatherContentBox from './WeatherContentBox';
import ScaleSwitch from './ScaleSwitch';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import SceletonContent from './SceletonContent';
import ErrorBox from './ErrorBox';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IconButton } from '@mui/material';

function App() {
  const [city, setCity] = useState(null);
  const [scale, setScale] = useState('c');
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearcError] = useState(false);

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

  function addCityBySubmit(e) {
    e.preventDefault();
    if (searchValue === '') {
      return;
    }

    const cityName = searchResults[0].name;

    setCity(cityName);
    setSearchValue('');
    setSearchResults([]);
  }

  function addCityByClick(cityName) {
    setCity(cityName);
    setSearchValue('');
    setSearchResults([]);
  }

  function searchHandler(e) {
    setSearchValue(e.target.value);

    fetch(
      `https://api.weatherapi.com/v1/search.json?key=c24794a3208345fb9e382502222112&q=${e.target.value}`
    )
      .then((response) => {
        if (response.status === 200) {
          setSearcError(false);
          return response.json().then((result) => setSearchResults([...result]));
        } else {
          setSearcError('Search failed with error ' + response.status);
        }
      })
      .catch((err) => {
        setSearcError('Search failed with error ' + err.message);
      });
  }

  return (
    <>
      <Header />
      <div
        style={{ minHeight: '100vh', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            paddingTop: '1rem',
            paddingBottom: '1rem',
          }}
        >
          <IconButton
            aria-label='Switch to current location'
            onClick={() => setCurrentLocation()}
            sx={{ marginTop: '1.2rem', color: '#fff' }}
          >
            <LocationOnIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
          <SearchForm
            value={searchValue}
            searchResults={searchResults}
            changeHandler={searchHandler}
            submitHandler={addCityBySubmit}
            clickHandler={addCityByClick}
          />
          <ScaleSwitch scale={scale} handlerChange={() => setScale(scale === 'c' ? 'f' : 'c')} />
        </div>
        {searchError && <ErrorBox errorText={searchError} />}
        <Grid2 container>
          {(city && <WeatherContentBox key={city} city={city} scale={scale} />) || (
            <SceletonContent />
          )}
        </Grid2>
      </div>
      <Footer />
    </>
  );
}

export default App;
