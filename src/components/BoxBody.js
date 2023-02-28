import { Box } from '@mui/material';

export default function BoxBody({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: '10px',
        bgcolor: '#124d8163',
        overflow: 'hidden',
        marginY: 2,
      }}
    >
      {children}
    </Box>
  );
}
