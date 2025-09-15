import { useEffect, useState } from "react";
import axios from "axios";
import { MoviesAlldata } from "./MoviesAlldata";

export const Movies = () => {
    const [move,setMovi ]=useState([])
  const Api =
    "http://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";

  const getMoviesData = async () => {
    try {
      const res = await axios.get(Api);
      console.log(res.data.Search);
       setMovi(res.data.Search)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMoviesData();
  }, []);
  return (
    <>
      <div>
        <ul className="flex flex-wrap p-10 m-auto">
          {move &&
            move.map((movidata) => {
              return (
                <>
                  <MoviesAlldata key={movidata.imdbID} movidata={movidata} />
                </>
              );
            })}
        </ul>
      </div>
    </>
  );
};
