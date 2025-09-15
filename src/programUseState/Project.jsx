import React, { useState } from "react";

function Project() {
  const [data, setData] = useState(0);
  const [value, setValue] = useState(0);

  const handleincrement = () => {
    setData(data + value);
  };

  const handleDecrement = () => {
    setData(data - value);
  };

  const handleclear = () => {
    setData(0);
  };

  return (
    <>
      <div className="w-screen h-screen bg-amber-50  flex justify-center items-center">
        <div className="w-160 h-120 bg-white flex  justify-center items-center rounded-2xl shadow-xl/30  ">
          <div className="flex justify-center items-center flex-col gap-15 font-bold">
            <div className="text-4xl">
              <h1>UseState Challenge</h1>
            </div>
            <div>
              <p className="text-2xl">
                count:-<span className="ml-10 text-red-500">{data}</span>
              </p>
            </div>
            <div className="flex gap-5">
              <span className="text-2xl">Step : -</span>
              <form action="" className="bg-amber-100 rounded shadow-xl/10 ">
                <input
                  type="number"
                  value={value}
                  className="border-0 outline-none text-center"
                  onChange={(e) => setValue(Number(e.target.value))}
                />
              </form>
            </div>
            <div className=" flex gap-30 item-center">
              <button
                onClick={handleincrement}
                disabled={data >= 100}
                className="p-4 bg-cyan-400 rounded-2xl cursor-pointer hover:text-cyan-100"
              >
                increment
              </button>
              <button
                onClick={handleDecrement}
                disabled={data <= 0}
                className="p-4 bg-cyan-400 rounded-2xl  cursor-pointer hover:text-cyan-100"
              >
                Decrement
              </button>
              <button
                onClick={handleclear}
                className="p-4 bg-cyan-400 rounded-2xl cursor-pointer hover:text-cyan-100"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
