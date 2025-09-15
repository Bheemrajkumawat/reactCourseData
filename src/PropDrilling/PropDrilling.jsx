import React from "react";

function PropDrilling() {
  const data = "my name is bheemraj";
  return (
    <div>
      <Childdata mydata={data}/>
    </div>
  );
}

export default PropDrilling;

const Childdata = ({mydata}) => {
  return (
    <>
      <Childdata2 alldata={mydata} />
    </>
  );
};


const Childdata2 = ({alldata}) => {
  return (
    <>
      <h1>{alldata}</h1>
    </>
  );
};

// prop drilling in react js 