import { PlayerInformation } from "@/interfaces/player";
import { SimplePlayerInformation } from "@/interfaces/simplePlayer";


export default async function getPlayers(id: number
): Promise<SimplePlayerInformation[]> {
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

  let endPoint = `https://v3.football.api-sports.io/players?league=9&season=2024&team=${id} `;

  try {
    const response = await fetch(endPoint, info);
    const data: PlayerInformation = await response.json();


    const dataPlayer = data.response.map((response) => ({
        id: response.player.id,
        firstName: response.player.firstname.split(' ')[0],
        lastname: response.player.lastname.split(' ')[0].split('-')[0],
        photo: response.player.photo,
        rating: Number(response.statistics[0].games.rating) ?? 0,
    }))

    return dataPlayer;

  } catch (err) {
    console.error(`Error fetching standings`);
    throw new Error(`Error fetching standings: ${err}`);
  }
}
