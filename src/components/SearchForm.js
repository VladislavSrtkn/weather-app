import { Divider, List, ListItem, ListItemButton, ListItemText, TextField } from '@mui/material';
import { Box } from '@mui/system';

export default function SearchForm({
  value,
  changeHandler,
  submitHandler,
  searchResults,
  clickHandler,
}) {
  const foundItems = searchResults.slice(0, 5).map((city) => {
    const displayedName = city.name + ', ' + city.region + ', ' + city.country;
    const coordinates = city.lat + ' ' + city.lon;
    return (
      <Box key={city.id}>
        <ListItem disablePadding onClick={() => clickHandler(coordinates)}>
          <ListItemButton>
            <ListItemText primary={displayedName}></ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider sx={{ backgroundColor: '#fff' }} />
      </Box>
    );
  });

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
      <List>{foundItems}</List>
    </form>
  );
}
