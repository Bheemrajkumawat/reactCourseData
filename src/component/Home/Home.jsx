import React from "react";
import heroImg from "../../assets/hero.webp";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.webp";
import img4 from "../../assets/4.jpeg";
import img5 from "../../assets/5.jpeg";
import img6 from "../../assets/6.jpeg";
import "../Home/Home.css";

function Home() {
  return (
    <>
      <section className="min-h-screen bg-amber-600">
        {/* Navbar */}
        <header className="bg-amber-300/70 text-white font-bold flex justify-between items-center px-8 h-20 shadow-md sticky top-0 z-50">
          {/* Logo / Title */}
          <div>
            <h1 className="text-xl text-black">Bheem Bro</h1>
          </div>

          {/* Nav Links */}
          <nav>
            <ul className="flex gap-8 text-black">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">Services</li>
            </ul>
          </nav>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-amber-700 px-4 py-2 rounded-lg hover:bg-amber-800 transition duration-300">
              Login
            </button>
            <button className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300">
              Logout
            </button>
          </div>
        </header>

        {/* Body Section */}
        <div className="flex justify-center items-start h-screen bg-amber-600 m-0 p-0">
          <img
            src={heroImg}
            alt="Hero"
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>
      </section>
      <section className="w-[100%] h-screen bg-amber-500 text-black flex justify-center mt-30 overflow-hidden">
        <div className="flex gap-6 animate-scroll mt-10 ">
          <div className="w-40 h-40 bg-white rounded-2xl flex justify-center items-center shadow-md">
            <img
              src={img1}
              alt="img"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="w-40 h-40 bg-white rounded-2xl flex justify-center items-center shadow-md">
            <img
              src={img2}
              alt="img"
              className="w-full h-full object-cover rounded-2xl"
            />{" "}
          </div>
          <div className="w-40 h-40 bg-white rounded-2xl flex justify-center items-center shadow-md">
            <img
              src={img3}
              alt="img"
              className="w-full h-full object-cover rounded-2xl"
            />{" "}
          </div>
          <div className="w-40 h-40 bg-white rounded-2xl flex justify-center items-center shadow-md">
            <img
              src={img4}
              alt="img"
              className="w-full h-full object-cover rounded-2xl"
            />{" "}
          </div>
          <div className="w-40 h-40 bg-white rounded-2xl flex justify-center items-center shadow-md">
            <img
              src={img5}
              alt="img"
              className="w-full h-full object-cover rounded-2xl"
            />{" "}
          </div>
          <div className="w-40 h-40 bg-white rounded-2xl flex justify-center items-center shadow-md">
            <img
              src={img6}
              alt="img"
              className="w-full h-full object-cover rounded-2xl"
            />{" "}
          </div>
          <div className="w-40 h-40 bg-white rounded-2xl flex justify-center items-center shadow-md">
            <img
              src={img1}
              alt="img"
              className="w-full h-full object-cover rounded-2xl"
            />{" "}
          </div>
          <div className="w-40 h-40 bg-white rounded-2xl flex justify-center items-center shadow-md">
            <img
              src={img2}
              alt="img"
              className="w-full h-full object-cover rounded-2xl"
            />{" "}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
