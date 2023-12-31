"use client";
import { NavLinks } from "@/db/navBarData";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavBar = () => {
    setIsClick(!isClick);
  };

  return (
    <nav className="fixed top-0 z-10 w-screen bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ">
            <div className="flex-shrink-8">
              <Link href={"/"} className="text-4xl text-white font-sinha">
                iq¾hdm;s
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center ml-4 space-x-4">
              {NavLinks.map((navLink, index) => (
                <Link
                  key={index}
                  href={navLink.url}
                  className="p-2 text-xl text-white rounded-lg xl:text-2xl hover:bg-white hover:text-black font-sinha"
                >
                  {navLink.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              className="inline-flex items-center justify-center p-2 text-white rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavBar}
            >
              {!isClick ? (
                <GiHamburgerMenu
                  value={{ color: "white", size: "50px" }}
                  className="w-6 h-6"
                />
              ) : (
                <MdClose
                  value={{ color: "white", size: "50px" }}
                  className="w-6 h-6"
                />
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="lg:hidden">
          <div className="flex flex-col items-center justify-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NavLinks.map((navLink, index) => (
              <Link
                key={index}
                href={navLink.url}
                className="p-2 text-2xl text-white rounded-lg hover:bg-white hover:text-black font-sinha"
              >
                {navLink.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
