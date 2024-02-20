import React from "react";
import "./portfolio.css";
import { Container, Row, Col } from "reactstrap";
import birthday from "../../assets/images/birthday.png";
import novarickhomes from "../../assets/images/novarickhomes.png";
import eatnow from "../../assets/images/eatnow.png";
import novarick from "../../assets/images/novarick.png";
import flappybird from "../../assets/images/flappybird.png";
import img5 from "../../assets/images/novagro.jpeg";
import img6 from "../../assets/images/crypto.jpeg";
import wingman from "../../assets/images/wingman.png";
import restaurant from "../../assets/images/restaurant.png";
import sixgames from "../../assets/images/sixgames.png";
import coffeeApp from "../../assets/images/coffeeApp.png";
import plugskills from "../../assets/images/plugskills.png";
import mernauth from "../../assets/images/mernauth.png";
import manage from "../../assets/images/manage.png";
import movieland from "../../assets/images/movieland.png";
import project from "../../assets/images/project_mgm.png";
import data from "../../assets/images/data.png";
const portfolioData = [
  {
    imgUrl: sixgames,
    title: "Six games",
    url: "https://sixgames.vercel.app/",
  },
  {
    imgUrl: coffeeApp,
    title: "Coffee App (will be available for download soon)",
    url: "",
  },
  {
    imgUrl: restaurant,
    title: "Ile Iyan Restaurant",
    url: "https://ileiyan.ng/",
  },
  {
    imgUrl: novarickhomes,
    title: "Novarick Homes and Properties New Website",
    url: "https://novarickhomes.netlify.app/",
  },
  {
    imgUrl: eatnow,
    title: "Eatnow.ng Website",
    url: "https://eatnow.ng/",
  },
  {
    imgUrl: novarick,
    title: "Novarick Homes and Properties Official Website",
    url: "https://novarickhomes.com/",
  },
  {
    imgUrl: img5,
    title: "Novarick Agro Limited Website",
    url: "https://novarickagro.netlify.app/",
  },
  {
    imgUrl: wingman,
    title: "Wingman Legal Website",
    url: "https://wingman.legal/",
  },
  {
    imgUrl: plugskills,
    title: "PlugSkills Website",
    url: "https://plugskills.com/",
  },
  {
    imgUrl: manage,
    title: "Tailwind Website",
    url: "https://tailwind-manage.vercel.app/",
  },
  {
    imgUrl: data,
    title: "Data analytics Website",
    url: "https://data-analytic.vercel.app/",
  },
  {
    imgUrl: movieland,
    title: "Movieland WebApp",
    url: "https://movie-app-ng.vercel.app/",
  },
  {
    imgUrl: project,
    title: "Project Management Website",
    url: "https://project-mgt.vercel.app/",
  },
  {
    imgUrl: mernauth,
    title: "Mern Authentication",
    url: "https://qayyumauthentication.netlify.app/",
  },
  {
    imgUrl: birthday,
    title: "Cake Website",
    url: "https://thecake-shop.netlify.app/",
  },
  {
    imgUrl: flappybird,
    title: "Flappy Flop Game",
    url: "https://flappyflop.netlify.app/",
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
              Explore my work and give feedback in the contact form. Thank you.
            </h6>
          </Col>

          {portfolioData.map((item, index) => (
            <Col lg="4" md="6" sm="6" className="mt-5" key={index}>
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
