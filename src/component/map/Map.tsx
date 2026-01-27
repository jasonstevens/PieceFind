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
import { useDeviceDetails } from '../core/Device';

export default function App() {

    const speed = 1000;
    const mapRef = useRef<MapRef>(null);

    const toOceania = () => { mapRef.current?.flyTo({ center: [longOceania, latOceania], duration: speed, zoom: zoomOceania, roll: 0 }); };
    const toEurope = () => { mapRef.current?.flyTo({ center: [longEurope, latEurope], duration: speed, zoom: zoomEurope, roll: 0 }); };
    const toAmericas = () => { mapRef.current?.flyTo({ center: [longAmericas, latAmericas], duration: speed, zoom: zoomAmericas, roll: rollAmericas }); };

    const isMobile = useDeviceDetails().isMobile;

    const zoomAmericas: number = isMobile ? 2.1 : 2.98;
    const latAmericas: number = isMobile ? 11 : 11;
    const longAmericas: number = isMobile ? -79 : -79;
    const rollAmericas: number = isMobile ? -25 : 0;

    const zoomOceania: number = isMobile ? 3.6 : 4.15;
    const latOceania: number = isMobile ? -30.5 : -30.5;
    const longOceania: number = isMobile ? 143 : 143;

    const zoomEurope: number = isMobile ? 2.8 : 4.4;
    const latEurope: number = isMobile ? 53 : 51;
    const longEurope: number = isMobile ? 8 : 8;

    return (
        <Map
            ref={mapRef}
            initialViewState={{ latitude: latEurope, longitude: longEurope, zoom: zoomEurope }}
            style={{ height: '100vh', width: '100vw' }}
            mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
        >
            {eventsList.filter(pe => pe.latitude != undefined).map(pe => { return <MapMarker puzzleEvent={pe} /> })}

            <Box display="flex" justifyContent="flex-end">
                <Nav map={true} />
            </Box>

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