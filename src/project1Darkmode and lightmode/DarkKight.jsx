import { createContext, use, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [Them, setThem] = useState("dark");

  const hendleToggleThem = () => {
    return setThem((provider) => (provider === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ Them, hendleToggleThem }}>
      {children}
    </ThemeContext.Provider>
  );
};

// creating a component

export const DarkLight = () => {
  const { Them, hendleToggleThem } = use(ThemeContext);
  return (
    <div
      className={` flex  h-lvh  flex-col justify-center items-center text-center  gap-2.5 ${
        Them === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="font-bold text-6xl">Dark Light mode Website</h1>
      <p className="font-black">Hello !! my React v19 Fans</p>
      <button onClick={hendleToggleThem} className="bg-blue-600 p-4 rounded-3xl cursor-pointer">
        {Them === "dark" ? "Switch to Light mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};
