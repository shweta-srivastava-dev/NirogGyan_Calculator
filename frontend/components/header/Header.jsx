import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#c3eff8] rounded-b-3xl">
      <div className="h-16 items-center flex justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-3xl text-[#0d6efd] font-bold px-4">LOGO</div>

        {/* Desktop Menu */}

        <div className="hidden sm:flex ">
         
           <Link to="/" className=" rounded-2xl text-gray-700 px-4 hover:bg-[#0e48e9] hover:text-white transition">
            Home
          </Link>
          
       
          <Link to="/calculator/about" className="rounded-2xl text-gray-700 px-4 hover:bg-[#0e48e9] hover:text-white transition">
            About
          </Link>
          
        </div>


        <div>
          <button className="rounded-full bg-blue-700 text-white py-2 px-5 hover:bg-[#a2ddf2] border-2 border-black">Login</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-5 sm:hidden text-gray-800 text-2xl"
        >
          <CiMenuBurger />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden bg-blue-700 space-y-2 pb-3 mt-4 py-5 `}
      >
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="text-white px-4 block"
        >
          Home
        </Link>

        <Link
          to="/calculator/about"
          onClick={() => setIsOpen(false)}
          className="text-white px-4 block"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Header;
