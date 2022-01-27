import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

export function Footer() {
  return (
    <section className="footerCtnr PDFfooterCtnr">
      <h1>Keep In Touch</h1>
      <article>
        <p>I'm currently open to work as a</p>
        <p>Full Stack Developer</p>
      </article>
      <p>Let's get in touch and talk more about your projects</p>

      <article className="TbLinkBtnCtnr footerBtnCtnr">
          <Button id="TbLinkBtn" variant="outlined" startIcon={<GitHubIcon />}>
            Github
          </Button>         
          <Button
            id="TbLinkBtn"
            variant="outlined"
            startIcon={<LinkedInIcon />}
          >
            LinkedIn
          </Button>
          <Button id="TbLinkBtn" variant="outlined" startIcon={<MailIcon />}>
            Email
          </Button>
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
