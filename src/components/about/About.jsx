import React, { useState } from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import testImg from "../../assests/images/qayyum.jpeg";
import Education from "./Education";
import Skills from "./Skills";
import Award from "./Award";

const About = () => {
  const [aboutFilter, setAboutFilter] = useState("ABOUT");
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>About Me</h2>{" "}
          </Col>

          <Col lg="4" md="3">
            <div className="about_btns d-flex flex-column align-items-center">
              <button
                className={`about_btn ${
                  aboutFilter === "ABOUT" ? "about_btn-active" : ""
                }`}
                onClick={() => setAboutFilter("ABOUT")}
              >
                About me
              </button>
              <button
                className={`about_btn ${
                  aboutFilter === "EDUCATION" ? "about_btn-active" : ""
                }`}
                onClick={() => setAboutFilter("EDUCATION")}
              >
                Education
              </button>
              <button
                className={`about_btn ${
                  aboutFilter === "SKILLS" ? "about_btn-active" : ""
                }`}
                onClick={() => setAboutFilter("SKILLS")}
              >
                Skills
              </button>
              <button
                className={`about_btn ${
                  aboutFilter === "AWARD" ? "about_btn-active" : ""
                }`}
                onClick={() => setAboutFilter("AWARD")}
              >
                Award
              </button>
            </div>
          </Col>

          <Col lg="8" md="9">
            {aboutFilter === "ABOUT" && (
              <div className="about_content_wrapper d-flex gap-5">
                <div className="about_img w-25">
                  <img src={testImg} alt="" className="w-100" />
                </div>

                <div className="about_content w-75">
                  <h2>I'm Qayyum Ibrahim</h2>
                  <p>
                  Hello! My name is Qayyum Ibrahim and I enjoy creating things that live on your mobile devices, PCs and the Internet at large. My interest in Software Engineering started back in 2016 when I signed up for a Summer Bootcamp in Electronics coupled with bringing the components to live with some basic Javascript Program 
                  </p>

                  <div className="social_links">
                    <h6 className="mb-3">Connect with me:</h6>
                    <span>
                      <a href="#">
                        <i class="ri-facebook-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i class="ri-github-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i class="ri-twitter-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i class="ri-instagram-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i class="ri-linkedin-line"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {aboutFilter === "EDUCATION" && <Education />}

            {aboutFilter === "SKILLS" && <Skills />}

            {aboutFilter === "AWARD" && <Award />}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
