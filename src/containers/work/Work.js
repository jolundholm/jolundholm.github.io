import React from "react";
import "./Work.css";
import WorkSection from "./WorkSection";
import { Fade } from "react-reveal";

export default function Work(props) {
  const theme = props.theme;
  return (
    <div className="main" id="work">
      <div>
        <Fade>
          <h1 className="work-header" style={{ color: theme.text }}>
            Ways I can help you
          </h1>
        </Fade>
      </div>
      <WorkSection theme={theme} />
    </div>
  );
}
