import Image from "next/image";
import Link from "next/link";
import React from "react";

const navItems = [
  { path: "/fixture", text: "Fixture" },
  { path: "/contact", text: "Contact" },
];

export const NavBar = () => {
  return (
    <nav className="bg-transparent  rounded shadow-lg">
    <div className="flex items-center justify-between text-white p-6 m-2 mx-28">
      <Link href={"/"}>
      <Image
        src="/img/logo-copa-america-horizontal.png"
        width={350}
        height={350}
        alt="Logo Copa América USA 2024"
        className="h-auto"
      />
      </Link>

      

      <div className="flex space-x-4">
        {navItems.map((navItem) => (
          <Link key={navItem.path} href={navItem.path} className="text-2xl hover:text-gray-300 transition-colors duration-200 hidden sm:flex">
            {navItem.text}
          </Link>
        ))}
      </div>
    </div>
  </nav>
  );
};
