import { Box } from '@mui/material';

export default function BoxBody({ children }) {
  return (
    <Box
      marginY={2}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: '10px',
        backgroundColor: '#124d8163',
        overflow: 'hidden',
      }}
    >
      {children}
    </Box>
  );
}
