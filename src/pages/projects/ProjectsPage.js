import React, { Component } from "react";
import Header from "../../components/header/Header";
import Projects from "../../containers/projects/Projects";

class ProjectsPage extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <Projects theme={theme} />
      </div>
    );
  }
}

export default ProjectsPage;
