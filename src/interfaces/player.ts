export interface PlayerInformation {
  get: string;
  parameters: Parameters;
  errors: any[];
  results: number;
  paging: Paging;
  response: Response[];
}

interface Response {
  player: Player;
  statistics: Statistic[];
}

interface Statistic {
  team: Team;
  league: League;
  games: Games;
  substitutes: Substitutes;
  shots: Shots;
  goals: Goals;
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
  saved: null;
}

interface Cards {
  yellow: number;
  yellowred: number;
  red: number;
}

interface Fouls {
  drawn: null | number;
  committed: null | number;
}

interface Dribbles {
  attempts: null | number;
  success: null | number;
  past: null;
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
  accuracy: null | number;
}

interface Goals {
  total: number;
  conceded: number;
  assists: null | number;
  saves: null;
}

interface Shots {
  total: null | number;
  on: null | number;
}

interface Substitutes {
  in: number;
  out: number;
  bench: number;
}

interface Games {
  appearences: number;
  lineups: number;
  minutes: number;
  number: null;
  position: string;
  rating: null | string;
  captain: boolean;
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: null;
  season: number;
}

interface Team {
  id: number;
  name: string;
  logo: string;
}

interface Player {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: Birth;
  nationality: string;
  height: string;
  weight: string;
  injured: boolean;
  photo: string;
}

interface Birth {
  date: string;
  place: string;
  country: string;
}

interface Paging {
  current: number;
  total: number;
}

interface Parameters {
  league: string;
  season: string;
  team: string;
}