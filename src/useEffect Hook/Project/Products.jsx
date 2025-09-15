import React from "react";

function Products({ pokemonData }) {
  return (
    <div className="max-w-xs bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center hover:shadow-2xl transition duration-300">
      {/* Image container */}
      <div className="w-32 h-32 flex justify-center items-center rounded-full bg-gray-100 shadow-md">
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className="w-24 h-24 object-contain rounded-full"
        />
      </div>

      {/* Name */}
      <h1 className="font-black text-2xl text-gray-800 mt-4 capitalize">
        {pokemonData.name}
      </h1>

      {/* Type */}
      <span className="mt-2 bg-green-500 text-white px-4 py-1.5 rounded-full font-semibold text-sm shadow-sm">
        {pokemonData.types.map((curType) => curType.type.name).join(", ")}
      </span>

      {/* Stats */}
      <div className="w-full flex justify-center items-center gap-3 flex-wrap mt-5">
        <span className="px-3 py-1 bg-gray-100 rounded-lg shadow text-sm">
          Height: {pokemonData.height}
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-lg shadow text-sm">
          Weight: {pokemonData.weight}
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-lg shadow text-sm">
          Allack {pokemonData.stats[1].base_stat}
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-lg shadow text-sm">
          {pokemonData.abilities
            .map((abilityInfo) => abilityInfo.ability.name)
            .slice(0, 1)
            .join(", ")}
            Abilities:
        </span>
      </div>
    </div>
  );
}

export default Products;
