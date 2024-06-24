import getPositionsTable from "@/actions/getPositionsTable";
import { PositionsTable } from "@/components";

export default async function Home() {
  const groups = ["Group A", "Group B", "Group C", "Group D"];
  const standingsDataPromises = groups.map((group) => getPositionsTable(group));

  const standingsDataArray = await Promise.all(standingsDataPromises);

  const groupedStandingsData = groups.map((group, index) => ({
    groupName: group,
    standingsData: standingsDataArray[index],
  }));

  return (
    <main className="mx-28">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {groupedStandingsData.map(({ groupName, standingsData }) => (
          <div key={groupName} className="mt-8">
            <h2 className="text-white text-xl font-bold py-2 text-center">{groupName}</h2>
            <PositionsTable standingsData={standingsData} />
          </div>
        ))}
      </div>
    </main>
  );
}

