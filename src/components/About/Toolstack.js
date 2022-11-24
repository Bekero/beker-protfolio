import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiRedux
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <h4 className="purple">VSCode</h4>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h4 className="purple">Postman</h4>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h4 className="purple">Heroku</h4>
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h4 className="purple">Redux</h4>
        <SiRedux />
      </Col>
    </Row>
  );
}

export default Toolstack;
