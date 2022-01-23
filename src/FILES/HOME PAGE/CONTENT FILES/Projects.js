import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import LaunchIcon from "@mui/icons-material/Launch";
import IconButton from "@mui/material/IconButton";

export function Projects() {
    return (
        <section className="projectsCtnr">
            <article>
                <div>
                    <img
                        className="ProjectImg"
                        src="https://abdulrahman.id/_next/image?url=https%3A%2F%2Fi.imgur.com%2FVY2D1A2.png&w=3840&q=75"
                        alt="project" />
                </div>

                <div className="ProjectsTitleCtnr">
                    <div className="ProjectsTitle">
                        <p>Creative@home</p>
                        <div>
                            <IconButton aria-label="GitHub">
                                <GitHubIcon />
                            </IconButton>
                            <IconButton aria-label="Launch">
                                <LaunchIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div>
                        <Button id="JSIcon" variant="outlined" startIcon={<MailIcon />}>
                            Javascript
                        </Button>
                        <Button id="sassIcon" variant="outlined" startIcon={<MailIcon />}>
                            Sass
                        </Button>
                    </div>
                    <div className="projectsDescription">
                        <p>
                            A website that provides roadmap for various fields in Programming
                            and help people learn to code for free.
                        </p>
                    </div>
                </div>
            </article>
        </section>
    );
}
