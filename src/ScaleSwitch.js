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
        backgroundColor: '#d9e0e6',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 32,
    height: 32,
    backgroundColor: '#2469ce',
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#d9e0e6',
    borderRadius: 20 / 2,
  },
}));

export default function ScaleSwitch({ scale, handlerChange }) {
  return (
    <FormControlLabel
      sx={{ marginTop: '1.2rem' }}
      control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked onChange={handlerChange} />}
      label={<span style={{ fontWeight: 'bold', color: '#153d77' }}>{scale.toUpperCase()}</span>}
    />
  );
}
