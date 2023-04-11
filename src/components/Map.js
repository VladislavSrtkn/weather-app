import { CardContent, CardHeader, Grid, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

import React, { useState } from 'react';

import apiKeys from '../config';

import CustomCard from './CustomCard';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '4px',
};

export default function Map({ coords, onClick }) {
  const [isOpen, setIsOpen] = useState(true);

  const center = {
    lat: +coords.lat,
    lng: +coords.lon,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKeys.googleMap,
  });

  function handleSetCity(e) {
    // getting click-coordinates from google-map API
    const coords = `${e.latLng.lat()} ${e.latLng.lng()}`;

    onClick(coords);
  }

  return (
    <Grid item xs={12} sx={{ my: 3 }}>
      <CustomCard>
        <CardHeader
          title='Use map to find the location'
          action={
            <IconButton onClick={() => setIsOpen(!isOpen)} sx={{ color: '#ffffff' }}>
              {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          }
        />
        {isOpen && (
          <CardContent sx={{ height: { xs: 300, lg: 400 } }}>
            {isLoaded && (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={7}
                onClick={handleSetCity}
              >
                <MarkerF position={center} />
              </GoogleMap>
            )}
          </CardContent>
        )}
      </CustomCard>
    </Grid>
  );
}
