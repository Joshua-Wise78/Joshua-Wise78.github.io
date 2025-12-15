import React from 'react';

function ProjectSection() {
  const projects = [
    {
      title: "The Hive",
      desc: "A social media application designed for high school use. Features secure user storage and encryption.",
      tags: ["Next.js", "Tailwind", "MongooseDB", "Node.js"]
    },
    {
      title: "AFRL Internship Portal",
      desc: "An internal portal for managing internship data. Handles authentication, redirects, and Firestore consistency.",
      tags: ["Flask", "Python", "HTML/CSS", "Firestore"]
    },
    {
      title: "Home Server Bot",
      desc: "Custom Discord bot developed to organize personal home server operations and manage NAS storage commands.",
      tags: ["JavaScript", "Discord.js", "Node.js"]
    }
  ];

  return (
    <section
      id="project-section"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-100 py-20"
    >
      <div className="w-full max-w-7xl px-8">
        <h1 className="text-5xl font-bold text-center text-slate-900 mb-16">
          Featured Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Placeholder for Project Screenshots */}
              <div className="h-48 bg-slate-200 w-full flex items-center justify-center">
                <span className="text-slate-500 font-semibold text-xl">
                  {project.title} Preview
                </span>
              </div>
              
              <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-sm font-bold uppercase tracking-wider text-amber-700 bg-orange-50 px-3 py-1 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;