import { IconButton, Stack, Typography, } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons/faCalendarDays';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';

interface Props {
  map?: boolean;
}

export default function Nav({ map }: Props) {

  return (
    <>
      <Stack direction="row">
        <Typography align='right' sx={{
          p: 0,
          lineHeight: '1.5em',
          paddingTop: '0px',
          color: 'black',
          filter: 'drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.4))',
          fontWeight: 500,
          fontSize: '35px',
          fontFamily: 'League Spartan'
        }}>PieceFind</Typography>
        <IconButton color="inherit" sx={{ p: 0, m: 0, height: '45px', paddingLeft: '2px' }} disabled={!map} component="a" href="/" >
          <FontAwesomeIcon icon={faCalendarDays} fontSize={30} />
        </IconButton>

        <IconButton color="inherit" sx={{ p: 0, m: 0, height: '45px', paddingLeft: '2px', paddingRight: '4px' }} disabled={map} component="a" href="/map">
          <FontAwesomeIcon icon={faGlobe} fontSize={26} />
        </IconButton>
      </Stack>
    </>
  );
}