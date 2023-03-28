import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';

export default function SceletonContent() {
  const style = {
    backgroundColor: '#4b9aef9c',
    borderRadius: '10px',
    my: 2,
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', columnGap: 2 }}>
      <Skeleton
        variant='rounded'
        sx={{ ...style, width: { xs: '100%', lg: '25%', xl: '30%' }, height: { xs: 191, lg: 293 } }}
      />
      <Skeleton
        variant='rounded'
        sx={{
          ...style,
          width: { xs: '100%', lg: 'auto' },
          height: { xs: 197, lg: 293 },
          flexGrow: { lg: 1 },
        }}
      />
      <Skeleton
        variant='rounded'
        sx={{ ...style, width: { xs: '100%' }, height: { xs: 424, lg: 189 } }}
      />
    </Box>
  );
}
