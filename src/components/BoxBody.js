import { Box } from '@mui/material';

export default function BoxBody({ children }) {
  return (
    <Box
      sx={{
        borderRadius: '10px',
        bgcolor: '#0d82eacf',
        overflow: 'hidden',
        my: 2,
        color: '#fff',
      }}
    >
      {children}
    </Box>
  );
}
