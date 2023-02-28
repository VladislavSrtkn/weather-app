import { Box, Typography } from '@mui/material';

export default function ConditionString({ icon, text, value }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', p: 2 }}>
      <Typography>
        {icon} {text}
      </Typography>
      <Typography>{value}</Typography>
    </Box>
  );
}
