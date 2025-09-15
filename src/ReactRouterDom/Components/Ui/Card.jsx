import React from "react";
import { NavLink } from "react-router-dom";

function Card({ curMovie }) {
  const { Poster, imdbID, Title, Year, Type } = curMovie;

  return (
    <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden m-4 hover:scale-105 transform transition duration-300">
      {/* Movie Poster */}
      <img
        src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400x600"}
        alt={Title}
        className="w-full h-96 object-cover"
      />

      {/* Movie Info */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{Title}</h2>
        <p className="text-gray-700 mt-1">Year: {Year}</p>
        <p className="text-gray-700">Type: {Type}</p>
      </div>
      <NavLink to={`/movie/${imdbID}`}>
              <button className="bg-red-500 p-3 ml-5 rounded">Watch now</button>
      </NavLink>

    </div>
  );
}

export default Card;
