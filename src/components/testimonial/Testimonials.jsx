import React from "react";
import "./testimonial.css";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5 text-center">
            <h2>What my clients says</h2>
          </Col>

          <Col lg="6" className="m-auto">
            <Slider {...settings}>
              <div>
                <div className="single_testimonial">
                  <p>
                    Qayyum Ibrahim is a good student and we are proud of him. He
                    will be a graduate of Aptech Institution by 1st September,
                    2022.
                  </p>

                  <h6>Centre manager</h6>
                  <p className="title">Aptech</p>
                </div>
              </div>
              <div>
                <div className="single_testimonial">
                  <p>
                    Qayyum Ibrahim is a good student and we are proud of him. He
                    will be a graduate of Aptech Institution by 1st September,
                    2022.
                  </p>

                  <h6>Centre manager</h6>
                  <p className="title">Aptech</p>
                </div>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
