import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material/styles";
import CardActionArea from '@mui/material/CardActionArea';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CardActions from '@mui/material/CardActions';
import IconButton, { type IconButtonProps } from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InfoIcon from '@mui/icons-material/Info';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import WifiIcon from '@mui/icons-material/Wifi';
import LocationPinIcon from '@mui/icons-material/LocationPin';

import Collapse from '@mui/material/Collapse';
import { type PuzzleEvent } from './PuzzleEvent';
import { Box } from '@mui/material';

interface ECProps {
  puzzleEvent: PuzzleEvent;
}
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export function EventCard({ puzzleEvent }: ECProps) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => { setExpanded(!expanded); };

  return (
    <Card elevation={2} sx={{ backgroundColor: "#00000033" }}>
      <CardActionArea component="a" href={puzzleEvent.url} target="_blank" >
        {puzzleEvent.location == 'OL' &&
          <Box sx={{ position: "absolute", top: 0, right: 2 }}>
            <WifiIcon sx={{ fontSize: 36 }} />
          </Box>
        }

        {puzzleEvent.soldOut &&
          <Box component="img" src="/calendar/resource/soldout.png" sx={{ position: "absolute", bottom: 10, right: 10, width: '50%' }} />
        }

        <Box sx={{ position: "absolute", top: 2, left: 5 }}>
          <Typography fontWeight={600}>{puzzleEvent.year}</Typography>
        </Box>

        <CardMedia
          component="img"
          image={"/calendar/" + puzzleEvent.organiser + ".png"}
        />

      </CardActionArea >
      <CardContent sx={{ padding: 0 }}>
        <Typography fontSize={{ xs: '0.9em', md: '1em' }} fontWeight={800}>{puzzleEvent.name}</Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ p: 0 }}>
        {puzzleEvent.url ? (<IconButton sx={{ p: '5px' }} component="a" href={puzzleEvent.url} target="_blank" ><InfoIcon /></IconButton>) : <></>}
        {puzzleEvent.ticketUrl ? (<IconButton sx={{ p: '5px' }} component="a" href={puzzleEvent.ticketUrl} target="_blank" ><ConfirmationNumberIcon /></IconButton>) : <></>}
        {puzzleEvent.facebookUrl ? (<IconButton sx={{ p: '5px' }} component="a" href={puzzleEvent.facebookUrl} target="_blank" ><FacebookIcon /></IconButton>) : <></>}
        {puzzleEvent.streamUrl ? (<IconButton sx={{ p: '5px' }} component="a" href={puzzleEvent.streamUrl} target="_blank" ><LiveTvIcon /></IconButton>) : <></>}
        {puzzleEvent.mapUrl ? (<IconButton sx={{ p: '5px' }} component="a" href={puzzleEvent.mapUrl} target="_blank" ><LocationPinIcon /></IconButton>) : <></>}

        {puzzleEvent.info || puzzleEvent.locationDesc ? (
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            sx={{ p: '5px' }}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        ) : <></>}
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ p: 1 }}>
          {puzzleEvent.locationDesc && <Typography>{puzzleEvent.locationDesc}</Typography>}
          {puzzleEvent.info && <Typography>{puzzleEvent.info}</Typography>}
        </CardContent>
      </Collapse>

    </Card >
  );
}