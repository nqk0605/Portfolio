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
            Some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing and Watching Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Detective Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nothing in the way of creativity!"{" "}
          </p>
          <footer className="blockquote-footer">
            Zero
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
