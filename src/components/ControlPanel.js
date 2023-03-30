import { Card } from '@mui/material';

import FindMeButton from './FindMeButton';
import SearchForm from './SearchForm';

export default function ControlPanel({ handleSetCurrentLocation, handleSetCity, onError }) {
  return (
    <Card sx={{ display: 'flex', my: 2, gap: 1, px: 1, py: 2, maxWidth: { md: 700 } }}>
      <FindMeButton onClick={handleSetCurrentLocation} />
      <SearchForm onChange={handleSetCity} onError={onError} />
    </Card>
  );
}
