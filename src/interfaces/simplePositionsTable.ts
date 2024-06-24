export interface SimplePositionsTable{
    rank: number;
    id:   number;
    name: string;
    logo: string;
    points:      number;
    goalsDiff:   number;
    group:       string;
    played: number | null;
    win:    number | null;
    draw:   number | null;
    lose:   number | null;
    goalsF:     number | null;
    goalsC: number | null;
}