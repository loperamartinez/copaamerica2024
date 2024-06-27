import { PositionsTable } from "@/interfaces/positionsTable";
import { SimplePositionsTable } from "@/interfaces/simplePositionsTable";

export default async function getPositionsTable(
  group: string
): Promise<SimplePositionsTable[]> {
  const API_KEY: string = process.env.API_FOOTBAL_KEY as string;

  const info = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": API_KEY,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  let endPoint = `https://v3.football.api-sports.io/standings?league=9&season=2024`;
 
  try {
    const response = await fetch(endPoint, info);
    const data: PositionsTable = await response.json();

    const infoTable = data.response.flatMap((response) =>
      response.league.standings.flatMap((standing) =>
        standing.map((team) => ({
          rank: team.rank,
          id: team.team.id,
          name: team.team.name,
          logo: team.team.logo,
          points: team.points,
          goalsDiff: team.goalsDiff,
          group: team.group,
          played: team.all.played,
          win: team.all.win,
          draw: team.all.draw,
          lose: team.all.lose,
          goalsF: team.all.goals.for,
          goalsC: team.all.goals.against,
        }))
      )
    );

    const filteredTable = infoTable.filter((team) => team.group === group);

    return filteredTable;
  } catch (err) {
    console.error(`Error fetching standings`);
    throw new Error(`Error fetching standings: ${err}`);
  }
}
