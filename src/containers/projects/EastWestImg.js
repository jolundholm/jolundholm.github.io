import React, { Component } from "react";

export default class EastWestImg extends Component {
  render() {
    const theme = this.props.theme;

    const backgroundImage = require(`../../assets/images/projects/east-west-gallery.webp`);

    return <img src={backgroundImage} />;
  }
}
