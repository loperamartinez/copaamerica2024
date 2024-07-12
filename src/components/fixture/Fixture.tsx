import { SimpleFixtures } from '@/interfaces/simpleFixtures';
import React from 'react'
import { FixtureCard } from './FixtureCard';

interface Props {
    fixturesData: SimpleFixtures[];
  }

export const Fixture = ({fixturesData}: Props) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {
            fixturesData.map((fixtureData) => (
                <FixtureCard key={fixtureData.id} fixtureData={fixtureData}/>

            ))
        }
    </div>
  )
}
