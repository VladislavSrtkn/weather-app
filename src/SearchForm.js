import { List, ListItem, ListItemButton, ListItemText, TextField } from '@mui/material';

export default function SearchForm({
  value,
  changeHandler,
  submitHandler,
  searchResults,
  clickHandler,
}) {
  const foundCities = searchResults.slice(0, 5).map((city) => (
    <ListItem disablePadding key={city.name} onClick={() => clickHandler(city.name)}>
      <ListItemButton>
        <ListItemText primary={city.name}></ListItemText>
      </ListItemButton>
    </ListItem>
  ));

  return (
    <form style={{ margin: '1rem', flex: 1 }} onSubmit={(e) => submitHandler(e)}>
      <TextField
        sx={{ width: '100%' }}
        size='normal'
        variant='outlined'
        label='Enter city name'
        value={value}
        onChange={(e) => changeHandler(e)}
      ></TextField>
      <List>{foundCities}</List>
    </form>
  );
}
