export interface MatchInformation {
  get: string;
  parameters: Parameters;
  errors: any[];
  results: number;
  paging: Paging;
  response: Response[];
}

export interface Response {
  fixture: Fixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
  events: Event[];
  lineups: Lineup[];
  statistics: Statistic2[];
  players: Player6[];
}

interface Player6 {
  team: Team3;
  players: Player5[];
}

interface Player5 {
  player: Coach;
  statistics: Statistic3[];
}

interface Statistic3 {
  games: Games;
  offsides: null | number;
  shots: Shots;
  goals: Goals2;
  passes: Passes;
  tackles: Tackles;
  duels: Duels;
  dribbles: Dribbles;
  fouls: Fouls;
  cards: Cards;
  penalty: Penalty;
}

interface Penalty {
  won: null;
  commited: null;
  scored: number;
  missed: number;
  saved: null | number;
}

interface Cards {
  yellow: number;
  red: number;
}

interface Fouls {
  drawn: null | number;
  committed: null | number;
}

interface Dribbles {
  attempts: null | number;
  success: null | number;
  past: null | number;
}

interface Duels {
  total: null | number;
  won: null | number;
}

interface Tackles {
  total: null | number;
  blocks: null | number;
  interceptions: null | number;
}

interface Passes {
  total: null | number;
  key: null | number;
  accuracy: null | string;
}

interface Goals2 {
  total: null;
  conceded: number;
  assists: null | number;
  saves: null | number;
}

interface Shots {
  total: null | number;
  on: null | number;
}

interface Games {
  minutes: null | number;
  number: number;
  position: string;
  rating: null | string;
  captain: boolean;
  substitute: boolean;
}

interface Team3 {
  id: number;
  name: string;
  logo: string;
  update: string;
}

interface Statistic2 {
  team: Team;
  statistics: Statistic[];
}

interface Statistic {
  type: string;
  value: null | number | string;
}

interface Lineup {
  team: Team2;
  coach: Coach;
  formation: string;
  startXI: StartXI[];
  substitutes: Substitute[];
}

interface Substitute {
  player: Player4;
}

interface Player4 {
  id: number;
  name: string;
  number: number;
  pos: string;
  grid: null;
}

interface StartXI {
  player: Player3;
}

interface Player3 {
  id: number;
  name: string;
  number: number;
  pos: string;
  grid: string;
}

interface Coach {
  id: number;
  name: string;
  photo: string;
}

interface Team2 {
  id: number;
  name: string;
  logo: string;
  colors: Colors;
}

interface Colors {
  player: Player2;
  goalkeeper: Player2;
}

interface Player2 {
  primary: string;
  number: string;
  border: string;
}

interface Event {
  time: Time;
  team: Team;
  player: Player;
  assist: Assist;
  type: string;
  detail: string;
  comments: null | string;
}

interface Assist {
  id: null | number;
  name: null | string;
}

interface Player {
  id: number;
  name: string;
}

interface Team {
  id: number;
  name: string;
  logo: string;
}

interface Time {
  elapsed: number;
  extra: null;
}

interface Score {
  halftime: Goals;
  fulltime: Goals;
  extratime: Extratime;
  penalty: Extratime;
}

interface Extratime {
  home: null;
  away: null;
}

interface Goals {
  home: number;
  away: number;
}

export interface Teams {
  home: Home;
  away: Home;
}

export interface Home {
  id: number;
  name: string;
  logo: string;
  winner: null;
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: null;
  season: number;
  round: string;
}

interface Fixture {
  id: number;
  referee: string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
}

interface Status {
  long: string;
  short: string;
  elapsed: number;
}

interface Venue {
  id: null;
  name: string;
  city: string;
}

interface Periods {
  first: number;
  second: number;
}

interface Paging {
  current: number;
  total: number;
}

interface Parameters {
  id: string;
}