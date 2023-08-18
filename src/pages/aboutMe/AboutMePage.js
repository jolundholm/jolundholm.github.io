import React, { Component } from "react";
import Header from "../../components/header/Header";
import AboutMe from "../../containers/aboutMe/AboutMe";
import Footer from "../../components/footer/Footer";

class AboutMePage extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <AboutMe theme={theme} />
        <Footer theme={theme} />
      </div>
    );
  }
}

export default AboutMePage;
