import { useEffect, useState } from "react";
import DyamicAccordion from "../DynamicAccordion in react19/DyamicAccordion.json";
import "../DynamicAccordion in react19/Accordion.css";
import Accordiondata from "./Accordiondata";
export const Accordion = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);

  useEffect(() => {
    setData(DyamicAccordion);
    // console.log(DyamicAccordion);
  },[]);

  //handleButton

  const handleButton = (id) => {
    setActiveId((prevId) => (prevId === id ? false : id));
  };
  return (
    <>
      <h2 className="text-center">FAQ - Accordion Example</h2>

      <div class="accordion">
        {data.map((curElem) => {
          return (
            <>
              <Accordiondata
                key={curElem.id}
                curElem={curElem}
                isActive={activeId === curElem.id}
                onToggle={() => handleButton(curElem.id)}
              />
            </>
          );
        })}
      </div>
    </>
  );
};
