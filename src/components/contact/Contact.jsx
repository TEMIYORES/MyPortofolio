import React from "react";
import "./contact.css";
import { Container, Row, Col } from "reactstrap";
import Form from "../form/Form";

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Get In Touch</h2>
          </Col>

          <Col lg="6" md="6">
            <div className="contact_info-container d-flex align-items-center gap-5">
              <div className="single_info-box w-50">
                <h6>Address</h6>
                <p>Lekki Lagos, Nigeria</p>
              </div>

              <div className="single_info-box w-50">
                <h6>Phone & WhatsApp</h6>
                <p>+234 702 601 0646</p>
              </div>
            </div>

            <div className="contact_info-container d-flex align-items-center gap-5">
              <div className="single_info-box w-50">
                <h6>Email</h6>
                <p>temiyores1234@gmail.com</p>
              </div>

              <div className="single_info-box w-50">
                <h6>Location</h6>
                <p>Lekki, Lagos State, Nigeria</p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
