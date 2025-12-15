import React from 'react';

function Navbar() {
  return (
    <nav className="bg-slate-800 sticky w-full z-50 top-0 shadow-2xl border-b-4 border-amber-700">
      <div className="max-w-screen-xl flex flex-col md:flex-row md:justify-between items-center mx-auto p-4">
        <a href="#me-section" className="flex items-center space-x-3 group">
          <span className="self-center text-2xl font-bold whitespace-nowrap text-slate-100 tracking-wider group-hover:text-amber-500 transition-colors">
            Joshua Wise
          </span>
        </a>
        <div>
          <ul className="flex space-x-8 mt-4 md:mt-0 font-medium">
            {['Contact', 'Skills', 'Project'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}-section`}
                  className="text-slate-300 hover:text-amber-500 transition-colors duration-300 text-lg"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;