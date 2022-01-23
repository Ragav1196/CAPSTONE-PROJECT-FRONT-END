import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import { context } from "./Home";

export function TbMenu() {
  // TO TOGGLE HIDE AND SHOW TOPBAR MENU:
  const { TbMenuBar, setTbMenuBar } = useContext(context);
  const styles = {
    transform: TbMenuBar ? "translate(0px)" : "translate(240px)",
  };

  return (
    <section style={styles} className="TbMenuCtnr">
      <article>
        <h1>MENU BAR</h1>
        <IconButton
          onClick={() => setTbMenuBar(false)}
          aria-label="closeMenuBar"
        >
          <CloseIcon />
        </IconButton>
      </article>
      <article>
        <Button variant="text">HOME</Button>
        <Button variant="text">PROJECTS</Button>
      </article>
    </section>
  );
}
