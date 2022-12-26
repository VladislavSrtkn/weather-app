import { useState } from 'react';
import SearchForm from './SearchForm';
import Header from './Header';
import Footer from './Footer';
import WeatherPlate from './WeatherPlate';
import ScaleSwitch from './ScaleSwitch';
import { Container } from '@mui/system';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

function App() {
  const [city, setCity] = useState('auto:ip');
  const [scale, setScale] = useState('c');
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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
      .then((response) => response.json())
      .then((result) => setSearchResults([...result]))
      .catch((error) => console.log(error));
  }

  return (
    <>
      <Header />
      <Container>
        <Grid2 container alignItems='flex-start'>
          <SearchForm
            value={searchValue}
            searchResults={searchResults}
            changeHandler={searchHandler}
            submitHandler={addCityBySubmit}
            clickHandler={addCityByClick}
          />
          <ScaleSwitch scale={scale} handlerChange={() => setScale(scale === 'c' ? 'f' : 'c')} />
        </Grid2>
        <Grid2 container>
          <WeatherPlate key={city} city={city} scale={scale} />
        </Grid2>
        <Footer />
      </Container>
    </>
  );
}

export default App;
