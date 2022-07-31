import React from "react";
import "./footer.css";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <footer className="pb-4">
      <Container className="text-center footer">
        <p>
          &copy; Copyright 2022, Developed by Qayyum Ibrahim. All Rights
          Reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
