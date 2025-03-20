import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";


export const Projects = () => {
  return (
    <>
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          {/* Section Title */}
          <h1 className="text-3xl text-[#252525] font-black text-center">
            Projects
            <span className="block w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-3 rounded-full"></span>          </h1>
          <p className="text-[#252525] text-center pt-6 font-normal text-xl m-auto max-w-3xl">
            Here, you'll find a collection of personal projects I've worked on,
            each showcasing a unique case study.
          </p>

          {/* Project 1 - MovieFlix */}
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-20 items-center">
            <div className="flex justify-center lg:justify-start">
              <img
                src={project1}
                className="w-full md:max-w-2xl "
                alt="Project 1"
              />
            </div>
            <div className="text-center lg:text-left lg:pt-5 ">
              <h1 className="text-2xl text-[#252525] font-bold">MovieFlix</h1>
              <p className="mt-6 text-lg leading-relaxed">
                MovieFlix is a feature-rich web app designed to help users
                discover and manage their favorite movies with ease. It includes
                a search feature, sections for upcoming and top-rated movies, a
                trending movies page with pagination, and a genre-based
                suggestion page. Users can also create a watchlist to save their
                favorite movies, and each movie has a detailed page with
                additional information. The app is fully responsive, ensuring a
                smooth experience across all devices. Built with React.js and
                the TMDb API, Movie Suggestor delivers a seamless and
                user-friendly interface for movie enthusiasts.
              </p>
              <a
                href="https://surajnair24.github.io/MovieFlix"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-[#7843E9] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#5e2cb1] transition text-md"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 - WeatherApp */}
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-20 items-center">
            <div className="flex justify-center lg:justify-start">
              <img
                src={project2}
                className="w-full md:max-w-2xl "
                alt="Project 2"
              />
            </div>
            <div className="text-center lg:text-left lg:pt-10">
              <h1 className="text-2xl text-[#252525] font-bold">WeatherApp</h1>
              <p className="mt-6 text-lg leading-relaxed">
                The Weather App is built with React.js and powered by
                WeatherAPI.com, providing real-time weather updates in a sleek
                and interactive UI. Users can search for any city or use
                geolocation to get instant weather details, including
                temperature, humidity, and wind speed. The dynamic interface
                adapts based on weather conditions for a visually engaging
                experience. Seamlessly integrating with WeatherAPI.com, the app
                ensures accurate and up-to-date weather information.
              </p>
              <a
                href="https://surajnair24.github.io/weather-app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-[#7843E9] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#5e2cb1] transition text-md"
              >
                View Project
              </a>
            </div>
          </div>
          {/* Project 3 - VOTF */}
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-20 items-center">
            <div className="flex justify-center lg:justify-start">
              <img
                src={project3}
                className="w-full md:max-w-2xl "
                alt="Project 3"
              />
            </div>
            <div className="text-center lg:text-left lg:pt-10">
              <h1 className="text-2xl text-[#252525] font-bold">
                Voice of Tenkasi Foundation Website
              </h1>
              <p className="mt-6 text-lg leading-relaxed">
                I had the opportunity to redesign the website for Voice of
                Tenkasi Foundation, a non-profit organization based in Tenkasi.
                Using WordPress and Elementor.Additionally, I managed the domain
                migration from Hostinger (.com) to (.org), ensuring a smooth
                transition without data loss or downtime. Throughout the
                project, I utilized HTML, CSS, and JavaScript to enhance design
                elements and optimize user experience. This project strengthened
                my expertise in WordPress development, website migration, and
                domain management.
              </p>
            </div>
          </div>
          {/* Project 4 - Raphael drones */}
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-20 items-center">
            <div className="flex justify-center lg:justify-start">
              <img
                src={project4}
                className="w-full md:max-w-2xl "
                alt="Project 4"
              />
            </div>
            <div className="text-center lg:text-left lg:pt-10">
              <h1 className="text-2xl text-[#252525] font-bold">
                Raphael Drones Website
              </h1>
              <p className="mt-6 text-lg leading-relaxed">
                I designed and developed the website for Raphael Drones using
                WordPress and Elementor, creating a sleek, responsive, and
                user-friendly interface. The website showcases the brand's
                innovative drone solutions with a modern design and seamless
                navigation. This project further honed
                my expertise in WordPress development, UI/UX design, and website
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
