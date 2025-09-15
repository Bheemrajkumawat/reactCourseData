import React, { useState, useMemo } from "react";

function ExpensiveCalculation(num) {
  console.log("Calculation चल रही है...");
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += num;
  }
  return result;
}

function UseMemohook() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);

  const cleardata = () => {
    setCount(0);
  };

  const memoizedResult = useMemo(() => ExpensiveCalculation(num), [num]);

  return (
    <div>
      <h2>Expensive Result: {memoizedResult}</h2>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <button onClick={cleardata}>button</button>
    </div>
  );
}

export default UseMemohook;
