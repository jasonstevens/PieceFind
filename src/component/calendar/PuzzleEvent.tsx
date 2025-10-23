
export interface PuzzleEvent {
  id?: number;
  name: string;
  fullName?: string;
  organiser: string;

  leftName?: string;
  rightName?: string;


  day: number;
  month: number;
  year?: number;
  displayDays: string;
  eventDate: string;

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

  soldOut?: boolean;
  latitude?: number;
  longitude?: number;
  mapName?: string;
  mapOffset?: boolean;
  multiLine?: boolean;
}

export const eventsList: PuzzleEvent[] = [
  {
    location: "UK", day: 22, month: 10, displayDays: "22nd", name: 'Championship: Cardiff', organiser: 'ukjpa-cardiff', locationDesc: "Cardiff, Wales, UK", host: "ukjpa", eventDate: '2026-02',
    url: 'https://ukjpa.org/cardiff2026/', ticketUrl: 'https://www.trybooking.com/uk/events/landing/91587', mapUrl: 'https://maps.app.goo.gl/be62nMEtoenA7Lnv5',
    latitude: 51.471149385793254, longitude: -3.20049132912831, mapName: 'Cardiff'
  },
  {
    location: "UK", day: 18, month: 4, displayDays: "18th & 19th", name: 'UK Nationals 2026', organiser: 'ukjpa-nationals', locationDesc: "Bradford, Yorkshire", host: "ukjpa", eventDate: '2026-04',
    url: 'https://ukjpa.org/nationals2026/', mapUrl: 'https://maps.app.goo.gl/rwNkK5dM8oJiQ8UZ9',
    latitude: 53.84026951006154, longitude: -1.7003488275568006, mapName: 'UK Nationals'
  },

  { location: "OL", day: 26, month: 10, displayDays: "26th", name: 'World Series #2', organiser: 'ukjpa-ws', locationDesc: "", host: "ukjpa", eventDate: '2025-10', url: 'https://ukjpa.org/worldseries', ticketUrl: 'https://www.trybooking.com/uk/FKJN' },
  { location: "OL", day: 5, month: 11, displayDays: "5th", name: 'World Series #3', organiser: 'ukjpa-ws', locationDesc: "", host: "ukjpa", eventDate: '2025-11', url: 'https://ukjpa.org/worldseries', ticketUrl: 'https://www.trybooking.com/uk/FKJN' },
  { location: "OL", day: 16, month: 11, displayDays: "16th", name: 'World Series #4', organiser: 'ukjpa-ws', locationDesc: "", host: "ukjpa", eventDate: '2025-11', url: 'https://ukjpa.org/worldseries', ticketUrl: 'https://www.trybooking.com/uk/FKJN' },
  { location: "OL", day: 26, month: 11, displayDays: "26th", name: 'World Series #5', organiser: 'ukjpa-ws', locationDesc: "", host: "ukjpa", eventDate: '2025-11', url: 'https://ukjpa.org/worldseries', ticketUrl: 'https://www.trybooking.com/uk/FKJN' },

  {
    location: "UK", day: 30, month: 11, displayDays: "30th", name: 'Kobold\'s Kettle Marathon', organiser: 'kobold', locationDesc: "Lytham, Lancashire", host: "koboldskettle", eventDate: '2025 - 11',
    url: 'https://thekoboldskettle.co.uk/', ticketUrl: "https://thekoboldskettle.co.uk/all-events/?event=2263",
    latitude: 53.73715882150867, longitude: -2.964154098052793, mapName: 'Lytham Marathon', mapOffset: true, multiLine: true
  },

  {
    location: "EU", day: 30, month: 11, displayDays: "30th", name: 'Aschheim Marathon', rightName: 'Aschheim', organiser: 'generic', locationDesc: "Munchen, Deutchland", host: "wjpf", eventDate: '2025-11',
    url: 'https://puzzleverein.de/event.php?id=4',
    latitude: 48.172308466621544, longitude: 11.715970488180144, mapName: 'Aschheim Marathon', mapOffset: true, multiLine: true
  },

  {
    location: "AM", day: 18, month: 10, displayDays: "18th & 19th", name: 'Brazil Nationals', rightName: 'Brazil', organiser: 'generic', locationDesc: "Sao Paolo, Brazil", host: "wjpf", eventDate: '2025-10',
    url: 'https://worldjigsawpuzzle.org/abqc/2025/register', ticketUrl: 'https://worldjigsawpuzzle.org/abqc/2025/register',
    latitude: -23.539916463993016, longitude: -46.64488067582398, mapName: 'Brazilian Nationals', mapOffset: true, multiLine: true
  },

  {
    location: "AM", day: 31, month: 1, displayDays: "31st & 1st", name: 'Colombia Nationals', rightName: 'Colombia', organiser: 'generic', locationDesc: "Bogota, Colombia", host: "wjpf", eventDate: '2026-01',
    url: 'https://www.rompecabezascolombia.com.co/v-campeonato',
    latitude: 4.598242267014361, longitude: -74.07604010473753, mapName: 'Colombia Nationals'
  },

  {
    location: "AM", day: 31, month: 3, displayDays: "28th - 29th", name: 'Puzzle Wave 24hr', organiser: 'generic', locationDesc: "Ontario, Canada", host: "wjpf", eventDate: '2026-03',
    url: 'https://www.canadianjpa.ca/activities/puzzlewave',
    latitude: 44.007325939298276, longitude: -79.40676705862401, mapName: 'Puzzle Wave 24hr'
  },

  {
    location: "EU", day: 18, month: 10, displayDays: "18th - 19th", name: 'Luxembourg Nationals', rightName: 'Luxembourg', organiser: 'generic', locationDesc: "Luxembourg", host: "wjpf", eventDate: '2025-10',
    url: 'http://puzzle.lu/',
    latitude: 49.76343146465424, longitude: 5.852991782087342, mapName: 'Luxembourg Nationals'
  },

  {
    location: "OL", day: 2, month: 11, displayDays: "2nd", time: "2pm", rightName: "#19", name: 'Puzzle Guzzle #19', organiser: 'puzzleguzzle', locationDesc: "", host: "puzzleguzzle", eventDate: '2025-11',
    url: 'https://www.thepuzzleguzzle.co.uk/', ticketUrl: 'https://thepuzzleguzzle.myshopify.com/products/puzzle-guzzle-19-pairs-event-02-11-25-2pm'
  },
  {
    location: "OL", day: 9, month: 11, displayDays: "9th", time: "10:30pm", rightName: "#20", name: 'Puzzle Guzzle #20', organiser: 'puzzleguzzle', locationDesc: "", host: "puzzleguzzle", eventDate: '2025-11',
    url: 'https://www.thepuzzleguzzle.co.uk/', ticketUrl: 'https://thepuzzleguzzle.myshopify.com/products/puzzle-guzzle-20-individual-event-09-11-25-10-30am',
    soldOut: true
  },

  { location: "OL", day: 25, month: 11, displayDays: "25th", time: "10:30pm", name: 'Puzzle Guzzle #21', rightName: '#21', organiser: 'puzzleguzzle', locationDesc: "", host: "puzzleguzzle", eventDate: '2025-11', url: 'https://www.thepuzzleguzzle.co.uk/', ticketUrl: 'https://thepuzzleguzzle.myshopify.com/products/puzzle-guzzle-21-individual-event-25-11-25-7pm' },
  { location: "OL", day: 2, month: 12, displayDays: "2nd", time: "10:30pm", name: 'Puzzle Guzzle #22', rightName: '#22', organiser: 'puzzleguzzle', locationDesc: "", host: "puzzleguzzle", eventDate: '2025-12', url: 'https://www.thepuzzleguzzle.co.uk/', ticketUrl: 'https://thepuzzleguzzle.myshopify.com/products/puzzle-guzzle-22-individual-event-pick-your-poison-02-12-25-7pm' },
  { location: "OL", day: 14, month: 12, displayDays: "9th", time: "2:00pm", name: 'Puzzle Guzzle #23', rightName: '#23', organiser: 'puzzleguzzle', locationDesc: "", host: "puzzleguzzle", eventDate: '2025-12', url: 'https://www.thepuzzleguzzle.co.uk/', ticketUrl: 'https://thepuzzleguzzle.myshopify.com/products/puzzle-guzzle-15-1000-pieces-14-12-25-2pm' },
  { location: "OL", day: 30, month: 12, displayDays: "30th", time: "10:30pm", name: 'Puzzle Guzzle #24', rightName: '#24', organiser: 'puzzleguzzle', locationDesc: "", host: "puzzleguzzle", eventDate: '2025-12', url: 'https://www.thepuzzleguzzle.co.uk/', ticketUrl: 'https://thepuzzleguzzle.myshopify.com/products/puzzle-guzzle-24-individual-event-30-12-25-7pm' },

  {
    location: "OL", day: 29, month: 10, displayDays: "29th", leftName: "#99", name: 'Euro Jigsaw Jam #99', organiser: 'ejj', host: "ejj", eventDate: '2025-10',
    url: 'https://speedpuzzle.eu/eurojigsawjam/', ticketUrl: "https://speedpuzzle.eu/Events/", soldOut: true
  },
  {
    location: "OL", day: 6, month: 11, displayDays: "6th", leftName: "#100", name: 'Euro Jigsaw Jam #100', organiser: 'ejj', host: "ejj", eventDate: '2025-11',
    url: 'https://speedpuzzle.eu/eurojigsawjam/', ticketUrl: "https://speedpuzzle.eu/Events/", soldOut: true
  },

  {
    location: "AU", displayDays: "19th", day: 19, month: 10, name: 'ACT State Championship', rightName: 'ACT', organiser: 'ajpa', locationDesc: "Canberra, ACT", host: "AJPA", eventDate: '2025-10', url: 'https://australianjigsawpuzzle.org.au/', ticketUrl: 'act-jigsaw-2025.eventbrite.com.au',
    latitude: -35.231890583245246, longitude: 149.14536062381032, mapName: 'ACT Championship'
  },
  {
    location: "AU", displayDays: "29th, 30th", day: 29, month: 11, name: 'Australian Nationals', rightName: "Australia", organiser: 'ajpa', locationDesc: "Canberra, ACT", host: "AJPA", eventDate: '2025-11', url: 'https://australianjigsawpuzzle.org.au/', ticketUrl: 'https://www.eventbrite.com.au/e/australian-national-jigsaw-puzzle-championships-2025-tickets-1387948975749',
    latitude: -37.843405800617425, longitude: 144.96203685571132, mapName: "Australian Nationals"
  },

  {
    location: 'EU', eventDate: '2026-03', day: 28, month: 3, displayDays: "28th & 29th", name: "Deutsche Puzzlemeisterschaft 2026", organiser: 'germany', locationDesc: "Pforzheim, Germany",
    url: 'https://puzzleverein.de/event.php?id=7', rightName: 'Germany',
    mapName: 'German Nationals', latitude: 48.892080609340255, longitude: 8.692046064120937
  },

  {
    location: 'EU', eventDate: '2026-03', day: 21, month: 3, displayDays: "21st & 22nd", name: "Belgian Jigsaw Puzzle Championship 2026", organiser: 'belgium', locationDesc: "GC De Roosenberg",
    url: 'https://www.speedpuzzling.be/event/belgian-jigsaw-puzzle-championship-2026-23/register',
    mapName: 'Belgian Nationals', latitude: 50.82352037460061, longitude: 4.657874346808696, mapOffset: true, multiLine: true
  },

  {
    location: 'EU', eventDate: '2026-03', day: 14, month: 3, displayDays: "14th & 15th", name: "Pussel-SM 2026", rightName: 'Sweden', organiser: 'sweden', locationDesc: "Partille, Sweden",
    url: 'https://www.svenskapusselforbundet.se/pussel-sm-2026/',
    mapName: 'Swedish Nationals', latitude: 57.74025058265133, longitude: 12.117314733729872
  },

  {
    location: 'EU', eventDate: '2026-02', day: 28, month: 2, displayDays: "28th & 1st", name: "Denmark 2026", fullName: "DM i speedpuzzling ’26", organiser: 'denmark', locationDesc: "Ørbvej, Denmark",
    url: 'https://danskpuslespilsforening.dk/dm-i-speedpuzzling/', rightName: "Denmark",
    mapName: 'Danish Nationals', latitude: 55.370968837543636, longitude: 10.450585478061193,
  },

  {
    location: 'AM', eventDate: '2026-03', day: 27, month: 3, displayDays: "27th - 29th", name: "US Nationals 2026", fullName: "2026 USA Jigsaw Nationals", organiser: 'usajpa', locationDesc: "Atlanta, Georgia, USA",
    url: 'https://www.usajigsaw.org/2026-nationals',
    mapName: 'USA Nationals', latitude: 33.76044940500072, longitude: -84.3882822743022
  },

  {
    location: 'EU', eventDate: '2026-04', day: 18, month: 4, displayDays: "18th & 19th", name: "Finland 2026", rightName: "Finland", organiser: 'finland', locationDesc: "Finland",
    url: '',
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