import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../../styles/Header.css";
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark">
      <Navbar.Brand href="/">
        <img
          src={process.env.PUBLIC_URL + "/ct_logo60.png"}
          width="60"
          height="60"
          className="d-inline-block align-top"
        />{" "}
      </Navbar.Brand>
      <Navbar.Brand href="/">Chat Translator</Navbar.Brand>

      <Navbar.Toggle aria-controls="aria-controls" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/features">Features</Nav.Link>
          <Nav.Link href="/download">Download</Nav.Link>
          <Nav.Link href="#">Coverage</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
//#627862 primary
//#314831 dark
//#62af62 light
//##e2e2e2 low_bg
// #d9d9d9 content_bg
//

const navbarBrandStyle = {
  fontSize: "30px",
  fontWeight: "600",
};
export default Header;
