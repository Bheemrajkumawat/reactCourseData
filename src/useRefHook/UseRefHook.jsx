import React, { useRef } from "react";

function UseRefHook() {
  //   const username = document.getElementById("username");
  //   const password = document.getElementById("password");
  const username = useRef(null);
  const password = useRef(null);
  console.log(username);

  function handlesubmit(e) {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          id="username"
          ref={username}
          className="bg-black text-white"
        />
        <br />
        <br />
        <input
          type="password"
          id="password"
          ref={password}
          className="bg-black text-white"
        />
        <br />
        <button type="submit" className="bg-amber-500">
          submit
        </button>
      </form>
    </div>
  );
}

export default UseRefHook;
