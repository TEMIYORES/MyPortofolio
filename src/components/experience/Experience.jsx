import React from "react";
import "./experience.css";
import { Container, Row, Col } from "reactstrap";

const developmentExperienceData = [
  {
    year: "2020-2022",
    title: "Android Developer",
    desc: "I learnt android development at Aptech Abeokuta Nigeria. ",
  },

  {
    year: "2019-2020",
    title: "Frontend Developer",
    desc: "I built Aptech Website with ReactJs.",
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
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
