import getAssist from "@/actions/getAssist";
import getScorers from "@/actions/getScorers";
import { Assist, Scorers } from "@/components";
import { allFont } from "@/config/fonts";
import Image from "next/image";

export default async function ScorersPage() {
  const scorers = await getScorers();
  const assists = await getAssist();

  return (
    <>
    <h1 className="flex justify-center items-center text-4xl text-white font-bold py-4 text-center">Top goleadores y asistidores</h1>
      <div className={`${allFont.className} mx-28 my-8 animate-flip-down flex flex-wrap gap-10`}>
        <Scorers scorers={scorers} />
        <Assist assists={assists}/>
      </div>
    </>
  );
}
