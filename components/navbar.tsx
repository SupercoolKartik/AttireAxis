"use client";
import React from "react";
import Link from "next/link";
import Logo from "./public/logo.png";

import { FaBeer } from "react-icons/fa";

class Question extends React.Component {
  render() {
    return (
      <h3>
        {" "}
        Lets go for a <FaBeer />?{" "}
      </h3>
    );
  }
}
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="text-gray-400 bg-gray-900 body-font /**/ sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center justify-start">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img className="h-8 w-8" src="/logo.png" alt="attire_axis_logo" />
          <span className="ml-3 text-xl font-bold text-red-400">
            AttireAxis
          </span>
        </a>

        <nav className="mx-5 flex flex-wrap items-center text-base  font-bold justify-between">
          {/* md:ml-auto md:mr-auto */}
          <Link className="mr-5 hover:text-white" href={"/"}>
            T-Shirts
          </Link>
          <Link className="mr-5 hover:text-white" href={"/"}>
            Hoodies
          </Link>
          <Link className="mr-5 hover:text-white" href={"/"}>
            Stickers
          </Link>
          <Link className="mr-5 hover:text-white" href={"/"}>
            Mugs
          </Link>
        </nav>
        <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 /**/ md:absolute md:right-4 font-bold">
          <span className="font-bold md:text-xl">
            <BsCart2 />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
