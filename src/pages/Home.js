/* 
git add .
git commit -m "Message"
git push
npm run deploy
*/

function Home() {
  return (
    <section className="flex flex-col md:flex-row min-h-screen bg-[#fdfaf6] text-gray-800">
      
      {/* Left Side - About Me / Reading Nook */}
      <div className="md:w-1/3 p-8 flex flex-col justify-center bg-[#f0e6dc] shadow-md">
        <h1 className="text-4xl font-serif mb-4">📖 Hello, I’m Chandini</h1>
        <p className="text-lg leading-relaxed">
          A student exploring <span className="font-medium">cybersecurity</span> and
          <span className="font-medium"> software engineering</span>.<br /><br />
          Welcome to my digital library—each shelf holds a chapter of my journey.
        </p>
      </div>

      {/* Right Side - Bookshelves */}
      <div className="md:w-2/3 p-6 overflow-y-auto space-y-12 bg-[#fffefc]">

        {/* Projects Shelf */}
        <div>
          <h2 className="text-2xl font-bold font-serif mb-2">🧪 Projects</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {/* Replace these with actual Project components or links */}
            <div className="w-40 h-56 bg-[#decba4] rounded shadow-lg flex items-center justify-center font-semibold">
              Project Book 1
            </div>
            <div className="w-40 h-56 bg-[#d9a86c] rounded shadow-lg flex items-center justify-center font-semibold">
              Project Book 2
            </div>
            <div className="w-40 h-56 bg-[#e2cfc3] rounded shadow-lg flex items-center justify-center font-semibold">
              Project Book 3
            </div>
          </div>
        </div>

        {/* Experience Shelf */}
        <div>
          <h2 className="text-2xl font-bold font-serif mb-2">🛠️ Experience</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            <div className="w-40 h-56 bg-[#c1b2a3] rounded shadow-lg flex items-center justify-center font-semibold">
              Internship 1
            </div>
            <div className="w-40 h-56 bg-[#b8a398] rounded shadow-lg flex items-center justify-center font-semibold">
              Internship 2
            </div>
          </div>
        </div>

        {/* Involvement Shelf */}
        <div>
          <h2 className="text-2xl font-bold font-serif mb-2">🌱 Involvement</h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            <div className="w-40 h-56 bg-[#c9b1bd] rounded shadow-lg flex items-center justify-center font-semibold">
              Club Role 1
            </div>
            <div className="w-40 h-56 bg-[#a89ca3] rounded shadow-lg flex items-center justify-center font-semibold">
              Club Role 2
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
