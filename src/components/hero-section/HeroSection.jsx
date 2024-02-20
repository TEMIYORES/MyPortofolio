import React, { useRef, useEffect } from "react";
import "./hero-section.css";
import { Container, Row, Col } from "reactstrap";
import testImg from "../../assets/images/qayyum.jpg";
import qayyum from "./QAYYUM IBRAHIM Resume.pdf";
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
          "a MERN Stack Developer",
          "a WordPress Developer",
        ],
      });
    }
  }, []);

  const downloadTxtFile = () => {
    fetch(qayyum).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Qayyum_Ibrahim_Resume.pdf";
        alink.click();
      });
    });
  };
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
                As a software engineer, I am driven by the belief that
                technology has the power to transform society for the better. I
                am passionate about creating innovative solutions that solve
                complex problems and improve people's lives.
              </p>

              <div className=" mt-5 hero_btns d-flex align-items-center gap-4">
                <button className="btn hire_btn" onClick={downloadTxtFile}>
                  Download My CV
                </button>
                {/* <button className="btn">
                  <a href="#contact">Contact</a>
                </button> */}
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero_img">
              <img src={testImg} alt="" className="hero_img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
