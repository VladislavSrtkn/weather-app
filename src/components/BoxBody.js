import { Grid } from '@mui/material';
import { Box } from '@mui/system';

export default function BoxBody({ children, order, cols = 12 }) {
  return (
    <Grid
      item
      xs={12}
      lg={cols}
      sx={{
        order: order,
      }}
    >
      <Box
        sx={{
          borderRadius: '10px',
          bgcolor: '#0d82eacf',
          overflow: 'hidden',
          my: 2,
          color: '#fff',
          height: '90%',
        }}
      >
        {children}
      </Box>
    </Grid>
  );
}
