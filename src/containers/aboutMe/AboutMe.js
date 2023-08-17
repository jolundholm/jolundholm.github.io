import React, { Component } from "react";
import "./AboutMe.css";
import { aboutMe } from "../../portfolio";
import { Fade } from "react-reveal";
import Image from "../../components/image/Image.js";

class AboutMe extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <div className="projects-main-div">
          <div className="projects-image-div">
            <h1
              className="projects-heading-mobile"
              style={{ color: theme.text }}
            >
              {/* For mobile we want the project heading to show up before the image*/}
              {aboutMe.title}
            </h1>
            <Image src={require("../../assets/images/aboutMe/jonas.webp")} />
          </div>
          <div className="projects-text-div">
            <h1
              className="projects-heading-desktop"
              style={{ color: theme.text }}
            >
              {" "}
              {/* For desktop we want the project heading to show up after the image*/}
              {aboutMe.title}
            </h1>
            <a
              className="projects-link"
              href={"https://art-gallery-demo.jlundholm.com/"}
            >
              {aboutMe.url}
            </a>

            <Fade right duration={500}>
              <span className="projects-text" style={{ color: theme.text }}>
                {aboutMe.description}
              </span>
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
      </div>
    );
  }
}

export default AboutMe;
