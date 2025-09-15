import React, { createContext, useContext, useState } from "react";
const CardContext = createContext();
export const useCard = () => useContext(CardContext);

function Context({ children }) {
  const [selectedCard, setSelectedCard] = useState(null);
  return (
    <div>
      <CardContext.Provider value={{ selectedCard, setSelectedCard }}>
        {children}
      </CardContext.Provider>
    </div>
  );
}

export default Context;
