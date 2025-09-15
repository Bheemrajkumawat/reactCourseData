import React, { useReducer } from "react";
const initialState = {
  count: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: (state.count = 0) };

    default:
      return state;
  }
}

function ReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>count : {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>incerment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>dicrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default ReducerHook;
