import CustomCard from './CustomCard';
import FindMeButton from './FindMeButton';
import SearchForm from './SearchForm';

export default function ControlPanel({ onSetCurrentLocation, onSetCity, onError }) {
  return (
    <CustomCard sx={{ display: 'flex', my: 2, gap: 1, px: 1, py: 2, maxWidth: 700 }}>
      <FindMeButton onClick={onSetCurrentLocation} />
      <SearchForm onChange={onSetCity} onError={onError} />
    </CustomCard>
  );
}
