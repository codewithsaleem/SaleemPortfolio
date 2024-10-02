import { Bars3Icon } from "@heroicons/react/24/solid";
import React from "react";
import Link from 'next/link';

interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-full">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
         <Link href="/">WEB<span className="text-yellow-400">DEV</span> </Link>
        </h1>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="nav-link">HOME</Link>
          <Link href="#services" className="nav-link">SERVICES</Link>
          <Link href="#about" className="nav-link">ABOUT</Link>
          <Link href="#projects" className="nav-link">PROJECT</Link>
          <Link href="#blog" className="nav-link">BLOG</Link>
          <Link href="#contact" className="nav-link">CONTACT</Link>
        </div>
        <div onClick={openNav} className="md:hidden">
          <Bars3Icon className="w-8 h-8 cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
