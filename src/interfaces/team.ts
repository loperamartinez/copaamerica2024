export interface TeamInformation {
  get: string;
  parameters: Parameters;
  errors: any[];
  results: number;
  paging: Paging;
  response: Response;
}

interface Response {
  league: League;
  team: Team;
  form: string;
  fixtures: Fixtures;
  goals: Goals;
  biggest: Biggest;
  clean_sheet: Played;
  failed_to_score: Played;
  penalty: Penalty;
  lineups: Lineup[];
  cards: Cards;
}

interface Cards {
  yellow: Yellow;
  red: Red;
}

interface Red {
  '0-15': _015;
  '16-30': _015;
  '31-45': _015;
  '46-60': _015;
  '61-75': _015;
  '76-90': _015;
  '91-105': _015;
  '106-120': _015;
}

interface Yellow {
  '0-15': _3145;
  '16-30': _015;
  '31-45': _3145;
  '46-60': _015;
  '61-75': _3145;
  '76-90': _015;
  '91-105': _015;
  '106-120': _015;
}

interface Lineup {
  formation: string;
  played: number;
}

interface Penalty {
  scored: _3145;
  missed: _3145;
  total: number;
}

interface Biggest {
  streak: Streak;
  wins: Wins;
  loses: Loses;
  goals: Goals2;
}

interface Goals2 {
  for: For2;
  against: For2;
}

interface For2 {
  home: number;
  away: number;
}

interface Loses {
  home: null;
  away: null;
}

interface Wins {
  home: string;
  away: null;
}

interface Streak {
  wins: number;
  draws: number;
  loses: number;
}

interface Goals {
  for: For;
  against: Against;
}

interface Against {
  total: Played;
  average: Average;
  minute: Minute2;
}

interface Minute2 {
  '0-15': _015;
  '16-30': _015;
  '31-45': _015;
  '46-60': _015;
  '61-75': _3145;
  '76-90': _015;
  '91-105': _015;
  '106-120': _015;
}

interface For {
  total: Played;
  average: Average;
  minute: Minute;
}

interface Minute {
  '0-15': _015;
  '16-30': _015;
  '31-45': _3145;
  '46-60': _3145;
  '61-75': _3145;
  '76-90': _015;
  '91-105': _015;
  '106-120': _015;
}

interface _3145 {
  total: number;
  percentage: string;
}

interface _015 {
  total: null;
  percentage: null;
}

interface Average {
  home: string;
  away: string;
  total: string;
}

interface Fixtures {
  played: Played;
  wins: Played;
  draws: Played;
  loses: Played;
}

interface Played {
  home: number;
  away: number;
  total: number;
}

interface Team {
  id: number;
  name: string;
  logo: string;
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: null;
  season: number;
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