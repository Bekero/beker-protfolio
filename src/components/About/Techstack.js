import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { RiVuejsFill } from "react-icons/ri";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiCss3,
  DiHtml5,
  DiSass
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <h4 className="purple">React</h4>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h4 className="purple">Vue</h4>
        <RiVuejsFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h4 className="purple">NodeJS</h4>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h4 className="purple">MongoDB</h4>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h4 className="purple">JavaScript</h4>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h4 className="purple">HTML 5</h4>
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h4 className="purple">CSS</h4>
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h4 className="purple">Sass</h4>
        <DiSass />
      </Col>
    </Row>
  );
}

export default Techstack;
