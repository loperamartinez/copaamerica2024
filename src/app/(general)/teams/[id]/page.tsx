import getPlayers from "@/actions/getPlayers";
import { PlayerInfo } from "@/components";
import { Coach } from "@/interfaces/coach";
import { TeamInformation } from "@/interfaces/team";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: number;
  };
}

const getTeamInformation = async (id: number): Promise<TeamInformation> => {
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

  let endPoint = `https://v3.football.api-sports.io/teams/statistics?league=9&season=2024&team=${id}`;

  try {
    const response = await fetch(endPoint, info);
    const team = await response.json();

    return team;
  } catch (error) {
    notFound();
  }
};

const getCoach = async(id: number): Promise<Coach | undefined> => {
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

  let endPoint = `https://v3.football.api-sports.io/coachs?team=${id}`;

  try {
    const response = await fetch(endPoint, info);
    const coach = await response.json();

    return coach;
  } catch (error) {
    //notFound();
  }
};

export default async function TeamPage({ params }: Props) {
  const players = await getPlayers(params.id);
  const team = await getTeamInformation(params.id);
  const coach = await getCoach(params.id);


  const logoTeam = team.response.team?.logo;
  const nameTeam = team.response.team?.name;
  const win = team.response.fixtures?.wins.total;
  const draw = team.response.fixtures?.draws.total;
  const lose = team.response.fixtures?.loses.total;
  const goalsf = team.response.goals?.for.total.total;
  const goalsc = team.response.goals?.against.total.total;

  const coachName = coach?.response[0]?.name;
  const coachImage = coach?.response[0]?.photo!;




  return (
    <div className="mx-0 sm:mx-8 md:mx-28 my-8 flex-1 sm:flex font-medium items-start justify-start h-screen w-full">
      <div className=" bg-gradient-to-r from-[#002b6f] to-[#003a8c] rounded-2xl px-8 py-6 shadow-lg animate-flip-down">
        <div className="mt-6 w-fit mx-auto ">
          <Image
            src={logoTeam}
            width={100}
            height={100}
            alt={`logo pais`}
            className="w-full"
          />
        </div>

        <div className="mt-8">
          <h2 className="text-white text-center font-bold text-4xl tracking-wide">
            {nameTeam}
          </h2>
        </div>
        <hr className="bg-white my-4 border-gray-300" />

        <p className="text-[#FD2A2A] text-2xl font-semibold mt-2.5 py-2">
          Partidos
        </p>

        <p className="text-white text-xl font-semibold mt-2.5">
          Ganados: {win}
        </p>
        <p className="text-white text-xl font-semibold mt-2.5">
          Empatados: {draw}
        </p>
        <p className="text-white text-xl font-semibold mt-2.5">
          Perdidos: {lose}
        </p>

        <p className="text-[#FD2A2A] text-2xl font-semibold mt-2.5 py-2">
          Goles
        </p>

        <p className="text-white text-xl font-semibold mt-2.5">
          A favor: {goalsf}
        </p>

        <p className="text-white text-xl font-semibold mt-2.5">
          En contra: {goalsc}
        </p>

        <p className="text-[#FD2A2A] text-2xl font-semibold mt-2.5 py-2">
          DT
        </p>
        <Image src={coachImage} width={180} height={180} alt="xd" />
        <p className="text-white text-xl font-semibold mt-2.5">
          
          {coachName}
        </p>

      </div>

      <div className="py-8 sm:py-0">
      <PlayerInfo playersInfo={players} />
      </div>
    </div>
  );
}
