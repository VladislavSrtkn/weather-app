import { Autocomplete, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import ErrorBox from './ErrorBox';

export default function SearchForm({ changeHandler }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearchError] = useState(false);

  function searchHandler(value) {
    setSearchValue(value);
    if (value === '') {
      setSearchResults([]);
      setSearchError('');
      return;
    }

    fetch(`https://api.weatherapi.com/v1/search.json?key=c24794a3208345fb9e382502222112&q=${value}`)
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

  function handleSetCity(city) {
    setSearchError(false);
    setSearchResults([]);
    setSearchValue('');

    changeHandler(city);
  }

  const cities = searchResults.slice(0, 5).map((city) => {
    const label = city.name + (city.region ? `, ${city.region}` : '') + ', ' + city.country;
    return { label, key: city.id };
  });

  return (
    <Box sx={{ flex: 1 }}>
      <Autocomplete
        options={cities}
        freeSolo
        value={searchValue}
        onInputChange={(e, value, reason) => (reason === 'clear' ? searchHandler('') : undefined)}
        fullWidth
        onChange={(e, city) => (city ? handleSetCity(city.label) : undefined)}
        renderInput={(params) => (
          <TextField
            value={searchValue}
            onChange={(e) => searchHandler(e.target.value)}
            {...params}
            label='Find a city'
          />
        )}
        renderOption={(props, option) => (
          <li {...props} key={option.key}>
            <Typography sx={{ color: '#000000' }}>{option.label}</Typography>
          </li>
        )}
      />

      {searchError && <ErrorBox errorText={searchError} />}
    </Box>
  );
}
