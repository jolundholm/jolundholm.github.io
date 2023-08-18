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
        <Header
          theme={this.props.theme}
          seoTitle={"Home | Jonas Lundholm - Freelance Software Developer"}
          seoDescription={
            "Jonas Lundholm is an experienced Freelance Software Developer focusing on building websites using modern technologies and great web design. With over 5 years in the industry I've worked with multiple successful startups"
          }
        />
        <Greeting theme={this.props.theme} />
        <Work theme={this.props.theme} />
        <WorkTogether theme={this.props.theme}></WorkTogether>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
