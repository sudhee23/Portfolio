import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohan Sai Sudheer Kalyanam</span>
            <br />
            Passionate B.Tech 4th-year CSE student with hands-on experience in
            developing MERN stack and AI/ML applications, and strong proficiency in DSA
            using python.
            <br />
            Aspiring Software Development Engineer, open to learning new
            technologies and roles, with a focus on contributing to innovative
            and impactful projects.
            <br />
            <br />
            My interests include :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching web series and movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Calisthenics
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
