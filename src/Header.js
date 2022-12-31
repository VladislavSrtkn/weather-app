import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function Header() {
  return (
    <header>
      <h1
        style={{
          fontSize: '1.5rem',
          backgroundColor: '#7b2049',
          boxShadow: '#fff 0px 2px 1px 0px',
        }}
      >
        Weather App
        <WbSunnyIcon sx={{ color: '#fffa00' }} />
      </h1>
    </header>
  );
}
