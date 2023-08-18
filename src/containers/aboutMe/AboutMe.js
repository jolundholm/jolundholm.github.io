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
        <div className="aboutme-main-div">
          <div className="aboutme-image-div">
            <h1
              className="aboutme-heading-mobile"
              style={{ color: theme.text }}
            >
              {/* For mobile we want the project heading to show up before the image*/}
              {aboutMe.title}
            </h1>
            <Image src={require("../../assets/images/aboutMe/jonas.webp")} />
          </div>
          <div className="aboutme-text-div">
            <h1 className="aboutme-heading-desktop">
              {" "}
              {/* For desktop we want the project heading to show up after the image*/}
              {aboutMe.title}
            </h1>
            <a
              className="aboutme-link"
              href={"https://art-gallery-demo.jlundholm.com/"}
            >
              {aboutMe.url}
            </a>

            <Fade right duration={500}>
              <div
                className="aboutme-description"
                dangerouslySetInnerHTML={{ __html: aboutMe.descriptionHtml }}
              />
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
