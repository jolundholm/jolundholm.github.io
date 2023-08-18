import React, { Component } from "react";
import "./ProjectsSection.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { projects } from "../../portfolio";
import { Fade } from "react-reveal";
import Image from "../../components/image/Image.js";

class ProjectSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <>
        {projects.data.map((project) => {
          return (
            <div className="projects-main-div">
              {project.imageAlign === "left" && (
                <div className="projects-image-div">
                  <span
                    className="projects-heading-mobile"
                    style={{ color: theme.text }}
                  >
                    {/* For mobile we want the project heading to show up before the image*/}
                    {project.title}
                  </span>
                  <Image
                    src={require("../../assets/images/projects/east-west-gallery.webp")}
                  />
                </div>
              )}
              <div className="projects-text-div">
                <span className="projects-heading-desktop">
                  {" "}
                  {/* For desktop we want the project heading to show up after the image*/}
                  {project.title}
                </span>
                <a className="projects-link" href={project.url}>
                  {project.displayUrl}
                </a>

                <Fade right duration={500}>
                  <span className="projects-text" style={{ color: theme.text }}>
                    {project.description}
                  </span>
                </Fade>
                <Fade>
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
      </>
    );
  }
}

export default ProjectSection;
