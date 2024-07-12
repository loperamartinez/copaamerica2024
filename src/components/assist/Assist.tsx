import React from 'react'
import { AssistInfo } from './AssistInfo'
import { SimpleAssist } from '@/interfaces/simpleAssist'

interface Props{
    assists: SimpleAssist[];  
}

export const Assist = ({assists}:Props) => {
  return (
    <div className="overflow-x-auto w-[730px] mx-[-60px] sm:mx-10">
    <table className="min-w-full bg-gradient-to-r from-[#002b6f] to-[#003a8c] shadow-md rounded-lg overflow-hidden sm:w-full">
      <thead className="bg-white text-[#003a8c]">
        <tr className="w-full text-center">
          <th className="py-3 px-6"></th>
          <th className="py-3 px-6 hidden sm:table-cell"></th>
          <th className="py-3 px-6"></th>
          <th className="py-3 px-6">Jugador</th>
          <th className="py-3 px-6">Asistencias</th>
          <th className="py-3 px-6">PJ</th>
          <th className="py-3 px-6 hidden sm:table-cell">Calificación</th>
        </tr>
      </thead>
      <tbody className=" text-white text-center">
        {
            assists.map((assist, index) => (
                <AssistInfo assist={assist} key={assist.id}/>

            ))
        }
      </tbody>
    </table>
  </div>
  )
}
