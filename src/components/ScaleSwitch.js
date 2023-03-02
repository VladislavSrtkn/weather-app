import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';

const MaterialUISwitch = styled(Switch)(() => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      transform: 'translateX(22px)',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#3c75c7',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 32,
    height: 32,
    backgroundColor: '#fff',
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#3c75c7',
    borderRadius: 20 / 2,
  },
}));

export default function ScaleSwitch({ scale, handlerChange }) {
  return (
    <FormControlLabel
      control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked onChange={handlerChange} />}
      label={
        <Typography color='#3c75c7' fontWeight='bold'>
          {scale.toUpperCase()}
        </Typography>
      }
    />
  );
}
