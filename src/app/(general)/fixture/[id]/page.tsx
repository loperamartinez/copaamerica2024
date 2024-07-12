import { allFont } from "@/config/fonts";
import { MatchInformation } from "@/interfaces/matchInformation";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const getMatchInformation = async (id: string): Promise<MatchInformation> => {
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

  let endPoint = `https://v3.football.api-sports.io/fixtures?id=${encodeURIComponent(
    id
  )}`;

  try {
    const response = await fetch(endPoint, info);
    const match = await response.json();

    return match;
  } catch (error) {
    notFound();
  }
};

export default async function MatchInfoPage({ params }: Props) {
  const idMatch = params.id.replace("%3E", "");
  const match = await getMatchInformation(idMatch);

  const nameHome = match.response[0]?.teams.home.name;
  const nameAway = match.response[0]?.teams.away.name;
  const logoHome = match.response[0]?.teams.home.logo;
  const logoAway = match.response[0]?.teams.away.logo;
  const goalsHome = match.response[0]?.goals.home;
  const goalsAway = match.response[0]?.goals.away;

  const itemsStats = [2, 0, 9, 13, 6, 10, 11, 7];
  const localStatistics: any = [];

  itemsStats.forEach((item) => {
    const valueLocal =
      match.response[0]?.statistics[0]?.statistics[item]?.value ?? 0;
    localStatistics.push(valueLocal);
  });

  const awayStatistics: any = [];

  itemsStats.forEach((item) => {
    const valueAway =
      match.response[0]?.statistics[1]?.statistics[item]?.value ?? 0;
    awayStatistics.push(valueAway);
  });

  const stats = [
    "Remates",
    "Remates al arco",
    "Posesión",
    "Pases",
    "Faltas",
    "Tarjetas amarillas",
    "Tarjetas rojas",
    "Tiros de esquina",
  ];
  const statsItem: any = [];

  stats.forEach((stat) => {
    statsItem.push(stat);
  });

  const playersHome: any = [];

  for (
    let i = 0;
    i < Math.min(match.response[0]?.players[0]?.players.length, 11);
    i++
  ) {
    const playerNameHome =
      match.response[0]?.players[0].players[i]?.player.name;
    if (playerNameHome) {
      playersHome.push(playerNameHome);
    }
  }

  const playersAway: any = [];

  for (
    let i = 0;
    i < Math.min(match.response[0]?.players[1]?.players.length, 11);
    i++
  ) {
    const playerNameAway =
      match.response[0]?.players[1].players[i]?.player.name;
    if (playerNameAway) {
      playersAway.push(playerNameAway);
    }
  }

  return (
    <div
      className={`${allFont.className} mx-4 sm:mx-28 my-8 animate-flip-down grid grid-cols-1 sm:grid-cols-2 gap-4`}
    >
      <div className="overflow-auto ">
        <table className="bg-gradient-to-r from-[#002b6f] to-[#003a8c] shadow-md  w-full max-w-3xl rounded-xl">
          <thead className="bg-white ">
            <tr className="w-full">
              <th className="py-2 px-2 sm:px-4 text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-12">
                  <Image
                    src={logoHome}
                    width={60}
                    height={60}
                    alt="Local logo"
                  />
                  <h2 className="text-lg sm:text-3xl hidden 2xl:table-cell text-[#003a8c]">
                    {nameHome}
                  </h2>
                </div>
              </th>
              <th className="py-2 px-4 sm:px-6">
                <div>
                  <span className="text-3xl">
                    {goalsHome} - {goalsAway}
                  </span>
                </div>
              </th>
              <th className="py-2 px-2 sm:px-4 text-right">
                <div className="flex items-center justify-center lg:justify-end space-x-4 sm:space-x-12">
                  <h2 className="text-lg sm:text-3xl hidden 2xl:table-cell text-[#FD2A2A]">
                    {nameAway}
                  </h2>
                  <Image
                    src={logoAway}
                    width={60}
                    height={60}
                    alt="Away logo"
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-white text-xl text-center">
            {statsItem.map((value: any, index: number) => (
              <tr key={`local-${index}`}>
                <th className="px-4 py-4 font-normal">
                  {localStatistics[index]}
                </th>
                <th className="px-4 py-4 font-normal">{value}</th>
                <th className="px-4 py-4 font-normal">
                  {awayStatistics[index]}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-auto ">
        <table className="bg-gradient-to-r from-[#002b6f] to-[#003a8c] shadow-md  w-full max-w-3xl rounded-xl">
          <thead className="bg-white ">
            <tr>
              <th
                className="py-2 px-2 sm:px-4 text-center bg-[#FD2A2A]"
                colSpan={2}
              >
                <span className=" text-white bg- text-xl font-bold">
                  ALINEACIONES
                </span>
              </th>
            </tr>
            <tr className="w-full">
              <th className="py-2 px-2 sm:px-4 text-center">
                <div className="flex items-center justify-center  space-x-4 sm:space-x-12">
                  <Image
                    src={logoHome}
                    width={60}
                    height={60}
                    alt="Local logo"
                  />
                </div>
              </th>

              <th className="py-2 px-2 sm:px-4 text-right">
                <div className="flex items-center justify-center space-x-4 sm:space-x-12">
                  <Image
                    src={logoAway}
                    width={60}
                    height={60}
                    alt="Away logo"
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-white text-xl text-center">
            {playersHome.map((player: any, index: any) => (
              <tr key={index}>
                <td className="px-4 py-3 font-normal">{player}</td>
                <td className="px-4 py-3 font-normal">{playersAway[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
