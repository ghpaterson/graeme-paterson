"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossedBones } from "react-icons/gi";

const NavLink = ({ path, text, closeMenu }) => (
  <Link href={path}>
    <li
      onClick={closeMenu}
      className={usePathname() === path ? "underline" : ""}
    >
      {text}
    </li>
  </Link>
);

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-20 py-4 md:px-10 bg-white">
      <div className="flex justify-between h-14 w-full items-center relative">
        <div id="logo">
          <Link href={"/"}>
            <h1 onClick={closeMenu} className="text-xl w-60 z-0 pt-2 md:px-4">
              GP
            </h1>
          </Link>
        </div>
        <button
          className="md:hidden focus:outline-none flex justify-end items-center px-4 text-2xl"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <GiCrossedBones /> : <GiHamburgerMenu />}
        </button>
        <nav
          id="navbar"
          className={`md:flex md:justify-end md:items-center absolute top-full right-0 md:py-0 w-full md:w-[800px] py-6 md:-mt-10 ${
            isMenuOpen ? "flex justify-center bg-white h-screen" : "hidden"
          } z-10`}
        >
          <ul className="bg-red-200 flex flex-col items-center w-screen gap-8 md:flex-row md:items-center md:justify-end text-2xl md:text-base md:py-0 py-10 md:px-6 cursor-pointer">
            <NavLink path="#" text="Projects" closeMenu={closeMenu} />
            <NavLink path="#" text="About" closeMenu={closeMenu} />
            <NavLink path="#" text="Contact" closeMenu={closeMenu} />
          </ul>
        </nav>
      </div>
    </header>
  );
}
