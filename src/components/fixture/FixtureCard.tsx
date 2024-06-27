import { SimpleFixtures } from "@/interfaces/simpleFixtures";
import Image from "next/image";
import React from "react";

interface Props {
  fixtureData: SimpleFixtures;
}

export const FixtureCard = ({ fixtureData }: Props) => {
  return (
    <div className="animate-appearance-in max-w-sm mx-[-60px] sm:mx-0 rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-[#002b6f] to-[#003a8c] p-6 m-4 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-semibold text-white">
          {fixtureData.date}
        </span>
      </div>
      <hr className="bg-white my-4 border-gray-300" />
      <div className="flex justify-between items-center mb-4 space-x-2">
        <Image
          src={fixtureData.logoHome}
          width={35}
          height={35}
          alt="logo selección"
        />
        <div className="text-xl font-bold text-blue-600">
          {fixtureData.nameHome}
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-white">
            {fixtureData.goalsHome?.toString()}
          </span>
          <span className="text-white">-</span>
          <span className="text-white">
            {fixtureData.goalsAway?.toString()}
          </span>
        </div>
        <div className="text-xl font-bold text-[#FD2A2A]">
          {fixtureData.nameAway}
        </div>
        <Image
          src={fixtureData.logoAway}
          width={35}
          height={35}
          alt="logo selección"
        />
      </div>
      <hr className="bg-white my-4 border-gray-300" />

      <div className="mb-2">
        <span className="text-md font-medium text-white">
          {fixtureData.stadium}
        </span>
      </div>
      <div className="mb-2">
        <span className="text-md font-medium text-white">
          {fixtureData.city}
        </span>
      </div>
    </div>
  );
};
