import { Box, Grid, Typography } from '@mui/material';

export default function ConditionString({ icon, text, value }) {
  return (
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'space-between', md: 'flex-start' },
          alignItems: 'flex-end',
          py: 2,
        }}
      >
        <Typography variant='body1' sx={{ px: { md: 2 } }}>
          {icon} {text}
        </Typography>
        <Typography variant='body1'>{value}</Typography>
      </Box>
    </Grid>
  );
}
