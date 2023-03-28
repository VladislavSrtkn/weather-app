import { Box, Divider, Typography, useMediaQuery, useTheme } from '@mui/material';

export default function ConditionString({ icon, text, value }) {
  const theme = useTheme();
  const isLargeDisplay = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'space-between', lg: 'flex-start' },
          alignItems: 'flex-end',
          minWidth: '30%',
          py: 2,
        }}
      >
        {isLargeDisplay && (
          <Divider orientation='vertical' flexItem sx={{ borderColor: '#ffffff85' }} />
        )}
        <Typography sx={{ px: { lg: 2 } }}>
          {icon} {text}
        </Typography>
        <Typography>{value}</Typography>
      </Box>
    </>
  );
}
