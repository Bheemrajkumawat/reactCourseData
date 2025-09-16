import React, { useState } from "react";
import Contactpage from "./Dynamic contact section /Contactpage";

function Navbar() {
  const [Opendata, setOpendata] = useState(false);

  const handledataMenu = () => {
    setOpendata(!Opendata);
  };
  return (
    <>
      <div className="w-screen h-screen bg-gray-600">
        <div className="bg-white shadow-md">
          <div className="h-auto flex justify-between items-center container m-auto">
            <div className="p-5 text-2xl font-bold">
              <h1 className="pl-20 text-amber-700">BHEEMRAJ</h1>
            </div>
            <div className="pr-30">
              <ul className="hidden md:flex justify-center items-center gap-8">
                <li className="hover:text-amber-600 cursor-pointer">HOME</li>
                <li className="hover:text-amber-600 cursor-pointer">ABOUT</li>
                <li className="hover:text-amber-600 cursor-pointer">
                  SCRVICES
                </li>
                <li className="hover:text-amber-600 cursor-pointer">CONTACT</li>
              </ul>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={handledataMenu}
                className="flex-col cursor-pointer pr-20"
              >
                {Opendata ? (
                  <img src="public/close.png" alt="img" className="h-6 w-6" />
                ) : (
                  <img
                    src="public/menu-bar.png"
                    alt="img"
                    className="h-6 w-6"
                  />
                )}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {Opendata && (
            <ul className="flex flex-col md:hidden bg-white px-5 pb-5 gap-4 border-t-2 border-t-amber-500 text-center ">
              <li className="hover:text-amber-600 cursor-pointer">HOME</li>
              <li className="hover:text-amber-600 cursor-pointer">ABOUT</li>
              <li className="hover:text-amber-600 cursor-pointer">SERVICES</li>
              <li className="hover:text-amber-600 cursor-pointer">CONTACT</li>
            </ul>
          )}
        </div>
         <Contactpage/>
      </div>
    </>
  );
}

export default Navbar;
