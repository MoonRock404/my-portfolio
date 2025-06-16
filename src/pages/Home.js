/* 
git add .
git commit -m "Message"
git push
npm run build
npm run deploy
*/

function Home() {
  return (
    <section className="flex flex-col md:flex-row min-h-screen bg-[#f8f4ed] text-[#3b2f2f] font-serif">
      
      {/* Left Side - Open Book Intro */}
      <div className="md:w-1/2 p-8 flex justify-center items-center bg-[#ede3d0] shadow-md relative">
        <img
          src="open-book.png"
          alt="Open Book"
          className="w-full max-w-md h-auto drop-shadow-xl"
        />

        {/* Book Text (split left and right pages) */}
        <div className="absolute top-16 left-12 w-1/2">
          <h1 className="text-3xl mb-4 font-bold">Hello, I'm Chandini</h1>
        </div>
        <div className="absolute top-16 right-12 w-1/2">
          <p>
            A student exploring cybersecurity and software engineering, with a
            love for storytelling and creativity.
          </p>
        </div>
      </div>

      {/* Right Side - Bookshelf Navigation */}
      <div className="md:w-1/2 p-6 flex flex-col justify-evenly items-center bg-[#fffefc] space-y-6">
        <h2 className="text-2xl font-bold mb-2">📚 Select a Shelf</h2>

        {/* Shelf Buttons */}
        <div className="space-y-4 w-full max-w-sm">
          <button className="w-full py-4 bg-[#c9a97e] text-white rounded-xl shadow-lg hover:scale-105 transition">
            🧪 Projects
          </button>
          <button className="w-full py-4 bg-[#b08f6c] text-white rounded-xl shadow-lg hover:scale-105 transition">
            🛠️ Experience
          </button>
          <button className="w-full py-4 bg-[#a0816a] text-white rounded-xl shadow-lg hover:scale-105 transition">
            🎖️ Certifications
          </button>
        </div>
      </div>
      
    </section>
  );
}

export default Home;
