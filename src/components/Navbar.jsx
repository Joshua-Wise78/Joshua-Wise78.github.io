function Navbar() {
  return (
    <>
      <nav className="bg-gray-200 sticky w-full z-90 top-0 shadow-md">
        <div className="max-w-screen-xl flex flex-col md:flex-row md:justify-between items-center mx-auto p-4">
          <a href="#me-section" className="flex items-center space-x-3">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Joshua Wise
            </span>
          </a>
          <div>
            <ul className="flex space-x-8 mt-4 md:mt-0">
              <li>
                <a
                  href="#main-section"
                  className="text-gray-900 hover:text-blue-700"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#skill-section"
                  className="text-gray-900 hover:text-blue-700"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#project-section"
                  className="text-gray-900 hover:text-blue-700"
                >
                  Project
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
