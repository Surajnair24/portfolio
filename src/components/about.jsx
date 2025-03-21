import React from "react";

export const About = () => {
  const skills =["ReactJS","JavaScript","HTML","CSS","WordPress","Tailwind","Java","GitHub"]
  return (
    <section id="about" className="py-20 bg-[#FAFAFA] mb-6">
      <div className="pt-6 pb-6 px-6 md:px-0">
        <h1 className="text-4xl text-[#252525] font-black text-center">
          About
          <span className="block w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-3 rounded-full"></span>        </h1>
        <p className="text-[#252525] pt-6 font-normal text-lg m-auto max-w-3xl md:text-center text-justify ">
          Here, you'll learn more about me, my work, and the technical skills I
          specialize in, primarily focused on programming and web development.
        </p>
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 items-start  lg:grid-cols-2">
          <div className="text-left">
            <h1 className="text-2xl text-[#252525] font-bold ">About me</h1>
            <p className="mt-6 text-lg leading-relaxed md:text-left text-justify">
              I'm a passionate Frontend Web Developer dedicated to crafting
              seamless and user-friendly web experiences. I specialize in
              building and optimizing the front-end of websites and web
              applications that enhance user engagement and contribute to
              overall product success. Explore some of my work in the Projects
              section. I'm always eager for new opportunities to contribute,
              learn, and grow. If you have a role that aligns with my skills and
              experience, feel free to reach out!
            </p>
          </div>
          <div className="text-left ">
            <h1 className="text-2xl text-[#252525] font-bold ">Skills</h1>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {
                skills.map((skill,index)=>(
                  <span key={index} className="bg-[#7843E9] rounded text-white p-2 text-xl font-semibold text-center">
                {skill}
              </span>
                ))
              }
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
