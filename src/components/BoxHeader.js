import { Box, Typography } from '@mui/material';

export default function BoxHeader({ text }) {
  return (
    <Box sx={{ borderRadius: '10px 10px 0px 0px', bgcolor: '#2744906b', paddingX: '0.5rem' }}>
      <Typography component='h3' py={1}>
        {text}
      </Typography>
    </Box>
  );
}
