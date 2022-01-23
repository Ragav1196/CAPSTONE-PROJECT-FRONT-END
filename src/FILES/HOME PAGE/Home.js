import { TopBar } from "./TopBar";
import { Content } from "./CONTENT FILES/Content";
import { TbMenu } from "./TbMenu";
import { createContext, useState } from "react";

const initialState = false;

export const context = createContext({});

export function Home() {
  // TO TOGGLE HIDE AND SHOW TOPBAR MENU:
  const [TbMenuBar, setTbMenuBar] = useState(initialState);

  const obj = { TbMenuBar, setTbMenuBar };

  return (
    <context.Provider value={obj}>
      <section>
        <TopBar />
        <Content />
        <TbMenu />
      </section>
    </context.Provider>
  );
}
