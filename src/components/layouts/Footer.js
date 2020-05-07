import React from "react";
import { Row, Col, Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <Container fluid style={containerStyle} sticky="bottom">
      <Row style={footerStyle}>
        {/** Column 1*/}
        <Col md={3} sm={6}>
          <ListGroup as="ul">
            <ListGroup.Item variant="dark" as="li">
              <h4>Chat Translator</h4>{" "}
            </ListGroup.Item>
            <ListGroup.Item variant="secondary">
              <Link to="/features">Features</Link>
            </ListGroup.Item>
            <ListGroup.Item variant="secondary" href="/download">
              <Link to="/download">Download</Link>
            </ListGroup.Item>
            <ListGroup.Item variant="secondary" href="terms_privacy">
              <Link to="/terms_privacy">Terms & Privacy</Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        {/** Column 2*/}
        <Col md={3} sm={6}>
          <ListGroup as="ul">
            <ListGroup.Item variant="dark" as="li">
              <h4>Download</h4>{" "}
            </ListGroup.Item>
            <ListGroup.Item variant="secondary">
              <a href="https://bit.ly/35yKjY1" target="_blank">
                Android
              </a>
            </ListGroup.Item>
            <ListGroup.Item variant="secondary">Bixby</ListGroup.Item>
            <ListGroup.Item variant="secondary">PC</ListGroup.Item>
          </ListGroup>
        </Col>
        {/** Column 3*/}
        <Col md={3} sm={6}>
          <ListGroup as="ul">
            <ListGroup.Item variant="dark" as="li">
              <h4>Company</h4>{" "}
            </ListGroup.Item>
            <ListGroup.Item variant="secondary">About Us</ListGroup.Item>
            <ListGroup.Item variant="secondary">Get in Touch</ListGroup.Item>
            <ListGroup.Item variant="secondary"> User Feedback</ListGroup.Item>
          </ListGroup>
        </Col>

        {/** Column 4*/}
        <Col md={3} sm={6}>
          <ListGroup as="ul">
            <ListGroup.Item variant="dark" as="li">
              <h4>Connect</h4>{" "}
            </ListGroup.Item>
            <ListGroup.Item variant="secondary">
              <a href="https://bit.ly/35Brvr2" target="_blank">
                Twitter
              </a>
            </ListGroup.Item>
            <ListGroup.Item variant="secondary">
              <a href="https://bit.ly/2SFNDLK" target="_blank">
                Facebook
              </a>
            </ListGroup.Item>
            <ListGroup.Item variant="secondary">
              Covered Languages
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <hr />
      </Row>
      {/** Bottom Footer*/}

      <Row style={copyrightStyle}>
        <Col></Col>
        <Col md="auto">
          © 2020 Chat Translator. <strong>Terms & Privacy.</strong>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
const containerStyle = {
  position: "absolute",
  flex: "1",
  left: "0",
};
const footerStyle = {
  textAlign: "center",
  backgroundColor: "#c6c8ca",
  padding: "2rem 0",
};
const copyrightStyle = {
  backgroundColor: "grey",
  padding: "1.5rem",
  fontSize: "20px",
  fontWeight: "10px",
  color: "#ffffff",
};
export default Footer;
