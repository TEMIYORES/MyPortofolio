import React, { useRef, useEffect } from "react";
import "./hero-section.css";
import { Container, Row, Col } from "reactstrap";
import testImg from "../../assests/images/qayyum.jpeg";
import { init } from "ityped";
let isLoading = true;

const HeroSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current && isLoading) {
      isLoading = false;

      init(textRef.current, {
        backDelay: 1500,
        showCursor: true,
        strings: [
          "Qayyum Ibrahim",
          "a Javascript Developer",
          "a Front-End Developer",
        ],
      });
    }
  }, []);

  return (
    <section className="hero_section" id="home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero_content">
              <p className="mb-3">Welcome to my world!</p>
              <h2 className="hero_title mb-4">
                I'm <span ref={textRef}></span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                iste suscipit quo, impedit quis cum et eum quasi. Debitis vitae
                culpa error mollitia blanditiis ex corporis beatae aperiam quis
                ratione?Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Commodi, aut.
              </p>

              <div className=" mt-5 hero_btns d-flex align-items-center gap-4">
                <button className="btn hire_btn">
                  <a href="#">Hire Me</a>
                </button>
                <button className="btn">
                  <a href="#contact">Contact</a>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero_img">
              <img src={testImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
