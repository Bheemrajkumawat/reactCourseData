import React, { useEffect, useState } from "react";
import Products from "./Products";

function ProjectPokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
      let data = await response.json();
      console.log(data);

      const detailedPokemonData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        setLoading(false);
        console.log(data);
        return data;
      });
      const detailedResponses = await Promise.all(detailedPokemonData);
      setPokemon(detailedResponses);
    } catch (error) {
      console.log(error);

      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }
  return (
    <div className="w-screen min-h-screen  bg-amber-400">
      <div className="w-full text-center flex flex-col items-center py-8">
        <h1 className="text-white font-bold text-5xl">Lets Catch Pokemon</h1>
        <div className="mt-4">
          <input
            type="text"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Searching ...."
            className="w-80 h-10 bg-amber-50 rounded  px-3.5 border-0 border-b-2 border-black focus:outline-none focus:ring-0"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 mt-8 w-full max-w-7xl">
          {searchData  &&
            searchData .map((curPokemon) => (
              <Products key={curPokemon.id} pokemonData={curPokemon} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectPokemon;
