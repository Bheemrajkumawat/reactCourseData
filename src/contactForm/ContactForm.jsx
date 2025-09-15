import React, { useState } from "react";

function ContactForm() {
  const [data, setdata] = useState({
    username: "",
    password: "",
    message: "",
  });

  const mysendingdata = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  };

  const mysenddata = (e) => {
    e.preventDefault();
    console.log(data);

    setdata({
      username: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-blend-screen h-screen bg-amber-200 flex  justify-center items-center ">
      <div className="bg-white w-180 h-150 flex flex-col  justify-center items-center rounded-2xl shadow-xl/30 ">
        <h1 className="text-2xl font-bold text-shadow-lg/30 ">Contact Form</h1>
        <form className="flex flex-col justify-center gap-2.5 ">
          <label htmlFor="username" className="font-bold text-shadow-lg ">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={data.username}
            required
            autoComplete="off"
            className="py-5 px-40 bg-amber-300 rounded-2xl"
            onChange={mysendingdata}
          />
          <label htmlFor="password" className="font-bold text-shadow-lg ">
            Password
          </label>
          <input
            type="email"
            name="email"
            value={data.email}
            required
            autoComplete="off"
            className="py-5 px-40 bg-amber-300 rounded-2xl"
            onChange={mysendingdata}
          />
          <label htmlFor="message" className="font-bold text-shadow-lg ">
            Message
          </label>
          <textarea
            name="message"
            type="text"
            value={data.message}
            required
            autoComplete="off"
            rows="6"
            className="py-5 px-40 bg-amber-300 rounded-2xl"
            onChange={mysendingdata}
          ></textarea>

          <button
            type="submit"
            onClick={mysenddata}
            className=" py-4 bg-blue-500 rounded-2xl font-bold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
