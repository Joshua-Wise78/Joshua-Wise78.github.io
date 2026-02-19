import React from 'react';

function ProjectSection() {
  const projects = [
    {
      title: "Cooking-App",
      desc: "Led a team of 3 other students making a full-stack application for a class project.",
      tags: ["Next.js", "Tailwind", "MariaDB", "Node.js", "FastAPI"],
      image: "/cooking-app-cover.jpg",
      link: "https://github.com/Group-7-CEG4110"
    },
    {
      title: "WiseBot",
      desc: "Custom Discord bot developed to organize personal home server operations and manage NAS storage commands.",
      tags: ["Python", "Discord.py"],
      image: "/wisebot-cover.jpg",
      link: "https://github.com/Joshua-Wise78/WiseBot"
    },
    {
      title: "Box-Notes",
      desc: "Self Hosted note taking application that renders markdown and is self hostable.",
      tags: ["FastAPI", "React", "Node.js", "Tailwindcss", "PostegreSQL"],
      image: "/box-notes-cover.jpg",
      link: "https://github.com/Joshua-Wise78/Box-Notes"
    },
    {
      title: "Karto",
      desc: "Car maintenance application that tracks used cars mileage, repairs & fixes.",
      tags: ["Angular", "SpringBoot", "MariaDB"],
      image: "/karto-cover.jpg",
      link: "https://github.com/kurumatomo"
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
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Project Header Image */}
              <div className="h-48 w-full overflow-hidden border-b border-slate-100">
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/600x400/e2e8f0/475569?text=Project+Preview";
                  }}
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-slate-800">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-amber-700 transition-colors"
                    title="View Code"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                  </a>
                </div>

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
