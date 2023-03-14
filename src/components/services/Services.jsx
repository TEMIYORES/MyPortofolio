import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./services.css";

const serviceData = [
  {
    icon: "ri-file-word-line",
    title: "Custom WordPress Development",
    desc: "I can create customized WordPress websites that cater to specific business requirements. This involves creating unique themes, plugins, and integrations to enhance website functionality.",
  },

  {
    icon: "ri-file-word-line",
    title: "WordPress Website Maintenance",
    desc: "I can provide ongoing maintenance and support for WordPress websites to ensure optimal performance, regular updates, and security. This includes troubleshooting issues, resolving bugs, and ensuring compatibility with the latest WordPress version.",
  },

  {
    icon: "ri-file-word-line",
    title: "WordPress eCommerce Development",
    desc: "I can develop eCommerce websites using WordPress that are secure, scalable, and easy to manage. This includes integrating payment gateways, inventory management, and shipping solutions.",
  },
  {
    icon: "ri-file-word-line",
    title: "Website Migration",
    desc: "I can assist with website migration from other platforms to WordPress, ensuring seamless transfer of content and data.",
  },
  {
    icon: "ri-file-word-line",
    title: "SEO Optimization",
    desc: "I can optimize WordPress websites for search engines, improving website visibility and ranking in search results. This includes optimizing website content, metadata, and structure.",
  },
  {
    icon: "ri-reactjs-fill",
    title: "Custom MERN Stack Development",
    desc: "I can create customized web applications that cater to specific business requirements using the MERN stack (MongoDB, Express, React, and Node.js). This involves developing full-stack applications with a focus on optimizing performance, scalability, and user experience.",
  },
  {
    icon: "ri-reactjs-fill",
    title: "MERN Stack Web Development",
    desc: "I can create web applications using the MERN stack to provide a seamless user experience across different devices and platforms. This includes developing responsive front-end interfaces, back-end APIs, and integrating third-party services.",
  },
  {
    icon: "ri-reactjs-fill",
    title: "MERN Stack E-commerce Development",
    desc: "I can develop e-commerce web applications using the MERN stack, which are secure, scalable, and easy to manage. This includes integrating payment gateways, inventory management, and shipping solutions.",
  },
  {
    icon: "ri-reactjs-fill",
    title: "MERN Stack Application Maintenance",
    desc: "I can provide ongoing maintenance and support for MERN stack applications to ensure optimal performance, regular updates, and security. This includes troubleshooting issues, resolving bugs, and ensuring compatibility with the latest version of the stack.",
  },
  {
    icon: "ri-reactjs-fill",
    title: "API Development:",
    desc: "I can develop custom APIs using the MERN stack, which can be integrated with third-party services, applications, and databases. This includes developing RESTful APIs and GraphQL APIs.",
  },
  {
    icon: "ri-reactjs-fill",
    title: "MERN Stack Migration",
    desc: "I can assist with migrating existing web applications to the MERN stack, ensuring seamless transfer of content and data.",
  },
  {
    icon: "ri-reactjs-fill",
    title: "Cloud-based Hosting",
    desc: "I can help businesses deploy and host MERN stack applications on cloud-based platforms such as AWS, Google Cloud, and Microsoft Azure. This includes managing server instances, load balancing, and auto-scaling.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="12" className="service_top mb-5">
            <h6>Features</h6>
            <h2>What services do I provide</h2>
          </Col>

          {serviceData.map((item, index) => (
            <Col lg="4" md="6" sm="6" key={index} className="mb-4">
              <div className="single_service">
                <span className="service_icon">
                  <i class={item.icon}></i>
                </span>

                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
