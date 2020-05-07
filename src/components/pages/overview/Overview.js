import React, { Component } from "react";
import { Row, Col, Button, OverlayTrigger, Popover } from "react-bootstrap";
export class Overview extends Component {
  render() {
    return (
      <Row style={spacerStyle}>
        <Col sm={1}></Col>
        <Col sm>
          <img src={process.env.PUBLIC_URL + "/ct_overview.png"} />
        </Col>
        <Col style={textColStyle} sm>
          <h1 style={mainTitleStyle}>
            Reliable. Quick.
            <br /> Interactive <strong>Translations</strong>
          </h1>
          <p style={mainTextStyle}>
            Chat Translator - translates languages Anywhere. Anytime. Simple.
            You'll get interactive means to enable you to translate languages in
            very efficient, reliable and convenient way.
          </p>
          <Row xs={3} md={8} lg={8}>
            <Col>
              <Button
                style={buttonStyle}
                variant="outline-secondary"
                size="lg"
                block
                href="https://bit.ly/35yKjY1"
                target="_blank"
              >
                <img
                  src={process.env.PUBLIC_URL + "/android-white-48dp.svg"}
                  alt=""
                  width="48"
                  height="48"
                  className="d-inline-block align-top"
                />
                Play Store
              </Button>{" "}
            </Col>
            <Col>
              <BixbyButton />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
const spacerStyle = {
  paddingTop: "200px",
  //backgroundImage: `url(${process.env.PUBLIC_URL}/overview_bg.jpg)`,
  backgroundColor: "#add7ad",
  position: "relative",
};
const textColStyle = {
  paddingTop: "100px",
  paddingBottom: "20px",
};
const mainTitleStyle = {
  color: "#ffffff",
};
const mainTextStyle = {
  margin: "35px 0",
  fontSize: "25px",
  color: "#ffffff",
  textAlign: "justify",
};
const buttonStyle = {
  fontSize: "2rem",
};
const bixbyPopoverTitleStyle = {
  fontSize: "20px",
};

const bixbyPopoverContentStyle = {
  fontSize: "18px",
};

const popover = (
  <Popover id="popover-basic">
    <Popover.Title style={bixbyPopoverTitleStyle}>Samsung Bixby</Popover.Title>
    <Popover.Content style={bixbyPopoverContentStyle}>
      Enjoy <strong>Chat Translator</strong> directly on Samsung's Bixby. No
      download required. Just access any samsung device with bixby
    </Popover.Content>
  </Popover>
);

const BixbyButton = () => (
  <OverlayTrigger trigger="click" placement="top" overlay={popover}>
    <Button style={buttonStyle} variant="outline-primary" size="lg" block>
      <img
        src={process.env.PUBLIC_URL + "/bixby_logo50.png"}
        alt=""
        width="48"
        height="44"
        className="d-inline-block align-top"
      />{" "}
      Bixby
    </Button>
  </OverlayTrigger>
);
export default Overview;
