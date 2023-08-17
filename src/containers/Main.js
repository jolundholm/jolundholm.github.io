import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import ProjectsPage from "../pages/projects/ProjectsPage";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    return (
      <>
        <BrowserRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Home {...props} theme={this.props.theme} />}
            />
            <Route
              path="/home"
              render={(props) => <Home {...props} theme={this.props.theme} />}
            />
            <Route
              path="/experience"
              exact
              render={(props) => (
                <Experience {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/contact"
              render={(props) => (
                <Contact {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/projects"
              render={(props) => (
                <ProjectsPage {...props} theme={this.props.theme} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
