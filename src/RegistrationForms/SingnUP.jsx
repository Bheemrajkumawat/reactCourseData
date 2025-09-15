import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SingnUP() {
  const navigate = useNavigate();
  const [data, SetData] = useState({
    name: "",
    LastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [user, setUser] = useState(null);

  const handleonchangedata = (e) => {
    SetData({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    // console.log(data);
    localStorage.setItem("mydata", JSON.stringify(data));

    setUser(data);

    SetData({
      name: "",
      LastName: "",
      email: "",
      password: "",
      phoneNumber: "",
    });
    navigate("/login");
  };
  return (
    <>
      <div className="font-bold p-10 ">
        <p>
          Hello my name is
          <span className="text-emerald-400">
            {user?.name},{user?.LastName}{" "}
          </span>
          my email Addrass is
          <span className="text-fuchsia-700">{user?.Email}</span>
          and my phone number is
          <span className="text-blue-500">{user?.phoneNumber}</span>
        </p>
      </div>
      <div className="w-screen h-screen bg-white flex  justify-center items-center ">
        <div className="w-100 h-170 bg-white shadow-xl/30 flex  flex-col justify-between item ">
          <div className=" mt-8">
            <span className="font-bold text-4xl">SingnUP</span>
            <p className="font-black p-3">plase create an account</p>
          </div>
          <form onSubmit={handleSubmitData} className="flex  flex-col p-3 ">
            <span className="">First Name:</span>
            <input
              type="text"
              name="name"
              value={data.name}
              required
              placeholder="Enter your First name"
              className="bg-blue-200 px-24 py-3 rounded-2xl mt-3"
              onChange={handleonchangedata}
            />
            <span> LastName </span>
            <input
              type="text"
              name="LastName"
              value={data.LastName}
              placeholder="Enter your LastName"
              className="bg-blue-200 px-24 py-3 rounded-2xl  mt-3"
              onChange={handleonchangedata}
            />
            <span> Enter Email </span>
            <input
              type="text"
              name="email"
              value={data.email}
              required
              placeholder="Enter your Email"
              className="bg-blue-200 px-24 py-3 rounded-2xl mt-3"
              onChange={handleonchangedata}
            />
            <span> Enter password</span>
            <input
              type="password"
              name="password"
              value={data.password}
              required
              placeholder="Enter your Password"
              className="bg-blue-200 px-24 py-3 rounded-2xl mt-3"
              onChange={handleonchangedata}
            />
            <span> Enter phoneNumber </span>
            <input
              type="text"
              name="phoneNumber"
              value={data.phoneNumber}
              required
              placeholder="Enter your phoneNumber"
              className="bg-blue-200 px-24 py-3 rounded-2xl mt-3"
              onChange={handleonchangedata}
            />
            <div>
              <button
                type="submit"
                className="bg-blue-600 m-0.5 px-40 py-2  mt-10 rounded-2xl"
              >
                singnUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SingnUP;
