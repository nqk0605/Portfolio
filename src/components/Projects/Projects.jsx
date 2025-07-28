import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecShop from "../../Assets/Projects/ecshop.png";
import sliderbook from "../../Assets/Projects/sliderbook.png";
import veagroup from "../../Assets/Projects/veagroup.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent{" "}
          <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecShop}
              isBlog={false}
              title="ECSHOP"
              description="MenWear is an online store specializing in men's fashion, offering trendy and modern styles with high-quality products. With the aim of providing customers with the best shopping experience, MenWear not only offers contemporary and stylish men's fashion items but also focuses on creating a user-friendly and innovative website interface."
              ghLink="https://github.com/nqk0605/ECShop"
              demoLink="https://menwear-shop.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sliderbook}
              isBlog={false}
              title="SliderBook"
              description="SliderBook is an online platform specializing in digital book sharing, offering a seamless and engaging reading experience. With the aim of making book access more convenient, SliderBook not only provides a diverse collection of books but also focuses on creating an interactive and user-friendly interface for readers."
              ghLink="https://github.com/nqk0605/Book-Slider"
              demoLink="https://bookslider.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={veagroup}
              isBlog={false}
              title="Veagroup"
              description="VEA Group - A Multi-Industry Ecosystem Operating Locally and Globally, Positioned as a Strategic Partner for Businesses on Every Journey of Growth and Sustainability.
With the vision “Optimize Resources - Maximize Profits,” VEA Group offers Partners a wide range of options to collaborate, grow together, and achieve a ‘win-win’ outcome."
              ghLink="https://github.com/nqk0605/veagroup"
              demoLink="https://veagroup.global/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
