import { Skeleton } from '@mui/material';

export default function SceletonContent() {
  const style = {
    backgroundColor: '#124d8163',
    borderRadius: '10px',
    marginTop: '16px',
    marginBottom: '16px',
  };

  return (
    <>
      <Skeleton variant='rounded' sx={style} width='100%' height={191} />
      <Skeleton variant='rounded' sx={style} width='100%' height={197} />
      <Skeleton variant='rounded' sx={style} width='100%' height={424} />
    </>
  );
}
