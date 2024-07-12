import { Assist } from "@/interfaces/assist";
import { SimpleAssist } from "@/interfaces/simpleAssist";


export default async function getAssist(
):Promise<SimpleAssist[]> {
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

  let endPoint = `https://v3.football.api-sports.io/players/topassists?league=9&season=2024`;

  try {
    const response = await fetch(endPoint, info);
    const data: Assist = await response.json();


    const dataAssist= data.response.map((response, index) => ({
        id: response.player.id,
        name: response.player.name,
        photo: response.player.photo,
        logo: response.statistics[0].team.logo,
        assist: response.statistics[0].goals.assists,
        matches: response.statistics[0].games.appearences,
        rating: response.statistics[0].games.rating.toString(),
        index: index+1,
    }
    ))

    return dataAssist;

  } catch (err) {
    console.error(`Error fetching standings`);
    throw new Error(`Error fetching standings: ${err}`);
  }
}