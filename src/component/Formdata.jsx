import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Formdata() {
  const [value, setValue] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
   const navigate = useNavigate();

  const hendleFormdata = (e) => {

    const { name, value: fieldValue } = e.target;

    // Set value to the state dynamically
    setValue({ ...value, [name]: fieldValue });

    // Reset error message if the field is filled
    if (fieldValue.trim() !== "") {
      setError("");
    }
  };  
  const hendleSubmit = (e) => {
    e.preventDefault();
    if (!value.name || !value.email || !value.password) {
      setError("All fields are required.");
      return;
    } else {
      setError("");
    }

    // email validation

    // email validation
    if (!value.email.includes("@") || !value.email.includes(".")) {
      setError("Enter a valid email.");
      return;
    }

    // password validation (minimum 6 characters)
    if (value.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    localStorage.setItem("logindata", JSON.stringify(value));
    console.log("login data", value);
    // Reset form values
    setValue({ name: "", email: "", password: "" });
  navigate("/");

  };
  const hendleLogoutbutton = () => {
    localStorage.removeItem("logindata");
    setValue({ name: "", email: "", password: "" });
    console.log("login the web site");
  };
  return (
    <>
      <section className="w-screen h-screen bg-amber-700 flex  justify-center items-center text-center ">
        <div className="w-100 h-100 flex flex-col justify-center items-center gap-3. text-white bg-amber-100 border border-green-950 rounded-2xl shadow-white-500/50 ">
          <div className="text-2xl font-bold ">
            <h1 className="text-black font-bold">Login</h1>
          </div>
          <div className="flex flex-col justify-center items-center  text-white rounded ">
            <form action="" className="flex flex-col gap-2.5">
              <input
                className="bg-amber-300 font-bold text-green-400 w-90 h-10 rounded text-center"
                type="text"
                name="name"
                value={value.name}
                placeholder="Enter your name"
                onChange={hendleFormdata}
              />
              <input
                className="bg-amber-300 font-bold text-green-400 w-90 h-10 rounded text-center"
                type="email"
                name="email"
                value={value.email}
                placeholder="Enter your email"
                onChange={hendleFormdata}
              />
              <input
                className="bg-amber-300 font-bold text-green-400 w-90 h-10 rounded text-center"
                type="password"
                name="password"
                value={value.password}
                placeholder="Enter your password"
                onChange={hendleFormdata}
              />
            </form>
            {/* Display error message */}
            {error && <span className="text-red-500 text-xs">{error}</span>}
            <div className="flex gap-3.5 justify-center  items-center text-center">
              <button
                className="bg-amber-600 font-bold text-black w-40 h-10 rounded-2xl m-3 pr-3"
                type="submit"
                onClick={hendleSubmit}
              >
                Login{" "}
              </button>
              <button
                className="bg-amber-600 font-bold text-black w-40 h-10 rounded-2xl"
                type="submit"
                onClick={hendleLogoutbutton}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Formdata;
