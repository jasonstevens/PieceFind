
export interface PuzzleEvent {
  id?: number;
  name: string;
  fullName?: string;
  organiser: string;
  eventDate: string;
  year: string;
  host?: string;
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
    location: "UK", day: 22, year: "22nd", name: 'Championship: Cardiff', organiser: 'ukjpa-cardiff', locationDesc: "Cardiff, Wales, UK", host: "ukjpa", eventDate: '2026-02',
    url: 'https://ukjpa.org/cardiff2026/', ticketUrl: 'https://www.trybooking.com/uk/events/landing/91587', mapUrl: 'https://maps.app.goo.gl/be62nMEtoenA7Lnv5',
    latitude: 51.471149385793254, longitude: -3.20049132912831, mapName: 'Cardiff'
  },
  {
    location: "UK", day: 18, year: "18th & 19th", name: 'UK Nationals 2026', organiser: 'ukjpa-nationals', locationDesc: "Bradford, Yorkshire", host: "ukjpa", eventDate: '2026-04',
    url: 'https://ukjpa.org/nationals2026/', mapUrl: 'https://maps.app.goo.gl/rwNkK5dM8oJiQ8UZ9',
    latitude: 53.84026951006154, longitude: -1.7003488275568006, mapName: 'UK Nationals'
  },

  { location: "OL", day: 15, year: "15th", name: 'World Series #1', organiser: 'ukjpa-ws', locationDesc: "", host: "ukjpa", eventDate: '2025-10', url: 'https://ukjpa.org/worldseries', ticketUrl: 'https://www.trybooking.com/uk/FKJN' },
  { location: "OL", day: 26, year: "26th", name: 'World Series #2', organiser: 'ukjpa-ws', locationDesc: "", host: "ukjpa", eventDate: '2025-10', url: 'https://ukjpa.org/worldseries', ticketUrl: 'https://www.trybooking.com/uk/FKJN' },
  { location: "OL", day: 5, year: "5th", name: 'World Series #3', organiser: 'ukjpa-ws', locationDesc: "", host: "ukjpa", eventDate: '2025-11', url: 'https://ukjpa.org/worldseries', ticketUrl: 'https://www.trybooking.com/uk/FKJN' },
  { location: "OL", day: 16, year: "16th", name: 'World Series #4', organiser: 'ukjpa-ws', locationDesc: "", host: "ukjpa", eventDate: '2025-11', url: 'https://ukjpa.org/worldseries', ticketUrl: 'https://www.trybooking.com/uk/FKJN' },
  { location: "OL", day: 26, year: "26th", name: 'World Series #5', organiser: 'ukjpa-ws', locationDesc: "", host: "ukjpa", eventDate: '2025-11', url: 'https://ukjpa.org/worldseries', ticketUrl: 'https://www.trybooking.com/uk/FKJN' },


  {
    location: "UK", day: 30, year: "30th", name: 'Lytham Marathon', organiser: 'kobold', locationDesc: "Lytham, Lancashire", host: "koboldskettle", eventDate: '2025-11',
    url: 'https://thekoboldskettle.co.uk/', ticketUrl: "https://thekoboldskettle.co.uk/all-events/?event=2263",
    latitude: 53.73715882150867, longitude: -2.964154098052793, mapName: 'Lytham Marathon', mapOffset: true, multiLine: true
  },

  {
    location: "EUR", day: 30, year: "30th", name: 'Aschheim Marathon', organiser: 'generic', locationDesc: "Munchen, Deutchland", host: "wjpf", eventDate: '2025-11',
    url: 'https://puzzleverein.de/event.php?id=4',
    latitude: 48.172308466621544, longitude: 11.715970488180144, mapName: 'Aschheim Marathon', mapOffset: true, multiLine: true
  },

  {
    location: "AM", day: 18, year: "18th - 19th", name: 'Brazil Nationals', organiser: 'generic', locationDesc: "Sao Paolo, Brazil", host: "wjpf", eventDate: '2025-10',
    url: 'https://worldjigsawpuzzle.org/abqc/2025/register', ticketUrl: 'https://worldjigsawpuzzle.org/abqc/2025/register',
    latitude: -23.539916463993016, longitude: -46.64488067582398, mapName: 'Brazil Nationals', mapOffset: true, multiLine: true
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
    location: "EUR", day: 18, year: "18th - 19th", name: 'Luxembourg Nationals', organiser: 'generic', locationDesc: "Luxembourg", host: "wjpf", eventDate: '2025-10',
    url: 'http://puzzle.lu/',
    latitude: 49.76343146465424, longitude: 5.852991782087342, mapName: 'Luxembourg Nationals'
  },

  { location: "OL", day: 12, year: "12th", time: "4pm", name: 'Puzzle Guzzle #17', organiser: 'puzzleguzzle', locationDesc: "", host: "ukjpa", eventDate: '2025-10', url: 'https://www.thepuzzleguzzle.co.uk/', ticketUrl: 'https://thepuzzleguzzle.myshopify.com/products/puzzle-guzzle-17-individual-event-12-10-25-4pm', soldOut: true },
  { location: "OL", day: 23, year: "12th", time: "4pm", name: 'Puzzle Guzzle #18', organiser: 'puzzleguzzle', locationDesc: "", host: "puzzleguzzle", eventDate: '2025-10', url: 'https://www.thepuzzleguzzle.co.uk/', ticketUrl: 'https://thepuzzleguzzle.myshopify.com/products/puzzle-guzzle-18-individual-event-23-10-25-7pm' },
  { location: "OL", day: 2, year: "2nd", time: "2pm", name: 'Puzzle Guzzle #19', organiser: 'puzzleguzzle', locationDesc: "", host: "puzzleguzzle", eventDate: '2025-11', url: 'https://www.thepuzzleguzzle.co.uk/', ticketUrl: 'https://thepuzzleguzzle.myshopify.com/products/puzzle-guzzle-19-pairs-event-02-11-25-2pm' },
  { location: "OL", day: 9, year: "9th", time: "10:30pm", name: 'Puzzle Guzzle #20', organiser: 'puzzleguzzle', locationDesc: "", host: "puzzleguzzle", eventDate: '2025-11', url: 'https://www.thepuzzleguzzle.co.uk/', ticketUrl: 'https://thepuzzleguzzle.myshopify.com/products/puzzle-guzzle-20-individual-event-09-11-25-10-30am' },

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

  {
    location: 'EU', eventDate: '2026-03', day: 28, year: "28th, 29th", name: "Germany 2026", organiser: 'germany', locationDesc: "Pforzheim, Germany", url: 'https://puzzleverein.de/event.php?id=7',
    mapName: 'German Nationals', latitude: 48.892080609340255, longitude: 8.692046064120937
  },

  {
    location: 'EU', eventDate: '2026-03', day: 21, year: "21st, 22nd", name: "Belgium 2026", organiser: 'belgium', locationDesc: "GC De Roosenberg, Belgium", url: 'https://www.speedpuzzling.be/event/belgian-jigsaw-puzzle-championship-2026-23/register',
    mapName: 'Belgian Nationals', latitude: 50.82352037460061, longitude: 4.657874346808696, mapOffset: true, multiLine: true
  },

  {
    location: 'EU', eventDate: '2026-03', day: 14, year: "14th, 15th", name: "Sweden 2026", organiser: 'sweden', locationDesc: "Partille, Sweden", url: 'https://www.svenskapusselforbundet.se/pussel-sm-2026/',
    mapName: 'Swedish Nationals', latitude: 57.74025058265133, longitude: 12.117314733729872
  },

  {
    location: 'EU', eventDate: '2026-02', day: 28, year: "28th, 1st", name: "Denmark 2026", fullName: "DM i speedpuzzling ’26", organiser: 'denmark', locationDesc: "Ørbvej, Denmark", url: 'https://danskpuslespilsforening.dk/dm-i-speedpuzzling/',
    mapName: 'Danish Nationals', latitude: 55.370968837543636, longitude: 10.450585478061193,
  },

  {
    location: 'AM', eventDate: '2026-03', day: 27, year: "27th - 29th", name: "USA 2026", fullName: "2026 USA Jigsaw Nationals", organiser: 'usa', locationDesc: "Atlanta, Georgia, USA", url: 'https://www.usajigsaw.org/2026-nationals',
    mapName: 'USA Nationals', latitude: 33.76044940500072, longitude: -84.3882822743022
  },

  {
    location: 'EU', eventDate: '2026-04', day: 18, year: "18th - 19th", name: "Finland 2026", organiser: 'finland', locationDesc: "Atlanta, Georgia, USA", url: 'https://www.usajigsaw.org/2026-nationals',
    mapName: 'Finnish Nationals', latitude: 60.20362124610655, longitude: 24.659977636826962
  }

  /*
  Hungarian National Championship will take place on 18-19 April 2026. // Not a
  Polish - 8-9.08.2026
    https://www.instagram.com/pspuzzlowe/?hl=en
  

  Switzerland 10&11 October 2026
    https://schweizerpuzzlemeisterschaft.ch/
    -- Opportunity
    
  Czechia June 2026, most likely
  13-14
  
  Portugal May, without days yet!
  
  Slovenia April, no dates yet A bit random but we have a date set now. 11.4.2026
  
  Norway That's norwegian championship 11.4.2026
  https://www.norgespuslespillforbund.no/
  */











];