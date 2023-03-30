import { Box, Link, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component='footer' textAlign='center'>
      <Typography sx={{ p: 1, bgcolor: (theme) => theme.palette.primary.main, color: '#dbdbdb' }}>
        Made by{' '}
        <Link
          href='https://github.com/VladislavSrtkn'
          target='_blank'
          rel='noreferrer'
          sx={{ textDecoration: 'none', color: '#fff' }}
        >
          Vladislav Sirotkin
        </Link>{' '}
        , 2022
      </Typography>
    </Box>
  );
}
