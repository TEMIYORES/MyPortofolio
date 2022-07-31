import React from "react";
import "./portfolio.css";
import { Container, Row, Col } from "reactstrap";
import img1 from "../../assests/images/port1.png";
import img2 from "../../assests/images/port2.png";
import img3 from "../../assests/images/port1.png";

const portfolioData = [
  {
    imgUrl: img1,
    title: "React Web Application",
    url: "http://www.aptechabeokuta.com.ng/",
  },
  {
    imgUrl: img2,
    title: "Html, Css and Javascipt Website",
    url: "https://thecake-shop.netlify.app/",
  },
  {
    imgUrl: img3,
    title: "React Web Application",
    url: "http://www.aptechabeokuta.com.ng/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="12" className="portfolio_top mb-5">
            <h6>Explore my work and give feedback</h6>
            <h2>Portfolio</h2>
          </Col>

          {portfolioData.map((item, index) => (
            <Col lg="4" md="6" sm="6" key={index}>
              <div className="portfolio_card">
                <div className="portfolio_img">
                  <img src={item.imgUrl} alt="" className="w-100" />
                </div>

                <div className="portfolio_content">
                  <h5>{item.title}</h5>
                  <a href={item.url}> View live demo</a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
