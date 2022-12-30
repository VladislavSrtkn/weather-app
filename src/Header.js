import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function Header() {
  return (
    <header>
      <h1
        style={{
          backgroundColor: '#153d77',
          fontSize: '1.5rem',
        }}
      >
        Weather App
        <WbSunnyIcon sx={{ color: '#fffa00' }} />
      </h1>
    </header>
  );
}
