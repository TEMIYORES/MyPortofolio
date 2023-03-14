import React, { useState } from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import testImg from "../../assets/images/qayyum.jpeg";
import Education from "./Education";
import Skills from "./Skills";
// import Award from "./Award";

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
                    My journey into software engineering began when I was
                    introduced to coding in high school. I quickly discovered a
                    fascination for the process of problem-solving through code
                    and the endless possibilities it presented. Since then, I
                    have pursued my passion for software engineering by
                    continuously learning and challenging myself to grow in this
                    dynamic field.
                    <br />
                    As a software engineer, I believe that collaboration and
                    teamwork are essential to achieving success. I have had the
                    privilege of working with diverse teams, and I have seen
                    firsthand how the exchange of ideas can lead to
                    groundbreaking solutions. I am dedicated to cultivating an
                    environment where diverse perspectives are valued, and
                    everyone is encouraged to contribute to the team's goals.
                    <br />I am continually inspired by the rapidly evolving
                    landscape of technology and its potential for positive
                    change. I am committed to staying up-to-date with emerging
                    trends and technologies to create innovative solutions that
                    can make a real difference. As a software engineer, I am
                    excited to play a role in shaping the future of technology
                    and to help create a more equitable and sustainable world.
                  </p>

                  <div className="social_links">
                    <h6 className="mb-3">Connect with me:</h6>
                    <span>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/temi.ibrahim.54"
                      >
                        <i class="ri-facebook-line"></i>
                      </a>
                    </span>
                    <span>
                      <a target="_blank"
                      rel="noreferrer" href="https://github.com/TEMIYORES">
                        <i class="ri-github-line"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/Temiyores_D_1st"
                      >
                        <i class="ri-twitter-line"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/temiyores/"
                      >
                        <i class="ri-instagram-line"></i>
                      </a>
                    </span>
                    <span>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/qayyum-ibrahim-610320233/"
                      >
                        <i class="ri-linkedin-line"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {aboutFilter === "EDUCATION" && <Education />}

            {aboutFilter === "SKILLS" && <Skills />}

            {/* {aboutFilter === "AWARD" && <Award />} */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
