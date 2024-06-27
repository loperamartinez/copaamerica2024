"use client";

import { SimplePositionsTable } from "@/interfaces/simplePositionsTable";
import { TeamInfo } from "./TeamInfo";
import { allFont } from "@/config/fonts";

interface Props {
  standingsData: SimplePositionsTable[];
}

export const PositionsTable = ({ standingsData }: Props) => {
  return (
<div className={`${allFont.className} mx-[-60px] sm:mx-10`}>
  <div className="overflow-x-auto">
    <table className="min-w-full bg-[#002b6f] shadow-md rounded-lg overflow-hidden sm:w-full">
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

/*
<table className=" bg-[#08184A] rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4"></th>
            <th className="py-2 px-4"></th>
            <th className="py-2 px-4">Equipo</th>
            <th className="py-2 px-4">PJ</th>
            <th className="py-2 px-4">G</th>
            <th className="py-2 px-4">E</th>
            <th className="py-2 px-4">P</th>
            <th className="py-2 px-4">GF</th>
            <th className="py-2 px-4">GC</th>
            <th className="py-2 px-4">DG</th>
            <th className="py-2 px-4">Pts</th>
          </tr>
        </thead>
        <tbody>
          {standingsData.map((standing) => (
            <TeamInfo key={standing.id} standing={standing} />
          ))}
        </tbody>
      </table>
      */
