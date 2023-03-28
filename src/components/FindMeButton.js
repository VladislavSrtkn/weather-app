import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';

import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function FindMeButton({ onClick }) {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography sx={{ color: (theme) => theme.palette.custom, fontSize: 13 }}>Find me</Typography>

      <IconButton
        aria-label='Switch to current location'
        onClick={onClick}
        sx={{ color: (theme) => theme.palette.custom }}
      >
        <LocationOnIcon fontSize='medium' />
      </IconButton>
    </Box>
  );
}
