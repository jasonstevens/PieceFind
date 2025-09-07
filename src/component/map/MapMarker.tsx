import { Marker } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Box, Typography } from '@mui/material';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import { type PuzzleEvent } from '../calendar/PuzzleEvent';

interface Properties {
    puzzleEvent: PuzzleEvent;
}

export default function MapMarker({ puzzleEvent }: Properties) {
    return (
        <>
            {(puzzleEvent.longitude && puzzleEvent.latitude) &&
                <Marker longitude={puzzleEvent.longitude} latitude={puzzleEvent.latitude} color="red">
                    <Box component='a' href={puzzleEvent.url}>
                        {puzzleEvent.organiser.startsWith('ukjpa') ?
                            <LocationPinIcon sx={{ color: '#ce142c', fontSize: 35, filter: 'drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.4))' }} />
                            :
                            <LocationPinIcon sx={{ color: '#02237b', fontSize: 35, filter: 'drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.4))' }} />
                        }
                    </Box>
                    <Box sx={{ position: 'relative', top: -5 + (puzzleEvent.mapOffset ? -50 : 0) + (puzzleEvent.multiLine ? -20 : 0), right: 0, width: '7rem' }}>
                        <Typography align='center' sx={{
                            color: 'black', filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.4))',
                            fontSize: '1.45em', lineHeight: '1em', fontWeight: 500, fontFamily: 'League Spartan'
                        }}>{puzzleEvent.mapName}</Typography>
                    </Box>
                </Marker>
            }
        </>
    );
}

