import * as React from 'react';
import EventMonth from './EventMonth';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import { eventsList, type PuzzleEvent } from './PuzzleEvent';
import Nav from '../core/Nav';
import { Container } from '@mui/material';

export default function EventList() {

  const months = ["2025-09", "2025-10", "2025-11", "2025-12", "2026-01", "2026-02", "2026-03", "2026-04", "2026-05", "2026-06"];

  const [location, setLocation] = React.useState<string>('');

  const handleChange = (location: SelectChangeEvent) => { setLocation(location.target.value as string); };
  const filteredPuzzles: PuzzleEvent[] = eventsList.filter(puzzle => (location != 'All' && location != '') ? puzzle.location == location : puzzle);

  return (
    <>
      <Box display="flex" justifyContent="flex-end" sx={{ height: '40px' }}>
        <Container sx={{ p: '5px' }}>
          <FormControl sx={{ color: "white", width: '140px' }} color='secondary'>
            <Select variant="standard" value={location} label="Location" onChange={handleChange}>
              <MenuItem value=""><em>All</em></MenuItem>
              <MenuItem value={"OL"}>Online</MenuItem>
              <MenuItem value={"AM"}>Americas</MenuItem>
              <MenuItem value={"AU"}>Australia</MenuItem>
              <MenuItem value={"EU"}>Europe</MenuItem>
              <MenuItem value={"UK"}>United Kingdom</MenuItem>
            </Select>
          </FormControl>
        </Container>

        <Nav map={false} />
      </Box>

      <Container sx={{ p: '3px' }} >
        {months.map((month) => (<EventMonth puzzleEvents={filteredPuzzles.filter(puzzle => puzzle.eventDate == month)} month={month} />))}
      </Container>
    </>
  );
}