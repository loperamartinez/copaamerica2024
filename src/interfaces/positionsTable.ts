export interface PositionsTable {
    get:        string;
    parameters: Parameters;
    errors:     any[];
    results:    number;
    paging:     Paging;
    response:   Response[];
}

export interface Paging {
    current: number;
    total:   number;
}

export interface Parameters {
    league: string;
    season: string;
}

export interface Response {
    league: League;
}

export interface League {
    id:        number;
    name:      string;
    country:   string;
    logo:      string;
    flag:      null;
    season:    number;
    standings: Array<Standing[]>;
}

export interface Standing {
    rank:        number;
    team:        Team;
    points:      number;
    goalsDiff:   number;
    group:       string;
    form:        null | string;
    status:      Status;
    description: null | string;
    all:         All;
    home:        All;
    away:        All;
    update:      Date;
}

export interface All {
    played: number | null;
    win:    number | null;
    draw:   number | null;
    lose:   number | null;
    goals:  Goals;
}

export interface Goals {
    for:     number | null;
    against: number | null;
}

export enum Status {
    Same = "same",
}

export interface Team {
    id:   number;
    name: string;
    logo: string;
}
