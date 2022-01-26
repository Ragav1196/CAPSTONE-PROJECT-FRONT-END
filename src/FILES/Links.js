import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { Home } from "./HOME PAGE/Home";
import { createContext, useEffect, useState } from "react";
import { Content } from "./PROJECT PAGE/Content";

export const context = createContext(null);

export function Links() {
  // TO TOGGLE HIDE AND SHOW TOPBAR MENU:
  const [TbMenuBar, setTbMenuBar] = useState(false);

  // TO GET PROJECT DETAILS:
  const [PrjDetails, setPrjDetails] = useState("");

  const PrjDetailsfn = () => {
    fetch("https://capstone-project-guvi.herokuapp.com/", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((data) => setPrjDetails(data));
  };
  useEffect(() => PrjDetailsfn(), []);

  // CONTEXT
  const obj = { TbMenuBar, setTbMenuBar, PrjDetails, setPrjDetails };

  return (
    <context.Provider value={obj}>
      <section className="linkCntr">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:project">
            <Content />
          </Route>
        </Switch>
      </section>
    </context.Provider>
  );
}
