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

const textShadow = 'drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.9))';

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

const CardContentNoPadding = styled(CardContent)(`
  padding: 2px;
  &:last-child {
    padding-bottom: 0;
  }
`);

export function EventCard({ puzzleEvent }: ECProps) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => { setExpanded(!expanded); };

  return (
    <Card elevation={2} sx={{ backgroundColor: "#00000035" }}>
      <CardActionArea component="a" href={puzzleEvent.url} target="_blank" >
        <Box sx={{ position: "absolute", top: 0, left: 4 }}>
          <Typography fontFamily={'League Spartan'} fontSize={'1.3em'} fontWeight={600}
            sx={{ color: "white", filter: textShadow }}>{puzzleEvent.displayDays}</Typography>
        </Box>

        {puzzleEvent.location == 'OL' &&
          <Box sx={{ position: "absolute", top: 0, right: 1 }}>
            <WifiIcon sx={{ fontSize: 33 }} />
          </Box>
        }

        {puzzleEvent.soldOut &&
          <Box component="img" src="/calendar/resource/soldout.png" sx={{ position: "absolute", bottom: 10, right: 10, width: '50%' }} />
        }

        {puzzleEvent.leftName &&
          <Box sx={{ position: "absolute", bottom: 0, left: 4 }}>
            <Typography fontFamily={'League Spartan'} fontSize={'1.5em'} fontWeight={600}
              sx={{ color: "white", filter: textShadow }}>{puzzleEvent.leftName}</Typography>
          </Box>
        }

        {puzzleEvent.rightName &&
          <Box sx={{ position: "absolute", bottom: 0, right: 5 }}>
            <Typography fontFamily={'League Spartan'} fontSize={'1.5em'} fontWeight={600}
              sx={{ color: "white", filter: textShadow }}>{puzzleEvent.rightName}</Typography>
          </Box>
        }

        <CardMedia sx={{ paddingTop: '10px' }}
          component="img"
          image={"/calendar/" + puzzleEvent.organiser + ".png"}
        />

      </CardActionArea >
      <CardActions disableSpacing sx={{ p: 0 }}>
        {puzzleEvent.url ? (<IconButton sx={{ p: '5px' }} component="a" href={puzzleEvent.url} target="_blank" ><InfoIcon /></IconButton>) : <></>}
        {puzzleEvent.ticketUrl ? (<IconButton sx={{ p: '5px' }} component="a" href={puzzleEvent.ticketUrl} target="_blank" ><ConfirmationNumberIcon /></IconButton>) : <></>}
        {puzzleEvent.facebookUrl ? (<IconButton sx={{ p: '5px' }} component="a" href={puzzleEvent.facebookUrl} target="_blank" ><FacebookIcon /></IconButton>) : <></>}
        {puzzleEvent.streamUrl ? (<IconButton sx={{ p: '5px' }} component="a" href={puzzleEvent.streamUrl} target="_blank" ><LiveTvIcon /></IconButton>) : <></>}
        {puzzleEvent.mapUrl ? (<IconButton sx={{ p: '5px' }} component="a" href={puzzleEvent.mapUrl} target="_blank" ><LocationPinIcon /></IconButton>) : <></>}

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          sx={{ p: '3px' }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContentNoPadding>
          <Typography fontWeight={800}>{puzzleEvent.name}</Typography>

          {puzzleEvent.locationDesc && <Typography>{puzzleEvent.locationDesc}</Typography>}
          {puzzleEvent.info && <Typography>{puzzleEvent.info}</Typography>}
        </CardContentNoPadding>
      </Collapse>
    </Card>
  );
}