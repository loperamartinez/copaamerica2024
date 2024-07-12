import { SimplePlayerInformation } from '@/interfaces/simplePlayer'
import React from 'react'
import { PlayerInfoCard } from './PlayerInfoCard';

interface Props{
    playersInfo: SimplePlayerInformation[];
}

export const PlayerInfo = ({playersInfo}: Props) => {
  return (
    <div className='mx-16 flex flex-wrap gap-10 '>
  {playersInfo.map((playerInfo) => (
    <div key={playerInfo.id} className=" w-64 h-full">
      <PlayerInfoCard playerInfo={playerInfo}/>
    </div>
  ))}
</div>
  )
}
