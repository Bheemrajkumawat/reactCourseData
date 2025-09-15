import React, { forwardRef, useRef, useId } from "react";

function ForwardRefHool() {
  const username = useRef(null);
  const password = useRef(null);

  const handelFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };
  return (
    <div>
      <form onSubmit={handelFormSubmit}>
        <AfterReact19Input label="username" type="text" ref={username} />
        <AfterReact19Input label="password" type="password" ref={password} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default ForwardRefHool;

// const BeforeReact19Input = forwardRef((props, ref) => {
//   const { label, type } = props;
//   const id = useId();

//   return (
//     <>
//       <div>
//         <label htmlFor={id}>{props.label}</label>
//         <input id={id} type={type} ref={ref} />
//       </div>
//     </>
//   );
// });

function AfterReact19Input({ label, type, ref }) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} ref={ref} />
    </div>
  );
}
