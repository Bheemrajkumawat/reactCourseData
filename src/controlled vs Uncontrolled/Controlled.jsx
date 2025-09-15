import React, { useState } from 'react'

function Controlled() {
    const [data,setData]=useState("");

    const mydata=(e)=>{
        e.preventDefault();
        console.log(data)
    }
  return (
     <div className="flex justify-center items-center w-screen h-screen">
        <div className="w-100 h-100 flex justify-center items-center flex-col gap-10 text-2xl font-bold bg-emerald-700 rounded-2xl shadow-xl/30 ">
          <div>
            <h1 className="text-white">CONTROLLED-COMPONENT</h1>
          </div>
          <div className="">
            <form action="" className=" flex flex-col gap-3.5">
              <input
                type="text"
                name="name"
                id="my"
                value={data}
                placeholder="Enter the name"
                className="bg-amber-300 rounded-2xl"
                onChange={(e)=> setData(e.target.value)}
              />
              <button
                type="submit"
                className="bg-fuchsia-600 rounded-2xl"
                onClick={mydata}
                
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Controlled
