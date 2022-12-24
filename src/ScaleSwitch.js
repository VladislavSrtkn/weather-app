import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {},
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#73a1d1',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#2d7be5',
    width: 32,
    height: 32,
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#73a1d1',
    borderRadius: 20 / 2,
  },
}));

export default function ScaleSwitch({ scale, handlerChange }) {
  return (
    <FormControlLabel
      sx={{ paddingTop: '1.5rem' }}
      control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked onChange={handlerChange} />}
      label={<span style={{ fontWeight: 'bold' }}>{scale.toUpperCase()}</span>}
    />
  );
}
