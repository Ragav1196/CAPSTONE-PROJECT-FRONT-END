import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { AboutMe } from "./AboutMe";
import { ProjectsHeading } from "./ProjectsHeading";
import { Projects } from "./Projects";

export function Content() {
  return (
    <section className="TbContentCtnr">
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
        <Button id="TbLinkBtn" variant="outlined" startIcon={<GitHubIcon />}>
          Github
        </Button>
        <Button id="TbLinkBtn" variant="outlined" startIcon={<LinkedInIcon />}>
          LinkedIn
        </Button>
        <Button id="TbLinkBtn" variant="outlined" startIcon={<MailIcon />}>
          Email
        </Button>
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
        <Button id="TbLinkBtn" variant="outlined" startIcon={<GitHubIcon />}>
          Github
        </Button>
        <Button id="TbLinkBtn" variant="outlined" startIcon={<LinkedInIcon />}>
          LinkedIn
        </Button>
        <Button id="TbLinkBtn" variant="outlined" startIcon={<MailIcon />}>
          Email
        </Button>
      </article>

      <p>Developed by Ragavendiran Panchatsharam</p>
    </section>
  );
}
