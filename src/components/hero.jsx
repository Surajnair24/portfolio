import React from "react";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";
import bgImage from "../assets/background.jpg";
export const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen w-full flex item-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative flex flex-col text-center justify-center items-center ">
        <h1 className="text-5xl font-black text-[#252525]">
          HI, I'M SURAJ S NAIR
        </h1>
        <p className="text-xl mt-4  max-w-5xl md:text-center text-center ">
          A passionate Web Developer focused on developing and maintaining websites
          and web applications that enhance user experience and drive success.
        </p>
        <a
          download="Suraj_S_Nair_Resume.pdf"
          href="/portfolio/resume.pdf"
          className="mt-6 inline-flex items-center gap-2 bg-[#7843E9] px-4 py-2 text-lg rounded font-semibold text-white hover:bg-[#5e2cb1] transition"
        >
          <FaDownload />
          Download Resume
        </a>
      </div>
      <div className="absolute bottom-6 justify-center flex gap-4">
        <a
          href="https://linkedin.com/in/suraj-s-nair-a79182201"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#252525] hover:text-[#5e2cb1] transition text-4xl rounded-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Surajnair24"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#252525] hover:text-[#5e2cb1] transition text-4xl rounded-2xl"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};
