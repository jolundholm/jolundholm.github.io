import React, { Component } from "react";
import "./WorkProject.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { Fade } from "react-reveal";
import Image from "../../components/image/Image.js";

class WorkProject extends Component {
  render() {
    const theme = this.props.theme;
    const project = this.props.project;
    console.log(project);

    const workTextClassName =
      project.imageAlign === "left"
        ? "work-text-div-left"
        : "work-text-div-right";

    return (
      <div className="work-main-div">
        {project.imageAlign === "left" && (
          <div className="work-image-div">
            <h1 className="work-heading-mobile" style={{ color: theme.text }}>
              {/* For mobile we want the project heading to show up before the image*/}
              {project.title}
            </h1>
            <Image
              src={require("../../assets/images/projects/east-west-gallery.webp")}
            />
          </div>
        )}
        <div className={workTextClassName}>
          <span className="work-heading-desktop" style={{ color: theme.text }}>
            {/* For desktop we want the project heading to show up after the image*/}
            {project.title}
          </span>
          <Fade right duration={500}>
            <div
              className="work-description"
              dangerouslySetInnerHTML={{ __html: project.descriptionHtml }}
            ></div>
          </Fade>
          <Fade right duration={500}>
            <div className="work-description">
              {project.skills.map((skillSentence) => {
                return (
                  <p
                    className="subTitle skills-text"
                    style={{ color: theme.secondaryText }}
                  >
                    {skillSentence}
                  </p>
                );
              })}
            </div>
          </Fade>
          <Fade right duration={500}>
            <div className="projects-links-and-software-skills-container">
              <div className="software-skills-container">
                <SoftwareSkill logos={project.softwareSkills} />
              </div>
            </div>
          </Fade>
        </div>
        {project.imageAlign === "right" && (
          <div className="work-image-div">
            <h1 className="work-heading-mobile" style={{ color: theme.text }}>
              {/* For mobile we want the project heading to show up before the image*/}
              {project.title}
            </h1>
            <Image
              src={require("../../assets/images/work/web-application.webp")}
            />
          </div>
        )}
      </div>
    );
  }
}

export default WorkProject;
