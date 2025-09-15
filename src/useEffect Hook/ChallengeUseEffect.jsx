import React, { useEffect, useState } from "react";

function ChallengeUseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");


  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);


  useEffect(() => {
    console.log("name is :", name);
  }, [name]);

  return (
    <div className="flex  justify-center items-center w-screen h-screen bg-blue-950 ">
      <div className="flex flex-col justify-between items-center text-white text-center h-80 w-200">
        <h1 className="text-5xl font-bold">useEffect Chellenge</h1>
        <p className="text-white font-bold">{count}</p>
        <button
          className="font-bold p-1 bg-green-400"
          onClick={() => setCount(count + 1)}
        >
          incerment
        </button>
        <p className="font-bold">
          name:<span>{name}</span>
        </p>
        <input
          type="text"
          value={name}
          className="py-2 px-3 rounded-2xl  text-black font-black bg-white"
          placeholder="center the name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
}

export default ChallengeUseEffect;
