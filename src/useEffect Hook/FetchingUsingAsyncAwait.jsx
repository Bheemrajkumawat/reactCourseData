import React, { useEffect, useState } from "react";

function FetchingUsingAsyncAwait() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchPokemon = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
      const data = await res.json();
      console.log(data);
      setApiData(data)
      setLoading(false)
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(()=>{
    fetchPokemon()
  },[])
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  // Error Message
  if (error) {
    return (
      <h2 className="text-center text-red-500 font-bold">
        Failed to load data: {error}
      </h2>
    );
  }

  if (apiData) {
    return (
      <>
        <section className="w-70 h-70 bg-white  rounded-3xl flex flex-col justify-center item-center text-center  gap-3.5 shadow-xl/30 ml-3.5">
          <header>
            <h1 className="font-black text-2xl">Lest catch Pokemon</h1>
          </header>
          <ul>
            <li>
              <figure className="px-20">
                <img
                  src={apiData.sprites.other["dream_world"].front_default}
                  alt={apiData.name}
                />
              </figure>
              <h1 className="text-2xl font-bold">{apiData.name}</h1>
            </li>
          </ul>
        </section>
      </>
    );
  }
}

export default FetchingUsingAsyncAwait;
