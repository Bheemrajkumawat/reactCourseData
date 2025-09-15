import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onchangedata = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitdata = (e) => {
    e.preventDefault();
    console.log(user);

    const loginData = JSON.parse(localStorage.getItem("mydata"));

    if (
      loginData &&
      loginData.email === user.email &&
      loginData.password === user.password
    ) { 
      localStorage.setItem("LoginData", JSON.stringify(loginData));
      alert("login seccessful!");
      navigate("/project");
    } else {
      alert("Invalid Credentials!");
    }
    setUser({ name: "", email: "", password: "" });
  };
  return (
    <>
      <div>
        <div>
          <div>
            <h1>Login page</h1>
          </div>
          <div>
            <form onSubmit={onSubmitdata}>
              <input
                type="text"
                name="name"
                value={user.name}
                required
                placeholder="Enter the name"
                onChange={onchangedata}
              />
              <input
                type="email"
                name="email"
                value={user.email}
                required
                placeholder="Enter the email"
                onChange={onchangedata}
              />
              <input
                type="password"
                name="password"
                value={user.password}
                required
                placeholder="Enter the password"
                onChange={onchangedata}
              />

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
