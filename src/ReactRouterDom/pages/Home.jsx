import React from "react";
import poster from "../../assets/img.png"
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div className="w-full text-white">
      {/* Banner Section */}
      <section className="max-w-[1750px] mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
        
        {/* Left Side Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Welcome to <span className="text-red-500">BheemFlix</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Enjoy unlimited movies and shows with the best streaming
            experience. Anytime, anywhere, on any device.
          </p>
          <NavLink to="/movie">
            <button className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition">
            Explore Movies
          </button>
          </NavLink>
          
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={poster}
            alt="Movie Poster"
            className="w-[350px] h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>

      </section>
    </div>
  );
}

export default Home;
