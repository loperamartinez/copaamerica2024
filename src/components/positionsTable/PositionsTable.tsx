"use client";

import { SimplePositionsTable } from "@/interfaces/simplePositionsTable";
import { TeamInfo } from "./TeamInfo";
import { allFont } from "@/config/fonts";

interface Props {
  standingsData: SimplePositionsTable[];
}

export const PositionsTable = ({ standingsData }: Props) => {
  return (
<div className={`${allFont.className} mx-[-60px] sm:mx-10 animate-flip-down`}>
  <div className="overflow-x-auto">
    <table className="min-w-full bg-gradient-to-r from-[#002b6f] to-[#003a8c] shadow-md rounded-lg overflow-hidden sm:w-full">
      <thead className="bg-[#FD2A2A] text-white">
        <tr className="w-full ">
          <th className="py-3 px-6 text-left"></th>
          <th className="py-3 px-6 text-left hidden md:table-cell"></th>
          <th className="py-3 px-6 text-left">Equipo</th>
          <th className="py-3 px-6 text-left">PJ</th>
          <th className="py-3 px-6 text-left hidden sm:table-cell">G</th>
          <th className="py-3 px-6 text-left hidden sm:table-cell">E</th>
          <th className="py-3 px-6 text-left hidden sm:table-cell">P</th>
          <th className="py-3 px-6 text-left hidden sm:table-cell">GF</th>
          <th className="py-3 px-6 text-left hidden sm:table-cell">GC</th>
          <th className="py-3 px-6 text-left hidden sm:table-cell">DF</th>
          <th className="py-3 px-6 text-left">PTS</th>
        </tr>
      </thead>
      <tbody className=" text-white ">
        {standingsData.map((standing, index) => (
          <TeamInfo key={standing.id} standing={standing} isLast={index === standingsData.length - 1} />
        ))}
      </tbody>
    </table>
  </div>
</div>
  );
};


