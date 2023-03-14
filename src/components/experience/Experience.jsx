import React from "react";
import "./experience.css";
import { Container, Row, Col } from "reactstrap";

const developmentExperienceData = [
  {
    year: "/",
    title: "Developing and implementing software applications",
    desc: "This involves writing code in various programming languages to create software applications that meet specific requirements.",
  },

  {
    year: "/",
    title: "Collaborating with teams",
    desc: "Software developers often work in teams to develop software applications. Collaboration may involve working with other developers, designers, and project managers to ensure that the project is completed on time and within budget.",
  },
  {
    year: "/",
    title: "Debugging and troubleshooting",
    desc: "Software developers need to be able to identify and fix issues that arise during the development process. This involves debugging and troubleshooting code to ensure that the application works as intended.",
  },
];
const developmentExperienceData2 = [
  {
    year: "/",
    title: "Conducting testing and quality assurance",
    desc: "Software developers need to ensure that the software they develop is functional, reliable, and meets the needs of users. This involves conducting testing and quality assurance to identify and fix issues before releasing the software to the public.",
  },

  {
    year: "/",
    title: "Staying up-to-date with new technologies",
    desc: "The field of software development is constantly evolving, and developers need to stay up-to-date with new technologies, programming languages, and frameworks to remain competitive.",
  },
  {
    year: "/",
    title: "Communicating with stakeholders",
    desc: "Software developers need to be able to communicate effectively with stakeholders, including project managers, clients, and end-users. This involves explaining technical concepts in a way that is easy to understand and addressing concerns and questions that may arise during the development process.",
  },
];

const Experience = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Experience</h2>
          </Col>

          <Col lg="6" md="6">
            <div className="single_experience_container">
              {developmentExperienceData.map((item, index) => (
                <div className="single_experience" key={index}>
                  <span className="experience_icon">
                    <i class="ri-briefcase-line"></i>
                  </span>
                  <h6>{item.year}</h6>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="single_experience_container">
              {developmentExperienceData2.map((item, index) => (
                <div className="single_experience" key={index}>
                  <span className="experience_icon">
                    <i class="ri-briefcase-line"></i>
                  </span>
                  <h6>{item.year}</h6>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
