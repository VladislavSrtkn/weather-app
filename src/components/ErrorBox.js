import { Box, Typography } from '@mui/material';

export default function ErrorBox({ errorText }) {
  return (
    <Box p={1}>
      <Typography>Ooops! Something went wrong :(</Typography>
      <Typography my={2}>{errorText}</Typography>
      <Typography>
        Please make sure you have no problems with your internet connection and try again later.
      </Typography>
    </Box>
  );
}
