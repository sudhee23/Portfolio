import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import malariaImg from "../../Assets/Projects/malaria.png"; // Add your image
import codekivyImg from "../../Assets/Projects/codekivy.png"; // Add your image
import nptelImg from "../../Assets/Projects/nptel.png"; // Add your image

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={malariaImg}
              isBlog={false}
              title="Malaria Detection using YOLO & CNN"
              description="A deep learning model to detect malaria parasites in blood smear images using YOLOv8s and CNN. Features real-time detection, dataset augmentation, and Android-based visualization."
              ghLink="https://github.com/Manideeptheexplorer/Malaria-Detection-UsingYOLOv8s"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codekivyImg}
              isBlog={false}
              title="Code-Kivy – Tutor Course Platform"
              description="Built a full-stack course website for a tutor using the MERN stack. Included secure admin dashboard, user authentication, and dynamic course management features."
              ghLink="https://github.com/siddhuthecoder/codekivyapis"
              demoLink="https://github.com/sudhee23/code-kivy-admin-panel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nptelImg}
              isBlog={false}
              title="NPTEL Stats Management Dashboard"
              description="Developed a responsive dashboard for visualizing student enrollment and performance in NPTEL courses. Used React.js, Node.js, MongoDB, and Chart.js for real-time data rendering."
              ghLink="https://github.com/sudhee23/NPTEL-Management"
              demoLink="https://nptel-management.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
