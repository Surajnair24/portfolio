import React from "react";
import logo from "../assets/background.jpg"; 
export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold text-[#252525]">Suraj S Nair</h1>
      </div>

      
      <nav className="hidden md:flex gap-6 text-lg">
        <a href="#home" className="hover:text-[#5e2cb1] transition">Home</a>
        <a href="#about" className="hover:text-[#5e2cb1] transition">About</a>
        <a href="#projects" className="hover:text-[#5e2cb1] transition">Projects</a>
        <a href="#contact" className="hover:text-[#5e2cb1] transition">Contact</a>
      </nav>
    </header>
  );
};
