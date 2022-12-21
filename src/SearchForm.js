import { IconButton, TextField } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function SearchForm({ value, changeHandler, submitHandler }) {
  return (
    <Grid2 container>
      <form onSubmit={(e) => submitHandler(e)}>
        <TextField
          size='small'
          variant='outlined'
          label='Search'
          value={value}
          onChange={(e) => changeHandler(e.target.value)}
        ></TextField>
        <IconButton type='submit' style={{ color: 'green' }}>
          <AddCircleIcon />
        </IconButton>
      </form>
    </Grid2>
  );
}
