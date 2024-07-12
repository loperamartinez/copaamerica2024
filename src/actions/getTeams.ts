import { SimpleTeams } from "@/interfaces/simpleTeams";
import { Teams } from "@/interfaces/teams";


export default async function getTeams(
): Promise<SimpleTeams[]> {
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

  let endPoint = `https://v3.football.api-sports.io/teams?league=9&season=2024`;

  try {
    const response = await fetch(endPoint, info);
    const data: Teams = await response.json();

    const nameTeam = data.response.map((response) => ({
        id: response.team.id,
        name: response.team.name,
        logo: response.team.logo,
    }))

    return nameTeam;

  } catch (err) {
    console.error(`Error fetching teams`);
    throw new Error(`Error fetching teams: ${err}`);
  }
}

