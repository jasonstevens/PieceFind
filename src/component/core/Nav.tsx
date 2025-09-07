import { Box, IconButton, Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons/faCalendarDays';
import { faMapLocation } from '@fortawesome/free-solid-svg-icons/faMapLocation';
interface Props {
  map?: boolean;
}

export default function Nav({ map }: Props) {

  return (
    <Box display="flex" justifyContent="flex-end">
      <Stack direction="row">
        <Typography align='right' sx={{
          p: 0, lineHeight: '1.5em',
          paddingTop: '0px',
          color: 'black', filter: 'drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.4))',
          fontWeight: 500, fontSize: '35px', fontFamily: 'League Spartan'
        }}>PieceFind</Typography>
        <IconButton color="inherit" sx={{ p: 0, m: 0, height: '45px', paddingLeft: '10px' }} disabled={!map} component="a" href="/" >
          <FontAwesomeIcon icon={faCalendarDays} fontSize={30} />
        </IconButton>
        <IconButton color="inherit" sx={{ p: 0, m: 0, height: '45px', paddingLeft: '5px', paddingRight: '5px' }} disabled={map} component="a" href="/map">
          <FontAwesomeIcon icon={faMapLocation} fontSize={27} />
        </IconButton>
      </Stack>
    </Box>
  );
}