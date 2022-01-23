import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { AboutMe } from "./AboutMe";
import { ProjectsHeading } from "./ProjectsHeading";
import { Projects } from "./Projects";
import { useContext } from "react";
import { context } from "../Home";
import { Link } from "react-router-dom";

export function Content() {
  // TO TOGGLE HIDE AND SHOW TOPBAR MENU:
  const { TbMenuBar, setTbMenuBar } = useContext(context);
  const styles = { opacity: TbMenuBar ? "0.3" : "1" };

  return (
    <section
      style={styles}
      onClick={() => setTbMenuBar(false)}
      className="TbContentCtnr"
    >
      <article className="TBBio" id="TbBio-1">
        <p>Hey there!, I'm-</p>
        <p className="TbMyName">Ragavendiran</p>
        <p className="TbMyName">Panchatsharam</p>
      </article>
      <article className="TBBio" id="TbBio-2">
        <p>
          <span>Software Engineer.</span> A self-taught developer with an
          interest in Computer Science.
        </p>
      </article>
      <article className="TBBio" id="TbBio-3">
        <p>🚀 Exploring opportunities and side projects.</p>
        <p>
          🎓 Currently an Informatics Student at Universitas Negeri Surabaya.
        </p>
      </article>
      <article className="TbLinkBtnCtnr">
        <Link to={{ pathname: "https://github.com/Ragav1196" }} target="_blank">
          <Button id="TbLinkBtn" variant="outlined" startIcon={<GitHubIcon />}>
            Github
          </Button>
        </Link>
        <Link
          to={{ pathname: "https://www.linkedin.com/signup" }}
          target="_blank"
        >
          <Button
            id="TbLinkBtn"
            variant="outlined"
            startIcon={<LinkedInIcon />}
          >
            LinkedIn
          </Button>
        </Link>
        <Link to={{ pathname: "mailto:ragavinrap@gmail.com" }} target="_blank">
          <Button id="TbLinkBtn" variant="outlined" startIcon={<MailIcon />}>
            Email
          </Button>
        </Link>
      </article>

      <>
        <AboutMe />
      </>

      <>
        <ProjectsHeading />
      </>

      <>
        <Projects />
        <Projects />
        <Projects />
      </>

      <>
        <Footer />
      </>
    </section>
  );
}

function Footer() {
  return (
    <section className="footerCtnr">
      <h1>Keep In Touch</h1>
      <article>
        <p>I'm currently open to work as a</p>
        <p>Front-end Developer</p>
      </article>
      <p>Let's get in touch and talk more about your projects</p>

      <article className="TbLinkBtnCtnr footerBtnCtnr">
        <Link to={{ pathname: "https://github.com/Ragav1196" }} target="_blank">
          <Button id="TbLinkBtn" variant="outlined" startIcon={<GitHubIcon />}>
            Github
          </Button>
        </Link>
        <Link
          to={{ pathname: "https://www.linkedin.com/signup" }}
          target="_blank"
        >
          <Button
            id="TbLinkBtn"
            variant="outlined"
            startIcon={<LinkedInIcon />}
          >
            LinkedIn
          </Button>
        </Link>
        <Link to={{ pathname: "mailto:ragavinrap@gmail.com" }} target="_blank">
          <Button id="TbLinkBtn" variant="outlined" startIcon={<MailIcon />}>
            Email
          </Button>
        </Link>
      </article>

      <p>Developed by Ragavendiran Panchatsharam</p>
    </section>
  );
}
