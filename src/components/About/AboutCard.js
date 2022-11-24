import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Or Beker </span>
            from <span className="purple"> Rishon Letzion, Israel.</span>
            <br />I am a junior who just finished Boot-camp at Coding Academy
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />&nbsp; Playing video games
            </li>
            <li className="about-activity">
              <ImPointRight />&nbsp; Go to the gym
            </li>
            <li className="about-activity">
              <ImPointRight />&nbsp; Traveling
            </li>
            <li className="about-activity">
              <ImPointRight />&nbsp; Beer with friends
            </li>
          </ul>
          
          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
