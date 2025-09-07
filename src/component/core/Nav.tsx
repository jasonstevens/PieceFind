import { Box, IconButton, Container, Stack, Typography } from '@mui/material';
import { Outlet } from 'react-router';
import MapIcon from '@mui/icons-material/Map';

export default function Nav() {

  return (
    <>
      <Box sx={{ p: 0, m: 0 }}>
        <Box display="flex" justifyContent="flex-end">
          <Stack direction="row">
            <Typography align='right' sx={{
              paddingTop: '5px',
              color: 'black', filter: 'drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.4))',
              fontWeight: 500, fontSize: '35px', fontFamily: 'League Spartan'
            }}>PieceFind</Typography>
            <IconButton component="a" href="/map" color="inherit" size="large"
              sx={{ p: 0, m: 0, paddingLeft: '10px', height: '50px' }}>
              <MapIcon sx={{ p: 0, fontSize: 40 }} />
            </IconButton>
          </Stack>
        </Box>
      </Box>
      <Container sx={{ p: '3px' }}>
        <Outlet />
      </Container>
    </>
  );
}