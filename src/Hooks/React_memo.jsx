import React, { useState } from "react";
import ChildMemo from "./ChildMemo";

function React_memo() {
  const [count, setCount] = useState(0);
  const mydata = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h1>count:{count}</h1>
        <button onClick={mydata}>increment</button>
      </div>

      <ChildMemo />
    </>
  );
}

export default React_memo;
