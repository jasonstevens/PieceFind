import Map, { type MapRef } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Box, IconButton, Stack } from '@mui/material';
import { eventsList } from '../calendar/PuzzleEvent';
import MapMarker from './MapMarker';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthOceania } from '@fortawesome/free-solid-svg-icons/faEarthOceania';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons/faEarthEurope';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons/faEarthAmericas';

import { useRef } from 'react';
import Nav from '../core/Nav';

export default function App() {

    const speed = 1000;

    const mapRef = useRef<MapRef>(null);

    const toOceania = () => { mapRef.current?.flyTo({ center: [143, -30.5], duration: speed, zoom: 3.6, roll: 0 }); };
    const toEurope = () => { mapRef.current?.flyTo({ center: [3.8, 50], duration: speed, zoom: 3.85, roll: 0 }); };
    const toAmericas = () => { mapRef.current?.flyTo({ center: [-79, 11], duration: speed, zoom: 2.1, roll: -25 }); };

    return (
        <Map
            ref={mapRef}
            initialViewState={{ latitude: 50, longitude: 3.8, zoom: 3.85 }}
            style={{ height: '100vh', width: '100vw' }}
            mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
        >
            {eventsList.filter(pe => pe.latitude != undefined).map(pe => { return <MapMarker puzzleEvent={pe} /> })}

            <Nav map={true} />

            <Box display="flex" justifyContent="flex-end">
                <Stack direction="row">
                    <IconButton sx={{ p: 0, m: 0, paddingRight: '5px' }} color='inherit' onClick={() => toOceania()}><FontAwesomeIcon icon={faEarthOceania} /></IconButton>
                    <IconButton sx={{ p: 0, m: 0, paddingRight: '5px' }} color='inherit' onClick={() => toAmericas()}><FontAwesomeIcon icon={faEarthAmericas} /></IconButton>
                    <IconButton sx={{ p: 0, m: 0, paddingRight: '5px' }} color='inherit' onClick={() => toEurope()}><FontAwesomeIcon icon={faEarthEurope} /></IconButton>
                </Stack>
            </Box>
        </Map>
    );
}