// import React, { useId } from "react";

// function UseIdHook() {
//   const username = useId();
//   const password = useId();

//   return (
//     <>
//       <form action="">
//         <div>
//           <label htmlFor={username}>userName</label>
//           <input type="text" id={username} placeholder="enter the name" />
//         </div>
//         <div>
//           <label htmlFor={password}>password</label>
//           <input
//             type="password"
//             id={password}
//             placeholder="enter the password"
//           />
//         </div>
//       </form>
//     </>
//   );
// }

// export default UseIdHook;



import React, { useId } from "react";

function UseIdHook() {
  const id= useId();
 

  return (
    <>
      <form action="">
        <div>
          <label htmlFor={id + "username"}>userName</label>
          <input type="text" id={id + "username"} placeholder="enter the name" />
        </div>
        <div>
          <label htmlFor={id + "password"}>password</label>
          <input
            type="password"
            id={id + "password"}
            placeholder="enter the password"
          />
        </div>
      </form>
    </>
  );
}

export default UseIdHook;
