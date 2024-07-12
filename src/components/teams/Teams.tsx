import { SimpleTeams } from '@/interfaces/simpleTeams'
import React from 'react'
import { TeamsCard } from './TeamsCard';

interface Props{
    teams: SimpleTeams[];
}

export const Teams = ({teams}: Props) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
        {
            teams.map((team) => (
                <TeamsCard key={team.id} team={team}/>
            ))
        }
    </div>
  )
}
