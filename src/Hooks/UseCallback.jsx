import React, { useCallback, useState } from "react";

const Child = React.memo(function Child({ onClick }) {
  console.log("Child render ");
  return <button onClick={onClick}>Click Me</button>;
});

function UseCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("button clicked!");
  }, []);

  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      <Child onClick={handleClick} />
    </div>
  );
}

export default UseCallback;
