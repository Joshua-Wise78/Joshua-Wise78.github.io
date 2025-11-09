function MainContent() {
  return (
    <>
      <section
        id="main-section"
        className="min-h-screen w-full flex items-center justify-center bg-blue-200 py-16"
      >
        <div className="grid grid-flow-col grid-rows-3 gap-4 p-4 w-full max-w-5xl h-[500px]">
          <div className="row-span-3 bg-emerald-100 rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/800x1000"
              alt="Project"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 bg-emerald-100 p-6 rounded-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              My Social Links
            </h2>
          </div>
          <div className="col-span-2 row-span-2 bg-emerald-100 p-6 rounded-lg">
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainContent;
