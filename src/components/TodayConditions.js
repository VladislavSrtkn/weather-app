import { CardContent, CardHeader, Grid, useMediaQuery, useTheme } from '@mui/material';

import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AirIcon from '@mui/icons-material/Air';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { DeviceThermostat } from '@mui/icons-material';

import ConditionString from './ConditionString';
import CustomCard from './CustomCard';

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

  // On lg+ screens (1200px) moves container to the top
  const theme = useTheme();
  const order = useMediaQuery(theme.breakpoints.up('lg')) ? 0 : 2;

  return (
    <Grid item xs={12} lg={9} sx={{ pl: { lg: 2 }, my: 3, flexGrow: 1, order: order }}>
      <CustomCard>
        <CardHeader title={`Weather today in ${city}, ${country}`} />
        <CardContent sx={{ p: 3 }}>
          <Grid container>
            <ConditionString
              icon={<DeviceThermostat sx={style} />}
              text='Feels like'
              value={`${Math.round(feelsLike)}°`}
            />
            <ConditionString icon={<WbSunnyIcon sx={style} />} text='UV index' value={indexUV} />
            <ConditionString icon={<WbTwilightIcon sx={style} />} text='Sunrise' value={sunrise} />
            <ConditionString icon={<WbTwilightIcon sx={style} />} text='Sunset' value={sunset} />
            <ConditionString icon={<AirIcon sx={style} />} text='Wind' value={wind} />
            <ConditionString
              icon={<RemoveRedEyeIcon sx={style} />}
              text='Visibility'
              value={visibility}
            />
            <ConditionString
              icon={<InvertColorsIcon sx={style} />}
              text='Humidity'
              value={humidity}
            />
            <ConditionString
              icon={<ModeNightIcon sx={style} />}
              text='Moon phase'
              value={moonPhase}
            />
          </Grid>
        </CardContent>
      </CustomCard>
    </Grid>
  );
}
