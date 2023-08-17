import React, { Component } from "react";
import "./ProjectsSection.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { projects } from "../../portfolio";
import { Fade } from "react-reveal";
import EastWestImg from "./EastWestImg";

class ProjectSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {projects.data.map((project) => {
          return (
            <div className="projects-main-div">
              {project.imageAlign === "left" && (
                <div className="projects-image-div">
                  <h1
                    className="projects-heading-mobile"
                    style={{ color: theme.text }}
                  >
                    {" "}
                    {/* For mobile we want the project heading to show up before the image*/}
                    {project.title}
                  </h1>
                  <EastWestImg />
                </div>
              )}
              <div className="projects-text-div">
                <h1
                  className="projects-heading-desktop"
                  style={{ color: theme.text }}
                >
                  {" "}
                  {/* For desktop we want the project heading to show up after the image*/}
                  {project.title}
                </h1>
                <a
                  className="projects-link"
                  href={"https://art-gallery-demo.jlundholm.com/"}
                >
                  {project.url}
                </a>

                <Fade right duration={500}>
                  <span className="projects-text" style={{ color: theme.text }}>
                    {project.description}
                  </span>
                </Fade>
                <Fade right duration={500}>
                  <div className="projects-links-and-software-skills-container">
                    <div className="software-skills-container">
                      <SoftwareSkill logos={project.softwareSkills} />
                    </div>
                  </div>
                </Fade>
              </div>
              {/* {project.imageAlign === "right" && (
                <Fade left duration={500}>
                  <div className="projects-image-div">
                    <GetSkillSvg fileName={project.fileName} theme={theme} />
                  </div>
                </Fade>
              )} */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProjectSection;
