import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">
              Nguyen Quoc Khang{" "}
            </span>
            from{" "}
            <span className="purple">
              {" "}
              Khanh Hoa, Viet Nam.
            </span>
            <br />
            I'm a student majoring in{" "}
            <span className="purple">
              {" "}
              E-commerce at Industrial University of Ho Chi
              Minh City.
            </span>
            <br />
            <br />
            Apart from coding, some other activities that I
            love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">
            Soumyajit
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
