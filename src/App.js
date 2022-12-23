import { useState } from 'react';
import SearchForm from './SearchForm';
import Header from './Header';
import Footer from './Footer';
import WeatherPlate from './WeatherPlate';
import ScaleSwitch from './ScaleSwitch';
import { Container } from '@mui/system';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

function App() {
  const [cities, setCities] = useState(['Podgorica', 'Toronto', 'Saint-Petersburg', 'Belgrad']);
  const [scale, setScale] = useState('c');
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  function addCityBySubmit(e) {
    e.preventDefault();
    const cityName = searchResults[0].name;
    if (searchValue === '' || cities.includes(cityName)) {
      return;
    }
    setCities([cityName, ...cities]);
    setSearchValue('');
    setSearchResults([]);
  }

  function addCityByClick(cityName) {
    if (cities.includes(cityName)) {
      return;
    }
    setCities([cityName, ...cities]);
    setSearchValue('');
    setSearchResults([]);
  }

  function removeCity(name) {
    setCities(cities.filter((city) => city !== name));
  }

  function searchHandler(e) {
    setSearchValue(e.target.value);

    fetch(
      `http://api.weatherapi.com/v1/search.json?key=c24794a3208345fb9e382502222112&q=${e.target.value}`
    )
      .then((response) => response.json())
      .then((result) => setSearchResults([...result]))
      .catch((error) => console.log(error));
  }

  const weatherPlates = cities.map((city) => (
    <WeatherPlate key={city} city={city} scale={scale} removeHandler={removeCity} />
  ));

  return (
    <Container>
      <Header />
      <Grid2 container direction='row' alignItems='flex-start'>
        <SearchForm
          value={searchValue}
          changeHandler={searchHandler}
          submitHandler={addCityBySubmit}
          searchResults={searchResults}
          addCityHandler={addCityByClick}
        />
        <ScaleSwitch scale={scale} handlerChange={() => setScale(scale === 'c' ? 'f' : 'c')} />
      </Grid2>
      <div className='weather-plates-box'>{weatherPlates}</div>
      <Footer />
    </Container>
  );
}

export default App;
