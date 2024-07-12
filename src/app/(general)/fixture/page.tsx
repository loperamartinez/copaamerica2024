import getFixtures from "@/actions/getFixtures";
import { Fixture } from "@/components";

export default async function FixturePage() {

    const fixturesData = await getFixtures();

  return (
    <div className="mx-28">
      <h1 className="flex justify-center items-center text-4xl text-white font-bold py-4">Fixture</h1>
      <Fixture fixturesData={fixturesData}/>
    </div>
  );
}

//{JSON.stringify(fixtures)};
//