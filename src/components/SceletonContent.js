import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';

export default function SceletonContent() {
  const style = {
    my: 3,
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', columnGap: 2 }}>
      <Skeleton
        variant='rounded'
        sx={{ ...style, width: { xs: '100%' }, height: { xs: 404, lg: 504 } }}
      />
      <Skeleton
        variant='rounded'
        sx={{ ...style, width: { xs: '100%', lg: '25%' }, height: { xs: 234, lg: 342 } }}
      />
      <Skeleton
        variant='rounded'
        sx={{
          ...style,
          width: { xs: '100%', lg: 'auto' },
          height: { xs: 290, lg: 342 },
          flexGrow: { lg: 1 },
        }}
      />
      <Skeleton
        variant='rounded'
        sx={{ ...style, width: { xs: '100%' }, height: { xs: 604, lg: 258 } }}
      />
    </Box>
  );
}
