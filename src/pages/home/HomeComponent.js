import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import WorkTogether from "../../containers/workTogether/WorkTogether";
import AboutMe from "../../containers/aboutMe/AboutMe";
import Work from "../../containers/work/Work";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <AboutMe theme={this.props.theme} />
        <Work theme={this.props.theme} />
        {/* <Skills theme={this.props.theme} /> */}
        <WorkTogether theme={this.props.theme}></WorkTogether>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
