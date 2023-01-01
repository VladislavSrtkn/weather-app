import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function Header() {
  return (
    <header>
      <h1
        style={{
          fontSize: '1.5rem',
          margin: 0,
          padding: '1rem',
          background: 'linear-gradient(to right, #0d324d, #ffffff00)',
          boxShadow: '#fff 0px 2px 1px 0px',
        }}
      >
        Weather App
        <WbSunnyIcon />
      </h1>
    </header>
  );
}
