"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossedBones } from "react-icons/gi";

const scrollToSection = (id) => {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

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
    <header className="sticky top-0 z-20 py-4 md:px-6 bg-bone">
      <div className="flex justify-between h-14 w-full items-center relative">
        <div id="logo" className="">
          <Link href={"/"}>
            <h1 onClick={closeMenu} className="text-3xl w-60 z-0 font-neuton">
              G.P
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
            isMenuOpen ? "flex justify-center bg-bone h-screen" : "hidden"
          } z-10`}
        >
          <ul className="flex flex-col items-center w-screen gap-8 md:flex-row md:items-center md:justify-end text-2xl md:text-base md:py-0 py-10 cursor-pointer">
            <NavLink path="/projects" text="Projects" closeMenu={closeMenu} />
            <NavLink path="/about" text="About" closeMenu={closeMenu} />
            <h2
              className="cursor-pointer"
              onClick={() => {
                closeMenu();
                scrollToSection("footer");
              }}
            >
              Contact
            </h2>
          </ul>
        </nav>
      </div>
    </header>
  );
}
