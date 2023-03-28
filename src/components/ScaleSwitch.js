import { styled, ThemeProvider } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import theme from './/../customTheme';

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
          backgroundColor: theme.palette.custom,
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
      backgroundColor: theme.palette.custom,
      borderRadius: 20 / 2,
    },
  };
});

export default function ScaleSwitch({ cheked, label, onChange }) {
  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel
        labelPlacement='top'
        sx={{ justifyContent: 'flex-end', m: 0 }}
        control={<MaterialUISwitch checked={cheked} onChange={onChange} />}
        label={
          <Typography sx={{ color: (theme) => theme.palette.custom, fontSize: 13, pt: 0.2 }}>
            {label.toUpperCase()}
          </Typography>
        }
      />
    </ThemeProvider>
  );
}
