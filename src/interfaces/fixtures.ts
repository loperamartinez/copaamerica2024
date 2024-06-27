export interface Fixtures {
  get: string;
  parameters: Parameters;
  errors: any[];
  results: number;
  paging: Paging;
  response: Response[];
}

interface Response {
  fixture: Fixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
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
  home: null | number;
  away: null | number;
}

interface Teams {
  home: Home;
  away: Home;
}

interface Home {
  id: number;
  name: string;
  logo: string;
  winner: boolean | null;
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
  referee: null | string;
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
  elapsed: null | number;
}

interface Venue {
  id: null | number;
  name: string;
  city: string;
}

interface Periods {
  first: null | number;
  second: null | number;
}

interface Paging {
  current: number;
  total: number;
}

export interface Parameters {
    league: string;
    season: string;
}