// import React, { useEffect, useState } from "react";

// function UseEffect() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//       console.log("my data incerment",count)
//     return () => {
//         console.log("bheemraj")
//     };
//   },);

//   const countdata=()=>{
//       setCount(count + 1)
//   }
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={countdata}>count + </button>
//     </div>
//   );
// }

// export default UseEffect;

import React, { useEffect, useState } from "react";

function UseEffect() {
  const [date, setDate] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const newdate = new Date();
      setDate(newdate.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div>
      <p>Date:{date}</p>
    </div>
  );
}

export default UseEffect;
