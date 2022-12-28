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
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#326fac',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 32,
    height: 32,
    backgroundImage: 'linear-gradient(to right, rgb(19, 79, 151), rgb(82, 148, 195))',
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#326fac',
    borderRadius: 20 / 2,
  },
}));

export default function ScaleSwitch({ scale, handlerChange }) {
  return (
    <FormControlLabel
      sx={{ paddingTop: '1.5rem' }}
      control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked onChange={handlerChange} />}
      label={<span style={{ fontWeight: 'bold', color: '#165361' }}>{scale.toUpperCase()}</span>}
    />
  );
}
