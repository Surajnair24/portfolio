import React, { useState } from "react";
import {Link} from "react-scroll"
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/img.jpg";


export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="p-5 bg-white flex ">
      <div className="flex items-center pl-7">
    <img src={logo} className=" shadow-lg border-3 border-[#7843E9] h-16 w-16 object-cover rounded-full object-top"></img>
        <h2 className="text-[#252525] hover:text-[#7843E9] font-bold text-xl ml-4 pt-1 md:text-lg">SURAJ S NAIR</h2>
        </div>
      <div className="hidden md:flex  ml-auto mt-6">
        <ul className="flex space-x-7 ">
        <li><Link to="home" smooth={true} duration={500} className="text-gray-500 cursor-pointer p-5 font-bold text-md hover:text-[#7843E9]">HOME</Link></li>
        <li><Link to="about" smooth={true} duration={500} className="text-gray-500 cursor-pointer p-5 font-bold text-md hover:text-[#7843E9]">ABOUT</Link></li>
        <li><Link to="experience" smooth={true} duration={500} className="text-gray-500 cursor-pointer p-5 font-bold text-md hover:text-[#7843E9]">EXPERIENCE</Link></li>
        <li><Link to="projects" smooth={true} duration={500} className="text-gray-500 cursor-pointer p-5 font-bold text-md hover:text-[#7843E9]">PROJECTS</Link></li>
        <li><Link to="contact" smooth={true} duration={500} className="text-white cursor-pointer px-5 py-3 font-bold text-md bg-[#7843e9] rounded-2xl hover:bg-[#5e2cb1] transition">CONTACT ME</Link></li>
        </ul>
        </div>
    </nav>
    </>
  );
};
