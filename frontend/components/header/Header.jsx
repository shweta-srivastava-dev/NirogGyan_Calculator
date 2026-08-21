import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#c3eff8] rounded-b-3xl">

      {/* ================= DESKTOP / HEADER BAR ================= */}
      <div className="h-16 max-w-7xl mx-auto flex items-center justify-between relative">

        {/* ================= LOGO - LEFT ================= */}
        <div className="text-3xl text-[#0d6efd] font-bold px-4">
          LOGO
        </div>

        {/* ================= DESKTOP MENU - CENTER ================= */}
        <div className="hidden sm:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">

          <Link
            to="/"
            className="rounded-2xl text-gray-700 px-5 py-2 hover:bg-[#0e48e9] hover:text-white transition"
          >
            Home
          </Link>

          <Link
            to="/calculator/about"
            className="rounded-2xl text-gray-700 px-5 py-2 hover:bg-[#0e48e9] hover:text-white transition"
          >
            About
          </Link>


        </div>

        {/* ================= LOGIN - RIGHT ================= */}
        <div className="hidden sm:block px-4">
          <button
            className="rounded-full bg-blue-700 text-white py-2 px-6 
            hover:bg-[#a2ddf2] hover:text-gray-800 
            border-2 border-black transition"
          >
            Login
          </button>
        </div>

        {/* ================= MOBILE HAMBURGER ================= */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-5 sm:hidden text-gray-800 text-2xl"
          aria-label="Toggle menu"
        >
          <CiMenuBurger />
        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden bg-blue-700 space-y-3 pb-5 pt-5`}
      >

        {/* Home */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-white px-6 py-2 block hover:bg-blue-800 transition"
        >
          Home
        </Link>

        {/* About */}
        <Link
          to="/calculator/about"
          onClick={() => setIsOpen(false)}
          className="text-white px-6 py-2 block hover:bg-blue-800 transition"
        >
          About
        </Link>


        {/* Login */}
        <div className="px-6 pt-2">
          <button
            onClick={() => setIsOpen(false)}
            className="w-full rounded-full bg-white text-blue-700 py-2 px-5 
            font-semibold border-2 border-white 
            hover:bg-[#a2ddf2] transition"
          >
            Login
          </button>
        </div>

      </div>

    </nav>
  );
};

export default Header;