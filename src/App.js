import { useState } from 'react';
import SearchForm from './SearchForm';
import Header from './Header';
import Footer from './Footer';
import WeatherPlate from './WeatherPlate';

function App() {
  const [cities, setCities] = useState(['Podgorica', 'Toronto', 'Saint-Petersburg', 'Belgrad']);
  const [searchValue, setSearchValue] = useState('');

  function addCity(e) {
    e.preventDefault();
    const city = searchValue;
    if (searchValue === '') {
      return;
    }
    setCities([city, ...cities]);
    setSearchValue('');
  }

  const weatherPlates = cities.map((city) => <WeatherPlate key={city} city={city} />);

  return (
    <>
      <Header />
      <SearchForm value={searchValue} changeHandler={setSearchValue} submitHandler={addCity} />
      {weatherPlates}
      <Footer />
    </>
  );
}

export default App;
