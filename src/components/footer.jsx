import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 flex flex-col items-center overflow-hidden">
      
      
      <div className="max-w-screen-xl w-full px-6 flex justify-between items-center  ">
        
        <h1 className="text-2xl font-bold ">Suraj S Nair</h1>

        
        <div className="flex space-x-4 ml-auto">
          <a href="https://github.com/Surajnair24" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-purple-400 transition" />
          </a>
          <a href="https://linkedin.com/in/suraj-s-nair-a79182201" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-purple-400 transition" />
          </a>
        </div>
      </div>
 
      {/* Divider Line */}
      <div className="border-t-2 border-amber-50 w-[92%] my-4"></div>

      {/* Copyright Info */}
      <p className="text-sm">
        © {new Date().getFullYear()} Suraj S Nair. Made by Suraj S Nair.
      </p>
      <p className="text-xs">
        Design inspired by{" "}
        <a
          href="https://www.rammaheshwari.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:underline"
        >
          Ram Maheshwari
        </a>.
      </p>
    </footer>
  );
};
