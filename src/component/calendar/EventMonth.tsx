import { EventCard } from "./EventCard";
import Grid from '@mui/material/Grid';
import type { PuzzleEvent } from './PuzzleEvent';
import Typography from '@mui/material/Typography';
import { Box, Stack } from "@mui/material";

interface EMProps {
  puzzleEvents: PuzzleEvent[];
  month: string;
}

const monthhName = (name: string) => {
  if (name.endsWith("09")) return "September";
  if (name.endsWith("10")) return "October";
  if (name.endsWith("11")) return "November";
  if (name.endsWith("12")) return "December";
  if (name.endsWith("01")) return "Jaunary";
  if (name.endsWith("02")) return "February";
  if (name.endsWith("03")) return "March";
  if (name.endsWith("04")) return "April";
  if (name.endsWith("05")) return "May";
  if (name.endsWith("06")) return "June";
  if (name.endsWith("07")) return "July";
  if (name.endsWith("08")) return "August";

  return name;
}

export default function EventMonth({ puzzleEvents, month }: EMProps) {
  if (puzzleEvents.length == 0)
    return (<></>);

  else
    return (
      <>
        <Stack direction="row" sx={{ paddingTop: 0.5 }}>
          <Box>
            <Typography sx={{
              writingMode: 'sideways-lr', padding: 0, fontSize: '2em',
              fontFamily: 'League Spartan', fontWeight: 800, lineHeight: '0.8em', paddingRight: '0px', paddingLeft: '1px', paddingTop: '10px', width: '0.95em'
            }}>
              {monthhName(month)}
            </Typography>
          </Box>
          <Grid container spacing={0.5} columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl: 12 }} sx={{ width: '100%' }}>
            {puzzleEvents.sort((x, y) => x.day - y.day).map((puzzleEvent) => (
              <Grid size={2}>
                <EventCard puzzleEvent={puzzleEvent} />
              </Grid>
            ))}
          </Grid>
        </Stack >

      </>
    );
}