import { SimplePlayerInformation } from "@/interfaces/simplePlayer";
import Image from "next/image";
import React from "react";

interface Props {
  playerInfo: SimplePlayerInformation;
}

export const PlayerInfoCard = ({ playerInfo }: Props) => {
  return (
    <div className="bg-gradient-to-r from-[#002b6f] to-[#003a8c] animate-fade w-64  animate-once max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col items-center justify-center text-center">
      <div className="">
        <Image
          src={playerInfo.photo}
          width={130}
          height={130}
          alt={`${playerInfo.photo}`}
          className="my-5"
        />
        <p className="text-white text-5xl font-bold mt-2.5">
          {(playerInfo.rating)!.toString().length > 5
          ? `${(playerInfo.rating)?.toString().slice(0,3)}`
          : `${playerInfo.rating}`}
        </p>
      </div>
      <div className="px-6 py-4 w-full bg-white ">
        <div className="font-bold text-lg mb-2 text-[#003a8c]">
          {playerInfo.firstName.length + playerInfo.lastname.length > 15
            ? `${playerInfo.firstName} ${playerInfo.lastname.slice(0, 8)}...`
            : `${playerInfo.firstName} ${playerInfo.lastname}`}
        </div>
      </div>
    </div>
  );
};
