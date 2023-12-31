import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class SoftwareSkill extends React.Component {
  render() {
    return (
      <div className="software-skills-main-div">
        {this.props.logos.map((logo) => {
          return (
            <div className="dev-icons">
              <OverlayTrigger
                key={logo.skillName}
                placement={"bottom"}
                overlay={
                  <Tooltip id={`tooltip-bottom`}>
                    <strong>{logo.skillName}</strong>
                  </Tooltip>
                }
              >
                <li className="software-skill-inline" name={logo.skillName}>
                  {logo.fontAwesomeClassname && (
                    <span
                      className="iconify"
                      data-icon={logo.fontAwesomeClassname}
                      style={logo.style}
                      data-inline="false"
                    ></span>
                  )}
                  {!logo.fontAwesomeClassname && logo.imageSrc && (
                    <img
                      className="skill-image"
                      style={logo.style}
                      src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
                      alt={logo.skillName}
                    />
                  )}
                </li>
              </OverlayTrigger>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SoftwareSkill;
