import React from "react";
import "./portfolio.css";
import { Container, Row, Col } from "reactstrap";
import img1 from "../../assets/images/port1.png";
import img2 from "../../assets/images/port2.png";
import img3 from "../../assets/images/port3.png";
import img4 from "../../assets/images/flappy.png";
import img5 from "../../assets/images/novagro.jpeg";
import img6 from "../../assets/images/crypto.jpeg";

const portfolioData = [
  {
    imgUrl: img1,
    title: "Aptech Abeokuta Website",
    url: "http://www.aptechabeokuta.com.ng/",
  },
  {
    imgUrl: img2,
    title: "Html, Css and Javascipt Website",
    url: "https://thecake-shop.netlify.app/",
  },
  {
    imgUrl: img3,
    title: "Novarick Homes and Properties Website ",
    url: "https://novarickhomes.netlify.app/",
  },
  {
    imgUrl: img4,
    title: "Flappy Flop Game",
    url: "https://flappyflop.netlify.app/",
  },
  {
    imgUrl: img5,
    title: "Novarick Agro Limited Website",
    url: "https://novarickagro.netlify.app/",
  },
  {
    imgUrl: img6,
    title: "cryptoVerse Website",
    url: "https://cryptomarkcap.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="12" className="portfolio_top mb-3">
            <h2 className="mb-1">Portfolio</h2>
            <h6>
              Explore my work and give feedback, Also some projects are not
              mobile responsive yet.
            </h6>
          </Col>

          {portfolioData.slice(0, 3).map((item, index) => (
            <Col lg="4" md="6" sm="6" key={index}>
              <div className="portfolio_card">
                <div className="portfolio_img">
                  <img src={item.imgUrl} alt="" className="w-100" />
                </div>

                <a
                  className="portfolio_content"
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>{item.title}</h5>
                  <span> View live demo</span>
                </a>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="mt-5">
          {portfolioData.slice(3, 7).map((item, index) => (
            <Col lg="4" md="6" sm="6" key={index}>
              <div className="portfolio_card">
                <div className="portfolio_img">
                  <img src={item.imgUrl} alt="" className="w-100" />
                </div>

                <a
                  className="portfolio_content"
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>{item.title}</h5>
                  <span> View live demo</span>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
