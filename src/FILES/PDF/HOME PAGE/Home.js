import React from "react";
import { TopBar } from "./TopBar";
import { Content } from "./CONTENT FILES/Content";
import { createContext, useEffect, useState } from "react";

export const context = createContext(null);

export const Home = React.forwardRef((props, ref) => {
  // TO GET PROJECT DETAILS:
  const [PrjDetails, setPrjDetails] = useState("");

  const PrjDetailsfn = () => {
    fetch("https://capstone-project-guvi.herokuapp.com/data", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => setPrjDetails(data));
  };
  useEffect(() => PrjDetailsfn(), []);

  // CONTEXT
  const obj = { PrjDetails, setPrjDetails };
  return (
    <context.Provider value={obj}>
      {PrjDetails ? <section className="PDFMainCntr" ref={ref}>
        <Content />
      </section> : ""}
    </context.Provider> 
  );
});
