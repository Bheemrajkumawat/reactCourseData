import React from "react";
import Contact from "./Contact.json";

function Contactpage() {
  console.log(Contact);
  return (
    <>
      <div>
        <div>
          {Contact.map((value) => {
            return (
              <ul key={value.id}>
                <li>{value.name}</li>
                <li>{value.email}</li>
                <li>{value.mobile}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Contactpage;
