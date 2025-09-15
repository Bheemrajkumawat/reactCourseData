import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Components/Ui/Card";


function Movie() {
  const moviesData = useLoaderData();
  // console.log(moviesData);
  console.log(moviesData.Search);
  return (
    <>
      <div className=" py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Movies</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {moviesData?.Search?.map((curMovie) => (
              <Card key={curMovie.imdbID} curMovie={curMovie} />
              
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;
