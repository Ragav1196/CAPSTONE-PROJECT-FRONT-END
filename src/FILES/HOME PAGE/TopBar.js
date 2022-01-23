import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export function TopBar() {
    return (
        <section className="topBarCntr">
            <p>HOME</p>
            <IconButton id="TbMenuIcon" aria-label="delete">
                <MenuIcon />
            </IconButton>
        </section>
    );
}
