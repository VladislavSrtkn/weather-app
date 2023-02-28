import ConditionString from './ConditionString';
import BoxHeader from './BoxHeader';
import BoxBody from './BoxBody';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AirIcon from '@mui/icons-material/Air';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { Box, Typography } from '@mui/material';

export default function TodayCondtions({
  city,
  country,
  feelsLike,
  sunrise,
  sunset,
  wind,
  visibility,
  humidity,
  indexUV,
  moonPhase,
}) {
  const style = { mb: '-5px' };

  return (
    <BoxBody>
      <BoxHeader text={`Weather today in ${city}, ${country}`} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
        <Box>
          <Typography fontSize='2rem'>{Math.round(feelsLike)}°</Typography>
          <Typography fontSize='1.1rem'>Feels like</Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <WbTwilightIcon fontSize='large' />
          <Typography pb={0.5}>
            <FileUploadIcon sx={style} />
            {sunrise}
            <FileDownloadIcon sx={style} /> {sunset}
          </Typography>
        </Box>
      </Box>

      <ConditionString icon={<AirIcon sx={style} />} text='Wind' value={wind} />
      <ConditionString
        icon={<RemoveRedEyeIcon sx={style} />}
        text='Visibility'
        value={visibility}
      />
      <ConditionString icon={<InvertColorsIcon sx={style} />} text='Humidity' value={humidity} />
      <ConditionString icon={<WbSunnyIcon sx={style} />} text='UV index' value={indexUV} />
      <ConditionString icon={<ModeNightIcon sx={style} />} text='Moon phase' value={moonPhase} />
    </BoxBody>
  );
}
