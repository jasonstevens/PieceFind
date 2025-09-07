import { Container } from '@mui/material';
import EventList from '../calendar/EventList';
import Nav from '../core/Nav';

export default function Root() {
  return (
    <>
      <Nav map={false} />
      <Container sx={{ p: '3px' }}>
        <EventList />
      </Container>
    </>
  );
}