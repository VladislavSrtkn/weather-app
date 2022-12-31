import { Skeleton } from '@mui/material';

export default function SceletonContent() {
  return (
    <>
      <Skeleton
        variant='rounded'
        sx={{ margin: '2rem', backgroundColor: '#1e2762c7', borderRadius: '10px' }}
        width='100%'
        height={227}
      />
      <Skeleton
        variant='rounded'
        sx={{ margin: '2rem', backgroundColor: '#1e2762c7', borderRadius: '10px' }}
        width='100%'
        height={194}
      />
      <Skeleton
        variant='rounded'
        sx={{ margin: '2rem', backgroundColor: '#1e2762c7', borderRadius: '10px' }}
        width='100%'
        height={426}
      />
    </>
  );
}
