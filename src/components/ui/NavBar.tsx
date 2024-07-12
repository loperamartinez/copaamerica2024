'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrMenu } from 'react-icons/gr';

const navItems = [
  { path: '/groups', text: 'Grupos' },
  { path: '/teams', text: 'Equipos' },
  { path: '/fixture', text: 'Fixture' },
  { path: '/scorers', text: 'Goleadores' },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent rounded shadow-lg">
    <div className="flex items-center justify-between text-white p-6 m-2 mx-4 sm:mx-36">

      <div className="flex items-center">
        <Link href={'/'}>
          <Image
            src="/img/logo-copa-america-horizontal.png"
            width={250}
            height={250}
            alt="Logo Copa América USA 2024"
            className="h-auto cursor-pointer"
          />
        </Link>
      </div>


      <div className="flex items-center justify-end">
        <button
          onClick={toggleMenu}
          className="text-2xl hover:text-gray-300 transition-colors duration-200 block sm:hidden"
        >
          <GrMenu size={40} />
        </button>
      </div>

   
      <div className={`sm:flex flex-col sm:flex-row sm:space-x-4 sm:items-center sm:justify-end ${isOpen ? 'block' : 'hidden'}`}>
        {navItems.map((navItem) => (
          <Link
            key={navItem.path}
            href={navItem.path}
            className="text-2xl hover:text-gray-300 transition-colors duration-200 block py-2 sm:py-0"
          >
            {navItem.text}
          </Link>
        ))}
      </div>
    </div>
  </nav>
  );
};
