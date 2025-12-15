import React from 'react';

function MainContent() {
  return (
    <section
      id="contact-section"
      className="min-h-screen w-full flex justify-center bg-slate-200 py-20"
    >
      <div className="w-full max-w-7xl px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <div className="hidden lg:block h-full w-full max-h-[800px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <img
            src="/backdrop3.jpg" 
            alt="Joshua Wise"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
          />
        </div>

        {/* Content Column */}
        <div className="flex flex-col justify-center h-full space-y-10">
          
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 tracking-tight">
              About Me
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-medium">
              I am a Computer Science student at Wright State University with a passion for continuous development. 
              My background includes previous experience as a Java I & II Lab Leader and a Full-stack Intern at the Air Force Research Laboratory (AFRL). 
              <br /><br />
              When I'm not coding, I am an avid tinkerer always working on cars or projects. I also travel as I am always looking for the next skill to acquire or backroad to explore.
            </p>
          </div>

          <div className="w-24 h-2 bg-amber-700 rounded-full"></div>

          <div className="flex flex-col space-y-4">
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/joshua-wise-970294293" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-6 p-4 -ml-4 rounded-2xl hover:bg-white/60 transition-all duration-300"
            >
              <div className="p-3 bg-slate-50 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                <img src="/linkedin-svgrepo-com.svg" className="w-10 h-10 lg:w-12 lg:h-12" alt="LinkedIn" />
              </div>
              <span className="text-3xl lg:text-4xl font-bold text-slate-700 group-hover:text-amber-700 transition-colors">
                LinkedIn
              </span>
            </a>

            {/* Email */}
            <a 
              href="mailto:wise.113@wright.edu"
              className="group flex items-center gap-6 p-4 -ml-4 rounded-2xl hover:bg-white/60 transition-all duration-300"
            >
              <div className="p-3 bg-slate-50 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                <img src="/gmail-old-svgrepo-com.svg" className="w-10 h-10 lg:w-12 lg:h-12" alt="Gmail" />
              </div>
              <span className="text-3xl lg:text-4xl font-bold text-slate-700 group-hover:text-amber-700 transition-colors">
                wise.113@wright.edu
              </span>
            </a>

            {/* Github */}
            <a 
              href="https://github.com/Joshua-Wise78" 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-6 p-4 -ml-4 rounded-2xl hover:bg-white/60 transition-all duration-300"
            >
              <div className="p-3 bg-slate-50 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                <img src="/github-142-svgrepo-com.svg" className="w-10 h-10 lg:w-12 lg:h-12" alt="Github" />
              </div>
              <span className="text-3xl lg:text-4xl font-bold text-slate-700 group-hover:text-amber-700 transition-colors">
                Github
              </span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent;