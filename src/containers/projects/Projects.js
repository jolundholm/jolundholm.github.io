import React from "react";
import "./Projects.css";
import ProjectSection from "./ProjectSection.js";
import { Fade } from "react-reveal";

export default function Projects(props) {
  const theme = props.theme;
  return (
    <div className="main">
      <div className="projects-header-div">
        <Fade bottom duration={500} distance="20px">
          <h1 className="projects-header" style={{ color: theme.text }}>
            Projects
          </h1>
        </Fade>
      </div>
      <ProjectSection theme={theme} />
    </div>
  );
}
