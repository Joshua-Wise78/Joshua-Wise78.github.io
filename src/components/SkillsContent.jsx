import React from 'react';

function SkillContent() {
  const skills = {
    Languages: ["Java", "Python", "C/C++", "JavaScript", "HTML/CSS", "DAX"],
    "Frameworks & Data": ["Next.js", "Flask", "React", "Node.js", "Firebase", "Power BI"],
    Tools: ["Git/GitHub", "Vim", "VS Code", "SharePoint", "Google Firestore"]
  };

  return (
    <section
      id="skills-section"
      className="min-h-screen w-full flex items-center justify-center bg-slate-900 py-20 border-t border-slate-800"
    >
      <div className="w-full max-w-7xl px-8">
        <h2 className="text-5xl font-bold text-center text-slate-100 mb-16 tracking-tight">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700">
              <h3 className="text-3xl font-bold text-slate-200 mb-6 border-b-2 border-slate-600 pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <span 
                    key={item} 
                    className="bg-slate-700 text-cyan-200 border border-slate-600 px-4 py-2 rounded-full text-lg font-medium shadow-sm hover:bg-slate-600 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillContent;