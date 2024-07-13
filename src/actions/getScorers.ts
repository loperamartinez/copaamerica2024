import { Scorers } from "@/interfaces/scorers";
import { SimpleScorers } from "@/interfaces/simpleScorers";


export default async function getScorers(
):Promise<SimpleScorers[]> {
  const API_KEY: string = process.env.NEXT_PUBLIC_API_FOOTBAL_KEY as string;

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

  let endPoint = `https://v3.football.api-sports.io/players/topscorers?league=9&season=2024`;

  try {
    const response = await fetch(endPoint, info);
    const data: Scorers = await response.json();


    const dataScorers = data.response.map((response, index) => ({
        id: response.player.id,
        name: response.player.name,
        photo: response.player.photo,
        logo: response.statistics[0].team.logo,
        goals: response.statistics[0].goals.total,
        matches: response.statistics[0].games.appearences,
        rating: response.statistics[0].games.rating.toString(),
        index: index+1,
    }
    ))

    return dataScorers;

  } catch (err) {
    console.error(`Error fetching standings`);
    throw new Error(`Error fetching standings: ${err}`);
  }
}