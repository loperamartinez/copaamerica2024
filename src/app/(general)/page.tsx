import getTeams from "@/actions/getTeams";
import Image from "next/image";
import { FaCrown, FaTrophy } from "react-icons/fa";

export default async function Home() {
 
  const teams = await getTeams();

  if (!teams) {
    return <div>Cargando equipos...</div>;
  }

  return (
    <main className="mx-[-1px] sm:mx-10">
         <div className="p-8 min-h-screen text-white animate-fade-right animate-once">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center ">Camino a la Copa</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Cuartos de Final */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center text-white">Cuartos de Final</h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-[#002b6f] to-[#003a8c] p-4 rounded shadow text-2xl">
                <div className="grid grid-cols-2">
                  <div className="flex items-center">
                  <Image src={teams[5]?.logo} width={50} height={50} alt="xd"/>
                  <p className="mx-2">Argentina</p>
                  </div>
                  <p className="text-right">1 (4)</p>
                  <div className="flex items-center">
                  <Image src={teams[11]?.logo} width={50} height={50} alt="xd" />
                  <p className="mx-2">Ecuador</p>
                  </div>
                  <p className="text-right">1 (2)</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#002b6f] to-[#003a8c] p-4 rounded shadow text-2xl">
                <div className="grid grid-cols-2">
                <div className="flex items-center">
                  <Image src={teams[8]?.logo} width={50} height={50} alt="xd" />
                  <p className="mx-2">Venezuela</p>
                  </div>
                  <p className="text-right">1 (3)</p>
                  <div className="flex items-center">
                  <Image src={teams[15]?.logo} width={50} height={50} alt="xd" />
                  <p className="mx-2">Canadá</p>
                  </div>
                  <p className="text-right">1 (4)</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#002b6f] to-[#003a8c] p-4 rounded shadow text-2xl">
                <div className="grid grid-cols-2">
                <div className="flex items-center">
                  <Image src={teams[1]?.logo} width={50} height={50} alt="xd"  className="py-2" />
                  <p className="mx-2">Uruguay</p>
                  </div>
                  <p className="text-right">0 (4)</p>
                  <div className="flex items-center">
                  <Image src={teams[0]?.logo} width={50} height={50} alt="xd" />
                  <p className="mx-2">Brasil</p>
                  </div>
                  <p className="text-right">0 (2)</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#002b6f] to-[#003a8c] p-4 rounded shadow text-2xl">
                <div className="grid grid-cols-2">
                <div className="flex items-center">
                  <Image src={teams[2]?.logo} width={50} height={50} alt="xd"/>
                  <p className="mx-2">Colombia</p>
                  </div>
                  <p className="text-right">5</p>
                  <div className="flex items-center">
                  <Image src={teams[3]?.logo} width={50} height={50} alt="xd"/>
                  <p className="mx-2">Panamá</p>
                  </div>
                  <p className="text-right">0</p>
                </div>
              </div>
            </div>
          </div>
          {/* Semifinales */}
          <div className="text-xl">
            <h2 className="text-2xl font-semibold mb-4 text-center">Semifinales</h2>
            <div className="space-y-12 md:mt-32">
              <div className="bg-gradient-to-r from-[#002b6f] to-[#003a8c] p-4 rounded shadow text-2xl">
                <div className="grid grid-cols-2">
                <div className="flex items-center">
                  <Image src={teams[5]?.logo} width={50} height={50} alt="xd"/>
                  <p className="mx-2">Argentina</p>
                  </div>
                  <p className="text-right">2</p>
                  <div className="flex items-center">
                  <Image src={teams[15]?.logo} width={50} height={50} alt="xd"/>
                  <p className="mx-2">Canadá</p>
                  </div>
                  <p className="text-right">0</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#002b6f] to-[#003a8c] p-4 rounded shadow text-2xl">
                <div className="grid grid-cols-2">
                <div className="flex items-center">
                  <Image src={teams[1]?.logo} width={50} height={50} alt="xd"/>
                  <p className="mx-2">Uruguay</p>
                  </div>
                  <p className="text-right">0</p>
                  <div className="flex items-center">
                  <Image src={teams[2]?.logo} width={50} height={50} alt="xd"/>
                  <p className="mx-2">Colombia</p>
                  </div>
                  <p className="text-right">1</p>
                </div>
              </div>
            </div>
          </div>
          {/* Final */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center">Final</h2>
            <div className="space-y-32 md:mt-52">
              <div className="bg-gradient-to-r from-[#002b6f] to-[#003a8c] p-4 rounded shadow text-2xl">
                <div className="grid grid-cols-2">
                <div className="flex items-center">
                  <Image src={teams[5]?.logo} width={50} height={50} alt="xd"/>
                  <p className="mx-2">
                    Argentina</p>
                    <FaTrophy size={60} className="mx-2"/>
                  </div>
                  <p className="text-right">1</p>
                  <div className="flex items-center">
                  <Image src={teams[2]?.logo} width={50} height={50} alt="xd"/>
                  <p className="mx-2">Colombia</p>
                  </div>
                  <p className="text-right">0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Tercer y Cuarto Puesto */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4 text-center">Tercer y Cuarto Puesto</h2>
          <div className="bg-gradient-to-r from-[#002b6f] to-[#003a8c] p-2 rounded shadow w-3/4 mx-auto md:w-1/2">
            <div className="grid grid-cols-2 text-xl">
            <div className="flex items-center">
                  <Image src={teams[15]?.logo} width={50} height={50} alt="xd" className="py-2"/>
                  <p className="mx-2">Canadá</p>
                  </div>
              <p className="text-right">2 (3)</p>
              <div className="flex items-center">
                  <Image src={teams[1]?.logo} width={50} height={50} alt="xd"/>
                  <p className="mx-2">Uruguay</p>
                  </div>
              <p className="text-right">2 (4)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}

