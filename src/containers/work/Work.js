import React from "react";
import "./WorkSection";
import WorkSection from "./WorkSection";
import { Fade } from "react-reveal";

export default function Work(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div>
        <Fade bottom duration={500} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            Services
          </h1>
        </Fade>
      </div>
      <WorkSection theme={theme} />
    </div>
  );
}
