import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <section data-aos="flip-right" className="footerCtnr">
      <h1>Keep In Touch</h1>
      <article>
        <p>I'm currently open to work as a</p>
        <p>Full Stack Developer</p>
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

      <p>
        Developed by <span>Ragavendiran Panchatsharam</span>
      </p>
      <p>
        Built with <span>React JS</span>, <span>Node JS</span> &{" "}
        <span>Mongo DB</span>
      </p>
      <p>
        Hosted on <span>Netlify</span>
      </p>
    </section>
  );
}
