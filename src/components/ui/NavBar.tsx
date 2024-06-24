import Image from 'next/image'
import React from 'react'

export const NavBar = () => {
  return (
    
    <nav className='flex text-white bg-transparent p-6 m-2 mx-28 rounded'>
    <Image 
    src={'/img/logo-copa-america-horizontal.png'}
    width={350}
    height={350}
    alt='Logo Copa América USA 2024'/>
    </nav>
    
  )
}
