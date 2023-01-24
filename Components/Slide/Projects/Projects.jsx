import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import { MainHeadingWrapper } from "../../Elements/Elements";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import monkey from "../../Images/monkey.PNG"
import pexel from "../../Images/pexel.PNG"
import flipkart from "../../Images/flipkart.PNG"
const useStyles = makeStyles((theme) => ({
  root: {
    overflowY: "scroll",
    padding: "100px 0 ",
  },
}));

const BridgeTwo = styled.div`
  padding-top: 150px;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};

  /* min-height: 400px; */
  z-index: 99;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  > div:nth-child(2) {
    padding: 50px 0;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    grid-row-gap: 20px;
    width: 90%;
    margin: 30px auto;
    align-items: center;
    justify-content: space-evenly;
    background-size: cover;
    background-position: center;
  }
`;

let projectArray = [
  // {
  //   img: swiggy,
  //   title: "Swiggy ",
  //   description: "Swiggy is an Indian online food ordering and delivery platform",
  //   techStack: ["React", "CSS", "JavaScript"],
  //   repoLink: "https://github.com/richabot/Swiggy",
  //   demoLink: "https://gorgeous-yeot-ae4a66.netlify.app/",
    
  //   blogLink: "#",
  //   features: [
  //     "Signup and Login.",
  //     "A user can add a product to cart or to wishlist.",
  //     "A user can customise the search list using filters",
  //     "A user can order by filling in the required details",
  //     " payment page checkout page",
  //   ],
  // },
  // {
  //   img: pexel,
  //   title: "Pexels",
  //   description:
  //     "Pexels is a provider of stock photography and stock footage. It was founded in Germany in 2014 and maintains a library with over 3.2 million free stock photos and videos.",
  //   techStack: ["React", "CSS", "JavaScript"],
  //   repoLink: "https://github.com/richabot/Pexels-Clone",
  //   demoLink:
  //     "https://famous-babka-3b2c52.netlify.app",
  
  //   blogLink: "#",
  //   features: [
  //     "Search for stock Photos and videos",
  //     "Download Photos and Videos",
  //     "Infinite Scrolling",
  //     "New Search Prediction (suggest similar words)",
  //     " payment page checkout page",
  //   ],
  // },
 
  // {
  //   img: sugar,
  //   title: "Sugar Clone",
  //   description:
  //     "Sugar is an Indian e-commerce company. It sells beauty, wellness and fashion products across websites, mobile apps.",
  //   techStack: ["HTML","MongoDB","Express", "CSS", "JavaScript","React"],
  //   repoLink: "https://github.com/richabot/Sugar-clone",
  //   demoLink: "https://moonlit-muffin-d148e1.netlify.app/",
    
  //   blogLink: "#",
  //   features: [
  //     " Sign in /Signup ",
  //     "Products Page",
  //     "Filter Details ",
  //     "Payment Features",
  //   ],
  // },

  {
    img: monkey,
    title: "Survey Monkey Clone ",
    description: "A global leader in survey software. 20 million questions answered daily.",
    techStack: ["React","CSS", "JavaScript"],
    repoLink: "https://github.com/Ace0012/smooth-dock-1057",
    demoLink: "https://topsurvey.vercel.app/",
    
    blogLink: "#",
    features: [
      "Landing page for Monkey Survey",
      "Login and Signup for the user account",
      "Password stored in hashed form (user privacy)",
      " Display all surveys and surveys created by the user",
     
    ],
  },
  {
    img: flipkart,
    title: "Flipkart Clone",
    description:
      "Pexels is a provider of stock photography and stock footage. It was founded in Germany in 2014 and maintains a library with over 3.2 million free stock photos and videos.",
    techStack: ["React", "CSS", "JavaScript"],
    repoLink: "https://github.com/Ace0012/Flipkart-Clone-Project",
    demoLink:
      "https://famous-babka-3b2c52.netlify.app",
  
    blogLink: "#",
    features: [
      "Search for stock Photos and videos",
      "Download Photos and Videos",
      "Infinite Scrolling",
      "New Search Prediction (suggest similar words)",
      " payment page checkout page",
    ],
  },
 
  
  




];

function Projects() {
  const [panel, setPanel] = React.useState(false);
  let [currentProject, setCurrentProject] = React.useState({});
  const classes = useStyles();
  return (
    <div id="projects">
      <BridgeTwo backgroundImg={currentProject.img}>
        <MainHeadingWrapper>
          <h1>Projects</h1>
          <div></div>
        </MainHeadingWrapper>
        <div>
          {projectArray?.map((project) => (
            <ProjectCard
              key={project.title}
              setCurrentProject={setCurrentProject}
              setPanel={setPanel}
              {...project}
            ></ProjectCard>
          ))}
        </div>
        <Modal
          className={classes.root}
          open={panel}
          onClose={() => setPanel(false)}
        >
          <ProjectDetail
            {...currentProject}
            setPanel={setPanel}
          ></ProjectDetail>
        </Modal>
      </BridgeTwo>
    </div>
  );
}

export default Projects;
