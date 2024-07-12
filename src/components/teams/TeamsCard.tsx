import { SimpleTeams } from "@/interfaces/simpleTeams";
import Image from "next/image";
import Link from "next/link";
import { BiChevronRightCircle } from "react-icons/bi";

interface Props {
  team: SimpleTeams;
}

export const TeamsCard = ({ team }: Props) => {
  return (
    <div className="w-[350px] sm:w-full animate-flip-up bg-gradient-to-r from-[#002b6f] to-[#003a8c] relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
    <div className="flex items-center justify-center">
      <div className="w-20 h-20 sm:w-16 sm:h-16 flex-shrink-0">
        <div className="relative w-full h-full">
          <Image
            src={team.logo}
            layout="fill"
            objectFit="contain"
            alt={`Bandera de ${team.name}`}
          />
        </div>
      </div>
      <div className="flex-1 sm:w-full md:w-auto"> {/* Ajustando el ancho responsivamente */}
        <h1 className="text-white text-3xl xl:text-4xl font-bold">{team.name}</h1>
      </div>
      <div className="text-white">
        <Link href={`/teams/${team.id}`}>
          <BiChevronRightCircle className="w-[60px] xl:w-[80px] h-[60px] xl:h-[80px]" />
        </Link>
      </div>
    </div>
  </div>
  );
};
