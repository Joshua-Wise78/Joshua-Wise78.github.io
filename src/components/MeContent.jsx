import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function MeSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -300]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const wordSnippets = ["Software Developer", "Problem Solver"];

  const [currWord, setCurrWord] = useState(wordSnippets[0]);
  const index = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      index.current = (index.current + 1) % wordSnippets.length;
      setCurrWord(wordSnippets[index.current]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="me-section"
      style={{ y, opacity }}
      className="h-[66vh] w-full flex items-center justify-center relative"
    >
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('../../public/backdrop3.jpg')",
        }}
      >
        <div className="absolute inset-0 w-full h-full bg-black opacity-40"></div>
      </div>

      <div className="relative text-center text-white p-4">
        <h1 className="text-5xl font-bold">Hello I'm Joshua Wise</h1>
        {/* This will now update correctly */}
        <p className="text-4xl font-semibold">I'm a {currWord}</p>
        <p className="mt-4 text-2xl">Welcome to my playground.</p>
      </div>
    </motion.section>
  );
}
export default MeSection;
