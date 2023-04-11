import { Box, Typography } from '@mui/material';

export default function ErrorBox() {
  return (
    <Box sx={{ p: 1, my: 3, color: '#ffffff' }}>
      <Typography variant='h6'>Ooops! Something went wrong :(</Typography>
      <Typography variant='body1'>
        Please make sure you have no problems with your internet connection and try again later.
      </Typography>
    </Box>
  );
}
