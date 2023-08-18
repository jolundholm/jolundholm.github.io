import React, { Component } from "react";
import Header from "../../components/header/Header";
import Projects from "../../containers/projects/Projects";
import Footer from "../../components/footer/Footer";

class ProjectsPage extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <Header
          theme={theme}
          seoTitle={"Projects | Jonas Lundholm"}
          seoDescription={
            "Portfolio of projects I've worked on. Mainly built using React, HTML5 and CSS."
          }
        />
        <Projects theme={theme} />
        <Footer theme={theme} />
      </div>
    );
  }
}

export default ProjectsPage;
