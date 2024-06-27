import getFixtures from "@/actions/getFixtures";
import { Fixture } from "@/components";

export default async function FixturePage() {

    const fixturesData = await getFixtures();

  return (
    <div className="mx-28">
        <Fixture fixturesData={fixturesData}/>
    </div>
  );
}

//        {JSON.stringify(fixtures)};