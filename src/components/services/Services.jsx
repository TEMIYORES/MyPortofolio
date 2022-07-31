import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './services.css'


const serviceData = [
    {
        icon: 'ri-android-line',
        title: 'Android App Development',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quo id minus omnis odit sint eaque deserunt, doloribus illo et?'
    },

    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Development',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quo id minus omnis odit sint eaque deserunt, doloribus illo et?'
    },

    {
        icon: 'ri-money-dollar-circle-line',
        title: 'Digital Marketing',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quo id minus omnis odit sint eaque deserunt, doloribus illo et?'
    },

    {
        icon: 'ri-code-line',
        title: 'Web Design',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quo id minus omnis odit sint eaque deserunt, doloribus illo et?'
    },

    {
        icon: 'ri-search-line',
        title: 'SEO',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quo id minus omnis odit sint eaque deserunt, doloribus illo et?'
    },

    {
        icon: 'ri-gallery-line',
        title: 'UI/UX',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quo id minus omnis odit sint eaque deserunt, doloribus illo et?'
    }
]

const Services = () => {
  return <section id='services'>
      <Container>
          <Row>
              <Col lg='12' className='service_top mb-5'>
                  <h6>Features</h6>
                  <h2>What services do I provide</h2>
              </Col>


                {
                    serviceData.map((item, index) => <Col lg='4' md='6' sm='6' key={index} className='mb-4'>
                    <div className="single_service">
                        <span className="service_icon">
                        <i class={item.icon}></i>
                        </span>
  
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                    </div>
                </Col>)
                }

              
          </Row>
      </Container>
  </section>
}

export default Services