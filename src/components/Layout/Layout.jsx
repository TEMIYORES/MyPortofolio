import React, { Fragment } from 'react'
import Header from '../Header/Header'
import HeroSection from '../hero-section/HeroSection'
import About from '../about/About'
import Services from '../services/Services'
import Experience from '../experience/Experience'
import Portfolio from '../portfolio/Portfolio'
import Testimonials from '../testimonial/Testimonials'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'

const Layout = () => {
  return <Fragment>
    <Header />
    <HeroSection />
    <About />
   <Services />
   <Experience />
   <Portfolio />
   <Testimonials />
   <Contact />
   <Footer />
  </Fragment>
  

}

export default Layout