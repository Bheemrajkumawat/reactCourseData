import React, { useState } from "react";
function UseState() {
  const [counter, setCounter] = useState(0);
  const hendleclickbutton = () =>{
    setCounter(counter + 1);
  };
  const handleclick = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="flex flex-col justify-center items-center text-center m-30 font-bold">
      <h1 className="text-gray-500 font-bold">userState Hook!</h1>
      <p className="text-red-400 text-2xl font-bold">{counter}</p>
      <button
        className="h-12 w-20 bg-green-400 rounded-2xl"
        onClick={hendleclickbutton}
      >
        Click
      </button>
      <button
        className="h-12 w-20 bg-green-400 rounded-2xl"
        onClick={handleclick}
      >
        Click
      </button>
    </div>
  );
}
export default UseState;
