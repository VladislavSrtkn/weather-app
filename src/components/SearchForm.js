import { Autocomplete, CircularProgress, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { useState } from 'react';
import React from 'react';

export default function SearchForm({ onChange, onError }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleSearch(value) {
    setSearchValue(value);
    setLoading(true);

    if (value === '') {
      setSearchResults([]);
      onError(false);
      setLoading(false);
      return;
    }

    fetch(`https://api.weatherapi.com/v1/search.json?key=c24794a3208345fb9e382502222112&q=${value}`)
      .then((response) => {
        if (response.status === 200) {
          onError(false);
          return response.json().then((result) => setSearchResults([...result]));
        } else {
          onError(true);
          console.log(
            'API request failed, code: ' +
              response.status +
              '. About type of error: https://www.weatherapi.com/docs/'
          );
        }
      })
      .catch((err) => {
        onError(true);
        console.log('Error: ' + err.message);
      })
      .finally(setTimeout(() => setLoading(false), 500));
  }

  function handleSetCity(city) {
    setSearchResults([]);
    setSearchValue('');
    setLoading(false);

    onChange(city);
  }

  const cities = searchResults.slice(0, 5).map((city) => {
    const label = city.name + (city.region ? `, ${city.region}` : '') + ', ' + city.country;
    return { label, key: city.id };
  });

  const textFieldColor = '#ffffff';

  return (
    <Box sx={{ flex: 1 }}>
      <Autocomplete
        options={cities}
        freeSolo
        value={searchValue}
        onBlur={() => setLoading(false)}
        onInputChange={(e, value, reason) => (reason === 'clear' ? handleSearch('') : undefined)}
        fullWidth
        onChange={(e, city) => (city ? handleSetCity(city.label) : undefined)}
        renderInput={(params) => (
          <TextField
            {...params}
            value={searchValue}
            sx={{
              '& label.Mui-focused': {
                color: textFieldColor,
              },
              '& .MuiInputLabel-root': { color: textFieldColor },
              '& .MuiOutlinedInput-root': {
                color: textFieldColor,
                '& fieldset': {
                  borderColor: textFieldColor,
                },
                '&:hover fieldset': {
                  borderColor: textFieldColor,
                },
                '&.Mui-focused fieldset': {
                  borderColor: textFieldColor,
                },
                '& .MuiIconButton-root': {
                  color: textFieldColor,
                },
                '& .MuiInputLabel-root': {
                  color: textFieldColor,
                },
              },
            }}
            onChange={(e) => handleSearch(e.target.value)}
            label='Find a city'
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading && <CircularProgress size={20} sx={{ color: textFieldColor }} />}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        renderOption={(props, option) => (
          <li {...props} key={option.key}>
            <Typography>{option.label}</Typography>
          </li>
        )}
      />
    </Box>
  );
}
