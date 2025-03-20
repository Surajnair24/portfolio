import React from "react";

export const Experience = () => {
  const experiences = [
    {
      company: "Voice of Tenkasi Foundation",
      duration: "Dec 2023 - Aug 2024",
      role: "Web Developer",
      tasks: [
        "Managed & optimized 3+ WordPress websites, improving performance by 20%.",
        "Configured & customized Zoho Backstage, Zoho Social, Zoho Workplace, and Zoho One.",
        "Built an e-commerce platform using Zoho Commerce & Zoho Inventory.",
        "Conducted knowledge transfer (KT) sessions for interns.",
        "Developed a real-time exam result page using ReactJS & Firebase.",
        "Created a secure Volunteer ID Card Generation system with ReactJS & Firebase, managing 100+ volunteers."
      ]
    },
    {
      company: "Atos-Syntel",
      duration: "Nov 2021 - Jul 2023",
      role: "Associate Consultant",
      tasks: [
        "Built a custom SharePoint web app for Learning & Development using JavaScript, HTML & CSS.",
        "Integrated APIs to fetch data from SharePoint tables.",
        "Worked with cross-functional teams to deliver scalable solutions.",
        "Resolved technical issues, ensuring 100% project accuracy & on-time delivery."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        
       
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Experience
        </h1>
        <span className="block w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-3 rounded-full"></span>

        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, id) => (
            <div 
              key={id} 
              className="relative p-6 bg-white rounded-xl border border-gray-200 shadow-md transition-all hover:shadow-lg hover:scale-[1.02]"
            >
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-indigo-600">{exp.role}</h3>
                <p className="text-gray-700 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.duration}</p>
              </div>

              
              <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
                {exp.tasks.map((task, key) => (
                  <li key={key} className="leading-relaxed">{task}</li>
                ))}
              </ul>

              
              <span className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-indigo-500 rounded-l-md"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
