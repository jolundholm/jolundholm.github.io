import React, { Component } from "react";
import "./WorkSection.css";
import WorkProject from "./WorkProject";
import { work } from "../../portfolio";

class WorkSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {work.data.map((project) => {
          return (
            <>
              {project.imageAlign === "left" && (
                <WorkProject theme={theme} key={project.id} project={project} />
              )}
              {project.imageAlign === "right" && (
                <WorkProject theme={theme} key={project.id} project={project} />
              )}
            </>
          );
        })}
      </div>
    );
  }
}

export default WorkSection;
