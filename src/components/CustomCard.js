import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(() => {
  return {
    color: '#ffffff',
    backgroundColor: '#0000005e',
  };
});

export default function CustomCard({ children, sx }) {
  return <StyledCard sx={sx}>{children}</StyledCard>;
}
