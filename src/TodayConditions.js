import ConditionString from './ConditionString';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AirIcon from '@mui/icons-material/Air';
import ModeNightIcon from '@mui/icons-material/ModeNight';

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
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        margin: '1rem',
        borderRadius: 10,
        color: '#fff',
        backgroundImage: 'linear-gradient(to right, rgb(19, 79, 151), rgb(82, 148, 195))',
      }}
    >
      <div
        style={{
          borderRadius: '10px 10px 0px 0px',
          backgroundColor: 'rgb(55 68 86 / 39%)',
          paddingLeft: '0.5rem',
        }}
      >
        <h3>
          Weather today {city}, {country}
        </h3>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
        <div style={{ fontWeight: 'bold' }}>
          <span style={{ fontSize: '2rem' }}>{Math.round(feelsLike)}°</span>
          <br />
          <span style={{ fontSize: '1.1rem' }}>Feels like</span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <WbTwilightIcon fontSize='large' />
          <div style={{ textAlign: 'center' }}>
            <FileUploadIcon style={{ marginBottom: '-5px' }} />
            {sunrise}
            <FileDownloadIcon style={{ marginBottom: '-5px' }} /> {sunset}
          </div>
        </div>
      </div>

      <ConditionString
        icon={<AirIcon style={{ marginBottom: '-5px' }} />}
        text='Wind'
        value={wind}
      />
      <ConditionString
        icon={<RemoveRedEyeIcon style={{ marginBottom: '-5px' }} />}
        text='Visibility'
        value={visibility}
      />
      <ConditionString
        icon={<InvertColorsIcon style={{ marginBottom: '-5px' }} />}
        text='Humidity'
        value={humidity}
      />
      <ConditionString
        icon={<WbSunnyIcon style={{ marginBottom: '-5px' }} />}
        text='UV index'
        value={indexUV}
      />
      <ConditionString
        icon={<ModeNightIcon style={{ marginBottom: '-5px' }} />}
        text='Moon phase'
        value={moonPhase}
      />
    </div>
  );
}
