import { Skeleton } from '@mui/material';

export default function SceletonContent() {
  return (
    <>
      <Skeleton
        variant='rounded'
        sx={{ margin: '1rem', backgroundColor: '#2469ce75', borderRadius: '10px' }}
        width='100%'
        height={251}
      />
      <Skeleton
        variant='rounded'
        sx={{ margin: '1rem', backgroundColor: '#2469ce75', borderRadius: '10px' }}
        width='100%'
        height={191}
      />
      <Skeleton
        variant='rounded'
        sx={{ margin: '1rem', backgroundColor: '#2469ce75', borderRadius: '10px' }}
        width='100%'
        height={422}
      />
    </>
  );
}
