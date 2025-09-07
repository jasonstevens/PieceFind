import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { eventsList } from '../calendar/PuzzleEvent';
import MapMarker from './MapMarker';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function App() {
    return (
        <Map
            initialViewState={{ latitude: 50, longitude: 3.8, zoom: 3.85 }}
            style={{ height: '100vh', width: '100vw' }}
            mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
        >
            {eventsList.filter(pe => pe.latitude != undefined).map(pe => { return <MapMarker puzzleEvent={pe} /> })}

            <Box display="flex" justifyContent="flex-end">
                <Stack direction="row">
                    <Typography align='right' sx={{
                        paddingTop: '5px',
                        color: 'black', filter: 'drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.4))',
                        fontWeight: 500, fontSize: '35px', fontFamily: 'League Spartan'
                    }}>PieceFind</Typography>
                    <IconButton component="a" href="/" color="inherit" size="large"
                        sx={{ p: 0, m: 0, paddingLeft: '10px', height: '50px' }}>
                        <CalendarMonthIcon sx={{ p: 0, fontSize: 40 }} />
                    </IconButton>
                </Stack>
            </Box>
        </Map>
    );
}