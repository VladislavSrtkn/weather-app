export default function Footer() {
  return (
    <footer style={{ textAlign: 'center' }}>
      <p
        style={{
          margin: 0,
          padding: '0.7rem',
          backgroundColor: '#636363a3',
        }}
      >
        Made by{' '}
        <a
          href='https://github.com/VladislavSrtkn'
          target='_blank'
          rel='noreferrer'
          style={{ textDecoration: 'none' }}
        >
          Vladislav Sirotkin
        </a>
        , 2022
      </p>
    </footer>
  );
}
