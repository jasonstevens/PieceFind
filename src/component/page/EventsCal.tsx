import { Container } from '@mui/material';
import EventList from '../calendar/EventList';

export default function Root() {
  return (
    <>
      <Container sx={{ p: '0' }}>
        <EventList />
      </Container>
    </>
  );
}