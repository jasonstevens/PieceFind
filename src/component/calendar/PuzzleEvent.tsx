
export interface PuzzleEvent {
  id?: number;
  name: string;
  organiser: string;
  eventDate: string;
  year: string;
  host: string;
  location: string;
  locationDesc?: string;
  state?: string;

  url?: string;
  ticketUrl?: string;
  facebookUrl?: string;
  streamUrl?: string;
  mapUrl?: string;
  instagramUrl?: string;

  info?: string;
  time?: string;
  day: number;
  soldOut?: boolean;
  latitude?: number;
  longitude?: number;
  mapName?: string;
  mapOffset?: boolean;
  multiLine?: boolean;
}

export const eventsList: PuzzleEvent[] = [
  {
    location: "UK", day: 22, year: "22nd", name: 'Championship: Cardiff', organiser: 'ukjpa-cardiff', locationDesc: "Cardiff, Wales", host: "ukjpa", eventDate: '2026-02', url: 'https://ukjpa.org/cardiff2026/', ticketUrl: 'https://www.trybooking.com/uk/events/landing/91587', mapUrl: 'https://maps.app.goo.gl/be62nMEtoenA7Lnv5',
    latitude: 51.471149385793254, longitude: -3.20049132912831, mapName: 'Cardiff'
  },
  {
    location: "UK", day: 18, year: "18th & 19th", name: 'UK Nationals 2026', organiser: 'ukjpa-nationals', locationDesc: "Bradford, Yorkshire", host: "ukjpa", eventDate: '2026-04', url: 'https://ukjpa.org/nationals2026/', mapUrl: 'https://maps.app.goo.gl/rwNkK5dM8oJiQ8UZ9',
    latitude: 53.84026951006154, longitude: -1.7003488275568006, mapName: 'UK Nationals'
  },

  {
    location: "EUR", day: 15, year: "15th - 21st", name: 'World Championships', organiser: 'wjpf', locationDesc: "Valladolid, Spain", host: "ukjpa", eventDate: '2025-09', url: 'https://worldjigsawpuzzle.org/wjpc/2025', ticketUrl: 'https://worldjigsawpuzzle.org/wjpc/2025/register', streamUrl: 'https://www.youtube.com/@worldjigsawpuzzlefederation/streams',
    latitude: 41.649033619745836, longitude: -4.735380766189017, mapName: 'WJPC'
  },

  {
    location: "EUR", day: 15, year: "27th - 28th", name: 'Swiss Nationals 2026', organiser: 'schweizer', locationDesc: "Valladolid, Spain", host: "ukjpa", eventDate: '2025-09', url: 'https://schweizerpuzzlemeisterschaft.ch/', instagramUrl: 'https://www.instagram.com/schweizer_puzzle_meisterschaft/',
    latitude: 47.40593646969789, longitude: 9.634036255592605, mapName: 'Swiss Nationals', soldOut: true
  },

  {
    location: "UK", day: 30, year: "30th", name: 'Lytham Marathon', organiser: 'kobold', locationDesc: "Lytham, Lancashire", host: "koboldskettle", eventDate: '2025-11', url: 'https://thekoboldskettle.co.uk/', ticketUrl: "https://thekoboldskettle.co.uk/all-events/?event=2263",
    latitude: 53.73715882150867, longitude: -2.964154098052793, mapName: 'Lytham Marathon', mapOffset: true, multiLine: true
  },

  {
    location: "EUR", day: 30, year: "30th", name: 'Aschheim Marathon', organiser: 'generic', locationDesc: "Munchen, Deutchland", host: "wjpf", eventDate: '2025-11', url: 'https://puzzleverein.de/event.php?id=4',
    latitude: 48.172308466621544, longitude: 11.715970488180144, mapName: 'Aschheim Marathon', mapOffset: true, multiLine: true
  },

  {
    location: "AM", day: 18, year: "18th - 19th", name: 'Brazil Nationals', organiser: 'generic', locationDesc: "Sao Paolo, Brazil", host: "wjpf", eventDate: '2025-10', url: 'https://worldjigsawpuzzle.org/abqc/2025/register', ticketUrl: 'https://worldjigsawpuzzle.org/abqc/2025/register',
    latitude: -23.539916463993016, longitude: -46.64488067582398, mapName: 'Brazil Nationals'
  },

  {
    location: "AM", day: 31, year: "31st - 1st", name: 'Colombia Nationals', organiser: 'generic', locationDesc: "Bogota, Colombia", host: "wjpf", eventDate: '2026-01',
    url: 'https://www.rompecabezascolombia.com.co/v-campeonato',
    latitude: 4.598242267014361, longitude: -74.07604010473753, mapName: 'Colombia Nationals'
  },

  {
    location: "AM", day: 31, year: "28th - 29th", name: 'Puzzle Wave 24hr', organiser: 'generic', locationDesc: "Ontario, Canada", host: "wjpf", eventDate: '2026-03',
    url: 'https://www.canadianjpa.ca/activities/puzzlewave',
    latitude: 44.007325939298276, longitude: -79.40676705862401, mapName: 'Puzzle Wave 24hr'
  },

  {
    location: "EUR", day: 18, year: "18th - 19th", name: 'Luxembourg Nationals', organiser: 'generic', locationDesc: "Ontario, Canada", host: "wjpf", eventDate: '2025-10',
    url: 'http://puzzle.lu/',
    latitude: 49.76343146465424, longitude: 5.852991782087342, mapName: 'Luxembourg Nationals'
  },

  { location: "OL", day: 7, year: "7th", time: "3pm", name: 'Puzzle Guzzle #15', organiser: 'puzzleguzzle', locationDesc: "", host: "ukjpa", eventDate: '2025-09', url: 'https://www.thepuzzleguzzle.co.uk/', ticketUrl: 'https://thepuzzleguzzle.myshopify.com/products/puzzle-guzzle-15-dream-team-07-09-25-3pm' },
  { location: "OL", day: 2, year: "2nd", time: "6:30pm", name: 'Puzzle Guzzle #16', organiser: 'puzzleguzzle', locationDesc: "", host: "ukjpa", eventDate: '2025-10', url: 'https://www.thepuzzleguzzle.co.uk/', ticketUrl: 'https://thepuzzleguzzle.myshopify.com/products/puzzle-guzzle-16-individual-event-02-10-25-6-30pm' },
  { location: "OL", day: 12, year: "12th", time: "4pm", name: 'Puzzle Guzzle #17', organiser: 'puzzleguzzle', locationDesc: "", host: "ukjpa", eventDate: '2025-12', url: 'https://www.thepuzzleguzzle.co.uk/', ticketUrl: 'https://thepuzzleguzzle.myshopify.com/products/puzzle-guzzle-17-individual-event-12-10-25-4pm', soldOut: true },



  { location: "OL", day: 8, year: "8th", name: 'Euro Jigsaw Jam #92', organiser: 'ejj', host: "ejj", eventDate: '2025-09', url: 'https://speedpuzzle.eu/eurojigsawjam/', ticketUrl: "https://speedpuzzle.eu/Events/", soldOut: true },
  { location: "OL", day: 28, year: "28th", name: 'Euro Jigsaw Jam #94', organiser: 'ejj', host: "ejj", eventDate: '2025-09', url: 'https://speedpuzzle.eu/eurojigsawjam/', ticketUrl: "https://speedpuzzle.eu/Events/", soldOut: true },
  { location: "OL", day: 30, year: "30th", name: 'Euro Jigsaw Jam #95', organiser: 'ejj', host: "ejj", eventDate: '2025-09', url: 'https://speedpuzzle.eu/eurojigsawjam/', ticketUrl: "https://speedpuzzle.eu/Events/", soldOut: true },
  { location: "OL", day: 19, year: "19th", name: 'Euro Jigsaw Jam #96', organiser: 'ejj', host: "ejj", eventDate: '2025-10', url: 'https://speedpuzzle.eu/eurojigsawjam/', ticketUrl: "https://speedpuzzle.eu/Events/", soldOut: true },
  { location: "OL", day: 22, year: "22nd", name: 'Euro Jigsaw Jam #97', organiser: 'ejj', host: "ejj", eventDate: '2025-10', url: 'https://speedpuzzle.eu/eurojigsawjam/', ticketUrl: "https://speedpuzzle.eu/Events/", soldOut: true },
  { location: "OL", day: 29, year: "29th", name: 'Euro Jigsaw Jam #99', organiser: 'ejj', host: "ejj", eventDate: '2025-10', url: 'https://speedpuzzle.eu/eurojigsawjam/', ticketUrl: "https://speedpuzzle.eu/Events/", soldOut: true },
  { location: "OL", day: 6, year: "6th", name: 'Euro Jigsaw Jam #100', organiser: 'ejj', host: "ejj", eventDate: '2025-11', url: 'https://speedpuzzle.eu/eurojigsawjam/', ticketUrl: "https://speedpuzzle.eu/Events/", soldOut: true },

  {
    location: "AU", year: "19th", day: 19, name: 'ACT Championship', organiser: 'ajpa', locationDesc: "Canberra, ACT", host: "AJPA", eventDate: '2025-10', url: 'https://australianjigsawpuzzle.org.au/', ticketUrl: 'act-jigsaw-2025.eventbrite.com.au',
    latitude: -35.231890583245246, longitude: 149.14536062381032, mapName: 'ACT Championship'
  },
  {
    location: "AU", year: "29th, 30th", day: 29, name: 'Australian Nationals', organiser: 'ajpa', locationDesc: "Canberra, ACT", host: "AJPA", eventDate: '2025-11', url: 'https://australianjigsawpuzzle.org.au/', ticketUrl: 'https://www.eventbrite.com.au/e/australian-national-jigsaw-puzzle-championships-2025-tickets-1387948975749',
    latitude: -37.843405800617425, longitude: 144.96203685571132, mapName: "Australian Nationals"
  },


  // { id: 1, state: "VIC", year: "April 12", name: 'Competition for a Cause #3', organiser: 'cfac-rb', location: "Melbourne, Victoria", host: "Lou and Friends", eventDate: 'April', facebookUrl: 'https://www.facebook.com/profile.php?id=61554286572489', ticketUrl: "https://www.trybooking.com/CNXGL", streamUrl: "https://www.youtube.com/channel/UCmdflON963xK4H9HeiozFwA", info: "Competition for a Cause is a family-friendly community-focused event raising money for the Headspace National Youth Charity" },
  // { id: 10, state: "VIC", year: "2025", name: 'Competition for a Cause #4', organiser: 'cfac', location: "Melbourne, Victoria", host: "Lou and Friends", eventDate: '2025', url: 'https://www.facebook.com/profile.php?id=61554286572489' },
  // { id: 2, state: "SA", year: "May 3-4", name: 'Jigsaw Mania & SA Championships', organiser: 'ajpa-rb', location: "Willunga, South Australia", host: "Jigsaw Willunga", eventDate: 'May', url: 'https://willungarecpark.com.au/willunga-jigsaw/', ticketUrl: "https://events.humanitix.com/willunga-jigsaw-mania-2025", facebookUrl: "https://www.facebook.com/WillungaJigsawMania" },
  // { id: 3, state: "QLD", year: "2025", name: 'QLD State Championships', organiser: 'ajpa', location: "Brisbane, Queensland", host: "AJPA", eventDate: '2025', url: 'https://australianjigsawpuzzle.org.au/' },
  // { id: 4, state: "VIC", year: "2025", name: 'Victoria State Championships', organiser: 'ajpa', location: "Melbourne, Victoria", host: "AJPA", eventDate: '2025', url: 'https://australianjigsawpuzzle.org.au/' },
  // { id: 5, state: "NSW", year: "2025", name: 'NSW State Championships', organiser: 'ajpa', location: "Sydney, New South Wales", host: "AJPA", eventDate: '2025', url: 'https://australianjigsawpuzzle.org.au/' },
  // { id: 6, state: "ACT", year: "2025", name: 'ACT State Championships', organiser: 'ajpa', location: "Canberra, ACT", host: "AJPA", eventDate: '2025', url: 'https://australianjigsawpuzzle.org.au/' },
  // { id: 7, state: "WA", year: "2025", name: 'WA State Championships', organiser: 'ajpa', location: "Perth, WA", host: "AJPA", eventDate: '2025', url: 'https://australianjigsawpuzzle.org.au/' },
  // { id: 8, state: "TAS", year: "2025", name: 'Tasmania State Championships', organiser: 'ajpa', location: "Hobart, Tasmania", host: "AJPA", eventDate: '2025', url: 'https://australianjigsawpuzzle.org.au/' },
  // { id: 10, state: "QLD", year: "June 28-29", name: 'Jigsaw Jamboree', organiser: 'asjpe', location: "Gold Coast, Queensland", host: "ASJPE", eventDate: 'June', url: 'https://www.asjpe.com/jigsaw-jamboree-2025', ticketUrl: "https://www.trybooking.com/events/landing/1323488" },


];