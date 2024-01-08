import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Burger from '../../assets/hero/hero-2.png'
import { Link } from 'react-router-dom'
import '../../styles/Home/Section1.css'

const Section1 = () => {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className='mb-5 mb-lg-0' >
            <div className='position-relative'>
              <img src={Burger} alt="Hero Img" className='img-fluid' />
              <div className='price_badge'>
                <div className="badge_text">
                  <h4 className="h4_xs">Only</h4>
                  <h4 className="h3_lg">199 RS</h4>

                </div>
              </div>
            </div>

          </Col>
          <Col lg={5} >
            <div className="hero_text text-center">
              <h1 className='text-white'>New Burger</h1>
              <h2 className='text-white'>With Onion</h2>
              <p className='text-white pt-2 pb-4'>Tantalize Your Tastebuds with Tasty Burger's Irresistible Onion Delight! A Symphony of Flavors in Every Bite. Order Now for a Mouthwatering Experience!
              </p>
              <Link to="/" className='btn order_now'>
                Order Now
              </Link>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Section1
