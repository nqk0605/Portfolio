import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
    >
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME{" "}
              <span className="purple"> INTRODUCE </span>{" "}
              MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with e-commerce, programming
              and I have at least learnt something, I think…
              🤷‍♂️
              <br />
              <br />I have experience in programming
              languages ​​like
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Java, React...{" "}
                </b>
              </i>
              and other tools like
              <i>
                <b className="purple">
                  {" "}
                  Adobe PhotoShop, Microsoft Office...{" "}
                </b>
              </i>
              <br />
              <br />I also have knowledge about
              <i>
                <b className="purple">
                  {" "}
                  SEO, Content Marketing, Digital
                  Marketing...{" "}
                </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">
                  Web Technologies and Products{" "}
                </b>{" "}
                and also in areas related to{" "}
                <b className="purple">
                  Marketing and E-commerce.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for
              developing products.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to{" "}
              <span className="purple">connect </span>with
              me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nqk0605"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/khang065/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/quockhang0605/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/nqk06_5/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
