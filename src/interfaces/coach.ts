export interface Coach {
  get: string;
  parameters: Parameters;
  errors: any[];
  results: number;
  paging: Paging;
  response: Response[];
}

interface Response {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: Birth;
  nationality: string;
  height: string;
  weight: null | string;
  photo: string;
  team: Team;
  career: Career[];
}

interface Career {
  team: Team;
  start: string;
  end: null | string | string;
}

interface Team {
  id: number;
  name: string;
  logo: string;
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
  team: string;
}