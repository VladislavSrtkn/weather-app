import { TextField } from '@mui/material';

export default function SearchForm({
  value,
  changeHandler,
  submitHandler,
  searchResults,
  addCityHandler,
}) {
  const foundCities = searchResults.slice(0, 5).map((city) => (
    <li key={city.name} onClick={() => addCityHandler(city.name)}>
      {city.name}
    </li>
  ));

  return (
    <form style={{ margin: '1rem', flex: 2 }} onSubmit={(e) => submitHandler(e)}>
      <TextField
        size='normal'
        variant='outlined'
        label='Search'
        sx={{ width: '100%' }}
        value={value}
        onChange={(e) => changeHandler(e)}
      ></TextField>
      <ul>{foundCities}</ul>
    </form>
  );
}
