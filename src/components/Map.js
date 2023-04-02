import { CardContent, CardHeader, Grid, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

import React, { useState } from 'react';

import CustomCard from './CustomCard';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '4px',
};

export default function Map({ coords, onClick }) {
  const [open, setOpen] = useState(true);

  const center = {
    lat: +coords.lat,
    lng: +coords.lon,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCCB7g-FTzUToVaw3x9viKEaqMUN_tSoiA',
  });

  function handleSetCity(e) {
    // getting click-coordinates from google-map API
    const coords = `${e.latLng.lat()} ${e.latLng.lng()}`;

    onClick(coords);
  }

  return (
    isLoaded && (
      <Grid item xs={12} sx={{ my: 3 }}>
        <CustomCard>
          <CardHeader
            title='Use map to find the location'
            action={
              <IconButton onClick={() => setOpen(!open)} sx={{ color: '#ffffff' }}>
                {(open && <KeyboardArrowUpIcon />) || <KeyboardArrowDownIcon />}
              </IconButton>
            }
          />
          {open && (
            <CardContent sx={{ height: { xs: 300, lg: 400 } }}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={7}
                onClick={handleSetCity}
              >
                <MarkerF position={center} />
              </GoogleMap>
            </CardContent>
          )}
        </CustomCard>
      </Grid>
    )
  );
}
