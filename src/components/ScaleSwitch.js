import { Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

const MaterialUISwitch = styled(Switch)(() => {
  const theme = useTheme();

  return {
    width: 56,
    height: 30,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        transform: 'translateX(22px)',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.dark,
        },
      },
    },
    '& .MuiSwitch-thumb': {
      width: 26,
      height: 26,
      backgroundColor: '#fff',
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.primary.dark,
      borderRadius: 20 / 2,
    },
  };
});

export default function ScaleSwitch({ cheсked, label, onChange }) {
  return (
    <FormControlLabel
      labelPlacement='start'
      sx={{ justifyContent: 'flex-end', m: 0 }}
      control={<MaterialUISwitch checked={cheсked} onChange={onChange} />}
      label={<Typography>°{label.toUpperCase()}</Typography>}
    />
  );
}
