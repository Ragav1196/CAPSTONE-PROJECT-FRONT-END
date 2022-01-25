import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

export function Projects({ data }) {
  return (
    <section className="projectsCtnr">
      <article>
        <div>
          <Link to={{ pathname: `${data.netlify_link}` }} target="_blank">
            <img className="ProjectImg" src={data.project_img} alt="project" />
          </Link>
        </div>

        <div className="ProjectsTitleCtnr">
          <div className="ProjectsTitle">
            <p>{data.project_name}</p>
            <div>
              <Link
                to={{
                  pathname: `${data.git_link}`,
                }}
                target="_blank"
              >
                <IconButton id="ProjectGitIcon" aria-label="GitHub">
                  <GitHubIcon />
                </IconButton>
              </Link>
              <Link
                to={{
                  pathname: `${data.netlify_link}`,
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



/* 

[
 {
  "name": "AKSHAYA",
  "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
  "id": "1"
 },
 {
  "name": "RAMYA",
  "avatar": "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg",
  "id": "2"
 },
 {
  "name": "KARTHICK",
  "avatar": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "id": "3"
 },
 {
  "name": "RAKESH",
  "avatar": "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
  "id": "4"
 },
 {
  "name": "VIJAY",
  "avatar": "https://us.123rf.com/450wm/fizkes/fizkes2007/fizkes200701793/152407909-profile-picture-of-smiling-young-caucasian-man-in-glasses-show-optimism-positive-and-motivation-head.jpg?ver=6",
  "id": "5"
 },
 {
  "name": "VICKY",
  "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ-YHX2i3RvTDDmpfnde4qyb2P8up7Wi3Ww&usqp=CAU",
  "id": "6"
 }
]
*/