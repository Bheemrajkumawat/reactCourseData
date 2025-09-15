import React from "react";
import { useCard } from "./Context";

function CardList() {
  const { setSelectedCard } = useCard();

  const data = [
    {
      id: 1,
      name: "bheemraj",
      fullName: "kumawat",
      email: "bheemrajkumawat@gmail.com",
      phoneNumber: 9403094390,
    },
    {
      id: 2,
      name: "raj",
      fullName: "kumawat",
      email: "rajkumawat@gmail.com",
      phoneNumber: 9403094391,
    },
    {
      id: 3,
      name: "deendayal",
      fullName: "kumawat",
      email: "deendayaljkumawat@gmail.com",
      phoneNumber: 9403094398,
    },
    {
      id: 4,
      name: "deepak",
      fullName: "kumawat",
      email: "deepakjkumawat@gmail.com",
      phoneNumber: 9403094399,
    },
  ];

  return (
    <>
      <div className="bg-amber-500 min-h-50 flex flex-wrap justify-center items-center text-purple-500 gap-4 p-4">
        {data.map((value) => {
          return (
            <div
              key={value.id}
              onClick={() => setSelectedCard(value)} // ✅ Corrected
              className="bg-white rounded-xl shadow-md cursor-pointer flex flex-col justify-center items-center p-3 hover:bg-gray-100 transition"
            >
              <h1 className="font-bold text-lg">
                {value.name} {value.fullName}
              </h1>
              <p>{value.email}</p>
              <p>{value.phoneNumber}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CardList;
