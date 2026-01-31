
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

  venueName?: string;
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
    location: "UK", day: 22, month: 2, displayDays: "22nd", name: 'Championship: Cardiff', organiser: 'ukjpa-cardiff', locationDesc: "Cardiff, Wales, UK", host: "ukjpa", eventDate: '2026-02',
    url: 'https://ukjpa.org/cardiff2026/', ticketUrl: 'https://www.trybooking.com/uk/events/landing/91587', mapUrl: 'https://maps.app.goo.gl/be62nMEtoenA7Lnv5', streamUrl: 'https://www.youtube.com/@UKJPA/streams',
    latitude: 51.471149385793254, longitude: -3.20049132912831, mapName: 'Cardiff'
  },
  {
    location: "UK", day: 18, month: 4, displayDays: "18th & 19th", name: 'UK Nationals 2026', organiser: 'ukjpa-nationals', locationDesc: "Bradford, Yorkshire", host: "ukjpa", eventDate: '2026-04',
    url: 'https://ukjpa.org/nationals2026/', mapUrl: 'https://maps.app.goo.gl/rwNkK5dM8oJiQ8UZ9', ticketUrl: 'https://www.trybooking.com/uk/events/landing/91594', streamUrl: 'https://www.youtube.com/@UKJPA/streams',
    latitude: 53.84026951006154, longitude: -1.7003488275568006, mapName: 'UK Nationals'
  },

  { location: "OL", day: 3, month: 2, displayDays: "3rd", time: "7:00pm", name: 'Puzzle Guzzle #28', rightName: '#28', organiser: 'puzzleguzzle', locationDesc: "", host: "puzzleguzzle", eventDate: '2026-02', url: 'https://www.thepuzzleguzzle.co.uk/', ticketUrl: 'https://thepuzzleguzzle.myshopify.com/products/puzzle-guzzle-28-individual-event-03-02-26-7pm', soldOut: true },
  { location: "OL", day: 8, month: 2, displayDays: "8th", time: "10:30am", name: 'Puzzle Guzzle #29', rightName: '#29', organiser: 'puzzleguzzle', locationDesc: "", host: "puzzleguzzle", eventDate: '2026-02', url: 'https://www.thepuzzleguzzle.co.uk/', ticketUrl: 'https://thepuzzleguzzle.myshopify.com/products/puzzle-guzzle-29-individual-event-300-pieces-08-02-26-10-30am', soldOut: true },
  { location: "OL", day: 27, month: 2, displayDays: "25th", time: "7:30am", name: 'Puzzle Guzzle #30', rightName: '#30', organiser: 'puzzleguzzle', locationDesc: "", host: "puzzleguzzle", eventDate: '2026-02', url: 'https://www.thepuzzleguzzle.co.uk/', ticketUrl: 'https://thepuzzleguzzle.myshopify.com/products/puzzle-guzzle-30-pairs-event-27-02-26-7pm-damaged-copy', soldOut: true },
  { location: "OL", day: 1, month: 3, displayDays: "1st", time: "1:00pm", name: 'Puzzle Guzzle #31', rightName: '#31', organiser: 'puzzleguzzle', locationDesc: "", host: "puzzleguzzle", eventDate: '2026-03', url: 'https://www.thepuzzleguzzle.co.uk/', ticketUrl: 'https://thepuzzleguzzle.myshopify.com/products/puzzle-guzzle-31-individual-event-trialogy-01-03-26-9am', soldOut: true },

  { location: "OL", day: 10, month: 3, displayDays: "10th", time: "7:00pm", name: 'Puzzle Guzzle #32', rightName: '#32', organiser: 'puzzleguzzle', locationDesc: "", host: "puzzleguzzle", eventDate: '2026-03', url: 'https://www.thepuzzleguzzle.co.uk/', ticketUrl: 'https://thepuzzleguzzle.myshopify.com/products/puzzle-guzzle-32-individual-event-10-03-26-7pm' },
  { location: "OL", day: 20, month: 3, displayDays: "20th", time: "7:00pm", name: 'Puzzle Guzzle #33', rightName: '#33', organiser: 'puzzleguzzle', locationDesc: "", host: "puzzleguzzle", eventDate: '2026-03', url: 'https://www.thepuzzleguzzle.co.uk/', ticketUrl: 'https://thepuzzleguzzle.myshopify.com/products/puzzle-guzzle-33-individual-event-20-03-26-7pm' },
  { location: "OL", day: 29, month: 3, displayDays: "29th", time: "2:00pm", name: 'Puzzle Guzzle #34', rightName: '#34', organiser: 'puzzleguzzle', locationDesc: "", host: "puzzleguzzle", eventDate: '2026-03', url: 'https://www.thepuzzleguzzle.co.uk/', ticketUrl: 'https://thepuzzleguzzle.myshopify.com/products/puzzle-guzzle-33-1000-pieces-dream-teams-29-03-26-2pm' },

  // {
  //   location: "OL", day: 6, month: 11, displayDays: "6th", leftName: "#100", name: 'Euro Jigsaw Jam #100', organiser: 'ejj', host: "ejj", eventDate: '2025-11',
  //   url: 'https://speedpuzzle.eu/eurojigsawjam/', ticketUrl: "https://speedpuzzle.eu/Events/", soldOut: true
  // },

  // {
  //   location: "AU", displayDays: "19th", day: 19, month: 10, name: 'ACT State Championship', rightName: 'ACT', organiser: 'ajpa', locationDesc: "Canberra, ACT", host: "AJPA", eventDate: '2025-10', url: 'https://australianjigsawpuzzle.org.au/', ticketUrl: 'act-jigsaw-2025.eventbrite.com.au',
  //   latitude: -35.231890583245246, longitude: 149.14536062381032, mapName: 'ACT Championship'
  // },
  // {
  //   location: "AU", displayDays: "29th, 30th", day: 29, month: 11, name: 'Australian Nationals', rightName: "Australia", organiser: 'ajpa', locationDesc: "Canberra, ACT", host: "AJPA", eventDate: '2025-11', url: 'https://australianjigsawpuzzle.org.au/', ticketUrl: 'https://www.eventbrite.com.au/e/australian-national-jigsaw-puzzle-championships-2025-tickets-1387948975749',
  //   latitude: -37.843405800617425, longitude: 144.96203685571132, mapName: "Australian Nationals"
  // },

  {
    location: 'EU', eventDate: '2026-03', day: 28, month: 3, displayDays: "28th & 29th", name: "Deutsche Puzzlemeisterschaft 2026", organiser: 'germany', locationDesc: "Pforzheim, Germany",
    url: 'https://puzzleverein.de/event.php?id=7', rightName: 'Germany',
    mapName: 'Germany', latitude: 48.892080609340255, longitude: 8.692046064120937
  },

  {
    location: 'EU', eventDate: '2026-03', day: 21, month: 3, displayDays: "21st & 22nd", name: "Belgian Jigsaw Puzzle Championship 2026", organiser: 'belgium', locationDesc: "GC De Roosenberg",
    url: 'https://www.speedpuzzling.be/event/belgian-jigsaw-puzzle-championship-2026-23/register', ticketUrl: 'https://worldjigsawpuzzle.org/speedpuzzlingbelgium/2026/register',
    mapName: 'Belgium', latitude: 50.82352037460061, longitude: 4.657874346808696, mapUrl: 'https://maps.app.goo.gl/ptDB8QTvrjSWvL8w5',
  },

  {
    location: 'EU', eventDate: '2026-03', day: 14, month: 3, displayDays: "14th & 15th", name: "Pussel-SM 2026", rightName: 'Sweden', organiser: 'sweden', locationDesc: "Partille, Sweden",
    url: 'https://www.svenskapusselforbundet.se/pussel-sm-2026/', ticketUrl: 'https://worldjigsawpuzzle.org/svenskapusselforbundet/2026/register', mapUrl: 'https://maps.app.goo.gl/hgAiQ5xKEEVJ44fH6',
    mapName: 'Sweden', latitude: 57.74025058265133, longitude: 12.117314733729872
  },

  {
    location: 'EU', eventDate: '2026-02', day: 28, month: 2, displayDays: "28th & 1st", name: "Denmark 2026", fullName: "DM i speedpuzzling ’26", organiser: 'denmark', locationDesc: "Ørbvej, Denmark",
    url: 'https://danskpuslespilsforening.dk/dm-i-speedpuzzling/', rightName: "Denmark", ticketUrl: 'https://worldjigsawpuzzle.org/danskpuslespilsforening/2026/register',
    mapName: 'Denmark', latitude: 55.370968837543636, longitude: 10.450585478061193,
  },

  {
    location: 'AM', eventDate: '2026-03', day: 27, month: 3, displayDays: "27th - 29th", name: "US Nationals 2026", fullName: "2026 USA Jigsaw Nationals", organiser: 'usajpa', locationDesc: "Atlanta, Georgia, USA",
    url: 'https://www.usajigsaw.org/2026-nationals', ticketUrl: 'https://www.tickettailor.com/events/usajigsawpuzzleassociation/1841501', rightName: 'US Nationals',
    mapName: 'USA Nationals', latitude: 33.76044940500072, longitude: -84.3882822743022
  },

  {
    location: 'AM', eventDate: '2026-05', day: 29, month: 5, displayDays: "29th - 31st", name: "Canadian Nationals 2026", fullName: "2026 Canadian Nationals", rightName: 'Canada', organiser: 'canada', locationDesc: "Georgetown, Ontario",
    url: 'https://www.canadianjpa.ca/nationals26',
    mapName: 'Canadian Nationals', latitude: 43.65087944123792, longitude: -79.89883333128788
  },

  // {
  //   location: 'AM', eventDate: '2025-12', day: 12, month: 12, displayDays: "12th - 13th", name: "Chinese Nationals 2025", rightName: "China", fullName: "2025 Chinese Nationals", organiser: 'china', locationDesc: "Shanghai",
  //   url: 'https://worldjigsawpuzzle.org/china?cat=',
  // },


  {
    location: 'EU', eventDate: '2026-04', day: 18, month: 4, displayDays: "18th & 19th", name: "Finland 2026", rightName: "Finland", organiser: 'finland', locationDesc: "Finland",
    url: 'https://palapeliurheiluliitto.fi/en',
    mapName: 'Finland', latitude: 60.20362124610655, longitude: 24.659977636826962
  },

  {
    location: 'EU', eventDate: '2026-06', day: 6, month: 6, displayDays: "6th & 7th", name: "Netherlands 2026", organiser: 'netherlands', locationDesc: "Netherlands",
    url: 'https://speedpuzzling.nl/en/',
    mapName: 'Netherlands', latitude: 52.11071155167927, longitude: 5.1741815825762
  },

  {
    location: 'EU', eventDate: '2026-10', day: 10, month: 10, displayDays: "10th & 11th", name: "Switzerland 2026", rightName: "Switzerland", organiser: 'schweizer', locationDesc: "Switzerland",
    url: 'https://www.schweizerpuzzlemeisterschaft.ch/spm-2026/terminplan-2026/',
    mapName: 'Switzerland', latitude: 47.503386227846434, longitude: 8.712182278923661
  },

  {
    location: 'EU', eventDate: '2026-05', day: 1, month: 5, displayDays: "1st & 2nd", name: "Speed Puzzle World Series 2026", organiser: 'spws', locationDesc: "Munich, Germany",
    url: 'https://speedpuzzle.com/', ticketUrl: 'https://buy.stripe.com/3cI8wI1Vg1zI7RPgf51kA0e',
    mapName: 'World Series', latitude: 48.123952562500264, longitude: 11.607029582394576
  },

  {
    location: 'EU', eventDate: '2026-04', day: 11, month: 4, displayDays: "11th", name: "Slovenia 2026", organiser: 'slovenia', locationDesc: "Novo Mesto, Slovenia", rightName: "Slovenia",
    url: "https://drustvosestavljank.si/",
    mapName: 'Slovenia', latitude: 45.794297551617156, longitude: 15.154642512934878
  },

  {
    location: 'EU', eventDate: '2026-04', day: 18, month: 4, displayDays: "18th & 19th", name: "Hungary 2026", rightName: "Hungary", organiser: 'hungary', locationDesc: "Finland",
    url: 'https://www.mopepuzzle.hu/event.php?id=8',
    mapName: 'Hungary', latitude: 47.25230039280502, longitude: 19.620625084620837
  },

  {
    location: 'EU', eventDate: '2026-05', day: 30, month: 5, displayDays: "30th & 31st", name: "Nordic Championship 2026", rightName: "Nordic", organiser: 'nordic', locationDesc: "Køge, Denmark",
    venueName: "Køge Nord Sportcenter", url: 'https://www.instagram.com/p/DTKqhpniP7-/',
    mapName: 'Nordic', latitude: 55.49456102642153, longitude: 12.173489144316234
  },

  {
    location: 'EU', eventDate: '2026-05', day: 16, month: 5, displayDays: "16th & 17th", name: "Italy 2026", rightName: "Italy", organiser: 'italy', locationDesc: "Grassobbio, Italy",
    url: "https://www.associazioneitalianapuzzle.it/",
    mapName: 'Italy', latitude: 45.65656807424692, longitude: 9.721329510458649
  },

  {
    location: 'EU', eventDate: '2026-04', day: 11, month: 4, displayDays: "11th & 12th", name: "Norway 2026", rightName: "Norway", organiser: 'norway', locationDesc: "Jessheim, Norway",
    venueName: "Ev4 Arena", ticketUrl: 'https://arena360.no/Events/87156/11579',
    mapName: 'Norway', latitude: 60.14900153361661, longitude: 11.186137338720107
  },

  {
    location: 'EU', eventDate: '2026-03', day: 7, month: 3, displayDays: "7th", name: "Ireland 2026", organiser: 'ireland', locationDesc: "Dublin, Ireland", soldOut: true,
    ticketUrl: 'https://www.eventbrite.com/e/ijpa-speed-puzzling-competition-tickets-1743816434899',
    venueName: "ALSAA Sports Center, Toberbunny",
    mapName: 'Ireland', latitude: 53.42197374625566, longitude: -6.229056301215158
  },

  {
    location: 'EU', eventDate: '2026-05', day: 2, month: 5, displayDays: "2nd & 3rd", name: "Austria 2026", rightName: 'Austria', organiser: 'austria', locationDesc: "Wiener Neudorf, Austria",
    url: 'https://www.instagram.com/p/DQbQWPygs5D/',
    mapName: 'Austria', latitude: 48.085811006256776, longitude: 16.320303932840968
  },

  {
    location: 'EU', eventDate: '2026-05', day: 30, month: 5, displayDays: "30th & 31st", name: "Czech 2026", rightName: 'Czech', organiser: 'czech', locationDesc: "University of Ostrava, Ostrava",
    url: 'https://czjpa.cz/cjpc-2026/o-soutezi',
    mapName: 'Czech', latitude: 49.8314601169889, longitude: 18.292577374403173
  },

  {
    location: 'EU', eventDate: '2026-06', day: 5, month: 6, displayDays: "5th - 7th", name: "XV Campeonato de España", rightName: 'Spain', organiser: 'spain', locationDesc: "Guadalajara",
    url: 'https://aepuzz.es/calendario-concursos-aepuzz-2',
    mapName: 'Spain', latitude: 40.6362267158591, longitude: -3.170683568362838
  },

  {
    location: 'EU', eventDate: '2026-04', day: 25, month: 4, displayDays: "25th & 26th", name: "Portugal 2026", rightName: 'Portugal', organiser: 'portugal', locationDesc: "Alcobaça",
    url: 'https://appz.pt/',
    mapName: 'Portugal', latitude: 39.54982241754972, longitude: -8.97336374420184
  },

  {
    location: 'EU', eventDate: '2026-11', day: 27, month: 11, displayDays: "27th - 29th", name: "Europe 2026", rightName: 'Europe', organiser: 'ecjp', locationDesc: "Istanbul",
    url: 'https://ecjp.eu/',
    mapName: 'Euros', latitude: 41.01641523236803, longitude: 28.98241805589289
  },

  {
    location: 'EU', eventDate: '2026-09', day: 16, month: 9, displayDays: "16th - 20th", name: "Worlds 2026", rightName: 'Worlds', organiser: 'wjpf', locationDesc: "Guess! (TBC)",
    url: 'https://worldjigsawpuzzle.org/',
    mapName: 'WJPC', latitude: 41.64616223789908, longitude: -4.7296093377081885
  },

  {
    location: "AU", displayDays: "21st", day: 21, month: 3, name: 'Tasmania', rightName: 'Tas State', organiser: 'ajpa', venueName: 'Hobart City Hall', locationDesc: "Hobart, Tasmania", host: "AJPA",
    eventDate: '2026-03', url: 'https://australianjigsawpuzzle.org.au/event-info/tas-2026/', ticketUrl: 'https://events.humanitix.com/tasmania-state-jigsaw-2026',
    latitude: -42.88259863806437, longitude: 147.33115824215065, mapName: 'Tasmania State', mapUrl: 'https://maps.app.goo.gl/i4mC4pXoQZ7zFAiv6',
  },

  {
    location: "AU", displayDays: "30th", day: 20, month: 6, name: 'WA State Competition', rightName: 'WA State', organiser: 'ajpa', venueName: 'Belmont Oasis Leisure Centre', locationDesc: "Perth, Western Australia", host: "AJPA",
    eventDate: '2026-05', url: 'https://australianjigsawpuzzle.org.au/event-info/wa-2026/', mapUrl: 'https://maps.app.goo.gl/H4YRhZ5CaGf2oApx8', streamUrl: 'https://www.youtube.com/@AustralianJigsawPuzzle',
    latitude: -31.96018245630566, longitude: 115.93137768451369, mapName: 'WA State'
  },

  {
    location: "AU", displayDays: "19th", day: 20, month: 6, name: 'New South Wales State Competition', rightName: 'NSW State', organiser: 'ajpa', venueName: 'Marrickville Town Hall', locationDesc: "Sydney, NSW", host: "AJPA",
    eventDate: '2026-06', url: 'https://australianjigsawpuzzle.org.au/event-info/nsw-2026/', mapUrl: 'https://maps.app.goo.gl/JFQgfP8ZutDdYyHNA', streamUrl: 'https://www.youtube.com/@AustralianJigsawPuzzle',
    latitude: -33.909093364869925, longitude: 151.15414629804835, mapName: 'NSW State'
  },

  {
    location: "AU", displayDays: "11th", day: 11, month: 7, name: 'Queensland State Competition', rightName: 'QLD State', organiser: 'ajpa', locationDesc: "Brisbane, Queensland", host: "AJPA",
    eventDate: '2026-07', url: 'https://australianjigsawpuzzle.org.au/event-info/qld-2026/', mapUrl: 'https://maps.app.goo.gl/5QR992tzPWyvMGSh8', streamUrl: 'https://www.youtube.com/@AustralianJigsawPuzzle',
    latitude: -27.48131992783164, longitude: 153.01710958931915, mapName: 'Queensland State'
  },

  {
    location: "AU", displayDays: "15th", day: 15, month: 8, name: 'Victoria State Competition', rightName: 'Victoria State', organiser: 'ajpa', locationDesc: "Melbourne, Victoria", host: "AJPA",
    eventDate: '2026-08', url: 'https://australianjigsawpuzzle.org.au/', mapUrl: 'https://maps.app.goo.gl/26DrSuAmN15VRUNe6', streamUrl: 'https://www.youtube.com/@AustralianJigsawPuzzle',
    latitude: -37.85627047636926, longitude: 145.02968899175187, mapName: 'Victoria State'
  },

  {
    location: "AU", displayDays: "17th", day: 17, month: 10, name: 'ACT Competition', rightName: 'ACT "State"', organiser: 'ajpa', locationDesc: "Canberra, ACT", host: "AJPA",
    eventDate: '2026-10', url: 'https://australianjigsawpuzzle.org.au/event-info/act-2026/', mapUrl: 'https://maps.app.goo.gl/mVawsXqmkyD3ZAFY9', streamUrl: 'https://www.youtube.com/@AustralianJigsawPuzzle',
    latitude: -35.23131687357166, longitude: 149.14905521148657, mapName: 'ACT "State"'
  },

  /*
  
  Polish - 8-9.08.2026
    https://www.instagram.com/pspuzzlowe/?hl=en
  
  */



];