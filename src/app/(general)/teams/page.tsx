import getTeams from "@/actions/getTeams";
import { Teams } from "@/components";

export default async function TeamsPage() {

    const teams = await getTeams();
  return (
    <div className="mx-12 sm:mx-28 my-8 flex flex-col">
      <h1 className="flex justify-center items-center text-4xl text-white font-bold py-4">Equipos</h1>
      <Teams teams={teams} />
    </div>
  );
}