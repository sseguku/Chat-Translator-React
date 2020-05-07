import React, { Component } from "react";
import { Container, row } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layouts/Header";
import Overview from "./components/pages/overview/Overview";
import Footer from "./components/layouts/Footer";
import Terms_privacy from "./components/pages/Terms_privacy";
import Download from "./components/pages/Download";
import Features from "./components/pages/Features";
import About from "./components/pages/About";
export class App extends Component {
  render() {
    return (
      <Router>
        <Container fluid>
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <Overview />
              </React.Fragment>
            )}
          />
          <Route path="/features" component={Features} />
          <Route path="/download" component={Download} />
          <Route path="/about" component={About} />
          <Route path="/terms_privacy" component={Terms_privacy} />
          <Footer />
        </Container>
      </Router>
    );
  }
}

const topSpacerStyle = {
  margin: "100px",
};
const containerStyle = {
  width: "100%",
};
export default App;
