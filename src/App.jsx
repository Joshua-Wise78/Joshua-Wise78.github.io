import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MainContent from "./components/MainContent.jsx";
import SkillContent from "./components/SkillsContent.jsx";
import ProjectSection from "./components/ProjectContent.jsx";
import MeSection from "./components/MeContent.jsx";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <main>
          <MeSection />
          <MainContent />
          <SkillContent />
          <ProjectSection />
        </main>
      </div>
    </>
  );
}

export default App;
