import React, { Component } from "react";
import "./WorkSection.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { projects } from "../../portfolio";
import { Fade } from "react-reveal";
import Image from "../../components/image/Image.js";

class WorkSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {projects.data.map((project) => {
          return (
            <div className="work-main-div">
              {project.imageAlign === "left" && (
                <div className="projects-image-div">
                  <h1
                    className="projects-heading-mobile"
                    style={{ color: theme.text }}
                  >
                    {/* For mobile we want the project heading to show up before the image*/}
                    {project.title}
                  </h1>
                  <Image
                    src={require("../../assets/images/projects/east-west-gallery.webp")}
                  />
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
                ></a>

                <Fade right duration={500}>
                  <div>
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
            </div>
          );
        })}
      </div>
    );
  }
}

export default WorkSection;
