import React from "react";
import { useCard } from "./Context";

function CardDetail() {
  const { selectedCard } = useCard();

  return (
    <div className="mt-6 w-full max-w-md mx-auto p-6 border border-blue-400 rounded-xl shadow-lg bg-white text-center">
      {selectedCard ? (
        <>
          <h2 className="text-2xl font-bold text-blue-600 mb-3">Selected Card</h2>
          <h3 className="text-lg font-semibold text-gray-800">{selectedCard.name}</h3>
          <p className="text-gray-600">{selectedCard.email}</p>
          <p className="text-gray-600">{selectedCard.phoneNumber}</p>
        </>
      ) : (
        <p className="text-gray-500 italic">Click on a card to see details here</p>
      )}
    </div>
  );
}

export default CardDetail;
