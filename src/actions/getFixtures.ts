import {Fixtures} from "@/interfaces/fixtures"
import { SimpleFixtures } from "@/interfaces/simpleFixtures";

export default async function getFixtures(
): Promise<SimpleFixtures[]> {
  const API_KEY: string = process.env.API_FOOTBAL_KEY as string;

  const info = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": API_KEY,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  let endPoint = `https://v3.football.api-sports.io/fixtures?league=9&season=2024`;
 
  try {
    const response = await fetch(endPoint, info);
    const data: Fixtures = await response.json();
    
    const dataStadium = data.response.map((response) => ({
        id: response.fixture.id.toString(),
        date: new Date(response.fixture.date).toLocaleDateString(),
        stadium: response.fixture.venue.name,
        city: response.fixture.venue.city,
        nameHome: response.teams.home.name,
        nameAway: response.teams.away.name,
        logoHome: response.teams.home.logo,
        logoAway: response.teams.away.logo,
        goalsHome: response.goals.home,
        goalsAway: response.goals.away,    
    }))

    dataStadium.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return dataStadium;
    

  } catch (err) {
    console.error(`Error fetching standings`);
    throw new Error(`Error fetching standings: ${err}`);
  }
}

