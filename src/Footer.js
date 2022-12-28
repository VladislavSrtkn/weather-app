export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', color: '#fff' }}>
      <p
        style={{
          margin: 0,
          padding: '0.7rem',
          backgroundImage: 'linear-gradient(to right, rgb(19, 79, 151), rgb(82, 148, 195))',
        }}
      >
        Made by{' '}
        <a
          href='https://github.com/VladislavSrtkn'
          target='_blank'
          style={{ textDecoration: 'none' }}
        >
          Vladislav Sirotkin
        </a>
        , 2022
      </p>
    </footer>
  );
}
