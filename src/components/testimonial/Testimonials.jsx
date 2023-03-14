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
                    I'm so pleased with the website that this company developed
                    for my business. It looks professional and polished, and
                    it's easy to navigate. They really listened to my needs and
                    created a custom solution that exceeded my expectations.
                  </p>

                  <h6>Mrs. Okpara</h6>
                  <p className="title">Aptech Manager</p>
                </div>
              </div>
              <div>
                <div className="single_testimonial">
                  <p>
                    I highly recommend this qayyum to anyone looking for a
                    top-notch website. He took the time to understand my
                    business and its unique needs, and delivered a site that
                    truly reflects my vision. He is a pleasure to work with and
                    the results speak for themselves.
                  </p>

                  <h6>Mr. Desmond</h6>
                  <p className="title">Business Man</p>
                </div>
              </div>
              <div>
                <div className="single_testimonial">
                  <p>
                    I couldn't be happier with the website this qayyum created
                    for me. It's beautiful, functional, and easy to use. He was
                    able to take my ideas and turn them into a reality, and the
                    end result is better than I ever could have imagined.
                  </p>

                  <h6>Mr. Enuku</h6>
                  <p className="title">Wingman Legal CEO</p>
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
