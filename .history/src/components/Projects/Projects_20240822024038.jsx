import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecShop from "../../Assets/Projects/ecshop.png";

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
              imgPath={ecShop}
              isBlog={false}
              title="ECSHOP"
              description="MenWear is an online store specializing in men's fashion, offering trendy and modern styles with high-quality products. With the aim of providing customers with the best shopping experience, MenWear not only offers contemporary and stylish men's fashion items but also focuses on creating a user-friendly and innovative website interface."
              ghLink="https://github.com/nqk0605/ECShop"
              demoLink="https://menwear-shop.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
