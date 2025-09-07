import * as React from 'react';
import EventMonth from './EventMonth';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import { eventsList, type PuzzleEvent } from './PuzzleEvent';

export default function EventList() {

  const months = ["2025-09", "2025-10", "2025-11", "2025-12", "2026-01", "2026-02", "2026-03", "2026-04", "2026-05", "2026-06"];

  const [location, setLocation] = React.useState<string>('');


  const handleChange = (location: SelectChangeEvent) => {
    setLocation(location.target.value as string);
  };

  // const [state, setState] = React.useState<string>('');

  // const handleStateChange = (location: SelectChangeEvent) => {
  //   setLocation(location.target.value as string);
  // };

  const filteredPuzzles: PuzzleEvent[] = eventsList.filter(puzzle => (location != 'All' && location != '') ? puzzle.location == location : puzzle);

  return (

    <>
      <Box display="flex" justifyContent='center' >
        <FormControl sx={{ color: "white", width: '200px' }} color='secondary'>
          <InputLabel>Location</InputLabel>
          <Select
            variant="filled"
            value={location}
            label="Location"
            onChange={handleChange}
            sx={{ height: '50px' }}
          >
            <MenuItem value=""><em>All</em></MenuItem>
            <MenuItem value={"UK"}>United Kingdom</MenuItem>
            <MenuItem value={"OL"}>Online</MenuItem>
            <MenuItem value={"EUR"}>Europe</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* <FormControl sx={{ color: "white", width: '150px' }}>
            <InputLabel>State</InputLabel>
            <Select
              variant="filled"
              value={state}
              label="Location"
              onChange={handleStateChange}
            >
              <MenuItem value=""><em>All</em></MenuItem>
              <MenuItem value={"ACT"}>Australian Capital Territory</MenuItem>
              <MenuItem value={"NSW"}>New South Wales</MenuItem>
              <MenuItem value={"NT"}>Northern Territory</MenuItem>
              <MenuItem value={"QLD"}>Queensland</MenuItem>
              <MenuItem value={"SA"}>South Australia</MenuItem>
              <MenuItem value={"TAS"}>Tasmania</MenuItem>
              <MenuItem value={"VIC"}>Victoria</MenuItem>
              <MenuItem value={"WA"}>Western Australia</MenuItem>
            </Select>
          </FormControl> */}

      <Box>
        {months.map((month) => (
          <EventMonth puzzleEvents={filteredPuzzles.filter(puzzle => puzzle.eventDate == month)} month={month} />
        ))}
      </Box>
    </>
  );
}