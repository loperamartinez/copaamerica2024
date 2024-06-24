import React from "react";
import Image from "next/image";
import { SimplePositionsTable } from "@/interfaces/simplePositionsTable";

interface Props {
  standing: SimplePositionsTable;
  isLast: boolean;
}

export const TeamInfo = ({ standing, isLast }: Props) => {

  const rowClasses = `text-white text-center animate-appearance-in ${!isLast ? 'border-b border-white' : ''}`;
    return (
    <tr className={`{${rowClasses}}`} >
      <td className="px-3 py-4 ">{standing.rank}</td>
      <td className="px-3 py-4 hidden sm:table-cell">
        <Image src={standing.logo} width={35} height={35} alt="flag team" />
      </td>
      <td className="px-3 py-4 ">{standing.name}</td>
      <td className="px-3 py-4 ">{standing.played}</td>
      <td className="px-3 py-4 hidden sm:table-cell">{standing.win}</td>
      <td className="px-3 py-4 hidden sm:table-cell">{standing.draw}</td>
      <td className="px-3 py-4 hidden sm:table-cell">{standing.lose}</td>
      <td className="px-3 py-4 hidden sm:table-cell">{standing.goalsF}</td>
      <td className="px-3 py-4 hidden sm:table-cell">{standing.goalsC}</td>
      <td className="px-3 py-4 hidden sm:table-cell">{standing.goalsDiff}</td>
      <td className="px-3 py-4 ">{standing.points}</td>
    </tr>
  );
};

