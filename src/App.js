import { useState } from 'react';
import SearchForm from './SearchForm';
import Header from './Header';
import Footer from './Footer';
import WeatherPlate from './WeatherPlate';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/system';

function App() {
  const [cities, setCities] = useState(['Podgorica', 'Toronto', 'Saint-Petersburg', 'Belgrad']);
  const [searchValue, setSearchValue] = useState('');

  function addCity(e) {
    e.preventDefault();
    const city = searchValue;
    if (searchValue === '' || cities.includes(city)) {
      console.log(123);
      return;
    }
    setCities([city, ...cities]);
    setSearchValue('');
  }

  function removeCity(name) {
    setCities(cities.filter((city) => city !== name));
  }

  const weatherPlates = cities.map((city) => (
    <WeatherPlate key={city} city={city} removeHandler={removeCity} />
  ));

  return (
    <Container>
      <Header />
      <SearchForm value={searchValue} changeHandler={setSearchValue} submitHandler={addCity} />
      {weatherPlates}
      <Footer />
    </Container>
  );
}

export default App;
