import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { context } from "./Home";
import { useContext } from "react";

export function TopBar() {
  // TO TOGGLE HIDE AND SHOW TOPBAR MENU:
  const { TbMenuBar, setTbMenuBar } = useContext(context);
  return (
    <section className="topBarCntr">
      <p>HOME</p>
      <IconButton
        onClick={() => setTbMenuBar(!TbMenuBar)}
        id="TbMenuIcon"
        aria-label="delete"
      >
        <MenuIcon />
      </IconButton>
    </section>
  );
}
