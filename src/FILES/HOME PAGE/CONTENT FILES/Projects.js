import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

export function Projects() {
  return (
    <section className="projectsCtnr">
      <article>
        <div>
          <img
            className="ProjectImg"
            src="https://d33wubrfki0l68.cloudfront.net/61ec2a303a060400087bab2e/screenshot_2022-01-22-16-01-49-0000.png"
            alt="project"
          />
        </div>

        <div className="ProjectsTitleCtnr">
          <div className="ProjectsTitle">
            <p>CRM APP</p>
            <div>
              <Link
                to={{
                  pathname:
                    "https://github.com/Ragav1196/HACKATHON-MODULE-2-FRNT-END",
                }}
                target="_blank"
              >
                <IconButton id="ProjectGitIcon" aria-label="GitHub">
                  <GitHubIcon />
                </IconButton>
              </Link>
              <Link
                to={{
                  pathname: "https://angry-mcclintock-279e94.netlify.app/",
                }}
                target="_blank"
              >
                <IconButton id="ProjectLaunchIcon" aria-label="Launch">
                  <LaunchIcon />
                </IconButton>
              </Link>
            </div>
          </div>
          <div className="projectLanguageBtn">
            <Button id="reactIcon" variant="outlined">
              REACT
            </Button>
            <Button id="mongoIcon" variant="outlined">
              MONGO DB
            </Button>
            <Button id="nodeIcon" variant="outlined">
              NODE JS
            </Button>
          </div>
          <div className="projectsDescription">
            <p>
              Customer relationship management (CRM) is a technology for
              managing all your company's relationships and interactions with
              customers and potential customers.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
