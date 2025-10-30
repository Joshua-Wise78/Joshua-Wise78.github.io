import { motion, useScroll, useTransform } from "framer-motion";

function MeSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -300]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <motion.section
      id="me-section"
      style={{ y, opacity }}
      className="h-[66vh] w-full flex items-center justify-center relative"
    >
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://placehold.co/1920x1080/667eea/ffffff?text=Nice+Background+Image')",
        }}
      >
        <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
      </div>

      <div className="relative text-center text-white p-4">
        <h1 className="text-5xl font-bold">Hello, I'm Joshua Wise</h1>
        <p className="mt-4 text-2xl">Welcome to my portfolio.</p>
      </div>
    </motion.section>
  );
}

export default MeSection;
